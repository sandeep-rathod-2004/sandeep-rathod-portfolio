'use client';

import { useEffect, useRef } from 'react';
import { PIPELINE_STAGES } from '@/lib/data';

interface Node {
  x: number;
  y: number;
  r: number;
  label: string;
  phase: number;
}

export default function HeroPipeline() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, DPR = 1, t = 0, raf = 0;
    let nodes: Node[] = [];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function getVar(name: string) {
      return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }

    function buildNodes() {
      nodes = [];
      const cols = PIPELINE_STAGES.length;
      const marginX = W * 0.62;
      const startX = W * 0.36;
      for (let i = 0; i < cols; i++) {
        const x = startX + (marginX / (cols - 1)) * i;
        const jitter = i % 2 === 0 ? -1 : 1;
        const y = H * 0.52 + jitter * H * (0.08 + (i % 3) * 0.025);
        nodes.push({ x, y, r: 5 + (i === 0 || i === cols - 1 ? 1.5 : 0), label: PIPELINE_STAGES[i], phase: i * 0.7 });
      }
    }

    function resize() {
      if (!canvas) return;
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
      buildNodes();
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      const amber = getVar('--amber'), teal = getVar('--teal'), violet = getVar('--violet'), border = getVar('--border');

      ctx!.lineWidth = 1.4;
      for (let i = 0; i < nodes.length - 1; i++) {
        const a = nodes[i], b = nodes[i + 1];
        ctx!.strokeStyle = border;
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.stroke();

        const prog = ((t * 0.0007) + i * 0.2) % 1;
        const px = a.x + (b.x - a.x) * prog;
        const py = a.y + (b.y - a.y) * prog;
        ctx!.beginPath();
        ctx!.arc(px, py, 2.4, 0, Math.PI * 2);
        ctx!.fillStyle = i % 2 === 0 ? amber : teal;
        ctx!.fill();
      }

      nodes.forEach((n, i) => {
        const pulse = reduceMotion ? 0 : Math.sin(t * 0.0022 + n.phase) * 2;
        const color = i === 0 ? amber : i === nodes.length - 1 ? violet : teal;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r + pulse + 6, 0, Math.PI * 2);
        ctx!.fillStyle = color + '22';
        ctx!.fill();
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r + pulse, 0, Math.PI * 2);
        ctx!.fillStyle = color;
        ctx!.fill();
        ctx!.font = '11px JetBrains Mono, monospace';
        ctx!.fillStyle = getVar('--text-faint');
        ctx!.textAlign = 'center';
        ctx!.fillText(n.label, n.x, n.y + n.r + 20);
      });

      if (!reduceMotion) {
        t += 16;
        raf = requestAnimationFrame(draw);
      }
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" aria-hidden="true" />;
}
