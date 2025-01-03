import { NavLink } from "react-router-dom";
import Layout from "../../layout";
import { Paper, Typography, TextField } from "@mui/material";
import PageBreadcrumbs from "../../components/breadcrumb";

const ExamplePage = () => {
  return (
    <Layout>
      <PageBreadcrumbs items={[{ label: 'Example' }]} />
      
      <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Example Page
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Example page in the host, this is not a remote.
        </Typography>
        <TextField
          fullWidth
          label="Example Input"
          variant="outlined"
          sx={{ maxWidth: 400 }}
        />
      </Paper>
    </Layout>
  );
};

export default ExamplePage;