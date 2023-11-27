import { Menu, MenuItem } from '@mui/material';
import { FC } from 'react';
import { Delete, Eye, Printer, BadgeCheck, Bell, BanIcon, FileEdit, LockIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type ActionMenuProps = {
    anchorEl: Element | null,
    open: boolean,
    setAnchorEl: (anchor: any) => void,
    handleDeleteDialog?: () => void,
    handleCancelDialog?: () => void,
    handleApprove?: () => void,
    handlePrint?: () => void,
    handleView?: () => void,
    hanldeEdit?: () => void,
    handleNotification?: () => void,
    handleCustomDialog?: () => void,
    customMenuTitle?: string,
    viewUrl?: string,
    editUrl?: string,
    setPermissionDialog?: (bool: any) => void,
}

const ActionMenu: FC<ActionMenuProps> = ({ anchorEl, open, setAnchorEl, handleDeleteDialog, handleCancelDialog, handleApprove, handlePrint, handleView, hanldeEdit, handleNotification, viewUrl, editUrl, setPermissionDialog, handleCustomDialog, customMenuTitle = "Custom" }) => {
    const navigate = useNavigate();
    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(!anchorEl)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }} >
            {handlePrint && <MenuItem sx={{ columnGap: 1.5 }} onClick={() => {
                handlePrint();
                setAnchorEl(!anchorEl);
            }}><Printer size={21} /> Print</MenuItem>}

            {handleView && <MenuItem sx={{ columnGap: 1.5 }} onClick={() => {
                handleView();
                setAnchorEl(!anchorEl);
            }}><Eye size={21} /> View</MenuItem>}

            {hanldeEdit && <MenuItem sx={{ columnGap: 1.5 }} onClick={() => {
                hanldeEdit();
                setAnchorEl(!anchorEl);
            }}><FileEdit size={21} /> Edit</MenuItem>}

            {viewUrl && <MenuItem sx={{ columnGap: 1.5 }} onClick={() => navigate(viewUrl)}><Eye size={21} /> View</MenuItem>}
            {editUrl && <MenuItem sx={{ columnGap: 1.5 }} onClick={() => navigate(editUrl)}><FileEdit size={21} /> Edit</MenuItem>}

            {handleNotification && <MenuItem sx={{ columnGap: 1.5, }} onClick={() => {
                handleNotification();
                setAnchorEl(!anchorEl);
            }}><Bell size={21} /> Notify</MenuItem>}

            {handleApprove && <MenuItem sx={{ columnGap: 1.5, }} onClick={() => {
                handleApprove();
                setAnchorEl(!anchorEl);
            }}><BadgeCheck size={21} /> Approve</MenuItem>}

            {handleCancelDialog && <MenuItem sx={{ columnGap: 1.5, }} onClick={() => {
                handleCancelDialog();
                setAnchorEl(!anchorEl);
            }}><BanIcon size={21} /> Cancel</MenuItem>}

            {handleDeleteDialog && <MenuItem sx={{ columnGap: 1.5, color: 'red' }} onClick={() => {
                handleDeleteDialog();
                setAnchorEl(!anchorEl);
            }}><Delete size={21} /> Delete</MenuItem>}

            {setPermissionDialog && <MenuItem sx={{ columnGap: 1.5, color: 'green' }} onClick={() => {
                setPermissionDialog(true);
                setAnchorEl(!anchorEl);
            }}><LockIcon size={21} /> Permission</MenuItem>}

            {handleCustomDialog && <MenuItem sx={{ columnGap: 1.5, color: 'green' }} onClick={() => {
                handleCustomDialog();
                setAnchorEl(!anchorEl);
            }}><LockIcon size={21} /> {customMenuTitle}</MenuItem>}
        </Menu>
    );
};

export default ActionMenu;