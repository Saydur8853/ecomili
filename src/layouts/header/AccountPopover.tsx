import { useState } from 'react';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
import account from '../../_mock/account';
import { LayoutDashboardIcon, UserCircle, LogOutIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MENU_OPTIONS = [
  {
    label: 'Home',
    href: '/dashboard',
    icon: LayoutDashboardIcon,
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: UserCircle,
  },
  // {
  //   label: 'Settings',
  //   href: '/profile/settings',
  //   icon: SettingsIcon,
  // },
];


const AccountPopover = () => {
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const navigate = useNavigate();

  const handleOpen = (event: any) => {
    setOpen(true);
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchor(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
            },
          }),
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" sx={{ width: 35, height: 35 }} />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={anchor}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack >
          {MENU_OPTIONS.map((option) => (
            <MenuItem sx={{ py: 1 }} key={option.label} onClick={() => {
              handleClose();
              navigate(option.href);
            }}>
              <option.icon size={18} style={{ marginRight: '0.5rem' }} /> {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem sx={{ py: 1, justifyContent: "center", gap: 1 }}
          onClick={() => {
            handleClose();
            navigate('/auth/login');
          }}
        >
          <LogOutIcon /> Logout
        </MenuItem>
      </Popover>
    </>
  );
}


export default AccountPopover;