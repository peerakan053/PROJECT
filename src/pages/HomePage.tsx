import React from 'react';
import { motion } from 'motion/react';
import { Search, Sparkles, Beaker, History, Cpu, Palette, User, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Fiction', icon: Sparkles },
  { name: 'Science', icon: Beaker },
  { name: 'History', icon: History },
  { name: 'Technology', icon: Cpu },
  { name: 'Arts', icon: Palette },
  { name: 'Biography', icon: User },
];

export default function HomePage() {
  return (
    <div className="flex-1">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
        {/* Hero Section */}
        <div className="flex flex-col gap-8 py-12 lg:flex-row lg:items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6 flex-1 lg:justify-center"
          >
            <div className="flex flex-col gap-4 text-left">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">Digital Learning Hub</span>
              <h1 className="text-slate-900 text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Access a World of Knowledge Digitally
              </h1>
              <p className="text-slate-600 text-base font-normal leading-relaxed md:text-lg max-w-lg">
                Borrow books, manage your digital resources, and explore thousands of titles from the comfort of your home.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/browse" className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-blue-600 text-white text-base font-bold hover:shadow-lg hover:shadow-blue-600/30 transition-all">
                <span>Start Reading</span>
              </Link>
              <Link to="/dashboard" className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-slate-200 text-slate-900 text-base font-bold hover:bg-slate-300 transition-all">
                <span>View Collections</span>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10"></div>
              <img 
                src="https://picsum.photos/seed/library/800/600" 
                alt="Modern library" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Search Section */}
        <div className="py-10">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-2">
              <Search className="text-blue-600 w-6 h-6" />
              Quick Book Finder
            </h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col flex-1 h-14">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full overflow-hidden border border-slate-200 focus-within:border-blue-600 transition-colors">
                  <div className="text-slate-400 flex bg-slate-50 items-center justify-center px-4">
                    <Search className="w-5 h-5" />
                  </div>
                  <input 
                    className="w-full border-none bg-slate-50 text-slate-900 focus:ring-0 px-4 text-base placeholder:text-slate-400" 
                    placeholder="Search by title, author, or ISBN..."
                  />
                </div>
              </div>
              <button className="h-14 px-8 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                Search Catalog
              </button>
            </div>
            <div className="mt-8">
              <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Popular Categories</h4>
              <div className="flex gap-3 flex-wrap">
                {categories.map((cat) => (
                  <div key={cat.name} className="group flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-slate-100 px-5 hover:bg-blue-600 hover:text-white transition-all">
                    <cat.icon className="w-4 h-4" />
                    <p className="text-sm font-semibold">{cat.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          {[
            { label: 'Digital Books', value: '50k+', icon: BookOpen },
            { label: 'Active Students', value: '12k+', icon: User },
            { label: 'Total Downloads', value: '1M+', icon: Search },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-slate-200"
            >
              <div className="size-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
