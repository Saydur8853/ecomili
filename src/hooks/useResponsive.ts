import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useResponsive = (query: string, start?: Breakpoint, end?: Breakpoint) => {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start || 'xs'));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start || 'xs'));

  const mediaBetween = useMediaQuery( theme.breakpoints.between(start || 'xs', end || 'xl') );

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start || 'xs'));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  return mediaOnly;
}; 

export default useResponsive;
