import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState<number>(12450.00);

  useEffect(() => {
    // Read user data from localStorage to update balance dynamically
    const storedUsers = localStorage.getItem('nexus_users');
    if (storedUsers) {
        const users = JSON.parse(storedUsers);
        // Assuming first user is the demo user
        if (users.length > 0) {
            setBalance(users[0].balance);
        }
    }
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white overflow-x-hidden pb-24 selection:bg-primary selection:text-white min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
      {/* Top App Bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between p-4 md:px-6 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border-2 border-white dark:border-gray-700 shadow-sm" 
                 style={{backgroundImage: 'url("https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop")'}}></div>
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-blue-500 border-2 border-white dark:border-background-dark"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Good Morning,</span>
            <h2 className="text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">Alex</h2>
          </div>
        </div>
        <button onClick={() => navigate('/notifications')} className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1c2433] transition-colors">
          <span className="material-symbols-outlined" style={{fontSize: 24}}>notifications</span>
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </header>

      {/* Main Grid Layout for Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 md:px-6">
          
          {/* Left Column (Cards & Balance) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
            {/* Balance Section */}
            <section className="flex flex-col items-center lg:items-start pt-2 pb-2">
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Balance</p>
                <div className="flex items-center gap-2">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h1>
                <button className="text-gray-400 hover:text-primary transition-colors mt-1">
                    <span className="material-symbols-outlined" style={{fontSize: 20}}>visibility</span>
                </button>
                </div>
                <div className="flex items-center gap-1 mt-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold">
                <span className="material-symbols-outlined" style={{fontSize: 14}}>trending_up</span>
                <span>+2.5% this month</span>
                </div>
            </section>

            {/* Single Card Section */}
            <section className="w-full flex justify-center lg:justify-start">
                <div onClick={() => navigate('/cards')} className="w-full max-w-[380px] lg:max-w-[400px] aspect-[1.586/1] rounded-2xl p-5 sm:p-6 relative overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] active:scale-95 bg-[#001F3F] text-white flex flex-col justify-between cursor-pointer group ring-1 ring-white/10">
                    {/* Background Abstract */}
                    <div className="absolute inset-0 opacity-20" style={{background: 'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.4) 0%, transparent 50%), linear-gradient(135deg, #001F3F 0%, #0055FF 100%)'}}></div>
                    
                    {/* Card Header */}
                    <div className="relative z-10 flex justify-between items-start">
                        <span className="font-bold text-base sm:text-lg tracking-wider opacity-90">Bank Nexus</span>
                        <span className="material-symbols-outlined text-white/80" style={{fontSize: 28}}>contactless</span>
                    </div>

                    {/* Chip & Number */}
                    <div className="relative z-10">
                         <div className="flex items-center gap-4 mb-3 sm:mb-4">
                            <div className="bg-gradient-to-tr from-yellow-200 to-yellow-500 w-10 h-8 sm:w-12 sm:h-9 rounded-md shadow-sm border border-yellow-600/20"></div>
                        </div>
                        <p className="font-display font-medium text-lg sm:text-xl md:text-2xl tracking-widest mb-1 drop-shadow-md whitespace-nowrap">**** **** **** 8829</p>
                    </div>

                    {/* Card Footer */}
                    <div className="relative z-10 flex justify-between items-end">
                        <div>
                            <p className="text-[10px] text-white/60 uppercase tracking-wider mb-0.5">Card Holder</p>
                            <p className="font-bold tracking-wide text-sm sm:text-lg">ALEX USER</p>
                        </div>
                        {/* Dynamic Logo Placeholder - Displaying Visa as default */}
                         <div className="flex flex-col items-end">
                            <span className="italic font-bold text-xl sm:text-2xl leading-none mb-1">Visa</span>
                            <p className="text-[8px] sm:text-[10px] font-bold">Platinum</p>
                        </div>
                    </div>
                </div>
            </section>
          </div>

          {/* Right Column (Actions & Activity) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
             {/* Primary Actions */}
            <section>
                <div className="grid grid-cols-2 gap-3 mb-6">
                <button 
                    onClick={() => navigate('/transfer/select')}
                    className="flex flex-col items-center justify-center gap-2 h-24 rounded-lg bg-primary text-white shadow-lg shadow-primary/20 active:scale-95 transition-transform hover:bg-primary-hover"
                >
                    <div className="bg-white/20 p-2 rounded-full">
                    <span className="material-symbols-outlined" style={{fontSize: 24}}>send_money</span>
                    </div>
                    <span className="font-bold text-sm tracking-wide">Send Money</span>
                </button>
                <button onClick={() => navigate('/scan')} className="flex flex-col items-center justify-center gap-2 h-24 rounded-lg bg-white dark:bg-[#1c2433] border border-gray-100 dark:border-gray-700 text-primary dark:text-primary shadow-sm active:scale-95 transition-transform hover:bg-gray-50 dark:hover:bg-gray-800">
                    <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full text-primary">
                    <span className="material-symbols-outlined" style={{fontSize: 24}}>qr_code_scanner</span>
                    </div>
                    <span className="font-bold text-sm tracking-wide text-gray-900 dark:text-white">Scan to Pay</span>
                </button>
                </div>

                {/* Secondary Actions */}
                <div className="grid grid-cols-4 gap-2">
                <button onClick={() => navigate('/topup')} className="flex flex-col items-center gap-2 group w-full">
                    <div className="h-12 w-12 rounded-full bg-white dark:bg-[#1c2433] border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-sm group-active:bg-gray-50 dark:group-active:bg-gray-800 transition-colors group-hover:border-primary/50">
                    <span className="material-symbols-outlined">add_card</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Top Up</span>
                </button>
                <button onClick={() => navigate('/bills')} className="flex flex-col items-center gap-2 group w-full">
                    <div className="h-12 w-12 rounded-full bg-white dark:bg-[#1c2433] border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-sm group-active:bg-gray-50 dark:group-active:bg-gray-800 transition-colors group-hover:border-primary/50">
                    <span className="material-symbols-outlined">receipt_long</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Bills</span>
                </button>
                <button onClick={() => navigate('/savings')} className="flex flex-col items-center gap-2 group w-full">
                    <div className="h-12 w-12 rounded-full bg-white dark:bg-[#1c2433] border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-sm group-active:bg-gray-50 dark:group-active:bg-gray-800 transition-colors group-hover:border-primary/50">
                    <span className="material-symbols-outlined">savings</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Savings</span>
                </button>
                <button onClick={() => navigate('/services')} className="flex flex-col items-center gap-2 group w-full">
                    <div className="h-12 w-12 rounded-full bg-white dark:bg-[#1c2433] border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-sm group-active:bg-gray-50 dark:group-active:bg-gray-800 transition-colors group-hover:border-primary/50">
                    <span className="material-symbols-outlined">grid_view</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">More</span>
                </button>
                </div>
            </section>

            {/* Recent Activity */}
            <section className="mt-2">
                <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Activity</h3>
                <button onClick={() => navigate('/activity')} className="text-sm font-semibold text-primary hover:text-blue-700 transition-colors">See All</button>
                </div>
                <div className="grid grid-cols-1 gap-3">
                {[
                    { icon: 'movie', color: 'red', title: 'Netflix Subscription', time: 'Today, 09:41 AM', amount: '- $15.99', type: 'debit' },
                    { icon: 'shopping_cart', color: 'orange', title: 'Grocery Store', time: 'Yesterday, 5:30 PM', amount: '- $84.20', type: 'debit' },
                    { icon: 'payments', color: 'blue', title: 'Salary Deposit', time: 'Mon, 10:00 AM', amount: '+ $3,200.00', type: 'credit' },
                    { icon: 'local_cafe', color: 'blue', title: 'Starbucks Coffee', time: 'Sun, 08:15 AM', amount: '- $5.50', type: 'debit' }
                ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-[#1c2433] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900/20 flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-400`}>
                        <span className="material-symbols-outlined font-bold" style={{fontSize: 20}}>{item.icon}</span>
                        </div>
                        <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.time}</p>
                        </div>
                    </div>
                    <span className={`text-sm font-bold ${item.type === 'credit' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>{item.amount}</span>
                    </div>
                ))}
                </div>
            </section>
          </div>
      </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1c2433] border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 px-2 z-40">
        <div className="w-full max-w-5xl mx-auto flex justify-around items-end h-16 pb-2">
          <button className="flex flex-col items-center gap-1 w-16 text-primary">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button onClick={() => navigate('/cards')} className="flex flex-col items-center gap-1 w-16 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <span className="material-symbols-outlined">credit_card</span>
            <span className="text-[10px] font-medium">Cards</span>
          </button>
          <button onClick={() => navigate('/activity')} className="flex flex-col items-center gap-1 w-16 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <span className="material-symbols-outlined">pie_chart</span>
            <span className="text-[10px] font-medium">Activity</span>
          </button>
          <button onClick={() => navigate('/hub')} className="flex flex-col items-center gap-1 w-16 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <span className="material-symbols-outlined">hub</span>
            <span className="text-[10px] font-medium">Hub</span>
          </button>
          <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 w-16 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-medium">Settings</span>
          </button>
        </div>
        <div className="h-4 w-full bg-white dark:bg-[#1c2433]"></div>
      </nav>
    </div>
  );
};

export default UserDashboard;