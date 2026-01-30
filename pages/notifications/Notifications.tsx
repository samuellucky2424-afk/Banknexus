import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notifications: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-slate-900 dark:text-white font-display">
      <div className="w-full max-w-5xl mx-auto flex flex-col pb-6">
        <header className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
            <button onClick={() => navigate('/dashboard')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined">arrow_back_ios_new</span></button>
            <h1 className="text-lg font-bold">Notifications</h1>
            <button className="text-xs font-bold text-primary">Read All</button>
        </header>

        <div className="p-4 space-y-4">
            <div className="flex gap-4 p-4 bg-white dark:bg-[#1c2433] rounded-xl border-l-4 border-primary shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><span className="material-symbols-outlined">payments</span></div>
                <div className="flex-1">
                    <h4 className="font-bold text-sm mb-1">Payment Received</h4>
                    <p className="text-xs text-gray-500 mb-2">You received $150.00 from John Doe.</p>
                    <p className="text-[10px] text-gray-400">2 hours ago</p>
                </div>
            </div>

            <div className="flex gap-4 p-4 bg-white dark:bg-[#1c2433] rounded-xl border-l-4 border-transparent shadow-sm opacity-80">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500"><span className="material-symbols-outlined">lock</span></div>
                <div className="flex-1">
                    <h4 className="font-bold text-sm mb-1">Login Attempt</h4>
                    <p className="text-xs text-gray-500 mb-2">New login detected from Chrome on Mac OS.</p>
                    <p className="text-[10px] text-gray-400">Yesterday, 10:45 PM</p>
                </div>
            </div>

            <div className="flex gap-4 p-4 bg-white dark:bg-[#1c2433] rounded-xl border-l-4 border-transparent shadow-sm opacity-80">
                <div className="w-10 h-10 rounded-full bg-nexus-gold/20 flex items-center justify-center text-nexus-gold"><span className="material-symbols-outlined">star</span></div>
                <div className="flex-1">
                    <h4 className="font-bold text-sm mb-1">New Feature Alert</h4>
                    <p className="text-xs text-gray-500 mb-2">Check out our new Vault features to save smarter.</p>
                    <p className="text-[10px] text-gray-400">2 days ago</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;