import { Head, Link } from '@inertiajs/react';
import FlashMessage from './FlashMessage';
import Footer from './Footer';

// Layout ng mga management pages (Index, Create, Edit)
export default function ManageLayout({ title, subtitle, action, wide = false, children }) {
    return (
        <div className="min-h-screen bg-[linear-gradient(180deg,#10241c_0%,#0d1f18_45%,#0b1914_100%)] text-white">
            <Head title={title} />

            <nav className="sticky top-[18px] z-50 mx-5 my-5 flex max-w-[1400px] items-center justify-between rounded-full border border-white/10 bg-[#2d4a3d]/80 px-6 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl md:mx-auto md:px-[50px]">
                <Link href="/gallery" className="flex items-center gap-2 text-[15px] font-semibold">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#4ade80"><circle cx="12" cy="12" r="10" /></svg>
                    Jian Paul
                </Link>
                <div className="flex items-center gap-3">
                    <Link href="/" className="rounded-[20px] bg-white px-7 py-2.5 text-sm font-semibold text-[#1a1a1a] transition hover:-translate-y-0.5 hover:bg-gray-100">
                        ← Home
                    </Link>
                    {/* Logout: POST /logout galing sa auth routes ng starter kit */}
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="rounded-[20px] border border-white/20 px-5 py-2.5 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
                    >
                        Log out
                    </Link>
                </div>
            </nav>

            <main className={`mx-auto mt-12 px-5 md:px-6 ${wide ? 'max-w-[1400px] md:px-[60px]' : 'max-w-[680px]'}`}>
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
                        <div className="mt-3 h-1 w-[60px] rounded-full bg-gradient-to-r from-white/95 to-white/20" />
                        {subtitle && <p className="mt-3.5 text-sm text-gray-400">{subtitle}</p>}
                    </div>
                    {action}
                </div>

                <FlashMessage />
                {children}
            </main>

            <Footer />
        </div>
    );
}