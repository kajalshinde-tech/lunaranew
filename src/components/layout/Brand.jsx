import Link from 'next/link';
export default function Brand() {
  return (
    <Link href="/" className="original-brand" aria-label="Lunara home">
      <img className="logo-light" src="/images/logo/Logo V1.png" alt="Lunara" />
      <img className="logo-dark" src="/images/logo/Logo V2.png" alt="Lunara" />
    </Link>
  );
}
