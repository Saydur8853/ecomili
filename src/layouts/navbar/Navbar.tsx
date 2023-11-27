import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Box, Drawer, Typography, Stack, List, ListItemButton, Collapse, Divider, ListItemIcon, ListItemText } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import Scrollbar from '../../components/common/scroll-bar';
import SidebarMenu from "./SidebarMenu";
import { BookAudio, ChevronDown, ChevronUp, LayoutDashboard, Newspaper, Settings, Users2, } from "lucide-react";

const NAV_WIDTH = 280;

type NavbarProps = {
  openNav: boolean,
  onCloseNav: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({ openNav, onCloseNav }: NavbarProps) => {
  const { pathname } = useLocation();
  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);


  const [submenuControl, setSubmenuControl] = useState({
    categories: false,
    news: false,
    infobites: false,
    users: false,
    settings: false,
  })

  const handleClick = (key: any) => {
    const newValue: any = { ...submenuControl }
    const currentValue = newValue[key];
    Object.keys(newValue).forEach(keyItem => {
      newValue[keyItem] = false;
    });
    newValue[key] = !currentValue
    setSubmenuControl(newValue)
  }

  useEffect(() => {
    if (location.pathname.includes("news")) {
      const newValue = { ...submenuControl }
      newValue.news = !newValue.news
      setSubmenuControl(newValue)
    } else if (location.pathname.includes("settings")) {
      const newValue = { ...submenuControl }
      newValue.settings = !newValue.settings
      setSubmenuControl(newValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }} >

      <Box px={2}>
        <NavLink to={'/dashboard'}>
          <Stack direction={"row"} alignItems={"center"} gap={1.5} pt={2} pb={3} >
            <img src='/logo.png' width={50} height={50} style={{ objectFit: "contain" }} />
            <Stack>
              <Typography fontWeight={800} color={"#34495E"}>Ecomili Inspiration</Typography>
            </Stack>
          </Stack>
        </NavLink>

        <List>
          {/* Overview  */}
          <SidebarMenu onClose={() => onCloseNav(false)} directory="/dashboard"
            icon={<LayoutDashboard size={20} color="#1ABC9C" />}
            menuTitle={"Overview"} variant="body1" fontWeight={"bold"} />

          {/* Categories  */}
          <ListItemButton onClick={() => handleClick("categories")}>
            <ListItemIcon>
              <Newspaper size={20} />
            </ListItemIcon>
            <ListItemText primary={<Typography fontWeight={600}>Categories</Typography>} />
            {submenuControl.categories ? <ChevronUp size={18} color='#8c9091' /> : <ChevronDown size={18} color='#8c9091' />}
          </ListItemButton>
          <Collapse in={submenuControl.categories} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SidebarMenu onClose={() => onCloseNav(false)} icon={""} menuTitle={"Manage Categories"} directory="/categories/manage" />
              <Divider />
            </List>
          </Collapse>
          {/* Categories end */}


          {/* News  */}
          <ListItemButton onClick={() => handleClick("news")}>
            <ListItemIcon>
              <Newspaper size={20} />
            </ListItemIcon>
            <ListItemText primary={<Typography fontWeight={600}>News</Typography>} />
            {submenuControl.news ? <ChevronUp size={18} color='#8c9091' /> : <ChevronDown size={18} color='#8c9091' />}
          </ListItemButton>
          <Collapse in={submenuControl.news} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SidebarMenu onClose={() => onCloseNav(false)} icon={""} menuTitle={"Manage News"} directory="/news/manage" />
              <SidebarMenu onClose={() => onCloseNav(false)} icon={""} menuTitle={"Add News"} directory="/news/add-news" />
              <SidebarMenu onClose={() => onCloseNav(false)} icon={""} menuTitle={"Archieved News"} directory="/news/archieved-news" />
              <Divider />
            </List>
          </Collapse>
          {/* News end  */}


          {/* Infobites  */}
          <ListItemButton onClick={() => handleClick("infobites")}>
            <ListItemIcon>
              <BookAudio size={20} />
            </ListItemIcon>
            <ListItemText primary={<Typography fontWeight={600}>Infobites</Typography>} />
            {submenuControl.infobites ? <ChevronUp size={18} color='#8c9091' /> : <ChevronDown size={18} color='#8c9091' />}
          </ListItemButton>
          <Collapse in={submenuControl.infobites} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SidebarMenu onClose={() => onCloseNav(false)} icon={""} menuTitle={"Manage Infobite"} directory="/infobites/manage" />
            </List>
          </Collapse>
          {/* Infobites end  */}


          {/* Users  */}
          <ListItemButton onClick={() => handleClick("users")}>
            <ListItemIcon>
              <Users2 size={20} />
            </ListItemIcon>
            <ListItemText primary={<Typography fontWeight={600}>Users</Typography>} />
            {submenuControl.users ? <ChevronUp size={18} color='#8c9091' /> : <ChevronDown size={18} color='#8c9091' />}
          </ListItemButton>
          <Collapse in={submenuControl.users} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SidebarMenu onClose={() => onCloseNav(false)} icon={""} menuTitle={"Manage Users"} directory="/users/manage" />
            </List>
          </Collapse>
          {/* Users end*/}


          {/* Settings  */}
          <ListItemButton onClick={() => handleClick("settings")}>
            <ListItemIcon>
              <Settings size={20} />
            </ListItemIcon>
            <ListItemText primary={<Typography fontWeight={600}>Settings</Typography>} />
            {submenuControl.settings ? <ChevronUp size={18} color='#8c9091' /> : <ChevronDown size={18} color='#8c9091' />}
          </ListItemButton>
          <Collapse in={submenuControl.settings} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SidebarMenu onClose={() => onCloseNav(false)} icon={""} menuTitle={"Cron Settings"} directory="/settings/cron-settings" />
              {/* <SidebarMenu onClose={() => onCloseNav(false)} icon={""} menuTitle={"Manage Roles"} directory="/settings/roles/manage" /> */}
              <Divider />
            </List>
          </Collapse>
          {/* Settings end */}




        </List>
      </Box>

    </Scrollbar>
  );

  return (
    <Box component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }} >

      {isDesktop ? (
        <Drawer open variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer open={openNav} onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}


export default Navbar;