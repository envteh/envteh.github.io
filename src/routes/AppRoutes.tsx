import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AllProjects from "../pages/AllProjects";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
    </Routes>
  );
}
