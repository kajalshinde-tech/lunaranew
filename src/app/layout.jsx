import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/styles/legacy.css';
import '@/styles/creative.css';
import '@/styles/dating.css';
import '@/styles/about.css';
import '@/styles/safety.css';
import '@/styles/contact.css';
import '@/styles/next.css';
export const metadata = {
  title: { default: 'Lunara — Real connections', template: '%s' },
  description: 'A little spark. A real connection.',
  icons: { icon: '/images/logo/favicon.svg' },
};
const themeScript = `(function(){var t='light';try{t=localStorage.getItem('lunara-theme')||t}catch(e){}t=t==='dark'?'dark':'light';document.documentElement.dataset.theme=t;document.documentElement.dataset.bsTheme=t;})();`;
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
