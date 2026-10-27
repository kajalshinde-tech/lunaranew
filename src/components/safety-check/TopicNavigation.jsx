import Link from 'next/link';

export default function TopicNavigation() {
  return (
    <nav className="safe-shortcuts" aria-label="Safety topics">
      <a href="#online">
        {'01   Online safety '}
        <span>{'↗'}</span>
      </a>
      <a href="#meeting">
        {'02   Meeting in person '}
        <span>{'↗'}</span>
      </a>
      <a href="#boundaries">
        {'03   Your boundaries '}
        <span>{'↗'}</span>
      </a>
      <a href="#support">
        {'04   Get support '}
        <span>{'↗'}</span>
      </a>
    </nav>
  );
}
