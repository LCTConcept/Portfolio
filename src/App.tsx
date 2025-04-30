import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import ExperienceBookReact from "./components/ExperienceBookReact";
import Skills from "./pages/Skills";
import Skillsshelf from "./pages/Skillsshelf";
import Projects from "./pages/Projects";
import ProjectsBook from "./pages/Projectsbook";
import Profile from "./pages/Profile";
import ProfileBook from "./pages/Profilebook";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/experiencebook" element={<ExperienceBookReact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/skillsshelf" element={<Skillsshelf />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projectsbook" element={<ProjectsBook />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profilebook" element={<ProfileBook />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
