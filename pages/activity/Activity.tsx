import React from 'react';
import { useNavigate } from 'react-router-dom';

const Activity: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-slate-900 dark:text-white font-display">
      <div className="w-full max-w-5xl mx-auto flex flex-col pb-6">
        <header className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 flex items-center justify-between">
            <button onClick={() => navigate('/dashboard')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined">arrow_back_ios_new</span></button>
            <h1 className="text-lg font-bold">Activity</h1>
            <button className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined">tune</span></button>
        </header>

        {/* Search */}
        <div className="px-4 pb-4">
            <div className="flex items-center bg-white dark:bg-[#1c2433] rounded-xl h-12 px-4 shadow-sm border border-gray-100 dark:border-gray-800">
                <span className="material-symbols-outlined text-gray-400">search</span>
                <input className="w-full bg-transparent border-none focus:ring-0 ml-2" placeholder="Search transactions" />
            </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 px-4 pb-6 overflow-x-auto no-scrollbar">
            {['All', 'Income', 'Expense', 'Transfers', 'Bills'].map((filter, i) => (
                <button key={i} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap ${i === 0 ? 'bg-primary text-white' : 'bg-white dark:bg-[#1c2433] border border-gray-100 dark:border-gray-700'}`}>
                    {filter}
                </button>
            ))}
        </div>

        {/* List */}
        <div className="px-4 space-y-6">
            <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">Today</h3>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-[#1c2433] rounded-xl shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold">N</div>
                            <div><p className="font-bold">Netflix</p><p className="text-xs text-gray-500">Subscription</p></div>
                        </div>
                        <span className="font-bold text-slate-900 dark:text-white">- $15.99</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-[#1c2433] rounded-xl shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 font-bold"><span className="material-symbols-outlined">arrow_downward</span></div>
                            <div><p className="font-bold">John Doe</p><p className="text-xs text-gray-500">Transfer Received</p></div>
                        </div>
                        <span className="font-bold text-green-600">+ $150.00</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">Yesterday</h3>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-[#1c2433] rounded-xl shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold"><span className="material-symbols-outlined">shopping_cart</span></div>
                            <div><p className="font-bold">Whole Foods</p><p className="text-xs text-gray-500">Groceries</p></div>
                        </div>
                        <span className="font-bold text-slate-900 dark:text-white">- $84.20</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;