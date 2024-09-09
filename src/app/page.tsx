import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-white text-4xl font-bold my-6">
        Time to get started!
      </h1>
      <div>
        <p><Link href="/meals">meals</Link></p>
        <p><Link href="/meals/share">meals/share</Link></p>
        <p><Link href="/meals/slug">meals/[slug]</Link></p>
        <p><Link href="/community">community</Link></p>
      </div>
    </main>
  );
}
