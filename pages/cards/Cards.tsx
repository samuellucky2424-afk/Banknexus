import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cards: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('settings');

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-slate-900 dark:text-white font-display">
      <div className="w-full max-w-5xl mx-auto flex flex-col pb-24">
        <header className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 flex items-center justify-between">
            <button onClick={() => navigate('/dashboard')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined">arrow_back_ios_new</span></button>
            <h1 className="text-lg font-bold">My Card</h1>
            <div className="w-10"></div>
        </header>

        {/* Card Display */}
        <div className="px-4 py-4 flex justify-center">
            <div className="w-full max-w-[380px] lg:max-w-[400px] aspect-[1.586/1] rounded-2xl p-5 sm:p-6 relative overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] active:scale-95 bg-[#001F3F] text-white flex flex-col justify-between cursor-pointer group ring-1 ring-white/10">
                <div className="absolute inset-0 opacity-20" style={{background: 'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.4) 0%, transparent 50%), linear-gradient(135deg, #001F3F 0%, #0055FF 100%)'}}></div>
                
                <div className="relative z-10 flex justify-between items-start">
                    <span className="font-bold text-base sm:text-lg tracking-wider opacity-90">Bank Nexus</span>
                    <span className="material-symbols-outlined text-white/80" style={{fontSize: 28}}>contactless</span>
                </div>

                <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-3 sm:mb-4">
                        <div className="bg-gradient-to-tr from-yellow-200 to-yellow-500 w-10 h-8 sm:w-12 sm:h-9 rounded-md shadow-sm border border-yellow-600/20"></div>
                    </div>
                    <p className="font-display font-medium text-lg sm:text-xl md:text-2xl tracking-widest mb-1 drop-shadow-md whitespace-nowrap">**** **** **** 8829</p>
                </div>

                <div className="relative z-10 flex justify-between items-end">
                    <div>
                        <p className="text-[10px] text-white/60 uppercase tracking-wider mb-0.5">Card Holder</p>
                        <p className="font-bold tracking-wide text-sm sm:text-lg">ALEX USER</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="italic font-bold text-xl sm:text-2xl leading-none mb-1">Visa</span>
                        <p className="text-[8px] sm:text-[10px] font-bold">Platinum</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Card Actions */}
        <div className="grid grid-cols-4 gap-2 px-4 mb-6 max-w-lg mx-auto w-full">
            {[{icon: 'lock', label: 'Freeze'}, {icon: 'pin', label: 'PIN'}, {icon: 'credit_score', label: 'Limits'}, {icon: 'more_horiz', label: 'More'}].map((action, i) => (
                <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className="w-14 h-14 rounded-full bg-white dark:bg-[#1c2433] flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors border border-gray-100 dark:border-gray-800">
                        <span className="material-symbols-outlined">{action.icon}</span>
                    </div>
                    <span className="text-xs font-semibold">{action.label}</span>
                </div>
            ))}
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-800 mx-4 mb-4 max-w-2xl md:mx-auto w-full">
            <button onClick={() => setActiveTab('settings')} className={`flex-1 pb-3 text-sm font-bold border-b-2 ${activeTab === 'settings' ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}>Settings</button>
            <button onClick={() => setActiveTab('transactions')} className={`flex-1 pb-3 text-sm font-bold border-b-2 ${activeTab === 'transactions' ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}>Transactions</button>
        </div>

        {/* Settings List */}
        {activeTab === 'settings' && (
            <div className="px-4 space-y-2 max-w-2xl md:mx-auto w-full">
                {[
                    {label: 'Online Payments', icon: 'public', active: true},
                    {label: 'ATM Withdrawals', icon: 'atm', active: true},
                    {label: 'Contactless Payments', icon: 'wifi_tethering', active: false},
                    {label: 'International Use', icon: 'flight', active: false}
                ].map((setting, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-[#1c2433] rounded-xl border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-gray-500">{setting.icon}</span>
                            <span className="font-semibold">{setting.label}</span>
                        </div>
                        <div className={`w-12 h-6 rounded-full p-1 flex items-center ${setting.active ? 'bg-primary justify-end' : 'bg-gray-300 dark:bg-gray-600 justify-start'}`}>
                            <div className="w-4 h-4 rounded-full bg-white shadow-sm"></div>
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default Cards;