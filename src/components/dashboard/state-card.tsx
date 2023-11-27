import { Paper, Stack, Typography } from "@mui/material";

interface Props {
    title?: string,
    count?: number
}

const StateCard = ({ title = "Title", count = 0 }: Props) => {
    return (
        <Stack component={Paper} elevation={0}
            className="rad-grad" px={{ xs: 1.5, md: 5 }} py={{ xs: 2, md: 4.5 }} gap={1.5}>
            <Typography>{title}</Typography>
            <Typography textAlign={"center"} fontWeight={"bold"} variant="h5" >{count}</Typography>
        </Stack>
    );
};

export default StateCard;