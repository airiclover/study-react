import Link from "next/link";

export function Header() {
  return (
    <header>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/about">
        <a href="/about">About</a>
      </Link>
    </header>
  );
}
