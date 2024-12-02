import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface MenuButtonProps {
  icon: LucideIcon;
  text: string;
  onClick: () => void;
}

export function MenuButton({ icon: Icon, text, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full aspect-square"
    >
      <div className="bg-green-100 p-4 rounded-full mb-4">
        <Icon className="text-green-600 w-8 h-8" />
      </div>
      <span className="text-gray-800 font-medium text-center">{text}</span>
    </button>
  );
}