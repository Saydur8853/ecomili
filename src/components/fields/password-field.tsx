import { FC, useState } from 'react';
import { useController, Control } from "react-hook-form";
import { FormControl, FormControlPropsSizeOverrides, FormHelperText, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import Label from '../common/label';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { OverridableStringUnion } from '@mui/types';


type PasswordFieldProps = {
    name: string,
    control: Control<any, any>,
    value?: string | number,
    placeholder?: string,
    size?: OverridableStringUnion<'small' | 'medium', FormControlPropsSizeOverrides>,
    autoFocus?: boolean,
    errorMsg?: boolean,
    fontBold?: boolean,
    label?: any,
    required?: boolean
}


const PasswordField: FC<PasswordFieldProps> = ({ name = "", control, value = "", placeholder = "******", size = "small", autoFocus = false, errorMsg = false, fontBold = true, label, required = false }) => {
    const { field, fieldState } = useController({
        name,
        control,
        defaultValue: value,
    });

    const [showPassword, setShowPassword] = useState(false);
    return (

        <FormControl fullWidth variant="outlined" size={size}>
            <Label error={!!fieldState.error} text={label} bold={fontBold} required={required} />
            <OutlinedInput
                id={name}
                type={showPassword ? 'text' : 'password'}
                {...field}
                autoFocus={autoFocus}
                placeholder={placeholder}
                error={!!fieldState.error}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                        >
                            {showPassword ? <EyeOffIcon /> :
                                <EyeIcon />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            {errorMsg && !!fieldState.error &&
                <FormHelperText
                    error>{fieldState?.error.message}</FormHelperText>}

        </FormControl>
    );
};

export default PasswordField;