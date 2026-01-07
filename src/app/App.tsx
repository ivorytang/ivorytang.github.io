import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Home } from "./pages/home";
import { ProjectsPage } from "./pages/projects-page";
import { CVPage } from "./pages/cv-page";
import { ContactPage } from "./pages/contact-page";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
