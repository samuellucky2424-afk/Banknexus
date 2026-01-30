import React from 'react';
import { useNavigate } from 'react-router-dom';

const TransferType: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex justify-center">
      <div className="relative flex h-full min-h-screen w-full max-w-3xl flex-col shadow-2xl overflow-x-hidden">
        {/* Header */}
        <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
            <div onClick={() => navigate(-1)} className="flex size-12 shrink-0 items-center cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 rounded-full justify-center transition-colors">
                <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </div>
            <h2 className="text-lg font-bold flex-1 text-center pr-12">Transfer Type</h2>
        </div>

        <div className="px-6 mt-6 mb-4">
            <h3 className="text-2xl font-extrabold pb-2 leading-tight">How would you like<br/>to send money?</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Choose the best option for your transaction.</p>
        </div>

        <div className="flex flex-col gap-4 px-6 mt-2">
            
            {/* Local Transfer Card */}
            <div onClick={() => navigate('/transfer/local')} className="relative group cursor-pointer overflow-hidden bg-white dark:bg-[#1c2433] p-6 rounded-3xl shadow-lg shadow-blue-900/5 border border-white/50 dark:border-gray-800 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                {/* Background Decor */}
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                     <span className="material-symbols-outlined text-[120px] text-blue-600">account_balance</span>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                            <span className="material-symbols-outlined text-3xl">account_balance</span>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Local Transfer</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Send to domestic banks instantly</p>
                            <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Free</span>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">chevron_right</span>
                </div>
            </div>
            
            {/* International Transfer Card */}
            <div onClick={() => navigate('/transfer/international')} className="relative group cursor-pointer overflow-hidden bg-white dark:bg-[#1c2433] p-6 rounded-3xl shadow-lg shadow-indigo-900/5 border border-white/50 dark:border-gray-800 hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
                {/* Background Decor */}
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                     <span className="material-symbols-outlined text-[120px] text-indigo-600">currency_exchange</span>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-sm">
                            <span className="material-symbols-outlined text-3xl">currency_exchange</span>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">International</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Multi-currency wire transfers</p>
                            <div className="flex gap-2 mt-2">
                                <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">SWIFT</span>
                                <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 px-2 py-0.5 rounded">SEPA</span>
                            </div>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-gray-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all">chevron_right</span>
                </div>
            </div>

            {/* Helper Text */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 flex items-start gap-3">
                <span className="material-symbols-outlined text-slate-400 mt-0.5">info</span>
                <div>
                    <h5 className="text-sm font-bold text-slate-700 dark:text-slate-300">Need help choosing?</h5>
                    <p className="text-xs text-slate-500 mt-1">Local transfers typically arrive within minutes. International transfers may take 1-3 business days depending on the destination currency.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TransferType;