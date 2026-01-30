import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 550 },
  { name: 'Thu', value: 450 },
  { name: 'Fri', value: 600 },
  { name: 'Sat', value: 350 },
  { name: 'Sun', value: 450 },
];

const Hub: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center text-slate-900 dark:text-white font-display">
      <div className="w-full max-w-5xl mx-auto flex flex-col pb-24">
        <header className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">H</div>
                <h1 className="text-lg font-bold">Financial Hub</h1>
            </div>
            <button className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined">search</span></button>
        </header>

        <div className="px-4">
             {/* Spending Chart */}
             <div className="bg-white dark:bg-[#1c2433] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 mb-6">
                 <div className="flex justify-between items-center mb-4">
                     <div>
                         <p className="text-xs text-gray-500">Weekly Spending</p>
                         <h3 className="text-xl font-extrabold">$845.20</h3>
                     </div>
                     <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">+12%</span>
                 </div>
                 <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorValueHub" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#135bec" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#135bec" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="value" stroke="#135bec" strokeWidth={3} fillOpacity={1} fill="url(#colorValueHub)" />
                        </AreaChart>
                    </ResponsiveContainer>
                 </div>
             </div>

             {/* Partner Offers */}
             <h3 className="font-bold text-lg mb-3">Exclusive Offers</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 text-white relative overflow-hidden">
                     <div className="relative z-10">
                         <h4 className="font-bold text-lg mb-1">Get $50 Bonus</h4>
                         <p className="text-xs text-blue-100 mb-3 w-2/3">Refer a friend to Bank Nexus and you both get rewarded!</p>
                         <button className="bg-white text-primary text-xs font-bold px-4 py-2 rounded-lg">Invite Now</button>
                     </div>
                     <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[80px] text-white/10 rotate-12">redeem</span>
                 </div>

                 <div className="bg-black rounded-2xl p-5 text-white relative overflow-hidden">
                     <div className="relative z-10">
                         <div className="flex justify-between items-start">
                             <div>
                                <h4 className="font-bold text-lg mb-1">Spotify Premium</h4>
                                <p className="text-xs text-gray-400 mb-3">3 Months Free Trial for Nexus Gold members.</p>
                             </div>
                             <div className="bg-[#1DB954] p-2 rounded-full text-black"><span className="material-symbols-outlined">music_note</span></div>
                         </div>
                         <button className="bg-white/20 text-white border border-white/20 text-xs font-bold px-4 py-2 rounded-lg">Claim Offer</button>
                     </div>
                 </div>
             </div>

             {/* Tools */}
             <h3 className="font-bold text-lg mt-6 mb-3">Tools</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                 <div className="bg-white dark:bg-[#1c2433] p-4 rounded-xl shadow-sm flex flex-col gap-2">
                     <span className="material-symbols-outlined text-primary">calculate</span>
                     <span className="font-bold text-sm">Loan Calc</span>
                 </div>
                 <div className="bg-white dark:bg-[#1c2433] p-4 rounded-xl shadow-sm flex flex-col gap-2">
                     <span className="material-symbols-outlined text-green-500">currency_exchange</span>
                     <span className="font-bold text-sm">Converter</span>
                 </div>
             </div>
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
                <button className="flex flex-col items-center gap-1 w-16 text-primary">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>hub</span>
                    <span className="text-[10px] font-bold">Hub</span>
                </button>
                <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 w-16 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                    <span className="material-symbols-outlined">settings</span>
                    <span className="text-[10px] font-medium">Settings</span>
                </button>
            </div>
            <div className="h-4 w-full bg-white dark:bg-[#1c2433]"></div>
        </nav>
      </div>
    </div>
  );
};

export default Hub;