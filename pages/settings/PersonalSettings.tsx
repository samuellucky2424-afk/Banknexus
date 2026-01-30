import React from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalSettings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-slate-900 dark:text-white font-display">
        <div className="w-full max-w-3xl flex flex-col pb-12">
            <header className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 flex items-center justify-between">
                <button onClick={() => navigate('/settings')} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined">arrow_back_ios_new</span></button>
                <h1 className="text-lg font-bold">Personal Information</h1>
                <button className="text-sm font-bold text-primary">Save</button>
            </header>

            <div className="p-4 space-y-6">
                {/* Avatar */}
                <div className="flex flex-col items-center mb-6">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-cover bg-center border-4 border-white dark:border-gray-800 shadow-md" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop")'}}></div>
                        <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full border-2 border-white dark:border-gray-800 shadow-sm"><span className="material-symbols-outlined text-sm">photo_camera</span></button>
                    </div>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase">First Name</label>
                            <input className="w-full p-3 rounded-xl bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 font-semibold" defaultValue="Alex" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase">Last Name</label>
                            <input className="w-full p-3 rounded-xl bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 font-semibold" defaultValue="User" />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                        <input className="w-full p-3 rounded-xl bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 font-semibold" defaultValue="alex.user@example.com" />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">Phone Number</label>
                        <input className="w-full p-3 rounded-xl bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 font-semibold" defaultValue="+1 (555) 012-3456" />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">Address</label>
                        <input className="w-full p-3 rounded-xl bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 font-semibold" defaultValue="123 Innovation Dr, Tech City" />
                    </div>
                </div>

                {/* Linked Accounts */}
                <div className="mt-8">
                    <h3 className="text-lg font-bold mb-3">Linked Accounts</h3>
                    <div className="space-y-3">
                         <div className="flex items-center justify-between p-4 bg-white dark:bg-[#1c2433] rounded-xl border border-gray-200 dark:border-gray-800">
                             <div className="flex items-center gap-3">
                                 <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6 h-6" alt="Google" />
                                 <div><p className="font-bold text-sm">Google</p><p className="text-xs text-gray-500">Connected</p></div>
                             </div>
                             <button className="text-xs font-bold text-red-500 border border-red-500 px-3 py-1 rounded-lg">Unlink</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PersonalSettings;