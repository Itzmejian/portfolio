import ManageLayout from '@/components/ManageLayout';
import { Link, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ galleries }) {
    const [toDelete, setToDelete] = useState(null); // record na ide-delete (para sa confirmation modal)

    const confirmDelete = () => {
        router.delete(`/gallery/${toDelete.id}`, {
            preserveScroll: true,
            onFinish: () => setToDelete(null),
        });
    };

    return (
        <ManageLayout
            title="Posts / Gallery"
            subtitle={`${galleries.length} post${galleries.length === 1 ? '' : 's'}`}
            wide
            action={
                <Link
                    href="/gallery/create"
                    className="rounded-[20px] border border-white/15 bg-gradient-to-br from-[#3d5a4d] to-[#4d6a5b] px-6 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
                >
                    + Add Post
                </Link>
            }
        >
            <div className="overflow-x-auto rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(61,90,77,0.96),rgba(54,81,69,0.96))] shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                <table className="w-full border-collapse text-left">
                    <thead className="border-b border-white/15 bg-[#2d4a3d]/80">
                        <tr>
                            {['ID', 'Title', 'Image', 'Category', 'Caption', 'Date', 'Actions'].map((h) => (
                                <th key={h} className="px-5 py-4 text-[11px] font-bold uppercase tracking-widest text-gray-400">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {galleries.length === 0 && (
                            <tr>
                                <td colSpan={7} className="px-5 py-16 text-center text-gray-400">
                                    No posts yet. Click "Add Post" to upload one.
                                </td>
                            </tr>
                        )}
                        {galleries.map((g) => (
                            <tr key={g.id} className="border-b border-white/10 last:border-0 hover:bg-[#4d6a5b]/30">
                                <td className="px-5 py-5 text-[13px] text-gray-400">{g.id}</td>
                                <td className="px-5 py-5 font-semibold text-white">{g.title}</td>
                                <td className="px-5 py-5">
                                    <img src={g.image_url} alt={g.title} className="h-[90px] w-[120px] rounded-lg border border-white/15 object-cover" />
                                </td>
                                <td className="px-5 py-5 text-sm text-gray-300">{g.category}</td>
                                <td className="max-w-[280px] truncate px-5 py-5 text-[13px] text-gray-300">{g.caption}</td>
                                <td className="whitespace-nowrap px-5 py-5 text-[13px] text-gray-400">{g.date_taken}</td>
                                <td className="whitespace-nowrap px-5 py-5">
                                    <Link
                                        href={`/gallery/${g.id}/edit`}
                                        className="mr-1.5 rounded-lg border border-green-400/25 bg-green-400/10 px-4 py-1.5 text-[13px] font-semibold text-green-400 hover:bg-green-400/20"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => setToDelete(g)}
                                        className="rounded-lg border border-red-400/25 bg-red-400/10 px-4 py-1.5 text-[13px] font-semibold text-red-400 hover:bg-red-400/20"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Delete confirmation modal */}
            {toDelete && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-5">
                    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#2d4a3d] p-8 shadow-2xl">
                        <h3 className="text-xl font-bold">Delete this post?</h3>
                        <p className="mt-3 text-sm text-gray-300">
                            "{toDelete.title}" will be permanently removed. This cannot be undone.
                        </p>
                        <div className="mt-7 flex justify-end gap-3">
                            <button
                                onClick={() => setToDelete(null)}
                                className="rounded-full border border-white/20 px-6 py-2.5 text-sm text-gray-200 hover:bg-white/10"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="rounded-full bg-red-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-600"
                            >
                                Yes, delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </ManageLayout>
    );
}