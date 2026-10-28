import Link from 'next/link';
const plans = [
  {
    name: 'Free',
    price: '0',
    icon: 'bi-star',
    action: 'Get started',
    description: 'A little curiosity is all you need.',
    features: ['Venue Discovery', 'Standard Booking', 'Basic Safety Check'],
    unavailable: 'Priority Entry',
  },
  {
    name: 'Premium',
    price: '19',
    icon: 'bi-gem',
    action: 'Upgrade now',
    description: 'A few extras for your next great plan.',
    popular: true,
    features: [
      'Priority Entry',
      'Split Payment Links',
      'Hidden Venue Option',
      'Premium Chat Support',
    ],
  },
  {
    name: 'Pro',
    price: '49',
    icon: 'bi-lightning-charge',
    action: 'Go Pro',
    description: 'More possibilities. A little VIP treatment.',
    features: ['Priority Entry', 'Split Payment Links', 'Hidden Venue Option', 'VIP Concierge'],
  },
];
const comparison = [
  ['Venue Discovery', true, true, true],
  ['Standard Booking', true, true, true],
  ['Basic Safety Check', true, true, true],
  ['Priority Entry', false, true, true],
  ['Split Payment Links', false, true, true],
  ['Hidden Venue Option', false, true, true],
  ['Premium Chat Support', false, true, true],
  ['VIP Concierge', false, false, true],
  ['Private Planning', false, false, true],
  ['VIP Table Access', false, false, true],
  ['Exclusive Events', false, false, true],
];
export default function PremiumTiers() {
  return (
    <section className="premium-tiers" id="premium-tiers" aria-labelledby="premium-tiers-title">
      <header className="premium-heading">
        <span className="dating-kicker">PREMIUM TIERS</span>
        <h2 id="premium-tiers-title">
          Your plans.
          <br />
          <em>A little more possibility.</em>
        </h2>
        <p>Unlock an elite nightlife experience with our premium packages.</p>
      </header>
      <div className="premium-plan-grid">
        {plans.map((plan) => (
          <article
            className={`premium-plan ${plan.popular ? 'premium-plan-popular' : ''}`}
            key={plan.name}
            aria-labelledby={`plan-${plan.name.toLowerCase()}`}
          >
            {plan.popular && <span className="premium-popular-badge">✳ Most popular</span>}
            <div className="premium-plan-top">
              <span className="premium-plan-icon">
                <i className={`bi ${plan.icon}`} aria-hidden="true" />
              </span>
              <span className="premium-plan-tag">
                {plan.name === 'Free'
                  ? 'START WITH A HELLO'
                  : plan.popular
                    ? 'MAKE MORE OF IT'
                    : 'ALL THE POSSIBILITIES'}
              </span>
            </div>
            <h3 id={`plan-${plan.name.toLowerCase()}`}>{plan.name}</h3>
            <p className="premium-plan-description">{plan.description}</p>
            <div className="premium-plan-price">
              <span>${plan.price}</span>
              <small>/ month</small>
            </div>
            <div className="premium-plan-rule" />
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <i className="bi bi-check2" aria-hidden="true" />
                  {feature}
                </li>
              ))}
              {plan.unavailable && (
                <li className="premium-unavailable">
                  <i className="bi bi-dash" aria-hidden="true" />
                  <span>
                    {plan.unavailable}
                    <small>Not included</small>
                  </span>
                </li>
              )}
            </ul>
            <Link
              className={`premium-plan-button ${plan.popular ? 'premium-plan-button-filled' : ''}`}
              href="/contact"
            >
              {plan.action}
              <span aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
      </div>
      <section className="premium-comparison" aria-labelledby="plan-comparison-title">
        <h3 id="plan-comparison-title" className="premium-comparison-heading">
          Compare all plan features
        </h3>
        <div className="premium-table-wrap" role="region" aria-label="Plan feature comparison">
          <table>
            <caption className="visually-hidden">
              Lunara Free, Premium, and Pro feature comparison
            </caption>
            <thead>
              <tr>
                <th scope="col">Features</th>
                {plans.map((plan) => (
                  <th key={plan.name} scope="col">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map(([label, ...values]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  {values.map((included, index) => (
                    <td key={index}>
                      <i
                        className={`bi ${included ? 'bi-check2' : 'bi-dash'}`}
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">
                        {included ? 'Included' : 'Not included'}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
