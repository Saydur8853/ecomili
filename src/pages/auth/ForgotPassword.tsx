import {
    Box, Button,
    Container,
    FormControl, FormHelperText,
    Grid, IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { NavLink } from "react-router-dom";
import Page from "../../layouts/Page";
import { MailCheck } from "lucide-react";
import { useState } from "react";
import OTPVerifyDialog from "../../components/dialogs/otp-verify-dialog";

const validationSchema = z.object({
    email: z.string()
        .email('Email is invalid'),
});

const ForgotPassword = () => {
    const { control, handleSubmit, } = useForm({
        resolver: zodResolver(validationSchema),
        defaultValues: { email: '' }
    });
    const [openDialog, setOpenDialog] = useState(false);

    const onSubmit = (data: { email: string }) => {
        console.log(data);
        setOpenDialog(true);
    }


    return (
        <Page title={"Password Recovery"}>
            <Grid container justifyContent={"space-between"} spacing={2}>


                <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Stack justifyContent="center" alignItems="center" sx={{ height: "100%", bgcolor: '#557da3' }}>
                        <img width={'80%'} height={"auto"} src="/assets/illustrations/forgot_password.png" alt="Forgot Password" />
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6} >
                    <Container>
                        <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
                            <Box sx={{ maxWidth: 450, width: "100%" }}>
                                <Stack justifyContent={"center"} alignItems={"center"}>
                                    <NavLink to={'/auth/login'}>
                                        <img src="/logo.png" alt="Logo" style={{ maxHeight: "120px" }} />
                                    </NavLink>
                                </Stack>
                                <Typography sx={{ pt: 6 }} variant="h5" fontWeight={"bold"} >Forgot Password?</Typography>
                                <Typography sx={{ mb: 3 }} variant="body2" fontWeight={"medium"} color={"GrayText"}  >Enter your registered email address.</Typography>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Controller
                                        render={({ field, formState }) => (
                                            <FormControl fullWidth variant="outlined" size="medium"  >
                                                <InputLabel htmlFor="login-email">Email</InputLabel>
                                                <OutlinedInput
                                                    id="login-email"
                                                    {...field}
                                                    error={!!formState.errors?.email}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                edge="end" >
                                                                <MailCheck />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Email"
                                                />
                                                {formState.errors?.email ?
                                                    <FormHelperText
                                                        error>{formState.errors?.email?.message}</FormHelperText> : ""}

                                            </FormControl>
                                        )}
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                    />


                                    <Typography my={2} fontWeight={"medium"} textAlign={"right"}><NavLink to="/auth/login" color="#fff" style={{ textDecoration: "none" }}>If you can remember, try login.</NavLink></Typography>

                                    {/* <Button disabled={login.isLoading} size="large" fullWidth variant="contained" type="submit" color="primary" sx={{ textTransform: "capitalize", fontWeight: "bold", alignItems: 'center' }}>{login.isLoading && <CircularProgress size={20} sx={{ mr: 2 }} />} Login</Button> */}
                                    <Button size="large" fullWidth variant="contained" type="submit" color="primary" sx={{ textTransform: "capitalize", fontWeight: "bold", alignItems: 'center' }}>Send Code</Button>
                                </form>
                            </Box>
                        </Stack>
                    </Container>
                </Grid>


                {openDialog && <OTPVerifyDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />}
            </Grid>

        </Page>
    )
}

export default ForgotPassword;