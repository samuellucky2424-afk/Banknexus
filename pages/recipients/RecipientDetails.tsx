import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipientDetails: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-[#0d121b] dark:text-white">
            <div className="max-w-3xl w-full flex flex-col shadow-2xl">
                 <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
                     <div onClick={() => navigate(-1)} className="flex size-12 shrink-0 items-center cursor-pointer"><span className="material-symbols-outlined">arrow_back_ios</span></div>
                     <h2 className="text-lg font-bold flex-1 text-center">Recipient Details</h2>
                     <div className="flex w-12 items-center justify-end"><span className="material-symbols-outlined text-primary">share</span></div>
                 </div>
                 
                 <div className="flex flex-col items-center gap-4 p-4">
                     <div className="relative">
                         <div className="bg-gray-300 rounded-full w-32 h-32 border-4 border-white dark:border-gray-800 shadow-lg"></div>
                         <div className="absolute bottom-1 right-1 bg-nexus-gold rounded-full p-1 border-2 border-white dark:border-gray-800"><span className="material-symbols-outlined text-white text-xs block">verified</span></div>
                     </div>
                     <div className="text-center">
                         <p className="text-[24px] font-extrabold">Jonathan Sterling</p>
                         <p className="text-primary font-semibold">Bank Nexus Premium</p>
                         <p className="text-sm text-gray-500">Added Oct 14, 2023</p>
                     </div>
                 </div>

                 <div className="flex px-4 py-3 max-w-lg mx-auto w-full">
                     <button onClick={() => navigate('/transfer/amount')} className="w-full bg-primary text-white h-14 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg">
                         <span className="material-symbols-outlined">send</span> Send Money
                     </button>
                 </div>

                 <div className="px-4 pt-6 pb-2 flex justify-between items-end max-w-lg mx-auto w-full"><h3 className="text-lg font-bold">Bank Information</h3><span className="text-xs font-bold text-nexus-gold">Verified</span></div>
                 <div className="p-4 max-w-lg mx-auto w-full">
                     <div className="bg-white dark:bg-background-dark/50 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 space-y-4">
                         <div className="flex justify-between items-center py-1"><p className="text-sm font-medium text-gray-500">Bank Name</p><p className="text-sm font-bold">Nexus Global Bank</p></div>
                         <div className="h-px bg-gray-100 dark:bg-gray-800 w-full"></div>
                         <div className="flex justify-between items-center py-1"><p className="text-sm font-medium text-gray-500">Account Number</p><p className="text-sm font-bold">**** 8829</p></div>
                     </div>
                 </div>
            </div>
        </div>
    );
};
export default RecipientDetails;