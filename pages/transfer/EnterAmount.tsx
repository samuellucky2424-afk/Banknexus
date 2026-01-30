import React from 'react';
import { useNavigate } from 'react-router-dom';

const EnterAmount: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center">
        <div className="relative flex h-screen w-full max-w-3xl flex-col bg-background-light dark:bg-background-dark overflow-hidden shadow-2xl">
            <div className="flex items-center p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800">
                <div onClick={() => navigate(-1)} className="flex size-12 shrink-0 items-center justify-center cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </div>
                <h2 className="text-lg font-bold flex-1 text-center pr-12">Transfer Money</h2>
            </div>
            
            <div className="flex w-full flex-row items-center justify-center gap-3 py-4">
                <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="h-2 w-8 rounded-full bg-primary"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            </div>

            <div className="flex-1 overflow-y-auto pb-20 max-w-xl mx-auto w-full">
                <div className="px-4 py-2">
                    <div className="flex items-center gap-4 bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <div className="bg-gray-200 rounded-full h-12 w-12 shrink-0"></div>
                        <div className="flex flex-col justify-center flex-1">
                            <p className="font-semibold">To: Sarah Jenkins</p>
                            <p className="text-xs text-gray-400">Bank of America • •••• 8829</p>
                        </div>
                        <button className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-lg">Change</button>
                    </div>
                </div>

                <div className="py-12 px-4 flex flex-col items-center">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Enter Amount</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">$</span>
                        <h1 className="text-[64px] font-extrabold leading-none">1,250.00</h1>
                    </div>
                </div>

                <div className="px-4 space-y-4">
                    <div className="flex flex-col gap-2">
                        <label className="flex flex-col w-full">
                            <p className="text-sm font-semibold pb-2 px-1">From Account</p>
                            <div className="relative">
                                <select className="appearance-none w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 h-16 px-4 text-base font-medium shadow-sm">
                                    <option>Checking •••• 4432</option>
                                    <option>Savings •••• 9901</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                    <span className="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </label>
                        <div className="flex justify-between px-1">
                            <p className="text-xs text-gray-500">Available Balance</p>
                            <p className="text-primary text-xs font-bold">$12,450.00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 flex justify-center">
                <button onClick={() => navigate('/transfer/review-initial')} className="w-full max-w-md bg-primary text-white text-lg font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform">
                    Continue
                </button>
            </div>
        </div>
    </div>
  );
};

export default EnterAmount;