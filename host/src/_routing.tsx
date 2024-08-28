import { Routes, Route } from "react-router";
import { useNavigate } from "react-router-dom";
import { DreamMFAuthRoute } from "@dream.mf/oidc";

import Index from "./pages";
import Sample from "./pages/sample";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Gated from "./pages/gated";
import Example from "./pages/example";
import NotFound from "./pages/404";
import Logout from "./pages/logout";

const Routing = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sample/:id" element={<Sample />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/example" element={<Example />} />
      <Route path="/gated" element={<Gated />} />
      {/* Auth */}
      <Route path="/auth" element={<DreamMFAuthRoute onBeforeRedirect={() => {}} navigate={navigate} loginMessage={'Logging you in...'} />} />
      <Route path="/logout" element={<Logout />} />
      {/* ELSE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routing;
