import { useState } from 'react';
import { Box, MenuItem, Stack, IconButton, Popover, Tooltip, } from '@mui/material';

const LANGS = [
  {
    value: 'bn',
    label: 'Bengali',
    icon: '/assets/icons/bd-flag.png',
  },
  {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/ic_flag_en.svg',
  },
];


const LanguagePopover = () => {
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);

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
      <Tooltip title="Language">
        <IconButton
          onClick={handleOpen}
          sx={{
            borderRadius: 5,
            ...(open && {
              bgcolor: "#EAECEE"
            }),
          }}
        >
          <img src={LANGS[0].icon} alt={LANGS[0].label} width={23} height={23} />
        </IconButton>
      </Tooltip>

      <Popover
        open={Boolean(open)}
        anchorEl={anchor}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}  >

        <Stack spacing={0.75}>
          {LANGS.map((option) => (
            <MenuItem key={option.value} selected={option.value === LANGS[0].value} onClick={() => handleClose()}>
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
}

export default LanguagePopover;
