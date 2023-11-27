import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';
import Header from './header/Header';
import Navbar from './navbar/Navbar';
import Page from './Page';
import NoInternetConnection from './NoInternetConnection';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
  backgroundColor: '#f9fafb'
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100vh',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    // paddingTop: APP_BAR_DESKTOP + 24,
    paddingTop: APP_BAR_DESKTOP,
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}));


const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
      <Header onOpenNav={setOpen} />
      <Navbar openNav={open} onCloseNav={setOpen} />

      <Main>
        <Page>
          <NoInternetConnection>
            <Outlet />
          </NoInternetConnection>
        </Page>
      </Main>
    </StyledRoot>
  );
}

export default DashboardLayout;