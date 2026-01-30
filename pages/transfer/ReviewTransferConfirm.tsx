import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewTransferConfirm: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-slate-900 dark:text-white">
            <div className="max-w-3xl w-full min-h-screen flex flex-col">
                <div className="flex items-center p-4 justify-between sticky top-0 z-10 bg-background-light dark:bg-background-dark">
                    <div onClick={() => navigate(-1)} className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                        <span className="material-symbols-outlined">arrow_back_ios_new</span>
                    </div>
                    <h2 className="font-bold text-lg text-center flex-1 pr-12">Review Transfer</h2>
                </div>
                <div className="flex-1 flex flex-col items-center px-6 pt-6 max-w-lg mx-auto w-full">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
                    <h2 className="text-2xl font-bold">John Doe</h2>
                    <p className="text-sm text-gray-500">Nexus Savings •••• 5678</p>
                    <div className="mt-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Trusted Contact</div>
                    
                    <div className="mt-8 text-center">
                        <p className="text-gray-500 text-sm font-medium">You are sending</p>
                        <h1 className="text-5xl font-extrabold mt-2">$100.00</h1>
                    </div>

                    <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-5 mt-8 border border-gray-100 dark:border-zinc-800">
                        <div className="flex justify-between py-3 border-b border-gray-100 dark:border-zinc-800">
                            <span className="text-gray-500 text-sm">Fee</span>
                            <span className="font-semibold text-sm">$0.50</span>
                        </div>
                        <div className="flex justify-between pt-4">
                            <span className="font-bold">Total</span>
                            <span className="font-extrabold text-blue-600">$100.50</span>
                        </div>
                    </div>
                </div>
                <div className="p-6 max-w-lg mx-auto w-full">
                    <button onClick={() => navigate('/transfer/verify')} className="w-full bg-primary text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                        <span>Confirm & Pay</span>
                        <span className="material-symbols-outlined text-sm">lock</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ReviewTransferConfirm;