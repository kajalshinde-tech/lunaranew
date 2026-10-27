import Header from '../components/react/Header';
import Footer from '../components/react/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/legacy.css';
import '../css/creative.css';
import '../css/dating.css';
import '../css/about.css';
import '../css/safety.css';
import '../css/contact.css';
import '../css/next.css';
const modern = {'/':'', '/about':'about-page','/safety-check':'safety-page','/contact':'contact-page'};
export default function App({Component,pageProps,router}) {
 const classes = Object.hasOwn(modern,router.pathname) ? `creative-home dating-home ${modern[router.pathname]}` : 'legacy-page';
 return <div className={classes}><Header/><Component {...pageProps}/><Footer/></div>;
}

