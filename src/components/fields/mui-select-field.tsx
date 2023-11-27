import { FormControl, FormHelperText, MenuItem, Select, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import Label from '../common/label';

type MuiSelectFieldProps = {
    name: string;
    control: Control<any, any>;
    value?: string | any;
    data: any[];
    handleChange?: (value: any, fieldName?: string | undefined) => void;
    link?: any;
    placeholder?: string,
    errorMsg?: boolean;
    fontBold?: boolean;
    label?: any;
    size?: "small" | "medium"
    subLabel?: boolean;
    subValue?: string | number;
    required?: boolean;
    isDisabled?: boolean | undefined;
    isLoading?: boolean;
    uniqueKey?: any | null;
};

const MuiSelectField: FC<MuiSelectFieldProps> = ({
    name = '',
    control,
    value,
    data = [],
    handleChange = undefined,
    link = { label: '', to: '' },
    errorMsg = false,
    fontBold = true,
    label,
    size = "small",
    placeholder,
    required = false,
    isDisabled = false,
    uniqueKey = null,
}) => {
    const { field, fieldState } = useController({
        name,
        control,
        defaultValue: value,
    });

    const [slectValue, setSlectValue] = useState(value);

    return (
        <FormControl fullWidth>
            {label && <Label error={!!fieldState.error} text={label} bold={fontBold} required={required} />}
            <Select
                style={{
                    border: fieldState.error
                        ? '1px solid #D32F2F'
                        : '',
                }}
                className="basic-single"
                key={uniqueKey}
                name={name}
                disabled={isDisabled}
                size={size}
                value={slectValue}
                onChange={(event) => {
                    setSlectValue(event.target.value);
                    field.onChange(event.target.value);
                    handleChange && handleChange(event.target.value, name);
                }}>

                <MenuItem value={value}>
                    {placeholder}
                </MenuItem>

                {data.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>

            <Stack direction="row" justifyContent={fieldState.error ? 'space-between' : 'flex-end'}>
                {errorMsg && fieldState.error && (
                    <FormHelperText error>
                        {fieldState?.error.message}
                    </FormHelperText>
                )}
                {link && (
                    <NavLink to={link.to} target="_blank" style={{ fontSize: '14px', color: 'blue', marginTop: 1, textAlign: 'right' }}>
                        {link.label}
                    </NavLink>
                )}
            </Stack>
        </FormControl>
    );
};

export default MuiSelectField;
