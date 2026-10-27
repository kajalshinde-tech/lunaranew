import Link from 'next/link';
import Brand from './Brand';
export default function Footer() {
 return <footer className="creative-footer"><Brand /><p>A little spark. A real connection.</p><div><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy</Link><Link href="/terms-conditions">Terms</Link><Link href="/community-guidelines">Community</Link></div><small>© {new Date().getFullYear()} Lunara. Made for real connection. 18+</small></footer>;
}
