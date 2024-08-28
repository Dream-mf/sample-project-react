
import Layout from "../../layout";
import { DreamMFAuthGuard } from "@dream.mf/oidc";

const GatedPage = () => {
    return (
        <Layout>
            <DreamMFAuthGuard stopRedirect={true} fallback={<>You do not have access to view this page.</>}>
                <h5>Authenticated Blank Page</h5>
                <div>This page should only render if you are logged in, but not force the login.</div>
            </DreamMFAuthGuard>
        </Layout>
    );
}

export default GatedPage;
