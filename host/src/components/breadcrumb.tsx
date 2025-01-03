import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function PageBreadcrumbs({ items }: PageBreadcrumbsProps) {
  return (
    <Breadcrumbs 
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ mb: 3 }}
    >
      <Link 
        component={RouterLink} 
        to="/"
        underline="hover"
        color="inherit"
      >
        Home
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return isLast ? (
          <Typography color="text.primary" key={item.label}>
            {item.label}
          </Typography>
        ) : (
          <Link
            component={RouterLink}
            to={item.href || '#'}
            underline="hover"
            color="inherit"
            key={item.label}
          >
            {item.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
