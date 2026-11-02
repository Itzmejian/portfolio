import GalleryForm from '@/components/GalleryForm';
import ManageLayout from '@/components/ManageLayout';
import { useForm } from '@inertiajs/react';

export default function Create({ categories }) {
    // useForm: hawak ang data, errors, at processing state
    const form = useForm({
        title: '',
        caption: '',
        category: '',
        date_taken: '',
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        // forceFormData: kailangan para makapag-upload ng file
        form.post('/gallery', { forceFormData: true });
    };

    return (
        <ManageLayout title="Add Post" subtitle="Fill in the details of your new post.">
            <GalleryForm form={form} onSubmit={submit} categories={categories} submitLabel="Save Post" />
        </ManageLayout>
    );
}