import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Checkbox,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { EyeIcon, EyeOffIcon, MailCheck } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { NavLink } from "react-router-dom";
import Page from "../../layouts/Page";


type Form = { email: string, password: string }

const validationSchema = z.object({
  email: z.string().email("Email is invalid"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: { email: "", password: "" }
  });

  const onSubmit = (data: Form) => console.log(data);

  return (
    <Page title={"Login"}>
      <Grid container justifyContent={"space-between"} spacing={2}>
        <Grid item xs={12} md={6}>
          <Container>
            <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
              <Box sx={{ maxWidth: 450 }}>

                <Stack justifyContent={"center"} alignItems={"center"}>
                  <NavLink to={'/auth/login'}>
                    <img src="/logo.png" alt="Logo" style={{ maxHeight: "120px" }} />
                  </NavLink>
                </Stack>

                <Typography sx={{ pt: 6 }} variant="h5" fontWeight={"bold"}> Please Login </Typography>
                <Typography sx={{ mb: 3 }} variant="body2" fontWeight={"medium"} color={"GrayText"}> Login with email and password. </Typography>

                {/* Login Form Starts here  */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    render={({ field, formState }) => (
                      <FormControl fullWidth variant="outlined" size="medium">
                        <InputLabel htmlFor="login-email">Email</InputLabel>
                        <OutlinedInput
                          id="login-email"
                          {...field}
                          name="email"
                          error={!!formState.errors?.email}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton aria-label="toggle password visibility" edge="end">
                                <MailCheck />
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Email"
                        />

                        {formState.errors?.["email"] && <FormHelperText error>{formState?.errors?.["email"].message}</FormHelperText>}
                      </FormControl>
                    )}
                    name="email"
                    control={control}
                    defaultValue=""
                  />

                  <Controller
                    render={({ field, formState }) => (
                      <FormControl sx={{ mt: 3 }} variant="outlined" fullWidth size={"medium"}>
                        <InputLabel htmlFor="login-password">Password</InputLabel>
                        <OutlinedInput
                          id="login-password"
                          type={showPassword ? "text" : "password"}
                          {...field}
                          error={!!formState.errors?.password}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)} edge="end">
                                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                        {formState.errors?.password ? <FormHelperText error>{formState.errors?.password?.message}</FormHelperText> : ""}
                      </FormControl>
                    )}
                    name="password"
                    control={control}
                    defaultValue=""
                  />

                  <Stack direction={"row"} justifyContent="space-between" alignItems="center">
                    <FormControlLabel control={<Checkbox size="small" />} label="Remember me" />
                    <Typography my={2} fontWeight={"medium"}>
                      <NavLink to="/auth/forgot-password" color="#fff" style={{ textDecoration: "none" }}>
                        Forgot Password?
                      </NavLink>
                    </Typography>
                  </Stack>
                  {/* <Button disabled={login.isLoading} size="large" fullWidth variant="contained" type="submit" color="primary" sx={{ textTransform: "capitalize", fontWeight: "bold", alignItems: 'center' }}>{login.isLoading && <CircularProgress size={20} sx={{ mr: 2 }} />} Login</Button> */}
                  <Button size="large" fullWidth variant="contained" type="submit" color="secondary"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      alignItems: "center",
                    }}
                  >
                    Login
                  </Button>
                  <NavLink to={"/dashboard"}
                    style={{
                      textAlign: "center",
                      fontWeight: "bolder",
                      color: "GrayText",
                      textDecoration: "none",
                    }}
                  >
                    Skip authentication
                  </NavLink>
                </form>
                {/* Login Form Ends here  */}


              </Box>
            </Stack>
          </Container>
        </Grid>

        <Grid item md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Stack justifyContent="center" alignItems="center" sx={{ height: "100%", bgcolor: "#273746" }}>
            <img width={"80%"} height={"auto"} src="/assets/illustrations/login_illustration.png" alt="Login" />
          </Stack>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Login;
