import { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import AddForm from '../forms/add-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PasswordField from '../fields/password-field';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

type ResetPasswordDialogProps = {
    openDialog: boolean,
    setOpenDialog: Dispatch<SetStateAction<boolean>>,
    setOpenOTPDialog: Dispatch<SetStateAction<boolean>>,
    metadata?: MetadataType
}

type Form = { password: string, confirmPassword: string };

const validationSchema = z.object({
    password: z.string()
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: z.string()
        .min(6, 'Password must be at least 6 characters'),
});

const ResetPasswordDialog = ({ openDialog, setOpenDialog, setOpenOTPDialog }: ResetPasswordDialogProps) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm({
        resolver: zodResolver(validationSchema),
        defaultValues: {
            password: '',
            confirmPassword: ''
        }
    });


    const onSubmit = async (data: Form) => {
        const { password, confirmPassword } = data;

        if (password !== confirmPassword) {
            toast.warning("Password not matched.");
            return;
        }
    };

    const handleBack = () => {
        setOpenOTPDialog(false);
        setOpenDialog(!openDialog);
        navigate(pathname);
    }


    return (
        <Dialog scroll='body' maxWidth="sm" onClose={() => { setOpenOTPDialog(false); setOpenDialog(!openDialog) }} open={openDialog}
            TransitionProps={{
                timeout: 500,
            }} >
            <DialogTitle>
                <Typography fontWeight={"bold"}>Reset Password</Typography>
            </DialogTitle>
            <DialogContent>
                <AddForm backBtnText='Cancel' backBtnIcon='cross' btnContainerProps={{ justifyContent: 'space-around' }} handleSubmitForm={handleSubmit(onSubmit)} handleBack={handleBack} minHeight={320} py={2} gradient={false}>

                    <Stack gap={2} >
                        <PasswordField
                            name="password"
                            control={control}
                            label={"New Password"}
                            placeholder="" errorMsg autoFocus required />

                        <PasswordField
                            name="confirmPassword"
                            control={control}
                            label={"Confirm Password"}
                            placeholder="" errorMsg required />
                    </Stack>
                </AddForm>
            </DialogContent>
        </Dialog>
    );
};

export default ResetPasswordDialog;