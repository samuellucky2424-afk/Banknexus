import React from 'react';
import { useNavigate } from 'react-router-dom';

const Savings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-slate-900 dark:text-white font-display">
      <div className="w-full max-w-5xl mx-auto flex flex-col pb-6">
        <header className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
            <button onClick={() => navigate('/dashboard')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined">arrow_back_ios_new</span></button>
            <h1 className="text-lg font-bold">My Savings</h1>
            <button className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined">add</span></button>
        </header>

        <div className="p-5">
            <div className="bg-gradient-to-br from-indigo-600 to-primary rounded-2xl p-6 text-white shadow-xl shadow-indigo-500/20 mb-6">
                <p className="text-indigo-100 text-sm font-medium mb-1">Total Savings</p>
                <h2 className="text-3xl font-extrabold mb-4">$32,590.00</h2>
                <div className="flex gap-3">
                    <div className="flex-1 bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
                        <p className="text-xs text-indigo-200 mb-1">Interest Earned</p>
                        <p className="font-bold">+$124.50</p>
                    </div>
                    <div className="flex-1 bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
                        <p className="text-xs text-indigo-200 mb-1">APY Rate</p>
                        <p className="font-bold">4.50%</p>
                    </div>
                </div>
            </div>

            <h3 className="font-bold text-lg mb-4">Your Vaults</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { name: 'Dream Home', target: '$50,000', current: '$15,000', progress: 30, icon: 'house', color: 'bg-emerald-500' },
                    { name: 'New Car', target: '$25,000', current: '$8,250', progress: 33, icon: 'directions_car', color: 'bg-orange-500' },
                    { name: 'Emergency Fund', target: '$10,000', current: '$9,340', progress: 93, icon: 'shield', color: 'bg-blue-500' },
                    { name: 'Vacation', target: '$5,000', current: '$1,200', progress: 24, icon: 'flight', color: 'bg-purple-500' },
                ].map((vault, i) => (
                    <div key={i} className="bg-white dark:bg-[#1c2433] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full ${vault.color} flex items-center justify-center text-white shadow-md`}>
                                    <span className="material-symbols-outlined text-xl">{vault.icon}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold">{vault.name}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Target: {vault.target}</p>
                                </div>
                            </div>
                            <span className="font-bold text-lg">{vault.current}</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                            <div className={`h-full ${vault.color} rounded-full`} style={{width: `${vault.progress}%`}}></div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs font-semibold text-gray-400">
                            <span>{vault.progress}% Achieved</span>
                            <span className="text-primary cursor-pointer hover:underline">Add Money</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <button className="w-full mt-6 py-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 text-gray-400 font-bold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined">add_circle</span> Create New Vault
            </button>
        </div>
      </div>
    </div>
  );
};

export default Savings;