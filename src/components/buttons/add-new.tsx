import { Button, Stack, Typography } from '@mui/material';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Props {
    btnText?: string,
    handleBtn?: () => void,
    navigate?: string,
    iconSize?: number,
    iconColor?: string,
    buttonSize?: "large" | "medium",
    variant?: "text" | "contained" | "outlined",
}

const AddNew = ({ handleBtn, btnText = "Add New", navigate = '/dashboard', iconSize, buttonSize = "medium", variant = "contained" }: Props) => {
    const nv = useNavigate();

    return (
        <Button variant={variant} color='info' size={buttonSize} onClick={() => handleBtn ? handleBtn() : nv(navigate)}>
            <Stack direction="row" alignItems={"center"} gap={1}>
                <Plus size={iconSize} />
                {btnText && <Typography sx={{ textTransform: "capitalize" }}>{btnText}</Typography>}
            </Stack>
        </Button>
    );
};

export default AddNew;