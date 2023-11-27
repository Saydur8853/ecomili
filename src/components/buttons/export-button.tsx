import { Button } from "@mui/material";
import { Download } from "lucide-react";

type ExportButtonProps = {
    buttonText?: string,
    onClick?: (event: any) => void
}

const ExportButton = ({ buttonText = "Export", onClick }: ExportButtonProps) => {
    return (
        <Button onClick={onClick}
            variant="outlined" size="medium"
            sx={{ textTransform: 'unset', fontWeight: "bold", py: 0.8 }}
            color="warning">
            <Download size={20} style={{ marginRight: 3 }} /> {buttonText}
        </Button>
    );
};

export default ExportButton;