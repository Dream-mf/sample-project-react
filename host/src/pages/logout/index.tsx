import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDreamAuth } from '@dream.mf/oidc';
import Layout from "../../layout";


const LogoutPage = () => {
    const auth = useDreamAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        auth.signoutRedirect()
        .then(() => {
            navigate('/');
        })
        .catch((err) => { 
            console.warn(`Something happened with the logout func.`, err);
        });
    }, []);

    return (
        <Layout>
            <>Please wait while we log you out...</>
        </Layout>
    );
}

export default LogoutPage;