import React from 'react';
import { Github, Linkedin, Mail, User } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 opacity-10 blur-3xl" />
      <div className="relative">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          John Doe
        </h1>
        <p className="mt-2 text-xl text-gray-200">Full Stack Developer</p>
        <p className="mt-4 text-gray-300 max-w-2xl">
          Passionate about creating beautiful and functional web applications. 
          Specialized in React, Node.js, and modern web technologies.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="https://github.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:contact@example.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}