import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [networkError, setNetworkError] = useState(false);
  const [showSuspendModal, setShowSuspendModal] = useState(false);
  
  const formRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    // Check if we need to initialize default admin settings
    const storedUsers = localStorage.getItem('nexus_users');
    if (!storedUsers) {
        // Init default user if missing, to ensure admin has something to edit
        const defaultUser = {
            id: 'user_1',
            firstName: 'Alex',
            lastName: 'User',
            email: 'alex.user@example.com',
            balance: 12450.00,
            isSuspended: false,
            internetBlocked: false,
            transactions: []
        };
        localStorage.setItem('nexus_users', JSON.stringify([defaultUser]));
    }

    // Form Entrance
    const formElements = (formRef.current as any).children;
    gsap.fromTo(formElements,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power2.out" }
    );

    // Visual Entrance
    gsap.fromTo(visualRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setNetworkError(false);

    if (username.toLowerCase().includes('admin')) {
        navigate('/banknexus-login');
        return;
    }

    // Simulate Auth Check against LocalStorage Database
    const storedUsers = JSON.parse(localStorage.getItem('nexus_users') || '[]');
    // For demo, we just grab the first user or 'Alex User' if no specific email match logic is strict
    // In a real app, we'd match the email entered.
    const user = storedUsers[0]; // Assuming single user demo mostly

    if (user) {
        if (user.internetBlocked) {
            setNetworkError(true);
            return;
        }

        if (user.isSuspended) {
            setShowSuspendModal(true);
            return;
        }
    }

    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white font-display text-slate-900 flex overflow-hidden relative">
      
      {/* Network Error Banner */}
      {networkError && (
          <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white p-4 z-50 flex items-center justify-center gap-2 animate-in slide-in-from-bottom duration-300 shadow-xl">
              <span className="material-symbols-outlined">wifi_off</span>
              <span className="font-bold">Network Error: No Internet Connection. Please check your settings and try again.</span>
          </div>
      )}

      {/* Suspension Modal */}
      {showSuspendModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
              <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl text-center relative overflow-hidden">
                   <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                       <span className="material-symbols-outlined text-4xl text-red-600">gpp_bad</span>
                   </div>
                   <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Account Suspended</h2>
                   <p className="text-slate-600 mb-6">
                       We detected suspicious activities from an unknown IP address region. Your account has been temporarily locked for your security.
                   </p>
                   <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                       <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Support Reference</p>
                       <p className="text-lg font-mono font-bold text-primary">#SUS-99281</p>
                   </div>
                   <button onClick={() => setShowSuspendModal(false)} className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
                       Contact Customer Care
                   </button>
              </div>
          </div>
      )}

      {/* Left Panel - Branding (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-[#001F3F] relative flex-col justify-center items-center p-12 overflow-hidden">
          <div ref={visualRef} className="relative w-full max-w-lg aspect-square">
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/20 rounded-full"></div>
              
              {/* Glass Card Visual */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-48 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl rotate-[-12deg] z-10 flex flex-col p-6 justify-between">
                  <div className="flex justify-between items-center">
                       <span className="material-symbols-outlined text-white text-3xl">contactless</span>
                       <span className="font-bold text-white tracking-widest">NEXUS</span>
                  </div>
                  <div>
                       <div className="flex gap-2 mb-2">
                           <div className="w-8 h-5 rounded bg-white/20"></div>
                       </div>
                       <p className="font-mono text-white/80 text-sm">•••• •••• •••• 9921</p>
                  </div>
              </div>

               {/* Floating Elements */}
               <div className="absolute top-[20%] right-[10%] p-3 bg-white rounded-xl shadow-lg animate-bounce z-20">
                   <span className="material-symbols-outlined text-[#0055FF]">verified_user</span>
               </div>
               <div className="absolute bottom-[20%] left-[10%] p-3 bg-[#0055FF] rounded-xl shadow-lg z-20">
                   <span className="material-symbols-outlined text-white">savings</span>
               </div>
          </div>

          <div className="absolute bottom-10 text-center text-blue-200 text-sm">
              <p>© 2024 Bank Nexus. Secure Banking Protocol v2.4</p>
          </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 relative">
          <div className="w-full max-w-md">
                {/* Header */}
                <div className="flex items-center gap-2 mb-10 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="w-8 h-8 bg-[#001F3F] rounded-lg flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-lg">account_balance</span>
                    </div>
                    <span className="text-xl font-extrabold text-[#001F3F]">Bank Nexus</span>
                </div>

                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-[#001F3F] mb-2">Welcome Back</h1>
                    <p className="text-slate-500">Please enter your details to sign in.</p>
                </div>

                <form ref={formRef} className="flex flex-col gap-5" onSubmit={handleLogin}>
                    <div className="space-y-1.5">
                        <label className="text-sm font-bold text-slate-700" htmlFor="username">Username or Email</label>
                        <div className="relative">
                            <input 
                                id="username" 
                                type="text" 
                                className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-medium text-slate-900 bg-slate-50 focus:bg-white"
                                placeholder="Enter your ID" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">person</span>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-bold text-slate-700" htmlFor="password">Password</label>
                        <div className="relative">
                            <input 
                                id="password" 
                                type="password" 
                                className="w-full h-12 pl-11 pr-12 rounded-xl border border-slate-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-medium text-slate-900 bg-slate-50 focus:bg-white"
                                placeholder="••••••••" 
                            />
                            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                            <button type="button" className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-slate-400 hover:text-[#0055FF]">
                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0055FF] focus:ring-[#0055FF]" />
                            <span className="text-sm font-medium text-slate-600">Remember me</span>
                        </label>
                        <a href="#" className="text-sm font-bold text-[#0055FF] hover:underline">Forgot Password?</a>
                    </div>

                    <button type="submit" className="mt-2 w-full h-14 bg-[#001F3F] hover:bg-slate-900 text-white font-bold rounded-xl shadow-lg transition-all transform active:scale-[0.98]">
                        Sign In
                    </button>

                    <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-slate-200"></div>
                        <span className="flex-shrink-0 mx-4 text-slate-400 text-xs font-bold uppercase">Or continue with</span>
                        <div className="flex-grow border-t border-slate-200"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="h-12 border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50 transition-colors font-bold text-slate-700 gap-2">
                             <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                             Google
                        </button>
                        <button type="button" className="h-12 border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50 transition-colors font-bold text-slate-700 gap-2">
                             <span className="material-symbols-outlined text-2xl">face</span>
                             FaceID
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-center text-slate-500">
                    Don't have an account? 
                    <span onClick={() => navigate('/signup')} className="font-bold text-[#0055FF] cursor-pointer hover:underline ml-1">Sign up for free</span>
                </p>
          </div>
      </div>
    </div>
  );
};

export default LoginPage;