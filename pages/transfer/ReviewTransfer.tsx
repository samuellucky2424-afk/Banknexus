import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewTransfer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-white transition-colors duration-200 min-h-screen flex justify-center">
        <div className="relative flex h-full min-h-screen w-full max-w-3xl flex-col overflow-x-hidden shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800">
                <div onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back</span>
                </div>
                <h2 className="text-lg font-bold flex-1 text-center pr-10">Review Transfer</h2>
            </div>

            <div className="flex w-full flex-row items-center justify-center gap-3 py-6">
                <div className="h-1.5 w-8 rounded-full bg-primary/20"></div>
                <div className="h-1.5 w-8 rounded-full bg-primary/20"></div>
                <div className="h-1.5 w-12 rounded-full bg-primary"></div>
            </div>

            <div className="flex flex-col items-center px-4 mb-6">
                <h3 className="text-4xl font-extrabold leading-tight text-center pb-1">$1,250.00</h3>
                <p className="text-primary font-semibold text-sm leading-normal bg-primary/10 px-3 py-1 rounded-full">No Transfer Fee</p>
            </div>

            <div className="px-4 space-y-6 pb-32 max-w-xl mx-auto w-full">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Account Details</h4>
                        <button className="text-primary text-sm font-bold">Edit</button>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">account_balance_wallet</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">From</span>
                                <span className="font-bold">Main Checking (...4902)</span>
                                <span className="text-gray-500 dark:text-gray-400 text-sm">Available: $8,420.50</span>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center">
                             <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-dashed border-gray-200 dark:border-gray-700"></div></div>
                             <div className="relative bg-white dark:bg-gray-900 px-2"><span className="material-symbols-outlined text-gray-400">arrow_downward</span></div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600">
                                <span className="material-symbols-outlined">person</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">To</span>
                                <span className="font-bold">Sarah Jenkins</span>
                                <span className="text-gray-500 dark:text-gray-400 text-sm">Nexus Bank • Savings (...8821)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
                    <h4 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Summary</h4>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center"><span className="text-gray-600 dark:text-gray-400">Transfer Amount</span><span className="font-bold">$1,250.00</span></div>
                        <div className="flex justify-between items-center"><span className="text-gray-600 dark:text-gray-400">Transfer Fee</span><span className="text-blue-500 font-bold">$0.00</span></div>
                        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center"><span className="font-bold">Total to Debit</span><span className="text-primary text-xl font-extrabold">$1,250.00</span></div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 max-w-3xl mx-auto p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
                <button onClick={() => navigate('/transfer/verify')} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined">face</span>
                    Confirm Transfer
                </button>
            </div>
        </div>
    </div>
  );
};

export default ReviewTransfer;