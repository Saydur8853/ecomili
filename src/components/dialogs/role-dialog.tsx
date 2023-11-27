import { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import AddForm from '../forms/add-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import TextInput from '../fields/text-input';

type RoleDialogProps = {
    openDialog: boolean,
    setOpenDialog: Dispatch<SetStateAction<boolean>>,
    metadata?: MetadataType
}

const Category = z.object({
    name: z.string().min(1, "Name is Required.")

});

const RoleDialog = ({ openDialog, setOpenDialog, metadata }: RoleDialogProps) => {
    const id = metadata?.id;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm({
        resolver: zodResolver(Category),
        mode: 'onChange',
        defaultValues: {
            name: ''
        }
    });


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
                <Typography fontWeight={"bold"}>{id ? "Edit Role" : "Add New Role"}</Typography>
            </DialogTitle>
            <DialogContent>
                <AddForm backBtnText='Cancel' backBtnIcon='cross' btnContainerProps={{ justifyContent: 'space-around' }} handleSubmitForm={handleSubmit(onSubmit)} handleBack={handleBack} minHeight={300} py={2} gradient={false}>

                    <Stack gap={2} >
                        <TextInput
                            name="name"
                            control={control}
                            label={id ? "Edit Name" : "Enter Name"}
                            size="medium"
                            placeholder="Role name..." errorMsg autoFocus required />

                    </Stack>
                </AddForm>
            </DialogContent>
        </Dialog>
    );
};

export default RoleDialog;