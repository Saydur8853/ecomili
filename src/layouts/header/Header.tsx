
import { styled } from '@mui/material';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
// import NotificationsPopover from './NotificationsPopover';
import { MenuIcon } from 'lucide-react';

const NAV_WIDTH = 280;
const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(249, 250, 251, 0.9)',
  boxShadow: 'none',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

interface Props {
  onOpenNav: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ onOpenNav }: Props) => {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton onClick={() => onOpenNav(true)} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' }, }} >
          <MenuIcon />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" gap={2} >
          {/* <LanguagePopover /> */}
          {/* <NotificationsPopover /> */}
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}

export default Header;