import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecuritySettings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-slate-900 dark:text-white font-display">
        <div className="w-full max-w-3xl flex flex-col pb-12">
            <header className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 flex items-center justify-between">
                <button onClick={() => navigate('/settings')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined">arrow_back_ios_new</span></button>
                <h1 className="text-lg font-bold">Security & Login</h1>
                <div className="w-8"></div>
            </header>

            <div className="p-4 space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex items-start gap-3 border border-blue-100 dark:border-blue-900/50">
                    <span className="material-symbols-outlined text-primary">shield</span>
                    <div>
                        <h3 className="font-bold text-sm text-primary">Your account is secure</h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">You have enabled all recommended security features.</p>
                    </div>
                </div>

                <section>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-1">Biometrics</h3>
                    <div className="bg-white dark:bg-[#1c2433] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-gray-400">face</span>
                                <div><p className="font-semibold text-sm">Face ID</p><p className="text-xs text-gray-500">Log in with your face</p></div>
                            </div>
                            <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
                                <input type="checkbox" id="toggle" className="peer absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" defaultChecked />
                                <label htmlFor="toggle" className="block overflow-hidden h-6 rounded-full bg-gray-300 peer-checked:bg-primary cursor-pointer"></label>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-1">Credentials</h3>
                    <div className="bg-white dark:bg-[#1c2433] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center justify-between p-4 border-b border-gray-50 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-gray-400">pin</span>
                                <div><p className="font-semibold text-sm">Change PIN</p><p className="text-xs text-gray-500">Update your 4-digit code</p></div>
                            </div>
                            <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                        </div>
                        <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-gray-400">password</span>
                                <div><p className="font-semibold text-sm">Change Password</p><p className="text-xs text-gray-500">Last changed 3 months ago</p></div>
                            </div>
                            <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-1">Devices</h3>
                    <div className="bg-white dark:bg-[#1c2433] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4">
                         <div className="flex items-center justify-between mb-2">
                             <div className="flex items-center gap-3">
                                 <span className="material-symbols-outlined text-gray-400">smartphone</span>
                                 <div><p className="font-semibold text-sm">iPhone 14 Pro</p><p className="text-xs text-green-500 font-bold">Current Device</p></div>
                             </div>
                         </div>
                         <div className="h-px bg-gray-100 dark:bg-gray-800 my-3"></div>
                         <div className="flex items-center justify-between">
                             <div className="flex items-center gap-3 opacity-60">
                                 <span className="material-symbols-outlined text-gray-400">laptop_mac</span>
                                 <div><p className="font-semibold text-sm">MacBook Pro</p><p className="text-xs text-gray-500">Last active 2 days ago</p></div>
                             </div>
                             <button className="text-xs text-red-500 font-bold">Remove</button>
                         </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  );
};

export default SecuritySettings;