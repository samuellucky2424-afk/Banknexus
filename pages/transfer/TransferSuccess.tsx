import React from 'react';
import { useNavigate } from 'react-router-dom';

const TransferSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex justify-center">
        <div className="relative flex h-screen w-full flex-col max-w-3xl overflow-hidden shadow-2xl">
            <div className="flex items-center p-4 pb-2 justify-between">
                <div onClick={() => navigate('/dashboard')} className="flex size-12 shrink-0 items-center justify-center cursor-pointer">
                    <span className="material-symbols-outlined">close</span>
                </div>
                <h2 className="text-lg font-bold flex-1 text-center pr-12">Transfer Status</h2>
            </div>
            
            <div className="flex-1 overflow-y-auto px-4 max-w-lg mx-auto w-full">
                <div className="flex justify-center pt-10 pb-6">
                    <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                            <span className="material-symbols-outlined text-white text-4xl font-bold">check</span>
                        </div>
                    </div>
                </div>
                
                <div className="text-center">
                    <h1 className="text-3xl font-bold leading-tight pb-1 pt-2">Transfer Successful</h1>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">Your money is on its way!</p>
                </div>
                
                <div className="text-center py-6">
                    <h1 className="text-[40px] font-extrabold leading-tight">$1,250.00</h1>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-xl p-5 shadow-sm border border-black/5 dark:border-white/5 space-y-3">
                     <div className="flex justify-between"><p className="text-blue-600 text-sm font-medium">Recipient</p><p className="font-semibold text-sm">Alex Thompson</p></div>
                     <div className="flex justify-between"><p className="text-blue-600 text-sm font-medium">Bank</p><p className="font-semibold text-sm">Nexus Savings</p></div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 mt-0.5">info</span>
                    <p className="text-xs leading-snug">Standard transfers usually arrive within 1-2 business days.</p>
                </div>
            </div>

            <div className="p-4 space-y-3 pb-8 max-w-lg mx-auto w-full">
                <button onClick={() => navigate('/dashboard')} className="w-full h-14 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 active:scale-[0.98]">Go to Dashboard</button>
                <button onClick={() => navigate('/transfer/receipt')} className="w-full h-14 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 font-bold rounded-xl flex items-center justify-center gap-2 active:scale-[0.98]">
                    <span className="material-symbols-outlined">download</span> Download Receipt
                </button>
            </div>
        </div>
    </div>
  );
};

export default TransferSuccess;