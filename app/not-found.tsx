import Link from 'next/link';

export default function Notfound() {
  return (
    <section className="flex flex-col items-center justify-center h-96  gap-8 px-6">
      <p>
        <b className="underline underline-offset-4 decoration-green-400">Uh-oh!</b> Sorry, the page
        you requested was not found
      </p>
      <Link className="btn" href="/">
        Home
      </Link>
    </section>
  );
}
