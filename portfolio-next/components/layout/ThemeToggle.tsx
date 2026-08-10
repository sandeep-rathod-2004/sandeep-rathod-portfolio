'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const isLight = stored === 'light';
    setLight(isLight);
    document.documentElement.classList.toggle('light', isLight);
  }, []);

  function toggle() {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle('light', next);
    localStorage.setItem('theme', next ? 'light' : 'dark');
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="w-[38px] h-[38px] rounded-[10px] border border-border bg-surface flex items-center justify-center text-text-dim hover:text-amber hover:border-amber-dim transition-colors"
    >
      {light ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}
