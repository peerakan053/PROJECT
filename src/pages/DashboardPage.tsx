import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Search, 
  Calendar, 
  Bookmark, 
  Settings, 
  TrendingUp, 
  Clock, 
  PlusCircle,
  Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';

const recentBooks = [
  { id: 1, title: 'The Future of Humanity', author: 'Michio Kaku', category: 'Science Fiction', image: 'https://picsum.photos/seed/book1/300/400' },
  { id: 2, title: 'Meditations', author: 'Marcus Aurelius', category: 'Philosophy', image: 'https://picsum.photos/seed/book2/300/400' },
  { id: 3, title: 'Clean Code', author: 'Robert C. Martin', category: 'Technology', image: 'https://picsum.photos/seed/book3/300/400' },
  { id: 4, title: 'Zero to One', author: 'Peter Thiel', category: 'Business', image: 'https://picsum.photos/seed/book4/300/400' },
  { id: 5, title: 'Design of Things', author: 'Don Norman', category: 'Design', image: 'https://picsum.photos/seed/book5/300/400' },
];

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 flex-shrink-0 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200 flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <BookOpen className="w-6 h-6" />
          </div>
          <h1 className="font-bold text-lg tracking-tight">OpenShelf</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
          <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium">
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#">
            <BookOpen className="w-5 h-5" />
            <span>My Books</span>
          </a>
          <Link to="/browse" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            <Search className="w-5 h-5" />
            <span>Search Catalog</span>
          </Link>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#">
            <Calendar className="w-5 h-5" />
            <span>Reservations</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#">
            <Bookmark className="w-5 h-5" />
            <span>Digital Resources</span>
          </a>
        </nav>
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-3 px-3 py-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/seed/alex/100/100" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Alex Johnson</span>
              <span className="text-xs text-slate-500">ID: 202401</span>
            </div>
          </div>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <header className="h-16 flex-shrink-0 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex-1 max-w-xl">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                className="w-full bg-slate-100 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-600 transition-all" 
                placeholder="Search for books, authors, or digital resources..." 
                type="text" 
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <Link to="/browse" className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              Browse Catalog
            </Link>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-1">Welcome back, Alex!</h2>
            <p className="text-slate-500">Manage your borrowed books and explore new digital resources today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Books Borrowed</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <div className="mt-4 flex items-center text-emerald-600 font-medium text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+2 this week</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Due Soon</p>
                <p className="text-3xl font-bold text-amber-500">2</p>
              </div>
              <div className="mt-4 flex items-center text-slate-400 font-medium text-sm">
                <Clock className="w-4 h-4 mr-1" />
                <span>Due within 48 hours</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Reservations</p>
                <p className="text-3xl font-bold">4</p>
              </div>
              <div className="mt-4 flex items-center text-emerald-600 font-medium text-sm">
                <PlusCircle className="w-4 h-4 mr-1" />
                <span>+1 since yesterday</span>
              </div>
            </motion.div>
          </div>

          {/* Recent Arrivals Section */}
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold">Recent Book Arrivals</h3>
            <Link to="/browse" className="text-sm font-semibold text-blue-600 hover:underline">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {recentBooks.map((book) => (
              <motion.div 
                key={book.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-slate-200">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-sm">Quick View</button>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{book.category}</p>
                  <h4 className="font-bold text-slate-900 truncate mb-1" title={book.title}>{book.title}</h4>
                  <p className="text-xs text-slate-500 mb-4">{book.author}</p>
                  <Link 
                    to="/borrow"
                    className="block w-full text-center bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors py-2 rounded-lg text-sm font-bold"
                  >
                    Borrow Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">Need help? Visit our <span className="text-blue-600 hover:underline cursor-pointer">Help Center</span> or contact a librarian.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
