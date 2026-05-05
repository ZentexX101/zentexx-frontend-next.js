import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-black/10 bg-black text-white">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-lg font-semibold tracking-tight">
                    Zentexx
                </Link>
                <nav className="flex items-center gap-6 text-sm font-medium">
                    <Link className="transition hover:text-sky-600" href="/">
                        Home
                    </Link>
                    <Link className="transition hover:text-sky-600" href="/about">
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}
