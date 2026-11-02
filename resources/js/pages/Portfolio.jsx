import Footer from '@/components/Footer';
import GalleryCard from '@/components/GalleryCard';
import Icon from '@/components/Icon';
import Navbar from '@/components/Navbar';
import SectionTitle from '@/components/SectionTitle';
import { Head, Link } from '@inertiajs/react';

// Static na content (hindi galing sa database)
const skills = [
    { title: 'Network', sub: 'Administration', icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /></> },
    { title: 'Cloud', sub: 'Computing', icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /> },
    { title: 'Hardware', sub: 'Troubleshooting', icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /> },
    { title: 'IT', sub: 'Support', icon: <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /></> },
];

const projects = [
    { title: 'Home PC Assembly Setup', text: 'Assembled and configured personal computers, including OS installation, driver setup, and system optimization for home and office use.', icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></> },
    { title: 'Home Cybersecurity Setup', text: 'Implemented firewall protection and secured network connections to ensure safe and private internet access for home users.', icon: <><rect x="5" y="11" width="14" height="10" rx="2" /><circle cx="12" cy="16" r="1" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></> },
    { title: 'Enterprise Network Build', text: 'Designed and deployed a high-speed corporate network, ensuring stable connectivity and optimized data flow for business operations.', icon: <><rect x="2" y="7" width="20" height="10" rx="2" /><line x1="2" y1="17" x2="22" y2="17" /></> },
    { title: 'Cloud Infrastructure Migration', text: 'Migrated client data center infrastructure to AWS/Azure to improve scalability, reliability, and cost efficiency.', icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /> },
    { title: 'IT Support & Helpdesk', text: 'Provided technical support and troubleshooting for hardware and software issues, ensuring smooth and reliable system operations.', icon: <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /></> },
    { title: 'Hardware Upgrade & Optimization', text: 'Upgraded hardware components such as RAM and storage, scripts and firewalls to enhance overall system speed and reliability.', icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /></> },
];

const contacts = [
    { label: 'Phone', value: '09708178735', icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /> },
    { label: 'Email', value: 'jianpaul855@gmail.com', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
    { label: 'Address', value: 'Leet, Sta Barbara Pangasinan, XCWX+75, Philippines', icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></> },
];

const section = 'mx-auto max-w-[1400px] px-5 py-8 md:px-[60px]';
const panel = 'rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(61,90,77,0.96),rgba(54,81,69,0.96))] shadow-[0_10px_30px_rgba(0,0,0,0.18)]';

// `galleries` galing sa PortfolioController@index (database)
export default function Portfolio({ galleries }) {
    return (
        <div className="min-h-screen scroll-smooth bg-[linear-gradient(180deg,#10241c_0%,#0d1f18_45%,#0b1914_100%)] leading-relaxed text-white">
            <Head title="Portfolio - Mamongay, Jian Paul N." />
            <Navbar />

            {/* Hero */}
            <section id="home" className="mx-auto my-8 flex max-w-[1400px] flex-col items-center justify-between gap-10 px-8 py-10 text-center md:my-[52px] md:flex-row md:px-[60px] md:py-20 md:text-left">
                <div className="max-w-[600px] flex-1">
                    <h1 className="mb-2.5 text-[28px] font-bold leading-tight tracking-tight md:text-[46px]">MAMONGAY, JIAN PAUL N.</h1>
                    <h2 className="mb-5 text-lg md:text-[22px]">Network/Computer Technician</h2>
                    <p className="text-[15px] leading-[1.7] text-gray-300">
                        Passionate network and computer technician with a strong background in configuring, upgrading, maintaining, and troubleshooting computer systems, networks, and hardware to ensure reliable and efficient operations.
                    </p>
                </div>
                <img src="/image/pfpjianpaul.jpg" alt="Jian Paul Mamongay" className="h-[220px] w-[220px] shrink-0 rounded-full border-[6px] border-white/10 object-cover shadow-[0_18px_50px_rgba(0,0,0,0.24)] md:h-[320px] md:w-[320px]" />
            </section>

            {/* Skills */}
            <section id="skills" className={section}>
                <SectionTitle>Skills</SectionTitle>
                <div className={`${panel} flex flex-col gap-4 p-6 md:flex-row md:p-[35px]`}>
                    {skills.map((s) => (
                        <div key={s.title} className="flex flex-1 items-center gap-4 rounded-[14px] border border-white/5 bg-[#4d6a5b]/90 p-5 transition hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.24)]">
                            <div className="text-gray-300"><Icon size={30}>{s.icon}</Icon></div>
                            <div>
                                <h3 className="text-base font-semibold">{s.title}</h3>
                                <p className="text-[13px] text-gray-300">{s.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About */}
            <section id="about" className={section}>
                <SectionTitle>About me</SectionTitle>
                <div className={`${panel} flex flex-col items-center gap-10 p-8 text-center md:flex-row md:p-[45px] md:text-left`}>
                    <img src="/image/pfpjianpaul.jpg" alt="Jian Paul Mamongay" className="h-[200px] w-[200px] shrink-0 rounded-full border-[5px] border-white/10 object-cover" />
                    <p className="text-[15px] leading-[1.7] text-gray-300">
                        I am a motivated Network and Computer Technician with hands-on experience in installing, configuring, and troubleshooting computer systems, networks, and hardware. I specialize in providing reliable IT support, maintaining secure network environments, and optimizing system performance for both home and business users. I am committed to continuous learning and improving my technical skills to keep up with evolving technologies and industry standards.
                    </p>
                </div>
            </section>

            {/* Projects / Gallery */}
            <section id="projects" className={section}>
                <SectionTitle>Project/Gallery</SectionTitle>
                <div className="mb-8 grid gap-5 md:grid-cols-2">
                    {projects.map((p) => (
                        <div key={p.title} className="rounded-[18px] bg-[#2d4a3d]/80 p-6 transition hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.24)] md:p-[35px]">
                            <div className="mb-[18px] text-gray-300"><Icon size={50}>{p.icon}</Icon></div>
                            <h3 className="mb-3 text-lg font-semibold">{p.title}</h3>
                            <p className="text-[13px] leading-relaxed text-gray-300">{p.text}</p>
                        </div>
                    ))}
                </div>

                {/* DYNAMIC: records galing sa database */}
                <div className="grid gap-5 md:grid-cols-2">
                    {galleries.length > 0 ? (
                        galleries.map((g) => <GalleryCard key={g.id} gallery={g} />)
                    ) : (
                        <p className="py-5 text-sm text-gray-400">
                            No posts yet. Add posts from the{' '}
                            <Link href="/gallery" className="text-green-400 underline">Posts page</Link>.
                        </p>
                    )}
                </div>

                <div className="mt-8">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center rounded-full border border-white/10 bg-gradient-to-br from-[#3d5a4d] to-[#4d6a5b] px-9 py-3.5 text-[15px] font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-1"
                    >
                        Manage Posts
                    </Link>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className={section}>
                <SectionTitle>Contact</SectionTitle>
                <div className={`${panel} mb-6 flex flex-col gap-6 p-6 md:p-10`}>
                    {contacts.map((c) => (
                        <div key={c.label} className="flex items-center gap-[18px]">
                            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#2d4a3d]/80 text-gray-300">
                                <Icon size={18}>{c.icon}</Icon>
                            </div>
                            <div>
                                <p className="mb-[3px] text-[13px] text-gray-400">{c.label}</p>
                                <p className="text-[15px]">{c.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center gap-[18px] md:flex-row">
                    {['Jian Paul Mamongay', 'Mamongay J'].map((name) => (
                        <a key={name} href="#" className="rounded-[20px] border border-white/10 bg-[#3d5a4d]/90 px-[25px] py-2.5 text-[13px] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:bg-[#4a6659]">
                            {name}
                        </a>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}