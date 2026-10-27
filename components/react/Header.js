import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Brand from './Brand';
export default function Header() {
 const [theme, setTheme] = useState('light');
 const [open, setOpen] = useState(false);
 const router = useRouter();
 useEffect(() => {
  setTheme(document.documentElement.dataset.theme || 'light');
  const sync = event => { if(event.key === 'lunara-theme') applyTheme(event.newValue || 'light'); };
  window.addEventListener('storage', sync);
  return () => window.removeEventListener('storage', sync);
 }, []);
 useEffect(() => {setOpen(false);}, [router.asPath]);
 function applyTheme(value) {
  const next = value === 'dark' ? 'dark' : 'light';
  setTheme(next);
  document.documentElement.dataset.theme = next;
  document.documentElement.dataset.bsTheme = next;
 }
 function toggleTheme() {
  const next = theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try {localStorage.setItem('lunara-theme', next);} catch {}
 }
 return <header className={`creative-nav ${open ? 'menu-open' : ''}`}><Brand /><nav id="site-nav" aria-label="Main navigation"><Link href="/#discover">Discover</Link><Link href="/about" aria-current={router.pathname === '/about' ? 'page' : undefined}>Our story</Link><Link href="/safety-check" aria-current={router.pathname === '/safety-check' ? 'page' : undefined}>Safety</Link><Link href="/contact" aria-current={router.pathname === '/contact' ? 'page' : undefined}>Get in touch</Link></nav><div className="nav-actions"><button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} aria-pressed={theme === 'dark'}><span className="theme-symbol" aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span><span className="theme-label">{theme === 'dark' ? 'Light' : 'Dark'}</span></button><Link className="nav-book" href="/contact">Say hello ↗</Link><button type="button" className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-controls="site-nav" aria-expanded={open} onClick={()=>setOpen(!open)}>☰</button></div></header>;
}
