import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GeneralSettings: React.FC = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-slate-900 dark:text-white font-display">
        <div className="w-full max-w-3xl flex flex-col pb-12">
            <header className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 flex items-center justify-between">
                <button onClick={() => navigate('/settings')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined">arrow_back_ios_new</span></button>
                <h1 className="text-lg font-bold">General & Support</h1>
                <div className="w-8"></div>
            </header>

            <div className="p-4 space-y-6">
                <section>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-1">Appearance</h3>
                    <div className="bg-white dark:bg-[#1c2433] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-gray-400">dark_mode</span>
                                <div><p className="font-semibold text-sm">Dark Mode</p><p className="text-xs text-gray-500">Easier on the eyes</p></div>
                            </div>
                            <button onClick={toggleDarkMode} className={`w-12 h-6 rounded-full p-1 transition-colors ${darkMode ? 'bg-primary' : 'bg-gray-300'}`}>
                                <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${darkMode ? 'translate-x-6' : ''}`}></div>
                            </button>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-1">Notifications</h3>
                    <div className="bg-white dark:bg-[#1c2433] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                         {[
                             {title: 'Push Notifications', desc: 'Transaction alerts instantly', active: true},
                             {title: 'Email Digest', desc: 'Weekly spending summary', active: false},
                             {title: 'Promotional', desc: 'New features and offers', active: true},
                         ].map((item, i) => (
                             <div key={i} className="flex items-center justify-between p-4 border-b border-gray-50 dark:border-gray-800 last:border-0">
                                <div><p className="font-semibold text-sm">{item.title}</p><p className="text-xs text-gray-500">{item.desc}</p></div>
                                <div className={`w-12 h-6 rounded-full p-1 ${item.active ? 'bg-primary' : 'bg-gray-300'}`}>
                                    <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform ${item.active ? 'translate-x-6' : ''}`}></div>
                                </div>
                             </div>
                         ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-1">Support</h3>
                    <div className="bg-white dark:bg-[#1c2433] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="p-4 border-b border-gray-50 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-blue-500">chat</span>
                                <div><p className="font-semibold text-sm">Live Chat</p><p className="text-xs text-gray-500">Wait time: ~2 min</p></div>
                            </div>
                        </div>
                        <div className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-green-500">call</span>
                                <div><p className="font-semibold text-sm">Call Center</p><p className="text-xs text-gray-500">+1 (800) 123-4567</p></div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center pt-4">
                    <p className="text-xs text-gray-400 mb-2">Nexus Bank Inc.</p>
                    <div className="flex justify-center gap-4 text-xs font-bold text-primary">
                        <span>Terms</span>
                        <span>Privacy</span>
                        <span>Licenses</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default GeneralSettings;