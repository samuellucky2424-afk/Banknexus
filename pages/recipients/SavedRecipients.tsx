import React from 'react';
import { useNavigate } from 'react-router-dom';

const SavedRecipients: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-[#0d121b] dark:text-white">
             <div className="w-full max-w-3xl flex flex-col relative pb-24 shadow-2xl">
                 <div className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
                     <div onClick={() => navigate('/dashboard')} className="flex size-12 shrink-0 items-center justify-start cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 rounded-full pl-2 transition-colors">
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                     </div>
                     <h2 className="text-lg font-bold">Saved Recipients</h2>
                     <span className="material-symbols-outlined px-2">more_horiz</span>
                 </div>
                 
                 <div className="px-4 py-4">
                     <div className="flex w-full items-center rounded-xl h-12 bg-white dark:bg-gray-800 shadow-sm px-4">
                         <span className="material-symbols-outlined text-gray-400">search</span>
                         <input className="w-full bg-transparent border-none focus:ring-0 ml-2" placeholder="Search" />
                     </div>
                 </div>

                 <h3 className="font-bold text-lg px-4 pb-4">Frequently Used</h3>
                 <div className="flex w-full overflow-x-auto px-4 pb-2 no-scrollbar gap-6 md:grid md:grid-cols-6">
                     {['Alice', 'Bob', 'Charlie', 'Diana'].map((name, i) => (
                         <div onClick={() => navigate('/recipients/details')} key={i} className="flex flex-col items-center gap-2 w-16 shrink-0 cursor-pointer">
                             <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
                             <p className="text-xs font-semibold">{name}</p>
                         </div>
                     ))}
                 </div>

                 <h3 className="font-bold text-lg px-4 pt-6 pb-4">All Recipients</h3>
                 <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800/50 text-xs font-bold text-gray-500">A</div>
                 <div className="divide-y divide-gray-100 dark:divide-gray-800">
                     <div onClick={() => navigate('/recipients/details')} className="flex items-center gap-4 px-4 py-4 bg-white dark:bg-gray-900/50 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                         <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">AS</div>
                         <div className="flex-1"><h4 className="text-sm font-bold">Alice Smith</h4><p className="text-xs text-gray-500">Nexus Bank • **** 1234</p></div>
                         <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                     </div>
                 </div>

                 <button className="fixed bottom-8 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-30 shadow-primary/30">
                     <span className="material-symbols-outlined text-3xl">add</span>
                 </button>
             </div>
        </div>
    );
};
export default SavedRecipients;