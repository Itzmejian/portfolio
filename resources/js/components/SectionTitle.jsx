// Pamagat ng bawat section na may underline na gradient
export default function SectionTitle({ children }) {
    return (
        <div>
            <h2 className="relative mb-8 inline-block pb-2.5 text-2xl font-bold text-white md:text-[32px]">
                {children}
                <span className="absolute bottom-0 left-0 h-1 w-[72px] rounded-full bg-gradient-to-r from-white/95 to-white/20" />
            </h2>
        </div>
    );
}