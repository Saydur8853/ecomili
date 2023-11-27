import { Tooltip, IconButton } from '@mui/material';
import { CrossIcon } from 'lucide-react';

const CloseButton = ({ title = "Close", onClick }: { title?: string, onClick: () => void }) => {
    return (
        <Tooltip title={title} onClick={onClick}>
            <IconButton >
                <CrossIcon size={22} color={"#2a3030"} cursor={"pointer"} />
            </IconButton>
        </Tooltip>
    );
};

export default CloseButton;