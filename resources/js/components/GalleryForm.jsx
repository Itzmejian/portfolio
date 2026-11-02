import FormField, { inputClass } from './FormField';

// Reusable form na gamit ng Create AT Edit.
// Tinatanggap ang `form` galing sa useForm() kaya nananatili ang tinype ng user kapag may validation error.
export default function GalleryForm({ form, onSubmit, categories, submitLabel, currentImage }) {
    const { data, setData, errors, processing } = form;

    return (
        <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(61,90,77,0.96),rgba(54,81,69,0.96))] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] md:p-10"
        >
            {currentImage && (
                <div className="mb-6">
                    <span className="mb-2.5 block text-[13px] font-semibold uppercase tracking-wider text-gray-300">Current Image</span>
                    <img src={currentImage} alt="Current" className="max-h-[200px] w-full rounded-[14px] border border-white/15 object-cover" />
                </div>
            )}

            <FormField
                label={currentImage ? 'Change Image' : 'Image'}
                hint={currentImage ? '(optional)' : ''}
                name="image"
                error={errors.image}
            >
                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setData('image', e.target.files[0] ?? null)}
                    className={`${inputClass} file:mr-4 file:rounded-lg file:border-0 file:bg-[#4d6a5b] file:px-4 file:py-2 file:text-sm file:text-white`}
                />
            </FormField>

            <FormField label="Title" name="title" error={errors.title}>
                <input
                    id="title"
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    className={inputClass}
                />
            </FormField>

            <FormField label="Category" name="category" error={errors.category}>
                <select
                    id="category"
                    value={data.category}
                    onChange={(e) => setData('category', e.target.value)}
                    className={inputClass}
                >
                    <option value="">-- Select category --</option>
                    {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </FormField>

            <FormField label="Date Taken" name="date_taken" error={errors.date_taken}>
                <input
                    id="date_taken"
                    type="date"
                    value={data.date_taken}
                    onChange={(e) => setData('date_taken', e.target.value)}
                    className={`${inputClass} [color-scheme:dark]`}
                />
            </FormField>

            <FormField label="Caption" hint="(optional)" name="caption" error={errors.caption}>
                <textarea
                    id="caption"
                    rows={4}
                    value={data.caption}
                    onChange={(e) => setData('caption', e.target.value)}
                    className={`${inputClass} min-h-[110px] resize-y`}
                />
            </FormField>

            <div className="my-7 h-px bg-white/10" />

            <button
                type="submit"
                disabled={processing}
                className="w-full rounded-full border border-white/10 bg-gradient-to-br from-[#3d5a4d] to-[#4d6a5b] px-9 py-4 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 disabled:opacity-60"
            >
                {processing ? 'Saving...' : submitLabel}
            </button>
        </form>
    );
}