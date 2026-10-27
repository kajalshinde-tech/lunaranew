import Head from 'next/head';
import Link from 'next/link';

export default function Page() {
return <><Head><title>{"Community Guidelines | LUNARA"}</title><meta name="description" content="Community Guidelines for LUNARA — Respect, safety, and inclusion in our community." /></Head>




<section className="page-header">
<div className="container text-center">
<nav aria-label="breadcrumb">
<ol className="breadcrumb justify-content-center mb-3">
<li className="breadcrumb-item"><Link href="/">{"Home"}</Link></li>
<li className="breadcrumb-item active" aria-current="page">{"Community Guidelines"}</li>
</ol>
</nav>
<h1 className="animate-on-scroll">{"Community "}<span className="text-hollow">{"Guidelines"}</span></h1>
<p className="animate-on-scroll">{"LUNARA is a place for connection, fun, and respect. Let's keep it that way."}</p>
</div>
</section>
<main className="community-content container mt-0 pt-5">
<div className="guideline-item animate-on-scroll">
<h3><i className="bi bi-heart-fill text-danger"></i>{" Respect Everyone"}</h3>
<p>{"Treat others as you would like to be treated. Harassment, bullying, and hate speech have no place in LUNARA. Be kind, be inclusive, and be respectful of everyone's boundaries."}</p>
</div>
<div className="guideline-item animate-on-scroll">
<h3><i className="bi bi-shield-check text-success"></i>{" Be Authentic"}</h3>
<p>{"LUNARA is built on trust. Use your real name, use your real photos, and be yourself. AI-generated photos, catfishing, and impersonation are strictly prohibited."}</p>
</div>
<div className="guideline-item animate-on-scroll">
<h3><i className="bi bi-hand-thumbs-up-fill text-primary"></i>{" Play Fair"}</h3>
<p>{"Respect the venues and their rules. Show up for your bookings, or cancel in advance. Use the payment split feature honestly and fairly with your group."}</p>
</div>
<div className="guideline-item animate-on-scroll">
<h3><i className="bi bi-eye-slash-fill text-warning"></i>{" Respect Privacy"}</h3>
<p>{"Don't share other people's private information without their consent. Respect the \"Venue Privacy\" choices of others and don't record or photograph people without permission."}</p>
</div>
<div className="guideline-item animate-on-scroll">
<h3><i className="bi bi-slash-circle text-danger"></i>{" Zero Tolerance"}</h3>
<p>{"We have zero tolerance for illegal activities, violence, or sexual harassment. Any violation of these guidelines may lead to immediate account suspension or permanent ban."}</p>
</div>
<div className="community-footer animate-on-scroll">
<h2 className="text-white mb-4">{"Together, We Own the Night."}</h2>
<p className="text-secondary mb-5 fs-5">{"By using LUNARA, you agree to uphold these values and help us build a safe, fun, and vibrant nightlife community."}</p>
<Link href="/" className="btn-neon">{"Back to Home"}</Link>
</div>
</main>









</>;
}
