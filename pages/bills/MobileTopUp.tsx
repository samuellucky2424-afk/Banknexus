import React from 'react';
import { useNavigate } from 'react-router-dom';

const MobileTopUp: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-slate-900 dark:text-white">
            <div className="w-full max-w-3xl flex flex-col shadow-2xl relative pb-32">
                <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md flex items-center p-4 justify-between">
                    <div onClick={() => navigate('/dashboard')} className="flex size-12 items-center cursor-pointer"><span className="material-symbols-outlined">arrow_back_ios</span></div>
                    <h2 className="text-lg font-bold flex-1 text-center pr-12">Mobile Top-up</h2>
                </header>

                <section className="mt-4 px-4 max-w-xl mx-auto w-full">
                    <h3 className="font-bold text-lg mb-2">Enter Recipient</h3>
                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-1 flex items-center">
                        <input className="w-full bg-transparent border-none h-12 px-4 focus:ring-0" placeholder="+1 (555) 000-0000" />
                        <span className="material-symbols-outlined text-blue-500 px-4">contact_page</span>
                    </div>
                    <div className="flex gap-4 py-4 overflow-x-auto no-scrollbar">
                        <div className="flex flex-col items-center gap-1 min-w-[64px]"><div className="w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold text-xs">JM</div><span className="text-[10px]">John</span></div>
                        <div className="flex flex-col items-center gap-1 min-w-[64px]"><div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">DA</div><span className="text-[10px]">Dad</span></div>
                    </div>
                </section>

                <section className="mt-4 px-4 max-w-xl mx-auto w-full">
                    <h3 className="font-bold text-lg mb-2">Select Operator</h3>
                    <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
                         {['Vodafone', 'Orange', 'T-Mobile', 'Verizon'].map((op, i) => (
                             <div key={i} className="flex flex-col items-center gap-2 min-w-[60px] cursor-pointer opacity-60 hover:opacity-100">
                                 <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                                 <p className="text-xs font-bold">{op}</p>
                             </div>
                         ))}
                    </div>
                </section>

                <section className="mt-4 px-4 max-w-xl mx-auto w-full">
                     <h3 className="font-bold text-lg mb-2">Select Package</h3>
                     <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-4">
                         <button className="flex-1 py-2 text-sm font-bold bg-white dark:bg-slate-700 rounded-lg shadow-sm">Airtime</button>
                         <button className="flex-1 py-2 text-sm font-bold text-slate-500">Data</button>
                     </div>
                     <div className="grid grid-cols-3 gap-3">
                         {['$10', '$20', '$50', '$100', '$200'].map(amt => (
                             <button key={amt} className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-500">
                                 <span className="text-lg font-extrabold">{amt}</span>
                             </button>
                         ))}
                     </div>
                </section>

                <footer className="fixed bottom-0 left-0 right-0 max-w-3xl mx-auto p-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
                     <div className="flex justify-between mb-4">
                         <div><p className="text-xs text-slate-500">Total</p><p className="text-xl font-extrabold">$10.00</p></div>
                     </div>
                     <button className="w-full bg-primary text-white font-extrabold py-4 rounded-xl">Proceed to Pay</button>
                </footer>
            </div>
        </div>
    );
};
export default MobileTopUp;