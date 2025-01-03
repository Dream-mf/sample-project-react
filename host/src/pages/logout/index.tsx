import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDreamAuth } from '@dream.mf/oidc';
import Layout from "../../layout";
import { Box, CircularProgress, Typography } from "@mui/material";
import PageBreadcrumbs from "../../components/breadcrumb";

const LogoutPage = () => {
    const auth = useDreamAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        auth.handleLogout(() => { navigate('/'); }, true);
    }, []);

    return (
        <Layout>
            <PageBreadcrumbs items={[{ label: 'Logout' }]} />
            
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
                py: 8
            }}>
                <CircularProgress size={40} />
                <Typography variant="h6" color="text.secondary">
                    Please wait while we log you out...
                </Typography>
            </Box>
        </Layout>
    );
};

export default LogoutPage;