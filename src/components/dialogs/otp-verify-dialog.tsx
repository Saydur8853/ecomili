import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import AddForm from '../forms/add-form';
import OtpInput from 'react-otp-input';
import { toast } from 'sonner';
import ResetPasswordDialog from './reset-password-dialog';
import { useNavigate } from 'react-router-dom';

type OTPVerifyDialogProps = {
    openDialog: boolean,
    setOpenDialog: Dispatch<SetStateAction<boolean>>,
    metadata?: MetadataType
}

const OTPVerifyDialog = ({ openDialog, setOpenDialog }: OTPVerifyDialogProps) => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState<string>('');
    const [resetPasswordDialog, setResetPasswordDialog] = useState(false);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        if (otp?.length < 4) return toast.warning("Enter 4 Digit OTP Code.");
        navigate(`?otp_verified=true`);
        setResetPasswordDialog(true);
    }



    return (
        <Dialog scroll='body' maxWidth="sm" onClose={() => setOpenDialog(!openDialog)} open={openDialog}
            TransitionProps={{
                timeout: 500,
            }} >
            <DialogTitle>
                <Typography fontWeight={"bold"}>OTP Verification</Typography>
            </DialogTitle>
            <DialogContent>
                <AddForm backBtnText='Cancel' backBtnIcon='cross' btnContainerProps={{ justifyContent: 'space-around' }} handleSubmit={(e: any) => onSubmit(e)} handleBack={() => setOpenDialog(!openDialog)} minHeight={320} py={5} gradient={false}>

                    <OtpInput
                        shouldAutoFocus={true}
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        inputStyle={{ width: 60, height: 60 }}
                        containerStyle={{ justifyContent: 'center' }}
                        renderSeparator={<span> - </span>}
                        renderInput={(props) => <input {...props} />}
                    />

                </AddForm>
            </DialogContent>



            {resetPasswordDialog && <ResetPasswordDialog openDialog={resetPasswordDialog} setOpenDialog={setResetPasswordDialog} setOpenOTPDialog={setOpenDialog} />}
        </Dialog>
    );
};

export default OTPVerifyDialog;