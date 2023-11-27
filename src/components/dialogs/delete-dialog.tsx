import React, { Dispatch, FC, SetStateAction } from 'react';
import {
    Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Slide,
    Stack,
    Typography
} from "@mui/material";
import { FileWarning } from "lucide-react";

const Transition = React.forwardRef(function Transition(props: any, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});


type DeleteDialogProps = {
    handleDelete?: () => void,
    setOpenDialog: Dispatch<SetStateAction<boolean>>,
    openDialog: boolean
}

const DeleteDialog: FC<DeleteDialogProps> = ({ handleDelete, setOpenDialog, openDialog }) => {
    return (
        <Dialog
            open={openDialog}
            maxWidth="xs"
            TransitionComponent={Transition}
            TransitionProps={{
                timeout: 500,
            }}
            PaperProps={{
                style: {
                    position: 'fixed',
                    top: 0,
                },
            }}
            onClose={() => setOpenDialog(!openDialog)}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>
                <Stack alignItems={"center"} direction={"row"} >
                    <FileWarning size={24} color={"#eed202"} />
                    <Typography sx={{ ml: 1 }} variant={"h6"}>Confirm Delete!</Typography>
                </Stack>
            </DialogTitle>
            <Divider></Divider>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Are you sure you want to delete this data? Once deleted, you will not get this data back.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    sx={{ textTransform: 'capitalize' }}
                    variant={"contained"}
                    color={"error"}
                    onClick={() => setOpenDialog(!openDialog)}  >
                    Disagree
                </Button>
                <Button
                    type='submit'
                    sx={{ textTransform: 'capitalize' }}
                    variant={"contained"}
                    color={"success"}
                    onClick={() => {
                        if (handleDelete) {
                            handleDelete();
                            setOpenDialog(!openDialog);
                        }
                    }} >
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteDialog;