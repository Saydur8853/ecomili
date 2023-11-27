import { Typography } from "@mui/material";
import { CheckCircle, ShieldBan } from "lucide-react";

type StatusCheckProps = {
    status: boolean | string | undefined;
};
const StatusCheck = ({ status }: StatusCheckProps) => {
    return (
        <>
            {status === true || status === "Active" ? (
                <Typography
                    variant="body2"
                    bgcolor={"#52BE80"}
                    color="whitesmoke"
                    py={0.5}
                    px={1.2}
                    borderRadius={4}
                    display={"inline-flex"}
                    gap={1}
                    alignItems={"center"}
                >
                    {" "}
                    <CheckCircle size={15} /> Active
                </Typography>
            ) : (
                <Typography
                    variant="body2"
                    bgcolor={"#E59866"}
                    color="whitesmoke"
                    py={0.5}
                    px={1.2}
                    borderRadius={4}
                    display={"inline-flex"}
                    gap={1}
                    alignItems={"center"}
                >
                    {" "}
                    <ShieldBan size={15} />
                    Inactive
                </Typography>
            )}
        </>
    );
};

export default StatusCheck;
