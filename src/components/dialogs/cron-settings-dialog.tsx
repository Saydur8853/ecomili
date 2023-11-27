import { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import AddForm from '../forms/add-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import TextInput from '../fields/text-input';
import MuiSelectField from '../fields/mui-select-field';
import { cronJobSchedules } from '../../utils/constants';

type CronSettingsDialogProps = {
    openDialog: boolean,
    setOpenDialog: Dispatch<SetStateAction<boolean>>,
    metadata?: MetadataType
}

const Category = z.object({
    title: z.string().min(1, "Title is Required."),
    job: z.string().min(1, "Job/ Command is Required."),
    schedule: z.string().min(1, "Cron Schedule is Required."),

});


const CronSettingsDialog = ({ openDialog, setOpenDialog, metadata }: CronSettingsDialogProps) => {
    const id = metadata?.id;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm({
        resolver: zodResolver(Category),
        mode: 'onChange',
        defaultValues: {
            title: '',
            job: '',
            schedule: ''
        }
    });


    const onSubmit = async (data: z.infer<typeof Category>) => {
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
                <Typography fontWeight={"bold"}>{id ? "Edit Cron" : "Add New Cron"}</Typography>
            </DialogTitle>
            <DialogContent>
                <AddForm backBtnText='Cancel' backBtnIcon='cross' btnContainerProps={{ justifyContent: 'space-around' }} handleSubmitForm={handleSubmit(onSubmit)} handleBack={handleBack} minHeight={300} py={2} gradient={false}>

                    <Stack gap={2} >
                        <TextInput
                            name="title"
                            control={control}
                            label={id ? "Edit Title" : "Enter Title"}
                            placeholder="Cron Title..." errorMsg autoFocus required />

                        <TextInput
                            name="job"
                            control={control}
                            label={"Job/ Command"}
                            placeholder="Job/ Command..." errorMsg required />

                        <MuiSelectField
                            name="schedule"
                            control={control}
                            label={"Select Schedule"}
                            data={cronJobSchedules}
                            placeholder="Select Schedule" errorMsg required />

                    </Stack>
                </AddForm>
            </DialogContent>
        </Dialog>
    );
};

export default CronSettingsDialog;