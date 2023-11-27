import { FC, ChangeEvent } from 'react';
import { Control, useController } from 'react-hook-form';
import { FormControl, FormHelperText, OutlinedInput } from '@mui/material';
import Label from '../common/label';

type TextInputProps = {
    name: string;
    type?: string;
    control: Control<any>;
    value?: string | number;
    placeholder?: string;
    size?: 'small' | 'medium' | undefined;
    autoFocus?: boolean;
    min?: number;
    max?: number;
    step?: number | null;
    errorMsg?: boolean;
    fontBold?: boolean;
    label?: any;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    minRows?: number;
    maxRows?: number
};


const TextInput: FC<TextInputProps> = ({
    name = '',
    type = 'text',
    control,
    value = '',
    placeholder = 'Type something...',
    size = 'small',
    autoFocus = false,
    min,
    max,
    step = null,
    errorMsg = false,
    fontBold = true,
    label,
    required = false,
    disabled = false,
    readOnly = false,
    minRows = 0,
    maxRows = 0
}) => {
    const { field, fieldState } = useController({
        name,
        control,
        defaultValue: value,
    });

    return (
        <FormControl fullWidth variant="outlined" size={size}>
            {label && (
                <Label
                    error={!!fieldState.error}
                    text={label}
                    bold={fontBold}
                    required={required}
                />
            )}
            <OutlinedInput
                {...field}
                type={type}
                autoFocus={autoFocus}
                inputProps={{ min, max, step }}
                placeholder={placeholder}
                error={!!fieldState.error}
                disabled={disabled}
                readOnly={readOnly}
                multiline={minRows ? true : false}
                minRows={minRows}
                maxRows={maxRows ? maxRows : minRows}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                    field.onChange(e.target.value);
                }}
                sx={{ bgcolor: disabled ? '#f3f6f4' : '' }}
            />
            {errorMsg && fieldState.error && (
                <FormHelperText error>{fieldState.error.message}</FormHelperText>
            )}
        </FormControl>
    );
};

export default TextInput;