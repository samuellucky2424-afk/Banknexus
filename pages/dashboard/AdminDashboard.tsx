import React, { useState, useEffect } from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

// Types for our simulated database
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  balance: number;
  isSuspended: boolean;
  internetBlocked: boolean;
  transactions: any[];
}

// Chart Data (Static for visual)
const data = [
  { name: 'Week 1', value: 4000 },
  { name: 'Week 2', value: 3000 },
  { name: 'Week 3', value: 2000 },
  { name: 'Week 4', value: 2780 },
  { name: 'Week 5', value: 1890 },
  { name: 'Week 6', value: 2390 },
  { name: 'Week 7', value: 3490 },
];

const AdminDashboard: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  
  // Modal States
  const [activeModal, setActiveModal] = useState<'deposit' | 'debit' | 'edit' | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Form States
  const [formData, setFormData] = useState<any>({});

  // Initialize Data
  useEffect(() => {
    const storedUsers = localStorage.getItem('nexus_users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      // Create Default "Alex User" if none exists
      const defaultUser: User = {
        id: 'user_1',
        firstName: 'Alex',
        lastName: 'User',
        email: 'alex.user@example.com',
        phone: '+1 (555) 012-3456',
        address: '123 Innovation Dr, Tech City',
        balance: 12450.00,
        isSuspended: false,
        internetBlocked: false,
        transactions: []
      };
      localStorage.setItem('nexus_users', JSON.stringify([defaultUser]));
      setUsers([defaultUser]);
    }
  }, []);

  // Update LocalStorage whenever users state changes
  const saveUsers = (updatedUsers: User[]) => {
    setUsers(updatedUsers);
    localStorage.setItem('nexus_users', JSON.stringify(updatedUsers));
  };

  // --- Actions ---

  const handleToggleSuspend = (user: User) => {
    const updatedUsers = users.map(u => 
      u.id === user.id ? { ...u, isSuspended: !u.isSuspended } : u
    );
    saveUsers(updatedUsers);
  };

  const handleToggleInternet = (user: User) => {
    const updatedUsers = users.map(u => 
      u.id === user.id ? { ...u, internetBlocked: !u.internetBlocked } : u
    );
    saveUsers(updatedUsers);
  };

  const openModal = (type: 'deposit' | 'debit' | 'edit', user: User) => {
    setSelectedUser(user);
    setActiveModal(type);
    
    // Reset/Init Form Data
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.toTimeString().split(' ')[0].slice(0, 5);

    if (type === 'deposit') {
      setFormData({ amount: '', senderName: 'Admin Deposit', purpose: 'Fund Top-up', date: dateStr, time: timeStr });
    } else if (type === 'debit') {
      setFormData({ amount: '', sentTo: 'Bank Adjustment', purpose: 'Service Fee', date: dateStr, time: timeStr });
    } else if (type === 'edit') {
      setFormData({ firstName: user.firstName, lastName: user.lastName, phone: user.phone, address: user.address });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser) return;

    let updatedUsers = [...users];
    
    if (activeModal === 'deposit') {
      updatedUsers = users.map(u => {
        if (u.id === selectedUser.id) {
            // Persist transaction details in localstorage (simplified inside user object)
            const newTransaction = {
                type: 'credit',
                amount: parseFloat(formData.amount),
                sender: formData.senderName,
                purpose: formData.purpose,
                date: formData.date,
                time: formData.time,
                id: Date.now()
            };
            return { 
                ...u, 
                balance: u.balance + parseFloat(formData.amount),
                transactions: [newTransaction, ...u.transactions]
            };
        }
        return u;
      });
    } else if (activeModal === 'debit') {
      updatedUsers = users.map(u => {
        if (u.id === selectedUser.id) {
             const newTransaction = {
                type: 'debit',
                amount: parseFloat(formData.amount),
                recipient: formData.sentTo,
                purpose: formData.purpose,
                date: formData.date,
                time: formData.time,
                id: Date.now()
            };
            return { 
                ...u, 
                balance: u.balance - parseFloat(formData.amount),
                transactions: [newTransaction, ...u.transactions]
            };
        }
        return u;
      });
    } else if (activeModal === 'edit') {
      updatedUsers = users.map(u => 
        u.id === selectedUser.id ? { ...u, ...formData } : u
      );
    }

    saveUsers(updatedUsers);
    setActiveModal(null);
    setSelectedUser(null);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden min-h-screen">
      {/* Top App Bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-white/90 dark:bg-[#151a25]/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => setIsDrawerOpen(true)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-700 dark:text-gray-300">
          <span className="material-symbols-outlined !text-[28px]">menu</span>
        </button>
        <h1 className="text-lg font-bold text-center flex-1 text-slate-900 dark:text-white tracking-tight">Bank Nexus Admin</h1>
        <button className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
          <span className="material-symbols-outlined text-slate-700 dark:text-gray-300">notifications</span>
          <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="relative z-0 pb-20">
        {/* Welcome Section */}
        <div className="px-5 pt-6 pb-2">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Overview</p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">Admin Dashboard</h2>
        </div>

        {/* User Management Section */}
        <div className="px-5 mt-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">User Management</h3>
            <div className="flex flex-col gap-4">
                {users.map((user) => (
                    <div key={user.id} className="bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                        {/* User Header */}
                        <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                                    {user.firstName[0]}{user.lastName[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{user.firstName} {user.lastName}</h4>
                                    <p className="text-xs text-slate-500">{user.email}</p>
                                    <p className="text-sm font-bold text-primary mt-1">Bal: ${user.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 items-end">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold uppercase text-gray-400">Status</span>
                                    {user.isSuspended ? (
                                        <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-bold">Suspended</span>
                                    ) : (
                                        <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs font-bold">Active</span>
                                    )}
                                </div>
                                <div className="flex items-center gap-2">
                                     <span className="text-[10px] font-bold uppercase text-gray-400">Net</span>
                                     {user.internetBlocked ? (
                                        <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">wifi_off</span> Off</span>
                                     ) : (
                                        <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">wifi</span> On</span>
                                     )}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons Grid */}
                        <div className="p-3 grid grid-cols-3 gap-2 bg-gray-50 dark:bg-gray-800/50">
                             <button onClick={() => openModal('deposit', user)} className="flex flex-col items-center justify-center p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors">
                                 <span className="material-symbols-outlined text-xl mb-1">add_circle</span>
                                 <span className="text-[10px] font-bold uppercase">Deposit</span>
                             </button>
                             <button onClick={() => openModal('debit', user)} className="flex flex-col items-center justify-center p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors">
                                 <span className="material-symbols-outlined text-xl mb-1">remove_circle</span>
                                 <span className="text-[10px] font-bold uppercase">Debit</span>
                             </button>
                             <button onClick={() => openModal('edit', user)} className="flex flex-col items-center justify-center p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                                 <span className="material-symbols-outlined text-xl mb-1">edit</span>
                                 <span className="text-[10px] font-bold uppercase">Edit</span>
                             </button>
                             
                             {/* Row 2 */}
                             <button onClick={() => handleToggleSuspend(user)} className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${user.isSuspended ? 'bg-orange-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
                                 <span className="material-symbols-outlined text-xl mb-1">block</span>
                                 <span className="text-[10px] font-bold uppercase">{user.isSuspended ? 'Unsuspend' : 'Suspend'}</span>
                             </button>
                             
                             <button onClick={() => handleToggleInternet(user)} className={`col-span-2 flex items-center justify-center gap-2 p-2 rounded-lg transition-colors ${!user.internetBlocked ? 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300' : 'bg-gray-800 text-white'}`}>
                                 <span className="material-symbols-outlined text-xl">{user.internetBlocked ? 'wifi_off' : 'wifi'}</span>
                                 <span className="text-[10px] font-bold uppercase">Internet: {user.internetBlocked ? 'Off' : 'On'}</span>
                             </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </main>

      {/* --- MODALS --- */}
      {activeModal && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
            <div className="bg-white dark:bg-[#1a202c] w-full max-w-md rounded-2xl shadow-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                    <h3 className="font-bold text-lg capitalize">{activeModal} {activeModal === 'edit' ? 'User' : 'Funds'}</h3>
                    <button onClick={() => setActiveModal(null)} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"><span className="material-symbols-outlined">close</span></button>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Dynamic Fields based on Modal Type */}
                    
                    {activeModal === 'deposit' && (
                        <>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Amount ($)</label>
                                <input type="number" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-xl font-bold" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} placeholder="0.00" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Sender Name</label>
                                <input type="text" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent" value={formData.senderName} onChange={e => setFormData({...formData, senderName: e.target.value})} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Purpose</label>
                                <input type="text" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent" value={formData.purpose} onChange={e => setFormData({...formData, purpose: e.target.value})} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase text-gray-500">Date</label>
                                    <input type="date" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase text-gray-500">Time</label>
                                    <input type="time" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} />
                                </div>
                            </div>
                        </>
                    )}

                    {activeModal === 'debit' && (
                         <>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Amount to Debit ($)</label>
                                <input type="number" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-xl font-bold text-red-500" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} placeholder="0.00" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Sent To (Recipient)</label>
                                <input type="text" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent" value={formData.sentTo} onChange={e => setFormData({...formData, sentTo: e.target.value})} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Purpose</label>
                                <input type="text" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent" value={formData.purpose} onChange={e => setFormData({...formData, purpose: e.target.value})} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase text-gray-500">Date</label>
                                    <input type="date" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase text-gray-500">Time</label>
                                    <input type="time" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} />
                                </div>
                            </div>
                        </>
                    )}

                    {activeModal === 'edit' && (
                        <>
                             <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Email (Read Only)</label>
                                <input type="email" disabled className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 text-gray-500" value={selectedUser.email} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase text-gray-500">First Name</label>
                                    <input type="text" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase text-gray-500">Last Name</label>
                                    <input type="text" required className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Phone</label>
                                <input type="text" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Address</label>
                                <input type="text" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                            </div>
                        </>
                    )}

                    <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl mt-4 hover:bg-blue-700 transition-colors shadow-lg">
                        {activeModal === 'edit' ? 'Save Changes' : 'Confirm Transaction'}
                    </button>
                </form>
            </div>
        </div>
      )}

      {/* Navigation Drawer (Sidebar) */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsDrawerOpen(false)}></div>
      <div className={`fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-[#101622] z-50 shadow-2xl flex flex-col h-full transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Drawer Header */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">B</div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-none">Bank Nexus</h2>
              <p className="text-xs text-slate-500 mt-1">Admin Portal</p>
            </div>
          </div>
          <button onClick={() => setIsDrawerOpen(false)} className="cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-500">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {/* Links */}
        <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
          <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Main Menu</p>
          <button className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/10 text-primary font-bold">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </button>
          <button className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 font-medium transition-colors">
            <span className="material-symbols-outlined">group</span>
            User Management
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;