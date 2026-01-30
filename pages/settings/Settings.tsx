import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-slate-900 dark:text-white font-display">
      <div className="w-full max-w-5xl mx-auto flex flex-col pb-24">
        {/* Profile Header */}
        <div className="pt-8 pb-6 px-4 bg-white dark:bg-[#1c2433] border-b border-gray-100 dark:border-gray-800">
             <div className="flex items-center justify-between mb-4">
                 <h1 className="text-2xl font-bold">Settings</h1>
                 <button onClick={() => navigate('/login')} className="text-red-500 text-sm font-bold">Log Out</button>
             </div>
             <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-700 shadow-md" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop")'}}></div>
                 <div>
                     <h2 className="text-lg font-bold">Alex User</h2>
                     <p className="text-sm text-gray-500">alex.user@example.com</p>
                     <p className="text-xs text-primary font-bold mt-1">Nexus Plus Member</p>
                 </div>
                 <button onClick={() => navigate('/settings/personal')} className="ml-auto bg-gray-100 dark:bg-gray-800 p-2 rounded-full"><span className="material-symbols-outlined">edit</span></button>
             </div>
        </div>

        {/* Settings Groups */}
        <div className="p-4 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Account */}
            <section>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-1">Account</h3>
                <div className="bg-white dark:bg-[#1c2433] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                    {[
                        {icon: 'person', label: 'Personal Information', link: '/settings/personal'},
                        {icon: 'verified_user', label: 'Security & Login', link: '/settings/security'},
                        {icon: 'account_balance', label: 'Linked Accounts', link: '/settings/personal'},
                    ].map((item, i) => (
                        <div key={i} onClick={() => navigate(item.link)} className="flex items-center justify-between p-4 border-b border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-gray-400">{item.icon}</span>
                                <span className="font-semibold text-sm">{item.label}</span>
                            </div>
                            <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* App Settings */}
            <section>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-1">App Settings</h3>
                <div className="bg-white dark:bg-[#1c2433] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                     {[
                        {icon: 'notifications', label: 'Notifications', link: '/settings/general'},
                        {icon: 'dark_mode', label: 'Appearance', value: 'System', link: '/settings/general'},
                        {icon: 'language', label: 'Language', value: 'English', link: '/settings/general'},
                    ].map((item, i) => (
                        <div key={i} onClick={() => navigate(item.link)} className="flex items-center justify-between p-4 border-b border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-gray-400">{item.icon}</span>
                                <span className="font-semibold text-sm">{item.label}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {item.value && <span className="text-xs text-gray-500">{item.value}</span>}
                                <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Support */}
            <section>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-1">Support</h3>
                <div className="bg-white dark:bg-[#1c2433] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                     {[
                        {icon: 'help', label: 'Help Center', link: '/settings/general'},
                        {icon: 'chat', label: 'Contact Support', link: '/settings/general'},
                        {icon: 'info', label: 'About Nexus', link: '/settings/general'},
                    ].map((item, i) => (
                        <div key={i} onClick={() => navigate(item.link)} className="flex items-center justify-between p-4 border-b border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-gray-400">{item.icon}</span>
                                <span className="font-semibold text-sm">{item.label}</span>
                            </div>
                            <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                        </div>
                    ))}
                </div>
            </section>
            </div>

             <p className="text-center text-xs text-gray-400 mt-6">Version 2.4.0 (Build 309)</p>
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1c2433] border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 px-2 z-40">
            <div className="w-full max-w-5xl mx-auto flex justify-around items-end h-16 pb-2">
                <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center gap-1 w-16 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                    <span className="material-symbols-outlined">home</span>
                    <span className="text-[10px] font-medium">Home</span>
                </button>
                <button onClick={() => navigate('/cards')} className="flex flex-col items-center gap-1 w-16 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                    <span className="material-symbols-outlined">credit_card</span>
                    <span className="text-[10px] font-medium">Cards</span>
                </button>
                <button onClick={() => navigate('/activity')} className="flex flex-col items-center gap-1 w-16 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                    <span className="material-symbols-outlined">pie_chart</span>
                    <span className="text-[10px] font-medium">Activity</span>
                </button>
                <button onClick={() => navigate('/hub')} className="flex flex-col items-center gap-1 w-16 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                    <span className="material-symbols-outlined">hub</span>
                    <span className="text-[10px] font-medium">Hub</span>
                </button>
                <button className="flex flex-col items-center gap-1 w-16 text-primary">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
                    <span className="text-[10px] font-bold">Settings</span>
                </button>
            </div>
            <div className="h-4 w-full bg-white dark:bg-[#1c2433]"></div>
        </nav>
      </div>
    </div>
  );
};

export default Settings;