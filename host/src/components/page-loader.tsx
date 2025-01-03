import { Box, CircularProgress, Typography } from '@mui/material';

export default () => {
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                height: '100vh',
                gap: 2
            }}
        >
            <CircularProgress size={40} />
            <Typography variant="body1" color="text.secondary">
                Loading page...
            </Typography>
        </Box>
    );
};
