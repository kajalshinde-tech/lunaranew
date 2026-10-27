import Link from 'next/link';

export default function Questions() {
  return (
    <section className="safe-questions">
      <div>
        <span className="dating-kicker">{'LET’S TALK ABOUT IT'}</span>
        <h2>
          {'A few things'}
          <br />
          {'worth '}
          <em>{'knowing.'}</em>
        </h2>
        <p>{'Clear answers for moments when something feels uncertain.'}</p>
        <Link className="text-link" href="/community-guidelines">
          {'Our community guidelines ↗'}
        </Link>
      </div>
      <div className="safe-accordion">
        <details open>
          <summary>{'What if a match asks me for money?'}</summary>
          <div>
            <p>
              {
                'Don’t send money, gift cards, cryptocurrency, or financial information to someone you’ve met online, even if their story sounds urgent. Stop the conversation and use available report tools or contact support.'
              }
            </p>
          </div>
        </details>
        <details>
          <summary>{'What if someone makes me uncomfortable?'}</summary>
          <div>
            <p>
              {
                'You can stop replying, decline a meeting, or leave a date. Use block or report options where available. To raise a concern with Lunara, visit our contact page and share only the details you’re comfortable providing.'
              }
            </p>
            <Link href="/contact">{'Contact Lunara ↗'}</Link>
          </div>
        </details>
        <details>
          <summary>{'Does a verified photo guarantee someone is safe?'}</summary>
          <div>
            <p>
              {
                'No. A photo or identity check does not guarantee a person’s intentions or behaviour. Continue to protect your information, meet in public, and trust your judgement.'
              }
            </p>
          </div>
        </details>
        <details>
          <summary>{'How should we handle a bill on a date?'}</summary>
          <div>
            <p>
              {
                'Discuss expectations before ordering. Check the menu and any additional charges, pay through a trusted method, and never share a PIN or OTP. You’re free to suggest splitting the bill or choosing a different venue.'
              }
            </p>
          </div>
        </details>
        <details>
          <summary>{'Can I change my mind about meeting?'}</summary>
          <div>
            <p>
              {
                'Yes, at any time. Agreeing to chat or meet doesn’t commit you to anything further. Respect the other person’s decision in the same way you’d want yours respected.'
              }
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
