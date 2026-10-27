import Head from 'next/head';
import Link from 'next/link';

export default function Page() {
return <><Head><title>{"LUNARA | Partners"}</title><meta name="description" content="LUNARA Partners — Explore our partner nightclubs and bars, or join the LUNARA network and grow your venue." /></Head>




<section className="page-header">
<div className="container text-center">
<nav aria-label="breadcrumb">
<ol className="breadcrumb justify-content-center mb-3">
<li className="breadcrumb-item"><Link href="/">{"Home"}</Link></li>
<li className="breadcrumb-item active" aria-current="page">{"Partners"}</li>
</ol>
</nav>
<h1 className="animate-on-scroll">{"Our "}<span className="text-hollow">{"Partners"}</span></h1>
<p className="animate-on-scroll">{"Premium venues that trust LUNARA for bookings and growth"}</p>
</div>
</section>

<section className="section-padding">
<div className="container">
<div className="text-center mb-5">
<h2 className="section-title animate-on-scroll">{"Our Partner "}<span className="text-gradient">{"Venues"}</span></h2>
<p className="section-subtitle animate-on-scroll">{"Premium clubs and lounges in Pune and Mumbai — trusted and verified by LUNARA."}</p>
</div>
<div className="row g-4">

<div className="col-lg-3 col-md-6">
<div className="partner-card animate-on-scroll animate-delay-1 text-center p-4 h-100 d-flex flex-column align-items-center justify-content-between">
<div className="partner-img-wrapper mb-4">
<img src="/images/partners/spice_factory.png" alt="Spice Factory" className="partner-img-glow" style={{"borderColor": "rgba(0,230,118,0.4)", "boxShadow": "0 0 25px rgba(0,230,118,0.3)"}} />
</div>
<div className="partner-info">
<h4 className="fw-bold text-white mb-2">{"Spice Factory"}</h4>
<p className="mb-3" style={{"color": "rgba(255,255,255,0.7)", "fontSize": "0.95rem"}}>
<i className="bi bi-geo-alt-fill me-1 text-neon-pink"></i>{" Pune, Hinjewadi\n              "}</p>
</div>
<span className="badge py-2 px-4 w-100" style={{"background": "var(--brand-vibrant-purple)", "borderRadius": "20px", "fontWeight": "700"}}>{"Bar & Kitchen"}</span>
</div>
</div>

<div className="col-lg-3 col-md-6">
<div className="partner-card animate-on-scroll animate-delay-2 text-center p-4 h-100 d-flex flex-column align-items-center justify-content-between">
<div className="partner-img-wrapper mb-4">
<img src="/images/partners/cherry.png" alt="Cherry" className="partner-img-glow" style={{"borderColor": "rgba(236,72,153,0.4)", "boxShadow": "0 0 25px rgba(236,72,153,0.3)"}} />
</div>
<div className="partner-info">
<h4 className="fw-bold text-white mb-2">{"Cherry"}</h4>
<p className="mb-3" style={{"color": "rgba(255,255,255,0.7)", "fontSize": "0.95rem"}}>
<i className="bi bi-geo-alt-fill me-1 text-neon-pink"></i>{" Pune, Hinjewadi\n              "}</p>
</div>
<span className="badge py-2 px-4 w-100" style={{"background": "var(--brand-vibrant-purple)", "borderRadius": "20px", "fontWeight": "700"}}>{"Lounge & Nightclub"}</span>
</div>
</div>

<div className="col-lg-3 col-md-6">
<div className="partner-card animate-on-scroll animate-delay-3 text-center p-4 h-100 d-flex flex-column align-items-center justify-content-between">
<div className="partner-img-wrapper mb-4">
<img src="/images/partners/penthouze.png" alt="Penthouze" className="partner-img-glow" style={{"borderColor": "rgba(185,82,235,0.4)", "boxShadow": "0 0 25px rgba(185,82,235,0.3)"}} />
</div>
<div className="partner-info">
<h4 className="fw-bold text-white mb-2">{"Penthouze"}</h4>
<p className="mb-3" style={{"color": "rgba(255,255,255,0.7)", "fontSize": "0.95rem"}}>
<i className="bi bi-geo-alt-fill me-1 text-neon-pink"></i>{" Pune, KP\n              "}</p>
</div>
<span className="badge py-2 px-4 w-100" style={{"background": "var(--brand-vibrant-purple)", "borderRadius": "20px", "fontWeight": "700"}}>{"Rooftop Lounge"}</span>
</div>
</div>

<div className="col-lg-3 col-md-6">
<div className="partner-card animate-on-scroll animate-delay-4 text-center p-4 h-100 d-flex flex-column align-items-center justify-content-between">
<div className="partner-img-wrapper mb-4">
<img src="/images/partners/waters.png" alt="Waters" className="partner-img-glow" style={{"borderColor": "rgba(6,182,212,0.4)", "boxShadow": "0 0 25px rgba(6,182,212,0.3)"}} />
</div>
<div className="partner-info">
<h4 className="fw-bold text-white mb-2">{"Waters"}</h4>
<p className="mb-3" style={{"color": "rgba(255,255,255,0.7)", "fontSize": "0.95rem"}}>
<i className="bi bi-geo-alt-fill me-1 text-neon-pink"></i>{" Pune, Mundhwa\n              "}</p>
</div>
<span className="badge py-2 px-4 w-100" style={{"background": "var(--brand-vibrant-purple)", "borderRadius": "20px", "fontWeight": "700"}}>{"Bar & Grill"}</span>
</div>
</div>

<div className="col-lg-3 col-md-6">
<div className="partner-card animate-on-scroll animate-delay-1 text-center p-4 h-100 d-flex flex-column align-items-center justify-content-between">
<div className="partner-img-wrapper mb-4">
<img src="/images/partners/dragonfly.png" alt="Dragonfly" className="partner-img-glow" style={{"borderColor": "rgba(251,191,36,0.4)", "boxShadow": "0 0 25px rgba(251,191,36,0.3)"}} />
</div>
<div className="partner-info">
<h4 className="fw-bold text-white mb-2">{"Dragonfly"}</h4>
<p className="mb-3" style={{"color": "rgba(255,255,255,0.7)", "fontSize": "0.95rem"}}>
<i className="bi bi-geo-alt-fill me-1 text-neon-pink"></i>{" Mumbai, Sahar\n              "}</p>
</div>
<span className="badge py-2 px-4 w-100" style={{"background": "var(--brand-vibrant-purple)", "borderRadius": "20px", "fontWeight": "700"}}>{"Luxury Lounge"}</span>
</div>
</div>

<div className="col-lg-3 col-md-6">
<div className="partner-card animate-on-scroll animate-delay-2 text-center p-4 h-100 d-flex flex-column align-items-center justify-content-between">
<div className="partner-img-wrapper mb-4">
<img src="/images/partners/tryst.png" alt="Tryst" className="partner-img-glow" style={{"borderColor": "rgba(185,82,235,0.4)", "boxShadow": "0 0 25px rgba(185,82,235,0.3)"}} />
</div>
<div className="partner-info">
<h4 className="fw-bold text-white mb-2">{"Tryst"}</h4>
<p className="mb-3" style={{"color": "rgba(255,255,255,0.7)", "fontSize": "0.95rem"}}>
<i className="bi bi-geo-alt-fill me-1 text-neon-pink"></i>{" Mumbai, Parel\n              "}</p>
</div>
<span className="badge py-2 px-4 w-100" style={{"background": "var(--brand-vibrant-purple)", "borderRadius": "20px", "fontWeight": "700"}}>{"Nightclub"}</span>
</div>
</div>

<div className="col-lg-3 col-md-6">
<div className="partner-card animate-on-scroll animate-delay-3 text-center p-4 h-100 d-flex flex-column align-items-center justify-content-between">
<div className="partner-img-wrapper mb-4">
<img src="/images/partners/public_q.png" alt="Public Q" className="partner-img-glow" style={{"borderColor": "rgba(6,182,212,0.4)", "boxShadow": "0 0 25px rgba(6,182,212,0.3)"}} />
</div>
<div className="partner-info">
<h4 className="fw-bold text-white mb-2">{"Public Q"}</h4>
<p className="mb-3" style={{"color": "rgba(255,255,255,0.7)", "fontSize": "0.95rem"}}>
<i className="bi bi-geo-alt-fill me-1 text-neon-pink"></i>{" Pune, Hinjewadi\n              "}</p>
</div>
<span className="badge py-2 px-4 w-100" style={{"background": "var(--brand-vibrant-purple)", "borderRadius": "20px", "fontWeight": "700"}}>{"Gastro Pub"}</span>
</div>
</div>

<div className="col-lg-3 col-md-6">
<div className="partner-card animate-on-scroll animate-delay-4 text-center p-4 h-100 d-flex flex-column align-items-center justify-content-between">
<div className="partner-img-wrapper mb-4">
<img src="/images/partners/thikana.png" alt="Thikana" className="partner-img-glow" style={{"borderColor": "rgba(185,82,235,0.4)", "boxShadow": "0 0 25px rgba(185,82,235,0.3)"}} />
</div>
<div className="partner-info">
<h4 className="fw-bold text-white mb-2">{"Thikana"}</h4>
<p className="mb-3" style={{"color": "rgba(255,255,255,0.7)", "fontSize": "0.95rem"}}>
<i className="bi bi-geo-alt-fill me-1 text-neon-pink"></i>{" Pune, Hinjewadi\n              "}</p>
</div>
<span className="badge py-2 px-4 w-100" style={{"background": "var(--brand-vibrant-purple)", "borderRadius": "20px", "fontWeight": "700"}}>{"Lounge & Bar"}</span>
</div>
</div>

<div className="col-12 text-center mt-4 animate-on-scroll">
<div className="glass-card d-inline-block px-5 py-4" style={{"border": "1px dashed rgba(185,82,235,0.4)"}}>
<i className="bi bi-plus-circle text-gradient" style={{"fontSize": "2rem"}}></i>
<p className="text-secondary mt-2 mb-0">{"More partner venues coming soon."}<br /><Link href="/contact" className="text-neon-pink fw-bold text-decoration-none">{"Apply to join our network →"}</Link></p>
</div>
</div>
</div>
</div>
</section>

<section className="partner-cta section-dark text-center" style={{"position": "relative", "backgroundImage": "url('partners_cta_bg_1777281219746.png')", "backgroundSize": "cover", "backgroundPosition": "center", "overflow": "hidden"}}>

<div style={{"position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%", "background": "rgba(12, 3, 20, 0.7)", "zIndex": "0"}}></div>
<div className="glow-orb glow-orb-pink" style={{"width": "500px", "height": "500px", "top": "-200px", "left": "50%", "transform": "translateX(-50%)", "opacity": "0.1", "zIndex": "1"}}></div>
<div className="container position-relative" style={{"zIndex": "2", "padding": "100px 0"}}>
<div className="row justify-content-center">
<div className="col-lg-10">
<div className="glass-card animate-on-scroll" style={{"padding": "60px 40px", "border": "1px solid rgba(255,255,255,0.1)"}}>
<div className="feature-icon mx-auto mb-4" style={{"width": "80px", "height": "80px", "fontSize": "2rem", "background": "var(--gradient-primary)", "color": "white"}}><i className="bi bi-building-add"></i></div>
<h2 style={{"fontSize": "3rem", "fontWeight": "800", "color": "white"}} className="mb-3">{"Become a "}<span className="text-gradient">{"LUNARA Partner"}</span></h2>
<p className="text-secondary mb-5" style={{"maxWidth": "650px", "marginLeft": "auto", "marginRight": "auto", "fontSize": "1.1rem"}}>{"Join the fastest growing nightlife network. List your club or bar on LUNARA and get access to thousands of premium customers, powerful booking tools, and real-time analytics."}</p>
<div className="d-flex gap-4 justify-content-center flex-wrap mb-5">
<Link href="/contact" className="btn-neon"><i className="bi bi-send"></i>{" Apply Now"}</Link>
<Link href="/about" className="btn-outline-neon"><i className="bi bi-info-circle"></i>{" Learn More"}</Link>
</div>

<div className="row g-3 mt-4 text-start">
<div className="col-md-4">
<div className="d-flex align-items-center gap-2">
<i className="bi bi-check-circle-fill text-neon-pink"></i>
<span style={{"fontSize": "0.92rem"}}>{"Free onboarding"}</span>
</div>
</div>
<div className="col-md-4">
<div className="d-flex align-items-center gap-2">
<i className="bi bi-check-circle-fill text-neon-pink"></i>
<span style={{"fontSize": "0.92rem"}}>{"Real-time dashboard"}</span>
</div>
</div>
<div className="col-md-4">
<div className="d-flex align-items-center gap-2">
<i className="bi bi-check-circle-fill text-neon-pink"></i>
<span style={{"fontSize": "0.92rem"}}>{"Dedicated support"}</span>
</div>
</div>
<div className="col-md-4">
<div className="d-flex align-items-center gap-2">
<i className="bi bi-check-circle-fill text-neon-cyan"></i>
<span style={{"fontSize": "0.92rem"}}>{"Marketing exposure"}</span>
</div>
</div>
<div className="col-md-4">
<div className="d-flex align-items-center gap-2">
<i className="bi bi-check-circle-fill text-neon-cyan"></i>
<span style={{"fontSize": "0.92rem"}}>{"Revenue analytics"}</span>
</div>
</div>
<div className="col-md-4">
<div className="d-flex align-items-center gap-2">
<i className="bi bi-check-circle-fill text-neon-cyan"></i>
<span style={{"fontSize": "0.92rem"}}>{"Zero setup fees"}</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-padding section-dark">
<div className="container text-center">
<div className="glass-card d-inline-block mx-auto" style={{"padding": "40px", "borderColor": "var(--neon-cyan)"}}>
<div className="feature-icon mx-auto mb-3" style={{"width": "60px", "height": "60px", "fontSize": "1.5rem"}}><i className="bi bi-telephone-inbound-fill"></i></div>
<h3>{"Lunara Office Contact Number"}</h3>
<p className="text-secondary mt-2 mb-4">{"Are you a venue looking to partner with us? Give us a call directly."}</p>
<a href="tel:+919067565606" className="fs-3 fw-bold text-gradient-secondary text-decoration-none">{"+91 90675 65606"}</a>
</div>
</div>
</section>






</>;
}
