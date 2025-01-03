import Layout from "../layout";
import { Paper, Typography } from "@mui/material";
import PageBreadcrumbs from "../components/breadcrumb";

const NotFoundPage = () => {
  return (
    <Layout>
      <PageBreadcrumbs items={[{ label: 'Not Found' }]} />
      
      <Paper elevation={2} sx={{ p: 4, borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
          404
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Page Not Found
        </Typography>
      </Paper>
    </Layout>
  );
};

export default NotFoundPage;