// Maliit na wrapper para sa SVG icons (ginagamit sa Portfolio at GalleryCard)
export default function Icon({ size = 30, children }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {children}
        </svg>
    );
}