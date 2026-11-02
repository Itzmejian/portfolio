// Reusable na field: label + input (children) + error message sa tabi/ilalim ng field
export const inputClass =
    'w-full rounded-[14px] border border-white/15 bg-[#1a2e25]/80 px-[18px] py-3.5 text-[15px] text-white outline-none transition focus:border-green-400/40 focus:ring-4 focus:ring-green-400/10';

export default function FormField({ label, name, error, hint, children }) {
    return (
        <div className="mb-6">
            <label htmlFor={name} className="mb-2 block text-[13px] font-semibold uppercase tracking-wider text-gray-300">
                {label}
                {hint && <span className="ml-1 font-normal normal-case text-gray-400">{hint}</span>}
            </label>
            {children}
            {error && <p className="mt-2 text-[13px] text-red-400">{error}</p>}
        </div>
    );
}