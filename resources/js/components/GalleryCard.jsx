import Icon from './Icon';

// Isang card ng gallery record sa public portfolio
export default function GalleryCard({ gallery }) {
    return (
        <div className="flex flex-col rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(61,90,77,0.96),rgba(54,81,69,0.96))] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.24)]">
            <img
                src={gallery.image_url}
                alt={gallery.title}
                className="mb-5 h-[280px] w-full rounded-xl object-cover"
            />
            <div className="flex items-start gap-[18px]">
                <div className="w-[45px] shrink-0 text-gray-300">
                    <Icon size={35}>
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <rect x="9" y="9" width="6" height="6" />
                    </Icon>
                </div>
                <div>
                    <h4 className="mb-2 text-[17px] font-semibold leading-tight text-white">{gallery.title}</h4>
                    <p className="mb-1 text-xs text-gray-400">
                        {gallery.category} • {gallery.date_taken}
                    </p>
                    <p className="text-[13px] leading-relaxed text-gray-300">{gallery.caption}</p>
                </div>
            </div>
        </div>
    );
}