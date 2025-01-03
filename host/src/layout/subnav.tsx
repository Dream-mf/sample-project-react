import { DreamMFAuthGuard } from "@dream.mf/oidc";
import { NavLink, useLocation } from "react-router-dom";
import { Box, Tabs, Tab, Container } from "@mui/material";

const routes = [
    { path: "/", label: "Root" },
    { path: "/sample/123456", label: "Sample" },
    { path: "/home", label: "Home" },
    { path: "/example", label: "Example" },
    { path: "/notfound", label: "404" },
    { path: "/profile", label: "Profile (Auth 1)" },
    { path: "/gated", label: "Gated (Auth 2)" },
    { path: "/logout", label: "Logout", requiresAuth: true }
];

export default function Page() {
    const location = useLocation();
    
    // Get the current route index based on pathname
    const getCurrentTabIndex = () => {
        const currentPath = location.pathname;
        const index = routes.findIndex(route => {
            if (route.path === '/') {
                return currentPath === '/';
            }
            return currentPath.startsWith(route.path);
        });
        return index >= 0 ? index : 0;
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
            <Container>
                <Tabs 
                    value={getCurrentTabIndex()}
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    sx={{
                        '& .MuiTab-root': {
                            textTransform: 'none',
                            minHeight: 48,
                        },
                    }}
                >
                    {routes.map((route) => (
                        route.requiresAuth ? (
                            <DreamMFAuthGuard key={route.path} stopRedirect={true} fallback={<></>}>
                                <Tab 
                                    label={route.label}
                                    component={NavLink}
                                    to={route.path}
                                    sx={{ color: 'inherit' }}
                                />
                            </DreamMFAuthGuard>
                        ) : (
                            <Tab 
                                key={route.path}
                                label={route.label}
                                component={NavLink}
                                to={route.path}
                                sx={{ color: 'inherit' }}
                            />
                        )
                    ))}
                </Tabs>
            </Container>
        </Box>
    );
}
