import Link from 'next/link';

export default function Belief() {
  return (
    <section className="story-belief">
      <span className="dating-kicker">{'OUR REASON FOR BEING'}</span>
      <h2>
        {'Less chasing perfect.'}
        <br />
        {'More finding '}
        <em>{'your people.'}</em>
      </h2>
      <p>
        {
          'Connection isn’t a checklist. It’s feeling comfortable enough to be yourself — and curious enough to let someone in.'
        }
      </p>
      <span aria-hidden="true" className="belief-heart">
        {'♡'}
      </span>
    </section>
  );
}
