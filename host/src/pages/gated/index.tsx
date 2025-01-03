import Layout from "../../layout";
import { DreamMFAuthGuard } from "@dream.mf/oidc";
import { Paper, Typography, Alert } from "@mui/material";
import PageBreadcrumbs from "../../components/breadcrumb";

const GatedPage = () => {
    return (
        <Layout>
            <PageBreadcrumbs items={[{ label: 'Gated Content' }]} />
            
            <DreamMFAuthGuard 
                stopRedirect={true} 
                fallback={
                    <Alert severity="warning" sx={{ mb: 3 }}>
                        You do not have access to view this page.
                    </Alert>
                }
            >
                <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
                    <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
                        Authenticated Content
                    </Typography>
                    <Typography variant="body1">
                        This page should only render if you are logged in, but not force the login.
                    </Typography>
                </Paper>
            </DreamMFAuthGuard>
        </Layout>
    );
};

export default GatedPage;
