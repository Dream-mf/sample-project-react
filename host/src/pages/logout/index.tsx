import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDreamAuth } from '@dream.mf/oidc';
import Layout from "../../layout";


const LogoutPage = () => {
    const auth = useDreamAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        auth.handleLogout(() => { navigate('/'); }, true);
    }, []);

    return (
        <Layout>
            <>Please wait while we log you out...</>
        </Layout>
    );
}

export default LogoutPage;