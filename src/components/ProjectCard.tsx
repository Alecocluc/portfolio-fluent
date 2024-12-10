import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  className?: string;
}

export function ProjectCard({ title, description, image, link, className = '' }: ProjectCardProps) {
  return (
    <a 
      href={link}
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 transition-transform hover:-translate-y-1 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 opacity-10 blur-3xl" />
      <div className="relative p-6">
        <div className="h-48 overflow-hidden rounded-xl mb-4">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </a>
  );
}