import Header from './Header';
import Footer from './Footer';
export default function PageShell({ children, className = '' }) {
  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
