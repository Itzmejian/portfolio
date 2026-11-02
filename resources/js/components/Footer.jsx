// Footer na gamit sa public page at management pages
export default function Footer() {
    return (
        <footer className="mt-16 bg-[#1a2e25]/95 px-5 py-6 md:px-[60px]">
            <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-5 text-center md:flex-row md:justify-between">
                <div className="flex flex-1 items-center gap-2 text-sm font-medium text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#4ade80"><circle cx="12" cy="12" r="10" /></svg>
                    Jian Paul
                </div>
                <p className="flex-1 text-[13px] text-gray-400">© 2025 All rights reserved.</p>
                <div className="flex flex-1 justify-end gap-6 text-[13px] text-gray-400">
                    <a href="#" className="hover:text-white">Terms of Use</a>
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}