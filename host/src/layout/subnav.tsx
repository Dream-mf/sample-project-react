import { DreamMFAuthGuard } from "@dream.mf/oidc";
import { NavLink } from "react-router-dom";
import { Box, Tabs, Tab, Container } from "@mui/material";
import { useState } from "react";

export default function Page() {
    const [value, setValue] = useState(0);
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
            <Container>
                <Tabs 
                    value={value} 
                    onChange={handleChange}
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
                    <Tab 
                        label="Root" 
                        component={NavLink} 
                        to="/"
                        sx={{ color: 'inherit' }}
                    />
                    <Tab 
                        label="Sample" 
                        component={NavLink} 
                        to="/sample/123456"
                        sx={{ color: 'inherit' }}
                    />
                    <Tab 
                        label="Home" 
                        component={NavLink} 
                        to="/home"
                        sx={{ color: 'inherit' }}
                    />
                    <Tab 
                        label="Example" 
                        component={NavLink} 
                        to="/example"
                        sx={{ color: 'inherit' }}
                    />
                    <Tab 
                        label="404" 
                        component={NavLink} 
                        to="/notfound"
                        sx={{ color: 'inherit' }}
                    />
                    <Tab 
                        label="Profile (Auth 1)" 
                        component={NavLink} 
                        to="/profile"
                        sx={{ color: 'inherit' }}
                    />
                    <Tab 
                        label="Gated (Auth 2)" 
                        component={NavLink} 
                        to="/gated"
                        sx={{ color: 'inherit' }}
                    />
                    <DreamMFAuthGuard stopRedirect={true} fallback={<></>}>
                        <Tab 
                            label="Logout" 
                            component={NavLink} 
                            to="/logout"
                            sx={{ color: 'inherit' }}
                        />
                    </DreamMFAuthGuard>
                </Tabs>
            </Container>
        </Box>
    );
}
