import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, User, Lock, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side: Illustration and Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-50 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-10 left-10 flex items-center gap-2">
          <div className="text-blue-600">
            <BookOpen className="w-8 h-8" />
          </div>
          <span className="text-xl font-bold text-slate-900">E-Library Admin</span>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg text-center z-10"
        >
          <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/login-library/800/600" 
              alt="Library" 
              className="w-full h-80 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-4xl font-black mb-4 leading-tight">Your gateway to infinite knowledge.</h1>
          <p className="text-lg text-slate-600">Manage your digital resources, track borrowed books, and explore a vast universe of academic materials from your personalized dashboard.</p>
        </motion.div>
        {/* Abstract background shapes */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Welcome Back</h2>
            <p className="text-slate-500">Please enter your details to access your account.</p>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Username/Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium leading-normal text-slate-700">Student ID or Email</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  className="block w-full pl-11 rounded-lg border-slate-200 bg-slate-50 text-slate-900 h-12 focus:ring-blue-600 focus:border-blue-600 transition-all placeholder:text-slate-400" 
                  placeholder="e.g. STU12345 or user@edu.com" 
                  type="text" 
                />
              </div>
            </div>
            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium leading-normal text-slate-700">Password</label>
                <a className="text-xs font-semibold text-blue-600 hover:underline" href="#">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  className="block w-full pl-11 pr-11 rounded-lg border-slate-200 bg-slate-50 text-slate-900 h-12 focus:ring-blue-600 focus:border-blue-600 transition-all placeholder:text-slate-400" 
                  placeholder="••••••••" 
                  type="password" 
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" type="button">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input className="rounded border-slate-300 text-blue-600 focus:ring-blue-600 h-4 w-4" id="remember" type="checkbox" />
              <label className="text-sm text-slate-600" htmlFor="remember">Remember me for 30 days</label>
            </div>
            {/* Submit Button */}
            <Link 
              to="/dashboard"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
            >
              Sign In
              <ArrowRight className="w-5 h-5" />
            </Link>
          </form>
          {/* Divider */}
          <div className="my-8 flex items-center before:flex-1 before:border-t before:border-slate-200 after:flex-1 after:border-t after:border-slate-200">
            <span className="px-4 text-xs font-medium text-slate-400 uppercase tracking-widest">or</span>
          </div>
          {/* Registration Toggle */}
          <div className="text-center">
            <p className="text-slate-600 mb-4">New to the library system?</p>
            <button className="w-full py-3 px-4 rounded-lg border-2 border-blue-600/20 text-blue-600 font-bold hover:bg-blue-50 transition-all">
              Create Student Account
            </button>
          </div>
          {/* Footer Links */}
          <div className="mt-12 flex justify-center gap-6 text-xs text-slate-400 font-medium">
            <a className="hover:text-blue-600" href="#">Help Center</a>
            <a className="hover:text-blue-600" href="#">Privacy Policy</a>
            <a className="hover:text-blue-600" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
}
