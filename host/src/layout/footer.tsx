import { Box, Container, Typography } from '@mui/material';

export default () => (
  <Box 
    component="footer" 
    sx={{ 
      py: 3,
      mt: 'auto',
      backgroundColor: (theme) => theme.palette.grey[100],
      borderTop: '1px solid',
      borderColor: 'divider'
    }}
  >
    <Container>
      <Typography 
        variant="body2" 
        color="text.secondary" 
        align="center"
      >
        Dream.mf {new Date().getFullYear()}
      </Typography>
    </Container>
  </Box>
);