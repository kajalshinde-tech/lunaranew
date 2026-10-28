'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Brand from './Brand';
export default function Header() {
  const [theme, setTheme] = useState('light');
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || 'light');
    const sync = (event) => {
      if (event.key === 'lunara-theme') applyTheme(event.newValue || 'light');
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  function applyTheme(value) {
    const next = value === 'dark' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.documentElement.dataset.bsTheme = next;
  }
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem('lunara-theme', next);
    } catch {}
  }
  return (
    <header className={`creative-nav ${open ? 'menu-open' : ''}`}>
      <Brand />
      <nav id="site-nav" aria-label="Main navigation" onClick={() => setOpen(false)}>
        {[
          ['/', 'Home'],
          ['/about', 'About Us'],
          ['/safety-check', 'Safety Check'],
          ['/partners', 'Partners'],
          ['/contact', 'Contact Us'],
          ['/booking', 'Booking'],
        ].map(([href, label]) => (
          <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="nav-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          aria-pressed={theme === 'dark'}
        >
          <span className="theme-symbol" aria-hidden="true">
            {theme === 'dark' ? '☀' : '☾'}
          </span>
          <span className="theme-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
        <Link className="nav-book" href="/contact">
          Say hello ↗
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-controls="site-nav"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
