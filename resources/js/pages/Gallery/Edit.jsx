import GalleryForm from '@/components/GalleryForm';
import ManageLayout from '@/components/ManageLayout';
import { useForm } from '@inertiajs/react';

export default function Edit({ gallery, categories }) {
    const form = useForm({
        _method: 'put', // method spoofing: may file upload kaya POST ang ipapadala pero PUT ang basa ni Laravel
        title: gallery.title,
        caption: gallery.caption ?? '',
        category: gallery.category,
        date_taken: (gallery.date_taken ?? '').slice(0, 10),
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        form.post(`/gallery/${gallery.id}`, { forceFormData: true });
    };

    return (
        <ManageLayout title="Edit Post" subtitle="Update the details of your post below.">
            <GalleryForm
                form={form}
                onSubmit={submit}
                categories={categories}
                submitLabel="Save Changes"
                currentImage={gallery.image_url}
            />
        </ManageLayout>
    );
}