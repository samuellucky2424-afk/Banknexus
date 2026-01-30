import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InternationalTransfer: React.FC = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex justify-center">
      <div className="w-full max-w-5xl flex flex-col pb-40">
        <header className="px-6 py-4 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-40 border-b border-gray-100 dark:border-gray-800">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </button>
            <h1 className="text-lg font-bold">International Transfer</h1>
            <div className="w-10"></div>
        </header>

        <main className="px-6 py-6 space-y-8 max-w-2xl mx-auto w-full">
            {/* Amount Section */}
            <section className="bg-white dark:bg-[#1c2433] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Amount to Send</h2>
                <div className="flex items-end gap-2">
                    <span className="text-4xl font-extrabold text-primary mb-1">$</span>
                    <input 
                        type="number" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full bg-transparent border-none p-0 text-5xl font-extrabold focus:ring-0 text-slate-900 dark:text-white placeholder-gray-300" 
                        placeholder="0.00"
                    />
                    <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 mb-2">
                        <span className="font-bold text-sm mr-1">USD</span>
                        <span className="material-symbols-outlined text-sm">expand_more</span>
                    </div>
                </div>
                <div className="flex justify-between mt-4 text-sm text-gray-500">
                    <span>Available Balance: <span className="font-bold text-slate-900 dark:text-white">$12,450.00</span></span>
                    <button onClick={() => setAmount('12450.00')} className="text-primary font-bold hover:text-primary-hover transition-colors">Max</button>
                </div>
            </section>

            {/* Recipient Form */}
            <section className="space-y-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Recipient Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Recipient Name</label>
                        <input className="w-full h-14 bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-primary font-semibold" placeholder="e.g. John Doe" />
                    </div>
                    
                    <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Country</label>
                         <div className="relative">
                            <select className="w-full h-14 bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 rounded-xl px-4 appearance-none focus:ring-2 focus:ring-primary font-semibold">
                                <option>United Kingdom</option>
                                <option>France</option>
                                <option>Germany</option>
                                <option>Japan</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">expand_more</span>
                         </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone Number</label>
                        <input className="w-full h-14 bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 rounded-xl px-4 focus:ring-2 focus:ring-primary font-semibold" placeholder="+44 7911 123456" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Bank Name</label>
                        <input className="w-full h-14 bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 rounded-xl px-4 focus:ring-2 focus:ring-primary font-semibold" placeholder="e.g. Barclays" />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">SWIFT / IBAN</label>
                        <input className="w-full h-14 bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 rounded-xl px-4 focus:ring-2 focus:ring-primary font-mono text-sm tracking-wide" placeholder="GB82 CPBK 0892 9965 2109" />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Account Number</label>
                        <input className="w-full h-14 bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 rounded-xl px-4 focus:ring-2 focus:ring-primary font-mono text-sm tracking-wide" placeholder="12345678" />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Reference (Optional)</label>
                        <input className="w-full h-14 bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 rounded-xl px-4 focus:ring-2 focus:ring-primary font-semibold" placeholder="e.g. Invoice #2024" />
                    </div>
                </div>
            </section>
        </main>

        <div className="fixed bottom-0 left-0 right-0 max-w-5xl mx-auto bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 p-6 pb-8 z-50">
            <button onClick={() => navigate('/transfer/review-initial')} className="w-full bg-primary hover:bg-primary-hover text-white font-extrabold py-4 rounded-xl shadow-lg shadow-primary/20 transform transition-transform active:scale-[0.99] flex items-center justify-center gap-2">
                Review Transfer <span className="material-symbols-outlined">arrow_forward</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default InternationalTransfer;