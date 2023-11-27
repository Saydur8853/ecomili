import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import AddForm from '../forms/add-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import TextInput from '../fields/text-input';
import TagsField from '../fields/tags-field';
import ImageUpload from '../common/ImageUpload';

type CategoryDialogProps = {
    openDialog: boolean,
    setOpenDialog: Dispatch<SetStateAction<boolean>>,
    metadata?: MetadataType
}

const Category = z.object({
    name: z.string().min(1, "Name is Required."),
    icon: z.string(),
    tags: z.array(z.string())

});

const CategoryDialog = ({ openDialog, setOpenDialog, metadata }: CategoryDialogProps) => {
    const id = metadata?.id;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm({
        resolver: zodResolver(Category),
        mode: 'onChange',
        defaultValues: {
            name: '',
            icon: '',
            tags: []
        }
    });

    const [images, setImages] = useState([]);


    const onSubmit = async (data: z.infer<typeof Category>) => {
        console.log(data)
        toast.success(data.name)
    };

    const handleBack = () => {
        setOpenDialog(!openDialog);
        navigate(pathname);
    }


    return (
        <Dialog scroll='body' maxWidth="sm" onClose={() => setOpenDialog(!openDialog)} open={openDialog}
            TransitionProps={{
                timeout: 500,
            }} >
            <DialogTitle>
                <Typography fontWeight={"bold"}>{id ? "Edit Category" : "Add New Category"}</Typography>
            </DialogTitle>
            <DialogContent>
                <AddForm backBtnText='Cancel' backBtnIcon='cross' btnContainerProps={{ justifyContent: 'space-around' }} handleSubmitForm={handleSubmit(onSubmit)} handleBack={handleBack} minHeight={300} py={2} gradient={false}>

                    <Stack gap={2} >
                        <TextInput
                            name="name"
                            control={control}
                            label={id ? "Edit Name" : "Enter Name"}
                            placeholder="Category name..." errorMsg autoFocus required />

                        <div>
                            <Typography color={"#4d4b4b"} mb={1}>Category Icon</Typography>
                            <ImageUpload images={images} setImages={setImages} flexDirection='column' />
                        </div>


                        <TagsField
                            name="tags"
                            control={control}
                            label="Tags"
                            placeholder="Tags e.g. health, politics"
                        />

                    </Stack>
                </AddForm>
            </DialogContent>
        </Dialog>
    );
};

export default CategoryDialog;