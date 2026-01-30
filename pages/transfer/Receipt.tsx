import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Receipt: React.FC = () => {
  const navigate = useNavigate();
  const [type, setType] = useState<'local' | 'international'>('local');

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display flex justify-center text-slate-900 dark:text-white">
        <div className="max-w-3xl w-full min-h-screen flex flex-col relative overflow-hidden pb-12">
            {/* Nav */}
            <nav className="flex items-center p-4 justify-between z-10">
                <div onClick={() => navigate(-1)} className="flex size-12 shrink-0 items-center justify-start cursor-pointer">
                    <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
                </div>
                {/* Type Toggle for Demo */}
                <div className="flex gap-1 bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
                    <button onClick={() => setType('local')} className={`text-xs px-3 py-1 rounded-md font-bold transition-all ${type === 'local' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}>Local</button>
                    <button onClick={() => setType('international')} className={`text-xs px-3 py-1 rounded-md font-bold transition-all ${type === 'international' ? 'bg-white dark:bg-gray-700 shadow-sm text-indigo-500' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}>International</button>
                </div>
                <div className="flex size-12 items-center justify-end">
                    <span className="material-symbols-outlined">share</span>
                </div>
            </nav>

            <main className="flex-1 flex flex-col items-center px-4 max-w-lg mx-auto w-full relative z-0">
                 
                 {/* Success Icon */}
                 <div className="mt-2 mb-6 flex flex-col items-center animate-in fade-in zoom-in duration-500">
                     <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 border-white dark:border-background-dark shadow-xl mb-4 ${type === 'local' ? 'bg-green-100 text-green-600' : 'bg-indigo-100 text-indigo-600'}`}>
                        <span className="material-symbols-outlined text-4xl font-bold">check</span>
                     </div>
                     <h1 className="text-2xl font-extrabold leading-tight text-center">Transfer Successful</h1>
                     <p className="text-sm text-gray-500 dark:text-gray-400">Transaction Completed</p>
                 </div>
                 
                 {/* Receipt Card */}
                 <div className="w-full relative filter drop-shadow-xl mb-8">
                     {/* Ticket Top - Distinct Headers */}
                     <div className={`w-full rounded-t-2xl p-6 relative overflow-hidden text-white ${type === 'local' ? 'bg-gradient-to-br from-primary to-blue-600' : 'bg-gradient-to-br from-indigo-600 to-purple-700'}`}>
                         {/* Watermark Icon */}
                         <div className="absolute -right-6 -top-6 text-white/10 rotate-12 pointer-events-none">
                             <span className="material-symbols-outlined text-[120px]">{type === 'local' ? 'account_balance' : 'public'}</span>
                         </div>

                         <div className="relative z-10 flex flex-col items-center gap-1">
                             <p className="text-xs font-bold uppercase tracking-widest opacity-80">Total Amount</p>
                             <h2 className="text-4xl font-extrabold tracking-tight">
                                {type === 'local' ? '$1,250.00' : '$3,400.00'}
                             </h2>
                             {type === 'international' && <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-white/90 font-medium mt-1">USD → EUR</span>}
                         </div>
                     </div>

                     {/* Ticket Body */}
                     <div className="bg-white dark:bg-[#1e2433] rounded-b-2xl p-6 relative">
                         {/* Punch holes visualization */}
                         <div className="absolute -top-3 left-0 w-full flex justify-between px-2">
                             <div className="w-6 h-6 rounded-full bg-background-light dark:bg-background-dark -ml-3"></div>
                             <div className="flex-1 border-t-2 border-dashed border-gray-300 dark:border-gray-600 mt-3 mx-2 opacity-50"></div>
                             <div className="w-6 h-6 rounded-full bg-background-light dark:bg-background-dark -mr-3"></div>
                         </div>

                         <div className="flex flex-col gap-6 pt-4">
                            
                            {/* Visual Transaction Flow */}
                            <div className="relative pl-6 border-l-2 border-dashed border-gray-200 dark:border-gray-700 space-y-8 ml-1">
                                
                                {/* Sender */}
                                <div className="relative">
                                     <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-[#1e2433]"></div>
                                     <div>
                                         <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">From</p>
                                         <p className="font-bold text-sm text-slate-900 dark:text-white">Alex User</p>
                                         <p className="text-xs text-gray-400">Main Checking •••• 4902</p>
                                     </div>
                                </div>

                                {/* Recipient */}
                                <div className="relative">
                                     <div className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-white dark:border-[#1e2433] ${type === 'local' ? 'bg-primary' : 'bg-indigo-500'}`}></div>
                                     <div>
                                         <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">To</p>
                                         <p className="font-bold text-sm text-slate-900 dark:text-white">{type === 'local' ? 'Jonathan Sterling' : 'Marie Dubois'}</p>
                                         <p className="text-xs text-gray-400">{type === 'local' ? 'Nexus Savings •••• 8829' : 'BNP Paribas •••• 9001'}</p>
                                     </div>
                                </div>
                            </div>

                            <div className="h-px bg-gray-100 dark:bg-gray-700/50 w-full"></div>

                            {/* Details Grid */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Date & Time</span>
                                    <span className="font-medium text-slate-900 dark:text-white">Oct 24, 2023 • 10:42 AM</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Transaction ID</span>
                                    <span className="font-mono font-medium text-xs text-slate-700 dark:text-slate-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">#BN-9928371</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Reference</span>
                                    <span className="font-medium text-slate-900 dark:text-white truncate max-w-[150px] text-right">{type === 'local' ? 'Dinner & Drinks' : 'Invoice #2024'}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Status</span>
                                    <span className="font-bold text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Completed</span>
                                </div>
                                
                                {type === 'international' && (
                                    <>
                                        <div className="h-px bg-gray-100 dark:bg-gray-700/50 w-full my-2"></div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500 dark:text-gray-400">Exchange Rate</span>
                                            <span className="font-medium text-slate-900 dark:text-white">1 USD = 0.94 EUR</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500 dark:text-gray-400">Transfer Fee</span>
                                            <span className="font-medium text-slate-900 dark:text-white">$15.00</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500 dark:text-gray-400">SWIFT Code</span>
                                            <span className="font-mono text-xs text-slate-700 dark:text-slate-300">BNPARPP</span>
                                        </div>
                                    </>
                                )}
                            </div>
                         </div>
                         
                         {/* Barcode Mockup */}
                         <div className="mt-8 pt-6 border-t border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center gap-2 opacity-60">
                             <div className="h-10 w-3/4 bg-slate-800 dark:bg-white" style={{maskImage: 'repeating-linear-gradient(90deg, black, black 2px, transparent 2px, transparent 4px)', WebkitMaskImage: 'repeating-linear-gradient(90deg, black, black 2px, transparent 2px, transparent 4px)'}}></div>
                             <p className="text-[10px] font-mono tracking-widest text-slate-500 dark:text-slate-400">00192 8381 9928 1102</p>
                         </div>
                     </div>
                 </div>

                 <div className="w-full flex flex-col gap-3">
                     <button className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white py-3 rounded-xl font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 shadow-sm">
                        <span className="material-symbols-outlined">download</span> Download Receipt
                     </button>
                     <button onClick={() => navigate('/dashboard')} className="text-primary font-bold text-sm py-2 hover:underline">Back to Dashboard</button>
                 </div>
            </main>
        </div>
    </div>
  );
};

export default Receipt;