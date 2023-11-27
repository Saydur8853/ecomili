import { Stack, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

type Props = {
    error?: boolean,
    text?: string,
    bold?: boolean,
    required?: boolean
}


const Label = ({ error = false, text = "Label Text", bold = true, required = false }: Props) => {

    return (
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} gap={2} mb={0.8}>
            <Typography color={error ? red[700] : "#4d4b4b"} fontWeight={bold ? "medium" : "normal"}>
                {text} <span>{required ? "*" : ""}</span>
            </Typography>


        </Stack>
    );
};

export default Label;