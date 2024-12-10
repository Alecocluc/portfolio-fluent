import React from 'react';
import { Code2, Database, Layout, Palette } from 'lucide-react';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:gap-8">
          {/* Hero Section */}
          <Hero />

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              Icon={Code2}
              title="Frontend Development"
              description="Expert in React, TypeScript, and modern CSS frameworks"
            />
            <SkillCard
              Icon={Database}
              title="Backend Development"
              description="Proficient in Node.js, Express, and database design"
            />
            <SkillCard
              Icon={Layout}
              title="Responsive Design"
              description="Creating beautiful interfaces that work on any device"
            />
            <SkillCard
              Icon={Palette}
              title="UI/UX Design"
              description="Focused on creating intuitive and engaging user experiences"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-stack e-commerce solution with React and Node.js"
              image="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80"
              link="#"
              className="md:col-span-2"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A modern portfolio website using React and TailwindCSS"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              link="#"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management application"
              image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80"
              link="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;