import React from 'react';
import { useNavigate } from 'react-router-dom';

const LocalTransfer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex justify-center">
       <div className="w-full max-w-5xl flex flex-col pb-40">
        <div className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
            <div onClick={() => navigate(-1)} className="flex items-center gap-2 cursor-pointer p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </div>
            <h2 className="text-lg font-bold">Local Transfer</h2>
            <div className="w-10"></div>
        </div>

        <div className="px-6 py-6 space-y-8 max-w-2xl mx-auto w-full">
            
            {/* Amount Section */}
            <section className="bg-white dark:bg-[#1c2433] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Amount to Send</h2>
                <div className="flex items-end gap-2">
                    <span className="text-4xl font-extrabold text-primary mb-1">$</span>
                    <input 
                        type="number" 
                        className="w-full bg-transparent border-none p-0 text-5xl font-extrabold focus:ring-0 text-slate-900 dark:text-white placeholder-gray-300" 
                        placeholder="0.00"
                    />
                </div>
                 <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
                    {['$50', '$100', '$500', '$1000'].map(val => (
                        <button key={val} className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm font-bold hover:border-primary hover:text-primary transition-colors">{val}</button>
                    ))}
                </div>
            </section>

            {/* Recipient Form */}
            <section className="space-y-5">
                 <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Recipient Details</h2>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Recipient Name</label>
                    <input className="w-full h-14 bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-primary font-semibold" placeholder="Full Name" />
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Bank Name</label>
                    <div className="relative">
                        <select className="w-full h-14 bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 rounded-xl px-4 appearance-none focus:ring-2 focus:ring-primary font-semibold">
                            <option>Bank Nexus</option>
                            <option>Chase Bank</option>
                            <option>Bank of America</option>
                            <option>Wells Fargo</option>
                            <option>Citi</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">account_balance</span>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Account Number</label>
                    <input type="number" className="w-full h-14 bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 rounded-xl px-4 focus:ring-2 focus:ring-primary font-mono text-lg tracking-wide" placeholder="0000 0000 0000" />
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Reference</label>
                    <div className="relative">
                        <input className="w-full h-14 bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 rounded-xl px-4 focus:ring-2 focus:ring-primary font-semibold pl-11" placeholder="What's this for?" />
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">description</span>
                    </div>
                 </div>
            </section>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm flex justify-center border-t border-gray-100 dark:border-gray-800">
            <button onClick={() => navigate('/transfer/review-initial')} className="w-full max-w-2xl bg-primary text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-primary-hover transition-colors">
                Review Transfer <span className="material-symbols-outlined">arrow_forward</span>
            </button>
        </div>
       </div>
    </div>
  );
};

export default LocalTransfer;