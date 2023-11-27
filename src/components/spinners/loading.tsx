import { Box, CircularProgress } from '@mui/material';


const Loading = ({ size = 70, minHeight = '50vh' }) => {
    return (
        <Box sx={{ minHeight: minHeight, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress size={size} />
        </Box>
    );
}

export default Loading;