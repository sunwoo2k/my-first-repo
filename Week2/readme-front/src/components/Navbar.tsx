import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b px-6 py-4
      grid grid-cols-3 items-center">
      <span className="font-bold text-xl">
        Navbar
      </span>
      <div className="flex gap-6 justify-center">
        <Link href="/">메인</Link>
        <Link href="/posts">목록</Link>
      </div>
      <div className="flex justify-end">
        <button className="border rounded
          px-4 py-1 text-sm hover:bg-gray-100">
          로그인
        </button>
      </div>
    </nav>
  );
}