import Head from 'next/head';
import Link from 'next/link';

export default function Page() {
return <><Head><title>{"LUNARA | Booking & Matching"}</title><meta name="description" content="Learn about LUNARA — the premium nightlife discovery and booking platform connecting party lovers with the best clubs and bars." /></Head>




<section className="page-header" style={{"background": "linear-gradient(rgba(12,3,20,0.8), rgba(12,3,20,0.8)), url('images/bg/booking-hero.png') no-repeat center center/cover", "backgroundAttachment": "fixed"}}>
<div className="container text-center position-relative" style={{"zIndex": "1"}}>
<nav aria-label="breadcrumb">
<ol className="breadcrumb justify-content-center mb-3">
<li className="breadcrumb-item"><Link href="/">{"Home"}</Link></li>
<li className="breadcrumb-item active" aria-current="page">{"Booking & Matching"}</li>
</ol>
</nav>
<h1 className="animate-on-scroll">{"How "}<span className="text-gradient">{"LUNARA"}</span>{" Works"}</h1>
<p className="animate-on-scroll" style={{"maxWidth": "600px", "margin": "0 auto"}}>{"Discover venues, plan outings, and turn online matches into real meetups safely."}</p>
</div>
</section>

<section className="section-padding">
<div className="container">
<div className="text-center mb-5">
<h2 className="section-title animate-on-scroll">{"LUNARA in 2 Parts"}</h2>
<p className="section-subtitle animate-on-scroll">{"We combine discovery with connection. It's not just a booking app, and it's not just a matching app."}</p>
</div>
<div className="row g-4 d-flex align-items-stretch">
<div className="col-lg-6">
<div className="glass-card animate-on-scroll h-100 p-5 d-flex flex-column justify-content-center" style={{"borderTop": "4px solid var(--brand-light-grey)"}}>
<div className="feature-icon mb-4"><i className="bi bi-shop-window" style={{"fontSize": "2.5rem", "color": "var(--brand-light-grey)"}}></i></div>
<h3 className="mb-3 text-white">{"1. Venue Booking"}</h3>
<h5 className="text-neon-cyan mb-3">{"Like Zomato, but Social"}</h5>
<p className="text-secondary mb-3">{"Users can seamlessly browse pubs, cafés, lounges, and rooftops. View fresh menus, transparent pricing, and secure your spot."}</p>
<ul className="list-unstyled text-white mt-auto">
<li className="mb-2"><i className="bi bi-check-circle-fill text-neon-cyan me-2"></i>{" Book tables for solo or groups"}</li>
<li className="mb-2"><i className="bi bi-check-circle-fill text-neon-cyan me-2"></i>{" Get exclusive deals and discounts"}</li>
<li className="mb-2"><i className="bi bi-check-circle-fill text-neon-cyan me-2"></i>{" Instant direct booking directly via Lunara"}</li>
</ul>
</div>
</div>
<div className="col-lg-6">
<div className="glass-card animate-on-scroll h-100 p-5 d-flex flex-column justify-content-center" style={{"borderTop": "4px solid var(--brand-lavender)"}}>
<div className="feature-icon mb-4" style={{"background": "var(--gradient-secondary)"}}><i className="bi bi-people-fill" style={{"fontSize": "2.5rem", "color": "#fff"}}></i></div>
<h3 className="mb-3 text-white">{"2. Venue-Based Matching"}</h3>
<h5 className="text-neon-pink mb-3">{"Our Main Feature"}</h5>
<p className="text-secondary mb-3">{"People don’t just chat — they plan and meet at a venue. LUNARA turns online matches into real meetups."}</p>
<ul className="list-unstyled text-white mt-auto">
<li className="mb-2"><i className="bi bi-suit-heart-fill text-neon-pink me-2"></i>{" Create a profile and select a venue"}</li>
<li className="mb-2"><i className="bi bi-suit-heart-fill text-neon-pink me-2"></i>{" Publish your plan or send personal invites"}</li>
<li className="mb-2"><i className="bi bi-suit-heart-fill text-neon-pink me-2"></i>{" Match, confirm table, split pay, and meet!"}</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="section-padding section-dark" style={{"position": "relative", "overflow": "hidden"}}>
<div className="glow-orb glow-orb-purple" style={{"width": "400px", "height": "400px", "top": "-100px", "left": "-100px"}}></div>
<div className="container position-relative" style={{"zIndex": "1"}}>
<div className="row align-items-center g-5">
<div className="col-lg-5">
<span className="text-brand-lavender fw-bold text-uppercase d-block mb-2" style={{"letterSpacing": "2px", "fontSize": "0.85rem"}}>{"Safety First"}</span>
<h2 className="mb-4 text-white" style={{"fontSize": "2.5rem", "fontWeight": "800"}}>{"User-Controlled Plan "}<span className="text-gradient">{"Privacy System"}</span></h2>
<p className="text-secondary mb-4">{"Posting public plans online can be risky, especially for female users. LUNARA ensures that the user decides what to show, to whom, and when."}</p>
<div className="p-3 mb-4 rounded" style={{"background": "rgba(255,0,0,0.1)", "borderLeft": "4px solid #ff4757"}}>
<p className="mb-0 text-white"><i className="bi bi-exclamation-triangle-fill text-danger me-2"></i>
<strong className="text-danger">{"The Problem:"}</strong>{" Fully public plans allow anyone to track and show up uninvited."}</p>
</div>
<p className="text-white fw-bold"><i className="bi bi-shield-check text-success me-2"></i>
<strong className="text-success">{"The Solution:"}</strong>{" The \"Request to View Plan\" logic."}</p>
</div>
<div className="col-lg-7">
<div className="privacy-dashboard">

<div className="privacy-level-card mb-4 animate-on-scroll" style={{"borderLeft": "4px solid #ff4757", "background": "rgba(255, 71, 87, 0.05)", "padding": "25px", "borderRadius": "15px", "transition": "all 0.3s ease"}}>
<div className="d-flex justify-content-between align-items-start mb-3">
<div>
<span className="badge bg-danger mb-2 px-3">{"OPTION A"}</span>
<h4 className="text-white fw-bold mb-0">{"Full Public Visibility"}</h4>
</div>
<div className="safety-indicator text-danger opacity-50">
<i className="bi bi-shield-slash fs-2"></i>
</div>
</div>
<p className="text-secondary small mb-0">{"The venue and exact time are visible to everyone. Not recommended for solo outings. "}<span className="text-danger fw-bold">{"⚠ High Tracking Risk."}</span></p>
</div>

<div className="privacy-level-card active mb-4 animate-on-scroll" style={{"borderLeft": "4px solid var(--neon-cyan)", "background": "rgba(6, 182, 212, 0.08)", "padding": "30px", "borderRadius": "15px", "transition": "all 0.3s ease", "boxShadow": "0 10px 40px rgba(0,0,0,0.5)", "transform": "scale(1.02)", "zIndex": "2"}}>
<div className="d-flex justify-content-between align-items-start mb-3">
<div>
<span className="badge bg-primary mb-2 px-3">{"OPTION B"}</span>
<span className="ms-2 text-neon-cyan fw-bold x-small" style={{"fontSize": "0.75rem"}}>{"★ HIGHLY RECOMMENDED"}</span>
<h4 className="text-white fw-bold mb-0">{"Limited Public Discovery"}</h4>
</div>
<div className="safety-indicator text-neon-cyan">
<i className="bi bi-shield-shaded fs-2"></i>
</div>
</div>
<p className="text-secondary small mb-0">{"Only general "}<strong>{"Area"}</strong>{" and "}<strong>{"Timeframe"}</strong>{" are shown. Exact venue details remain hidden until you personally approve a match request."}</p>
</div>

<div className="privacy-level-card animate-on-scroll" style={{"borderLeft": "4px solid #00E676", "background": "rgba(0, 230, 118, 0.05)", "padding": "25px", "borderRadius": "15px", "transition": "all 0.3s ease"}}>
<div className="d-flex justify-content-between align-items-start mb-3">
<div>
<span className="badge bg-success mb-2 px-3">{"OPTION C"}</span>
<h4 className="text-white fw-bold mb-0">{"Private / Invite-Only"}</h4>
</div>
<div className="safety-indicator text-success opacity-50">
<i className="bi bi-shield-lock-fill fs-2"></i>
</div>
</div>
<p className="text-secondary small mb-0">{"Ultimate privacy. Your trip is hidden from everyone. You manually browse and send encrypted invites only to users you trust."}</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-padding">
<div className="container">
<div className="text-center mb-5">
<h2 className="section-title animate-on-scroll">{"Confirmed Meetups Only"}</h2>
<p className="section-subtitle animate-on-scroll">{"\"Every meetup on LUNARA is confirmed, tracked, and trusted.\" Say goodbye to casual flaking."}</p>
</div>
<div className="row g-4 justify-content-center">

<div className="col-lg-4 col-md-6">
<div className="feature-card glass-card text-center p-4">
<div className="feature-icon mx-auto mb-3" style={{"background": "var(--neon-pink)"}}><i className="bi bi-shield-check text-white"></i></div>
<h5 className="text-white">{"Trusted Match Badge"}</h5>
<p className="text-secondary small">{"Only allow meetups with verified users sporting a high reliability score. Look for the trusted badge before confirming."}</p>
</div>
</div>

<div className="col-lg-4 col-md-6">
<div className="feature-card glass-card text-center p-4">
<div className="feature-icon mx-auto mb-3" style={{"background": "var(--neon-cyan)"}}><i className="bi bi-check2-all text-white"></i></div>
<h5 className="text-white">{"Double Confirmation"}</h5>
<p className="text-secondary small">{"Before finalizing, both users are hit with a pre-meet chat nudge: \"Are you sure you will attend?\" Both users must confirm."}</p>
</div>
</div>

<div className="col-lg-4 col-md-6">
<div className="feature-card glass-card text-center p-4">
<div className="feature-icon mx-auto mb-3" style={{"background": "#E6B325"}}><i className="bi bi-star-fill text-dark"></i></div>
<h5 className="text-white">{"Reliability Score"}</h5>
<p className="text-secondary small">{"Every user has a visible rating (e.g. 95% Reliable) based on show-ups and authentic behavior. Good behavior is publicly rewarded."}</p>
</div>
</div>
</div>

<div className="row mt-5">
<div className="col-12">
<div className="reliability-system-card animate-on-scroll">
<div className="row g-0">

<div className="col-lg-5 p-4 p-md-5 border-end border-rule">
<div className="d-flex align-items-center mb-4">
<div className="rule-icon-box me-3"><i className="bi bi-shield-lock text-danger"></i></div>
<h4 className="text-white fw-bold mb-0">{"Platform Integrity"}</h4>
</div>
<h5 className="text-secondary small text-uppercase mb-4 fw-bold">{"Penalties for No-Shows"}</h5>
<ul className="list-unstyled custom-list-danger">
<li><i className="bi bi-slash-circle me-2"></i>{" Immediate 24h search suspension"}</li>
<li><i className="bi bi-star-half me-2"></i>{" Public Reliability Score reduction"}</li>
<li><i className="bi bi-arrow-down-right-circle me-2"></i>{" Discovery ranking penalty (-50%)"}</li>
</ul>
</div>

<div className="col-lg-7 p-4 p-md-5 bg-gradient-premium">
<div className="d-flex justify-content-between align-items-start mb-4">
<div>
<h3 className="text-white fw-bold">{"Solo Experience Mode"}</h3>
<p className="text-neon-cyan small mb-0">{"Premium backup for when plans change unexpectedly."}</p>
</div>
<div className="badge bg-primary px-3 py-2">{"AUTOMATIC"}</div>
</div>
<div className="row g-3">
<div className="col-md-6">
<div className="perk-box h-100">
<div className="d-flex align-items-center mb-2">
<i className="bi bi-lightning-charge-fill text-neon-pink me-2"></i>
<h6 className="text-white mb-0">{"Priority Match"}</h6>
</div>
<p className="text-secondary x-small mb-0">{"We push your profile to potential matches in the same area instantly."}</p>
</div>
</div>
<div className="col-md-6">
<div className="perk-box h-100">
<div className="d-flex align-items-center mb-2">
<i className="bi bi-gem text-neon-cyan me-2"></i>
<h6 className="text-white mb-0">{"Exclusive Perks"}</h6>
</div>
<p className="text-secondary x-small mb-0">{"Unlock \"Single Seat\" deals and complimentary perks at verified venues."}</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="cta-banner position-relative overflow-hidden text-center" style={{"backgroundImage": "url('network_connection_bg_1777281364874.png')", "backgroundSize": "cover", "backgroundPosition": "center", "padding": "120px 0"}}>

<div style={{"position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%", "background": "rgba(12, 3, 20, 0.7)", "zIndex": "0"}}></div>
<div className="container position-relative" style={{"zIndex": "1"}}>
<div className="glass-card animate-on-scroll d-inline-block p-5" style={{"maxWidth": "800px", "border": "1px solid rgba(255,255,255,0.1)"}}>
<h2 style={{"fontSize": "2.8rem", "fontWeight": "800"}}>{"Experience the "}<span className="text-gradient">{"Future of Nightlife"}</span></h2>
<p className="mb-4 text-secondary" style={{"fontSize": "1.1rem"}}>{"Secure matching, safe venues, and unforgettable nights. Join LUNARA today."}</p>
<Link href="/contact" className="btn-neon"><i className="bi bi-rocket-takeoff"></i>{" Plan Your Next Night"}</Link>
</div>
</div>
</section>






</>;
}
