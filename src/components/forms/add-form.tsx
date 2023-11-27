import { Button, CircularProgress, Grid, Paper, Stack } from '@mui/material';
import { FC } from 'react';
import { ArrowLeft, Plus, BanIcon, FileSignature } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type BtnContainerProps = {
    gap?: number,
    justifyContent?: string
}

type AddFormProps = {
    handleSubmit?: (e?: any) => any,
    handleSubmitForm?: () => void,
    customhandleSubmit?: () => void,
    handleBack?: () => void,
    maxWidth?: string | number,
    minHeight?: string | number,
    submitBtnText?: string,
    customSubmitBtnText?: string,
    isDraft?: boolean,
    backBtnText?: string,
    backBtnIcon?: string,
    btnContainerProps?: BtnContainerProps,
    isLoading?: boolean,
    py?: number,
    gridMy?: number,
    gradient?: boolean,
    children: any
}

const AddForm: FC<AddFormProps> = ({ handleSubmit, handleSubmitForm, handleBack, customhandleSubmit, maxWidth = 500, minHeight = '70vh', submitBtnText = "Submit", customSubmitBtnText, isDraft = false, backBtnText = "Back", backBtnIcon = 'back', btnContainerProps = { justifyContent: 'space-between', gap: 2 }, isLoading = false, py = 3, gridMy = 3, gradient = true, children }) => {
    const navigate = useNavigate();
    let childrens = [];
    if (!children.length) {
        childrens.push(children)
    } else {
        childrens = [...children];
    }

    const childrenProps = childrens.filter((child: any) => child !== false && child !== undefined && child !== null);


    return (
        <Paper elevation={0} sx={{ px: 2, py: py, minHeight }} className={gradient ? "rad-grad" : ''}>
            <form onSubmit={handleSubmitForm ? handleSubmitForm : handleSubmit}>
                <Grid container gap={2} maxWidth={{ md: maxWidth }} sx={{ margin: "1rem auto" }} alignItems="center" justifyContent="center">
                    {childrenProps?.map((item: any, i: number) => <Grid item xs={12} key={i}>{item} </Grid>)}

                    <Grid container gap={btnContainerProps.gap || 2} flexDirection={{ xs: "column-reverse", md: "row" }} justifyContent={btnContainerProps.justifyContent} sx={{ mt: gridMy }}>
                        <Grid item xs={12} md={customSubmitBtnText ? 3 : 4}>
                            <Button variant="outlined" onClick={() => handleBack ? handleBack() : navigate(-1)} color={'warning'} size='large' fullWidth >
                                <Stack direction="row" alignItems='center' gap={1} fontWeight={'bold'} textTransform="capitalize">
                                    {backBtnIcon === 'back' ? <ArrowLeft size={20} /> : <BanIcon size={16} />} {backBtnText}
                                </Stack>
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={customSubmitBtnText ? 3 : 4}                    >
                            <Button variant={customSubmitBtnText ? "outlined" : "contained"} disabled={isLoading} type="submit" color="primary" size='large' fullWidth>
                                <Stack direction="row" alignItems='center' gap={1} fontWeight={'bold'} textTransform="capitalize">
                                    {submitBtnText}
                                    {isLoading ? <CircularProgress size={18} /> : isDraft ? <FileSignature size={16} /> : <Plus size={16} />}
                                </Stack>
                            </Button>
                        </Grid>

                        {/* Custom Submit Btn  */}
                        {customSubmitBtnText && <Grid item xs={12} md={4}>
                            <Button variant={customSubmitBtnText ? "contained" : "text"} disabled={isLoading} type="button" onClick={customhandleSubmit} color="primary" size='large' fullWidth>
                                <Stack direction="row" alignItems='center' gap={1} fontWeight={'bold'} textTransform="capitalize">
                                    {customSubmitBtnText}
                                    {isLoading ? <CircularProgress size={18} /> : isDraft ? <FileSignature size={16} /> : <Plus size={16} />}
                                </Stack>
                            </Button>
                        </Grid>}

                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default AddForm;