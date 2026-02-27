import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Search, Bell, User } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-6 md:px-20 lg:px-40 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="text-blue-600 size-8 flex items-center justify-center">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">E-Library</h2>
        </Link>
      </div>
      
      <div className="flex flex-1 justify-end gap-8 items-center">
        {!isDashboard && (
          <nav className="hidden md:flex items-center gap-9">
            <Link to="/" className="text-slate-700 text-sm font-medium hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/browse" className="text-slate-700 text-sm font-medium hover:text-blue-600 transition-colors">Browse</Link>
            <Link to="/about" className="text-slate-700 text-sm font-medium hover:text-blue-600 transition-colors">About</Link>
            <Link to="/contact" className="text-slate-700 text-sm font-medium hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
        )}
        
        {isDashboard && (
          <div className="hidden sm:block relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-600/50 text-slate-900 placeholder:text-slate-500" 
              placeholder="Search resources..." 
              type="text" 
            />
          </div>
        )}

        <div className="flex items-center gap-4">
          {isDashboard ? (
            <>
              <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <Link to="/login" className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200" style={{ backgroundImage: 'url("https://picsum.photos/seed/user123/100/100")' }}></Link>
            </>
          ) : (
            <>
              <Link to="/login" className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-all">
                <span>Get Started</span>
              </Link>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200" style={{ backgroundImage: 'url("https://picsum.photos/seed/guest/100/100")' }}></div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
