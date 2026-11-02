import { Link } from '@inertiajs/react';
import { useState } from 'react';

const links = [
    ['#home', 'Home'],
    ['#about', 'About'],
    ['#skills', 'Skills'],
    ['#projects', 'Projects'],
];

// Public navbar (may hamburger menu sa mobile)
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const linkClass = 'block rounded-[10px] bg-[#1a2e25] p-2.5 text-[15px] text-gray-200 transition hover:text-white md:bg-transparent md:p-0';

    return (
        <nav className="sticky top-[18px] z-50 mx-5 my-5 flex max-w-[1400px] flex-col rounded-[26px] border border-white/10 bg-[#2d4a3d]/80 px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl md:mx-auto md:flex-row md:items-center md:justify-between md:rounded-full md:px-[50px]">
            <button
                onClick={() => setOpen(!open)}
                className="w-full rounded-[20px] bg-white px-7 py-2.5 text-sm font-semibold text-[#1a1a1a] md:hidden"
            >
                {open ? '✕ Close' : '☰ Menu'}
            </button>

            <div className={`${open ? 'mt-4 flex' : 'hidden'} w-full flex-col gap-2.5 text-center md:mt-0 md:flex md:w-auto md:flex-row md:gap-[35px]`}>
                {links.map(([href, label]) => (
                    <a key={href} href={href} onClick={() => setOpen(false)} className={linkClass}>
                        {label}
                    </a>
                ))}
                <Link href="/gallery" className={linkClass}>Posts</Link>
            </div>

            <a
                href="#contact"
                className="mt-2.5 inline-block rounded-[20px] bg-white px-7 py-2.5 text-center text-sm font-semibold text-[#1a1a1a] transition hover:-translate-y-0.5 hover:bg-gray-100 md:mt-0"
            >
                Contact
            </a>
        </nav>
    );
}