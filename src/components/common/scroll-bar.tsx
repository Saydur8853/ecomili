import { Box, Stack } from '@mui/material';
import SimpleBar from 'simplebar-react';
import { alpha, styled, SxProps } from '@mui/material/styles';


type Props ={ 
  children: React.ReactNode, 
  sx?: SxProps,
  other?:any
}


const StyledScrollbar = styled(SimpleBar)(({ theme }:{theme: any}) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));


const Scrollbar = ({ children, sx, ...other }: Props) => {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <Stack flexGrow={1} height={"100%"} overflow={"hidden"}>
      <StyledScrollbar timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </StyledScrollbar>
    </Stack>
  );
}
 

export default Scrollbar;
