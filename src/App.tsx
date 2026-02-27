import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BorrowPage from './pages/BorrowPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

function AppContent() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login' || location.pathname === '/dashboard';

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {!hideNavAndFooter && <Navbar />}
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/borrow" element={<BorrowPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/browse" element={<HomePage />} /> {/* Placeholder for browse */}
          <Route path="/about" element={<HomePage />} /> {/* Placeholder for about */}
          <Route path="/contact" element={<HomePage />} /> {/* Placeholder for contact */}
        </Routes>
      </main>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
