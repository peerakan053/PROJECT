import React from 'react';
import { BookOpen, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="text-blue-600 size-6 flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-slate-900 text-lg font-bold">E-Library</h2>
        </div>
        <p className="text-slate-500 text-sm">
          © 2024 E-Library Management System. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
            <Twitter className="w-5 h-5" />
          </a>
          <a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
            <Github className="w-5 h-5" />
          </a>
          <a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
