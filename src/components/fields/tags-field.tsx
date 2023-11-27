import { FormControl, FormHelperText, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import Label from '../common/label';
import { TagsInput } from 'react-tag-input-component';

type TagsFieldProps = {
    name: string;
    control: Control<any, any>;
    selected?: string[] | undefined;
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
};

const TagsField: FC<TagsFieldProps> = ({
    name = '',
    control,
    selected = [],
    link = { label: '', to: '' },
    errorMsg = false,
    fontBold = true,
    label,
    placeholder = "Tags...",
    required = false,
}) => {
    const { field, fieldState } = useController({
        name,
        control,
        defaultValue: selected,
    });

    const [selectedtags, setSelectedTags] = useState<string[] | undefined>(selected);

    return (
        <FormControl fullWidth>
            {label && <Label error={!!fieldState.error} text={label} bold={fontBold} required={required} />}
            <TagsInput
                value={selectedtags}
                onChange={(tags: string[] | undefined) => {
                    setSelectedTags(tags);
                    field.onChange(tags);
                }}
                name={name}
                placeHolder={placeholder}
            />

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

export default TagsField;
