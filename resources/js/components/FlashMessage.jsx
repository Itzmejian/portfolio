import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

// Success message galing sa Laravel (->with('success', ...)).
// Nakukuha sa shared props: usePage().props.flash.success
export default function FlashMessage() {
    const { flash } = usePage().props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            setVisible(true);
            const t = setTimeout(() => setVisible(false), 4000);
            return () => clearTimeout(t);
        }
    }, [flash?.success]);

    if (!visible || !flash?.success) return null;

    return (
        <div className="mb-6 flex items-center justify-between rounded-xl border border-green-400/30 bg-green-400/10 px-5 py-3 text-sm text-green-300">
            <span>✓ {flash.success}</span>
            <button onClick={() => setVisible(false)} className="ml-4 text-green-300/70 hover:text-green-300">✕</button>
        </div>
    );
}