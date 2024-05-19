import { Routes, Route } from "react-router";
import { HandleAuthRoute } from "@dream.mf/oidc";

import Index from "./pages";
import Sample from "./pages/sample";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Example from "./pages/example";
import NotFound from "./pages/404";
import Logout from "./pages/logout";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/sample/:id" element={<Sample />} />
    <Route path="/home" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/example" element={<Example />} />
    {/* Auth */}
    <Route path="/auth" element={<HandleAuthRoute />} />
    <Route path="/logout" element={<Logout />} />
    {/* ELSE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Routing;
