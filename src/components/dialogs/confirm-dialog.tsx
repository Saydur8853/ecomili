import React, { Dispatch, FC, SetStateAction } from 'react';
import {
    Button, CircularProgress, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Slide,
    Stack,
    Typography
} from "@mui/material";
import { FileWarning, Plus } from "lucide-react";

const Transition = React.forwardRef(function Transition(props: any, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});


type ConfirmDialogProps = {
    title?: string,
    body?: string,
    agreeBtnText?: string,
    disaAgreeBtnText?: string,
    handleAction?: () => void,
    setOpenDialog: Dispatch<SetStateAction<boolean>>,
    openDialog: boolean,
    isLoading?: boolean
}

const ConfirmDialog: FC<ConfirmDialogProps> = ({ title = "Title", body = "Body", agreeBtnText = "Agree", disaAgreeBtnText = "Disagree", handleAction, setOpenDialog, openDialog, isLoading }) => {
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
                    <Typography sx={{ ml: 1 }} variant={"h6"}>{title}</Typography>
                </Stack>
            </DialogTitle>
            <Divider></Divider>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {body}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    sx={{ textTransform: 'capitalize' }}
                    variant={"contained"}
                    color={"error"}
                    onClick={() => setOpenDialog(!openDialog)}  >
                    {disaAgreeBtnText}
                </Button>
                <Button
                    sx={{ textTransform: 'capitalize' }}
                    variant={"contained"}
                    color={"success"}
                    onClick={() => {
                        if (handleAction) {
                            handleAction();
                            setOpenDialog(!openDialog);
                        }
                    }} >
                    {agreeBtnText}
                    {isLoading ? <CircularProgress size={18} /> : <Plus size={20} />}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog;