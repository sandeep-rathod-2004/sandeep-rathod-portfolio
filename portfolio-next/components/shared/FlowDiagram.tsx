'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FlowDiagram({ steps, dense = false }: { steps: string[]; dense?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <motion.div key={step} className="flex items-center gap-2" initial="rest" whileHover="hover">
          <span
            className={`font-mono border border-border rounded-lg bg-surface text-text-dim ${
              dense ? 'text-[11px] px-2 py-1' : 'text-xs px-3 py-1.5'
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 && <ArrowRight size={dense ? 12 : 14} className="text-text-faint shrink-0" />}
        </motion.div>
      ))}
    </div>
  );
}
