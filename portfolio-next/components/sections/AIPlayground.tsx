'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileText, Sparkles, Send, Bot, User, Loader2 } from 'lucide-react';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const DEMO_FILE = 'invoice-Q3-batch-014.pdf';
const DEMO_CHUNKS = [
  { text: 'Vendor: Northwind Traders — Invoice #INV-2291', score: 0.94 },
  { text: 'Line item: Cloud infrastructure, 3 units, $1,240.00', score: 0.89 },
  { text: 'Payment terms: Net 30, due 2026-09-14', score: 0.81 },
];

const DEMO_RESPONSES: Record<string, string> = {
  default:
    "This is a demo response — the live version connects to a FastAPI backend that runs OCR, chunking, embeddings, and retrieval before calling an LLM. Try asking about the vendor, amount, or due date.",
  vendor: 'The invoice was issued by Northwind Traders (Invoice #INV-2291), matched with 94% retrieval confidence.',
  amount: 'The flagged line item totals $1,240.00 for cloud infrastructure — 3 units at $413.33 each.',
  due: "Payment is due 2026-09-14 under Net 30 terms from the invoice date.",
};

export default function AIPlayground() {
  const [step, setStep] = useState<'idle' | 'uploaded' | 'embedded'>('idle');
  const [uploading, setUploading] = useState(false);
  const [embedding, setEmbedding] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Upload a document, then ask me anything about it.' },
  ]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, thinking]);

  function simulateUpload() {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setStep('uploaded');
      setMessages((m) => [...m, { role: 'assistant', content: `Loaded ${DEMO_FILE}. Generating embeddings…` }]);
      setEmbedding(true);
      setTimeout(() => {
        setEmbedding(false);
        setStep('embedded');
        setMessages((m) => [...m, { role: 'assistant', content: 'Embeddings indexed in ChromaDB. Ask me a question about the invoice.' }]);
      }, 1400);
    }, 1100);
  }

  function reply(question: string) {
    const q = question.toLowerCase();
    if (q.includes('vendor') || q.includes('who')) return DEMO_RESPONSES.vendor;
    if (q.includes('amount') || q.includes('cost') || q.includes('total') || q.includes('$')) return DEMO_RESPONSES.amount;
    if (q.includes('due') || q.includes('when') || q.includes('date')) return DEMO_RESPONSES.due;
    return DEMO_RESPONSES.default;
  }

  function send() {
    if (!input.trim()) return;
    const question = input.trim();
    setMessages((m) => [...m, { role: 'user', content: question }]);
    setInput('');
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setMessages((m) => [...m, { role: 'assistant', content: reply(question) }]);
    }, 900);
  }

  return (
    <section id="playground" className="max-w-wrap mx-auto px-7 py-24">
      <SectionHeading
        eyebrow="10 · AI Playground"
        title="Try the pipeline yourself"
        subtitle="A live demo of the upload → OCR → embeddings → vector search → chat flow. Runs on canned data here; the real version calls a FastAPI + LangGraph backend."
      />

      <Reveal>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-5">
          {/* Left: pipeline state */}
          <div className="gradient-border bg-surface rounded-xl2 p-6 flex flex-col gap-5">
            <button
              onClick={simulateUpload}
              disabled={step !== 'idle'}
              className="flex flex-col items-center justify-center gap-2 border border-dashed border-border rounded-xl2 py-8 text-text-dim hover:border-teal hover:text-teal transition-colors disabled:opacity-60 disabled:cursor-default"
            >
              {uploading ? <Loader2 size={22} className="animate-spin" /> : <Upload size={22} />}
              <span className="text-sm">{step === 'idle' ? 'Upload PDF (demo)' : DEMO_FILE}</span>
            </button>

            <div className="space-y-2 text-sm">
              {[
                { label: 'OCR extraction', done: step !== 'idle' && !uploading },
                { label: 'Generate embeddings', done: step === 'embedded', active: embedding },
                { label: 'Vector search ready', done: step === 'embedded' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  {s.active ? (
                    <Loader2 size={14} className="animate-spin text-teal" />
                  ) : (
                    <span className={`w-3.5 h-3.5 rounded-full border ${s.done ? 'bg-teal border-teal' : 'border-border'}`} />
                  )}
                  <span className={s.done ? 'text-text' : 'text-text-faint'}>{s.label}</span>
                </div>
              ))}
            </div>

            <AnimatePresence>
              {step === 'embedded' && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="pt-2 border-t border-border-soft">
                  <p className="text-[11px] font-mono text-text-faint uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles size={12} /> Top vector matches
                  </p>
                  <div className="space-y-2">
                    {DEMO_CHUNKS.map((c) => (
                      <div key={c.text} className="text-xs bg-surface-2 border border-border-soft rounded-lg px-3 py-2 flex justify-between gap-2">
                        <span className="text-text-dim">{c.text}</span>
                        <span className="text-teal font-mono shrink-0">{c.score}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: chat */}
          <div className="gradient-border bg-surface rounded-xl2 flex flex-col h-[420px]">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-border-soft">
              <FileText size={16} className="text-amber" />
              <span className="text-sm font-medium">Chat with the document</span>
            </div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-violet/20 text-violet' : 'bg-teal/20 text-teal'}`}>
                    {m.role === 'user' ? <User size={13} /> : <Bot size={13} />}
                  </span>
                  <div className={`text-sm rounded-xl2 px-3.5 py-2.5 max-w-[80%] ${m.role === 'user' ? 'bg-surface-2 text-text' : 'bg-bg-elev border border-border-soft text-text-dim'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {thinking && (
                <div className="flex gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-teal/20 text-teal flex items-center justify-center shrink-0">
                    <Bot size={13} />
                  </span>
                  <div className="text-sm rounded-xl2 px-3.5 py-2.5 bg-bg-elev border border-border-soft text-text-faint">
                    <Loader2 size={14} className="animate-spin" />
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 px-4 py-3 border-t border-border-soft">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                disabled={step !== 'embedded'}
                placeholder={step === 'embedded' ? 'Ask about the vendor, amount, or due date…' : 'Upload a document first'}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-text-faint disabled:opacity-50"
              />
              <button
                onClick={send}
                disabled={step !== 'embedded'}
                aria-label="Send message"
                className="w-8 h-8 rounded-lg bg-amber text-[#171207] flex items-center justify-center disabled:opacity-40 disabled:cursor-default"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
