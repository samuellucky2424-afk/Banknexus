import React from 'react';
import { useNavigate } from 'react-router-dom';

const MoreServices: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-[#0d121b] dark:text-white">
            <div className="w-full max-w-5xl mx-auto flex flex-col shadow-2xl relative pb-24">
                <header className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between">
                     <div onClick={() => navigate('/dashboard')} className="flex size-12 shrink-0 items-center cursor-pointer"><span className="material-symbols-outlined text-primary text-2xl">arrow_back_ios</span></div>
                     <h2 className="text-lg font-bold flex-1 text-center">More Services</h2>
                     <div className="size-12 flex items-center justify-end"><span className="material-symbols-outlined text-primary text-2xl">notifications</span></div>
                </header>
                
                <div className="px-4 py-2">
                     <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d121b] to-[#1e293b] border border-nexus-gold/30 shadow-lg relative overflow-hidden">
                         <div className="relative z-10">
                             <div className="flex items-center gap-2 mb-1"><span className="text-nexus-gold text-xs font-bold uppercase">Premium Benefit</span></div>
                             <h3 className="text-white text-xl font-bold mb-2">Nexus Gold Membership</h3>
                             <button className="bg-nexus-gold text-[#0d121b] px-4 py-2 rounded-lg text-sm font-bold">Upgrade Now</button>
                         </div>
                     </div>
                </div>

                <div className="flex items-center justify-between px-4 pt-6 pb-2">
                    <h3 className="text-lg font-bold">Banking Essentials</h3>
                    <span className="text-primary text-sm font-semibold">View All</span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                     {[
                         {icon: 'account_balance_wallet', label: 'Loan Application', sub: 'Quick approvals'},
                         {icon: 'monitoring', label: 'Investments', sub: 'Monitor portfolio'},
                         {icon: 'savings', label: 'Fixed Deposit', sub: 'Guaranteed returns'},
                         {icon: 'credit_card', label: 'Virtual Cards', sub: 'Secure shopping'}
                     ].map((s, i) => (
                         <div key={i} className="flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e293b] p-4 shadow-sm">
                             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><span className="material-symbols-outlined">{s.icon}</span></div>
                             <div><h2 className="font-bold">{s.label}</h2><p className="text-xs text-gray-400">{s.sub}</p></div>
                         </div>
                     ))}
                </div>
            </div>
        </div>
    );
};
export default MoreServices;