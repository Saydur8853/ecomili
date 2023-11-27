import { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import { X } from 'lucide-react';

type UserViewDialogProps = {
    openDialog: boolean,
    setOpenDialog: Dispatch<SetStateAction<boolean>>,
    metadata?: MetadataType
}

const UserViewDialog = ({ openDialog, setOpenDialog }: UserViewDialogProps) => {
    // const id = metadata?.id;

    // if (!data?.success) {
    //     setOpenModal(!openDialog);
    //     return;
    // }

    return (
        <Dialog scroll='body' maxWidth="sm" onClose={() => setOpenDialog(!openDialog)} open={openDialog}
            TransitionProps={{
                timeout: 500,
            }} >
            <DialogTitle>
                <Stack flexDirection={"row"} justifyContent={"space-between"} alignContent={"center"}>
                    <Typography fontWeight={"bold"}>{"Information about -" + "Nayan"}</Typography>
                    <X onClick={() => setOpenDialog(!openDialog)} />
                </Stack>
            </DialogTitle>
            <DialogContent>
                {/* Body Content goes here */}
            </DialogContent>
        </Dialog>
    );
};

export default UserViewDialog;