import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import AddForm from '../forms/add-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import TextInput from '../fields/text-input';
import ImageUpload from '../common/ImageUpload';

type InfobiteDialogProps = {
    openDialog: boolean,
    setOpenDialog: Dispatch<SetStateAction<boolean>>,
    metadata?: MetadataType
}

const Infobite = z.object({
    title: z.string().min(1, "Name is Required."),

});

const InfobiteDialog = ({ openDialog, setOpenDialog, metadata }: InfobiteDialogProps) => {
    const id = metadata?.id;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm({
        resolver: zodResolver(Infobite),
        mode: 'onChange',
        defaultValues: {
            title: '',
        }
    });

    const [images, setImages] = useState([]);

    const onSubmit = async (data: z.infer<typeof Infobite>) => {
        console.log(data)
        toast.success(data.title)
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
                <Typography fontWeight={"bold"}>{id ? "Edit Infobite" : "Add New Infobite"}</Typography>
            </DialogTitle>
            <DialogContent>
                <AddForm backBtnText='Cancel' backBtnIcon='cross' btnContainerProps={{ justifyContent: 'space-around' }} handleSubmitForm={handleSubmit(onSubmit)} handleBack={handleBack} minHeight={300} py={2} gradient={false}>

                    <Stack gap={2} >
                        <TextInput
                            name="title"
                            control={control}
                            label={id ? "Edit Title" : "Enter Title"}
                            placeholder="Infobite Title..." errorMsg autoFocus required />

                        <div>
                            <Typography color={"#4d4b4b"} mb={1}>Upload Image</Typography>
                            <ImageUpload images={images} setImages={setImages} flexDirection="column" />
                        </div>

                    </Stack>
                </AddForm>
            </DialogContent>
        </Dialog>
    );
};

export default InfobiteDialog;