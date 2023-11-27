import { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import AddForm from '../forms/add-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import TextInput from '../fields/text-input';
import PasswordField from '../fields/password-field';

type UserDialogProps = {
    openDialog: boolean,
    setOpenDialog: Dispatch<SetStateAction<boolean>>,
    metadata?: MetadataType
}


const UserDialog = ({ openDialog, setOpenDialog, metadata }: UserDialogProps) => {
    const id = metadata?.id;
    const { pathname } = useLocation();
    const navigate = useNavigate();


    const Category = z.object({
        name: z.string().min(1, "Name is Required."),
        email: z.string().min(1, "Email is Required.").email("Invalid Email"),
        phone: z.string().max(11, "Invalid Phone Number."),
        password: z.string().min(id ? 0 : 6, "Not less than 6 characters."),
    });

    const { control, handleSubmit } = useForm({
        resolver: zodResolver(Category),
        mode: 'onChange',
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
        }
    });


    const onSubmit = async (data: z.infer<typeof Category>) => {
        console.log(data)
        toast.success(JSON.stringify(data))
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
                <Typography fontWeight={"bold"}>{id ? "Edit User" : "Add New User"}</Typography>
            </DialogTitle>
            <DialogContent>
                <AddForm backBtnText='Cancel' backBtnIcon='cross' btnContainerProps={{ justifyContent: 'space-around' }} handleSubmitForm={handleSubmit(onSubmit)} handleBack={handleBack} minHeight={300} py={2} gradient={false}>

                    <Stack gap={2} >
                        <TextInput
                            name="name"
                            control={control}
                            label={id ? "Edit Name" : "Enter Name"}
                            placeholder="User name..." errorMsg autoFocus required />

                        <TextInput
                            name="email"
                            type='email'
                            control={control}
                            label={id ? "Edit Email" : "Enter Email"}
                            placeholder="example@email.com" errorMsg required />

                        <TextInput
                            name="phone"
                            type='tel'
                            control={control}
                            label={id ? "Edit Phone" : "Enter Phone"}
                            placeholder="01700000000" errorMsg />

                        <PasswordField
                            name="password"
                            control={control}
                            label={"Enter Password"}
                            errorMsg required={!!id} />

                    </Stack>
                </AddForm>
            </DialogContent>
        </Dialog>
    );
};

export default UserDialog;