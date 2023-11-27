import Page from "../../layouts/Page";
import PageHeader from "../../layouts/PageHeader";
import AddForm from "../../components/forms/add-form";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import TextInput from "../../components/fields/text-input";
import FormSection from "../../components/forms/form-section";
import MuiSelectField from "../../components/fields/mui-select-field";
import { useState } from "react";
import ImageGalleryUpload from "../../components/common/ImageGalleryUpload";
import TagsField from "../../components/fields/tags-field";
import ImageFileUpload from "../../components/common/ImageFileUpload";


const News = z.object({
    title: z.string().min(1, "News Title is Required."),
    shortDesc: z.string().min(1, "Short News is Required."),
    description: z.string().min(1, "News Details is Required."),
    tags: z.array(z.string()),
    featuredImage: z.any().refine(val => val.length > 0, "File is required"),
    featuredImageSoucrce: z.string(),
    categoryId: z.number().min(1, "category is Required."),
    publishDate: z.string(),

});

const EditNews = () => {
    const { control, handleSubmit } = useForm({
        resolver: zodResolver(News),
        mode: "onChange",
        defaultValues: {
            title: '',
            shortDesc: '',
            description: '',
            tags: [],
            featuredImage: '',
            featuredImageSoucrce: '',
            categoryId: 0,
            publishDate: '',
        }
    });

    const [images, setImages] = useState([]);
    const [featuredImages, setFeaturedImages] = useState([]);

    const onSubmit = async (data: z.infer<typeof News>) => {
        console.log(data);
    }






    return (
        <Page title="Edit News">
            <PageHeader
                title="Edit News"
                btn={false}
                breadcrumbLinks={[
                    { label: "Manage News", href: '/news/manage' }
                ]}
                currentPage="Edit News"
                backButton />

            <AddForm submitBtnText="Save as Draft"
                customSubmitBtnText="Save & Publish"
                isDraft
                handleSubmit={handleSubmit(onSubmit)}
                customhandleSubmit={handleSubmit(onSubmit)}
                maxWidth={700} >
                <TextInput
                    name="title"
                    control={control}
                    autoFocus
                    label={"News Title"}
                    errorMsg required />

                <TextInput
                    name="shortDesc"
                    control={control}
                    minRows={3}
                    label={"Short News"}
                    errorMsg required />

                <TextInput
                    name="description"
                    control={control}
                    minRows={10}
                    maxRows={14}
                    label={"Detail News"}
                    errorMsg required />


                {/* Products Tags  */}
                <TagsField
                    name="tags"
                    control={control}
                    label={"Tags"}
                    placeholder="Tags e.g. health, politics"
                />

                <FormSection title="Featured" mt={4}>
                    <ImageFileUpload images={featuredImages} setImages={setFeaturedImages} />
                </FormSection>

                <TextInput
                    name="featuredImageSoucrce"
                    control={control}
                    label={"Image Source"}
                    errorMsg />

                <FormSection>
                    <MuiSelectField
                        name="categoryId"
                        control={control}
                        label={"Select Category"}
                        data={[{ value: 1, label: "Label 1" }]}
                        placeholder={"Select Category"}
                        errorMsg required />

                    <TextInput
                        name="publishDate"
                        control={control}
                        type="date"
                        label={"Publish Date"}
                        errorMsg />
                </FormSection>


                {/* Image Gallery */}
                <FormSection title="Image Gallery">
                    <ImageGalleryUpload images={images} setImages={setImages} />

                </FormSection>

            </AddForm >

        </Page >
    );
};

export default EditNews;