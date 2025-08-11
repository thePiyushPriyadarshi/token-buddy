import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-sm py-3 px-6 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-cyan-500 to-pink-500 text-transparent bg-clip-text">
        Token Buddy
      </Link>
      <div>
      </div>
    </nav>
  );
}