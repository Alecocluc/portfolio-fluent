import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
}

export function SkillCard({ title, description, Icon, className = '' }: SkillCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 p-6 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 opacity-10 blur-3xl" />
      <div className="relative">
        <Icon className="w-8 h-8 mb-4 text-purple-400" />
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}