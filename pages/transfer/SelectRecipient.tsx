import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectRecipient: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-white min-h-screen max-w-3xl mx-auto shadow-2xl pb-24">
        {/* Header */}
        <div className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between">
            <div onClick={() => navigate('/dashboard')} className="flex size-12 shrink-0 items-center cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 rounded-full justify-center transition-colors">
                <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </div>
            <h2 className="text-lg font-bold flex-1 text-center">Select Recipient</h2>
            <div className="flex w-12 items-center justify-end">
                <button className="flex items-center justify-center rounded-lg h-12 w-12 text-primary"><span className="material-symbols-outlined">info</span></button>
            </div>
        </div>

        {/* Add New */}
        <div className="flex px-4 py-3">
            <button onClick={() => navigate('/transfer/type')} className="flex w-full items-center justify-center rounded-xl h-14 bg-primary text-white gap-2 text-base font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform hover:bg-primary-hover">
                <span className="material-symbols-outlined">person_add</span>
                <span>Add New Recipient</span>
            </button>
        </div>

        {/* Search */}
        <div className="px-4 py-3">
             <div className="flex w-full items-center rounded-xl h-12 bg-white dark:bg-[#1c2433] shadow-sm px-4 border border-gray-100 dark:border-gray-800">
                <span className="material-symbols-outlined text-gray-400">search</span>
                <input className="w-full bg-transparent border-none focus:ring-0 ml-2 text-base" placeholder="Search by name or account number" />
             </div>
        </div>

        {/* Frequent */}
        <div className="px-4 pt-6 pb-2 flex justify-between">
            <h3 className="text-lg font-bold">Frequent</h3>
            <button className="text-primary text-sm font-semibold">View All</button>
        </div>
        <div className="flex overflow-x-auto no-scrollbar px-4 gap-5 pb-4 md:grid md:grid-cols-8">
            {['Alex', 'Sarah', 'Mom', 'John', 'Steve', 'Anna', 'Dad', 'Work'].map((name, i) => (
                <div key={i} onClick={() => navigate('/transfer/type')} className="flex flex-col items-center gap-2 min-w-[64px] cursor-pointer group">
                     <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 font-bold group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {name[0]}
                     </div>
                     <p className="text-xs font-semibold">{name}</p>
                </div>
            ))}
        </div>

        {/* All Contacts */}
        <div className="px-4 pt-4">
            <h3 className="text-lg font-bold mb-2">All Contacts</h3>
            {['A', 'B'].map((letter) => (
                <div key={letter}>
                    <p className="text-xs font-bold text-gray-500 py-2">{letter}</p>
                    <div className="flex items-center gap-4 py-3 border-b border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors rounded-lg px-2" onClick={() => navigate('/transfer/type')}>
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">{letter}A</div>
                        <div className="flex-1">
                            <p className="font-semibold">{letter === 'A' ? 'Alan Walker' : 'Ben Simmons'}</p>
                            <p className="text-xs text-gray-500">Bank • **** 1234</p>
                        </div>
                        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default SelectRecipient;