import Layout from "../layout";
import { Paper, Typography } from "@mui/material";
import PageBreadcrumbs from "../components/breadcrumb";

const IndexPage = () => {
  return (
    <Layout>
      <PageBreadcrumbs items={[]} />
      
      <Paper elevation={2} sx={{ p: 4, borderRadius: 2, background: 'linear-gradient(145deg, #1976d2 0%, #1565c0 100%)' }}>
        <Typography variant="h2" component="h1" sx={{ color: 'white', mb: 4, mt: 0 }}>
          Welcome
        </Typography>
        <Typography variant="h6" sx={{ color: 'white', opacity: 0.9, lineHeight: 1.6 }}>
          This is an example application using vanilla react as a host, and create react application
          as remotes. These are dynamically resolved in each next page route. Remote urls are retrieved from
          an api using the service in this repo.
        </Typography>
      </Paper>
    </Layout>
  )
}

export default IndexPage;