import { Paper, Typography, CircularProgress, Box } from '@mui/material';

export default () => {
    return (
        <Paper elevation={2} sx={{ p: 4, borderRadius: 2, textAlign: 'center' }}>
            <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
                <CircularProgress size={60} thickness={2} />
            </Typography>
            <Typography variant="h5" color="text.secondary">
                Loading...
            </Typography>
        </Paper>
    );
};
