import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  CheckCircle, 
  ArrowRight, 
  Barcode, 
  Calendar, 
  Box, 
  UserCheck, 
  Download, 
  RefreshCw,
  History,
  ShieldCheck,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BorrowPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col items-center px-6 py-8 lg:px-20">
      <div className="w-full max-w-4xl space-y-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="hover:text-blue-600 cursor-pointer">Library</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900 font-medium">Borrow Book</span>
        </nav>

        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Borrow Book</h1>
          <p className="text-slate-600">Complete the transaction form to reserve your reading material.</p>
        </div>

        {/* Success Feedback Notification */}
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full p-1"
          >
            <div className="flex items-center justify-between gap-4 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500 text-white rounded-full p-2 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-emerald-900 text-base font-bold">Book Reserved Successfully!</p>
                  <p className="text-emerald-700 text-sm">Your request has been processed. Pickup is scheduled for tomorrow.</p>
                </div>
              </div>
              <Link to="/dashboard" className="hidden sm:flex items-center gap-2 text-sm font-bold text-emerald-900 hover:underline">
                View Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}

        {/* Transaction Form Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">Transaction Details</h3>
          </div>
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Book ID Input */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Book Identifier (ISBN/ID)</label>
                <div className="relative">
                  <Barcode className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 outline-none transition-all" 
                    placeholder="Enter 10-digit ID" 
                    type="text" 
                    defaultValue="LIB-BK-2024-089"
                  />
                </div>
                <p className="text-xs text-slate-500 italic">Example: LIB-BK-0000-000</p>
              </div>
              {/* Duration Selection */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Borrowing Duration</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <select className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 outline-none appearance-none cursor-pointer">
                    <option>7 Days (Standard)</option>
                    <option selected>14 Days (Extended)</option>
                    <option>21 Days (Max)</option>
                    <option>Digital Only (30 Days)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Pickup Method */}
            <div className="space-y-4">
              <label className="text-sm font-semibold text-slate-700">Preferred Pickup Method</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="relative flex flex-col p-4 rounded-xl border-2 border-blue-600 bg-blue-50 cursor-pointer">
                  <input defaultChecked className="hidden" name="pickup" type="radio" />
                  <Box className="text-blue-600 mb-2 w-6 h-6" />
                  <span className="font-bold text-slate-900">Locker Pickup</span>
                  <span className="text-xs text-slate-500">24/7 self-service</span>
                </label>
                <label className="relative flex flex-col p-4 rounded-xl border-2 border-slate-100 hover:border-slate-200 cursor-pointer">
                  <input className="hidden" name="pickup" type="radio" />
                  <UserCheck className="text-slate-400 mb-2 w-6 h-6" />
                  <span className="font-bold text-slate-900">Front Desk</span>
                  <span className="text-xs text-slate-500">Mon-Fri 8am-6pm</span>
                </label>
                <label className="relative flex flex-col p-4 rounded-xl border-2 border-slate-100 hover:border-slate-200 cursor-pointer">
                  <input className="hidden" name="pickup" type="radio" />
                  <Download className="text-slate-400 mb-2 w-6 h-6" />
                  <span className="font-bold text-slate-900">Digital Access</span>
                  <span className="text-xs text-slate-500">Instant activation</span>
                </label>
              </div>
            </div>

            {/* Notes Area */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Special Instructions (Optional)</label>
              <textarea 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 outline-none transition-all" 
                placeholder="Any special requests for the librarian?" 
                rows={3}
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-100">
              <button 
                disabled={isProcessing}
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all flex items-center justify-center gap-3" 
                type="submit"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Confirm Borrowing'
                )}
              </button>
              <button className="w-full sm:w-auto px-8 py-3 bg-slate-100 text-slate-600 font-bold rounded-lg hover:bg-slate-200 transition-all" type="reset">
                Cancel
              </button>
              <div className="flex-1 text-center sm:text-right">
                <p className="text-xs text-slate-400">By submitting, you agree to our <span className="underline cursor-pointer">Borrowing Policy</span>.</p>
              </div>
            </div>
          </form>
        </div>

        {/* Related Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <History className="text-blue-600 mb-3 w-6 h-6" />
            <h4 className="font-bold text-slate-900 mb-1">Your History</h4>
            <p className="text-sm text-slate-600">You have 2 books currently borrowed and 0 overdue items.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <ShieldCheck className="text-slate-400 mb-3 w-6 h-6" />
            <h4 className="font-bold text-slate-900 mb-1">Quota Available</h4>
            <p className="text-sm text-slate-600">Current tier: Premium Student. You can borrow up to 10 books.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <Headphones className="text-slate-400 mb-3 w-6 h-6" />
            <h4 className="font-bold text-slate-900 mb-1">Need Help?</h4>
            <p className="text-sm text-slate-600">Contact the support desk if you encounter any scanning issues.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
