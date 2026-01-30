import React from 'react';
import { useNavigate } from 'react-router-dom';

const PayBills: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-[#0d1c0d] dark:text-white">
            <div className="w-full max-w-5xl mx-auto flex flex-col relative shadow-2xl overflow-x-hidden pb-24">
                <header className="flex items-center p-4 justify-between sticky top-0 bg-background-light dark:bg-background-dark z-20">
                    <div onClick={() => navigate('/dashboard')} className="flex size-12 shrink-0 items-center cursor-pointer"><span className="material-symbols-outlined">arrow_back_ios</span></div>
                    <h2 className="text-lg font-bold flex-1 text-center">Pay Bills</h2>
                    <div className="w-12 flex justify-end"><span className="material-symbols-outlined">history</span></div>
                </header>
                
                <div className="px-4 py-3">
                    <div className="flex w-full items-center bg-white dark:bg-[#1c2433] rounded-xl h-12 px-4">
                        <span className="material-symbols-outlined text-blue-600">search</span>
                        <input className="w-full bg-transparent border-none focus:ring-0 ml-2" placeholder="Search billers" />
                    </div>
                </div>

                <div className="px-4 pt-4 flex justify-between items-center"><h3 className="text-lg font-bold">Quick Pay</h3><button className="text-blue-600 text-sm font-bold">See all</button></div>
                <div className="flex overflow-x-auto gap-5 px-4 py-3 no-scrollbar md:grid md:grid-cols-4 md:overflow-visible">
                     <div className="flex flex-col items-center gap-2 min-w-[64px] text-center">
                         <div className="w-full aspect-square rounded-full border-2 border-dashed border-blue-600/40 flex items-center justify-center bg-white dark:bg-[#1c2433]"><span className="material-symbols-outlined text-blue-600">add</span></div>
                         <p className="text-xs font-semibold">Add New</p>
                     </div>
                     {['Electric Co.', 'City Water', 'Home WiFi'].map((name, i) => (
                         <div key={i} className="flex flex-col items-center gap-2 min-w-[64px] text-center">
                             <div className="w-full aspect-square rounded-full bg-gray-200 dark:bg-gray-700"></div>
                             <p className="text-xs truncate w-full">{name}</p>
                         </div>
                     ))}
                </div>

                <h3 className="text-lg font-bold px-4 pt-6 pb-2">Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                    {[
                        {icon: 'lightbulb', label: 'Utilities', sub: '3 Active bills'},
                        {icon: 'router', label: 'Internet', sub: '2 Bills due'},
                        {icon: 'health_and_safety', label: 'Insurance', sub: 'Monthly'},
                        {icon: 'account_balance', label: 'Taxes', sub: 'Property & Income'}
                    ].map((cat, i) => (
                        <div key={i} className="bg-white dark:bg-[#1c2433] p-5 rounded-2xl shadow-sm flex flex-col items-start gap-4 active:scale-95 transition-transform cursor-pointer">
                            <div className="bg-blue-600/20 p-3 rounded-xl"><span className="material-symbols-outlined text-blue-600 text-3xl">{cat.icon}</span></div>
                            <div><h4 className="font-bold">{cat.label}</h4><p className="text-xs text-blue-600">{cat.sub}</p></div>
                        </div>
                    ))}
                </div>
                
                <div className="px-4 py-6">
                    <div className="bg-blue-700 p-5 rounded-2xl flex justify-between items-center relative overflow-hidden text-white">
                        <div className="relative z-10"><h4 className="font-extrabold text-lg">Never miss a bill!</h4><button className="mt-3 bg-black text-white px-4 py-2 rounded-lg font-bold text-xs uppercase">Configure</button></div>
                        <span className="material-symbols-outlined text-[100px] absolute -right-4 -bottom-4 text-white/20">auto_awesome</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PayBills;