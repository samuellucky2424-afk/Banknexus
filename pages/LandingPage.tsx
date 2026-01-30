import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Navbar Animation
    tl.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );

    // Hero Text Stagger
    const textElements = (heroTextRef.current as any).children;
    tl.fromTo(textElements,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
      "-=0.4"
    );

    // Hero Image Reveal
    tl.fromTo(heroImageRef.current,
      { x: 50, opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, duration: 1 },
      "-=0.6"
    );

    // Features Stagger (Simple delay for viewport presence)
    const featureCards = (featuresRef.current as any).children;
    gsap.fromTo(featureCards,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, delay: 1.5, ease: "back.out(1.7)" }
    );

    // Stats Bar
    gsap.fromTo(statsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 2, ease: "power2.out" }
    );

  }, []);

  return (
    <div className="min-h-screen bg-white font-display text-slate-900 selection:bg-[#0055FF] selection:text-white overflow-x-hidden flex flex-col">
      
      {/* Navbar */}
      <nav ref={navRef} className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="w-10 h-10 bg-[#001F3F] rounded-lg flex items-center justify-center text-white shadow-md">
                        <span className="material-symbols-outlined text-2xl">account_balance</span>
                    </div>
                    <span className="text-2xl font-extrabold text-[#001F3F] tracking-tight">Bank Nexus</span>
                </div>
                
                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    <button className="text-[#001F3F] font-bold hover:text-[#0055FF] transition-colors">Personal</button>
                    <button className="text-slate-500 font-medium hover:text-[#0055FF] transition-colors">Business</button>
                    <button className="text-slate-500 font-medium hover:text-[#0055FF] transition-colors">Company</button>
                    <button className="text-slate-500 font-medium hover:text-[#0055FF] transition-colors">Help</button>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-4">
                     <button onClick={() => navigate('/login')} className="hidden sm:block font-bold text-[#001F3F] hover:text-[#0055FF] px-4 py-2 rounded-lg hover:bg-blue-50 transition-all">Log In</button>
                     <button onClick={() => navigate('/signup')} className="bg-[#0055FF] text-white px-6 py-2.5 rounded-full font-bold shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:shadow-lg transform transition-all active:scale-95 flex items-center gap-1">
                        Open Account
                     </button>
                </div>
            </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 relative pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Subtle Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#001F3F 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 z-0 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0055FF]/5 rounded-full blur-3xl z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left Column: Typography & CTA */}
                <div ref={heroTextRef} className="max-w-2xl flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0055FF] text-xs font-bold uppercase tracking-wider mb-6">
                        <span className="material-symbols-outlined text-sm">verified_user</span>
                        Trusted by 2 Million+ Businesses
                    </div>
                    
                    <h1 className="text-5xl lg:text-6xl font-extrabold text-[#001F3F] leading-[1.1] mb-6 tracking-tight">
                        Welcome to <br/> Bank Nexus – <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055FF] to-blue-400">Your Trusted Partner</span> <br/>
                        in Modern Banking
                    </h1>
                    
                    <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg font-medium">
                        Secure. Simple. Smart. Experience seamless digital banking designed for your future. Join millions who trust Nexus for their financial success.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button onClick={() => navigate('/signup')} className="flex items-center justify-center gap-2 bg-[#0055FF] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            Open an Account Now
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <button onClick={() => navigate('/login')} className="flex items-center justify-center gap-2 bg-white text-[#001F3F] border-2 border-[#001F3F]/10 px-8 py-4 rounded-xl font-bold text-lg hover:border-[#0055FF] hover:text-[#0055FF] hover:bg-blue-50 transition-all duration-300">
                            Explore Services
                        </button>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold text-slate-500">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#0055FF] filled">check_circle</span>
                            <span>No Hidden Fees</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#0055FF] filled">check_circle</span>
                            <span>FDIC Insured</span>
                        </div>
                        <div className="flex items-center gap-2">
                             <span className="material-symbols-outlined text-[#0055FF] filled">check_circle</span>
                             <span>24/7 Expert Support</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Hero Visuals */}
                <div ref={heroImageRef} className="relative group perspective-1000 opacity-0">
                    {/* Floating Interest Card */}
                    <div className="absolute -top-6 -left-6 md:-top-12 md:-left-12 z-30 bg-white/90 backdrop-blur-xl p-4 pr-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 animate-[bounce_4s_infinite]">
                         <div className="flex items-center gap-4">
                             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-sm">
                                 <span className="material-symbols-outlined text-2xl">trending_up</span>
                             </div>
                             <div>
                                 <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Interest Earned</p>
                                 <p className="text-xl font-extrabold text-[#001F3F]">+4.50% APY</p>
                             </div>
                         </div>
                    </div>

                    {/* Floating Security Card */}
                    <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-8 z-30 bg-[#001F3F] p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,31,63,0.3)] border border-white/10">
                         <div className="flex items-center gap-4">
                             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/20">
                                 <span className="material-symbols-outlined text-2xl">shield_lock</span>
                             </div>
                             <div>
                                 <p className="text-xs text-white/60 font-bold uppercase tracking-wider">Security Status</p>
                                 <p className="text-lg font-bold text-white">Bank Grade Encryption</p>
                             </div>
                         </div>
                    </div>

                    {/* Main Image */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white bg-gray-200 transform group-hover:rotate-1 transition-transform duration-700 ease-out">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/40 to-transparent z-10 mix-blend-multiply"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
                            alt="Diverse professional banking team in a modern office" 
                            className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-1000"
                        />
                        {/* Holographic Overlay Effect */}
                        <div className="absolute top-1/4 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl z-20 mix-blend-screen animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
      </main>

      {/* Trust Strip */}
      <section className="bg-slate-50 border-y border-slate-100 py-10">
         <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {['tech_crunch', 'forbes', 'bloomberg', 'wired', 'wsj'].map((logo, i) => (
                 <div key={i} className="flex items-center gap-2 text-slate-800 font-bold text-xl">
                    <span className="material-symbols-outlined">newspaper</span>
                    <span>MEDIA PARTNER</span>
                 </div>
             ))}
         </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-[#0055FF] font-bold text-sm uppercase tracking-widest mb-2">Why Choose Nexus</h2>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#001F3F] mb-4">Banking built for the modern world</h3>
                  <p className="text-slate-500 text-lg">We combine cutting-edge technology with traditional banking security to give you the best of both worlds.</p>
              </div>

              <div ref={featuresRef} className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: 'account_balance_wallet', title: 'Smart Savings Vaults', desc: 'Create custom goals and automate your savings with up to 4.50% APY.', color: 'bg-blue-100 text-blue-600' },
                      { icon: 'payments', title: 'Global Transfers', desc: 'Send money internationally with real exchange rates and zero hidden fees.', color: 'bg-indigo-100 text-indigo-600' },
                      { icon: 'pie_chart', title: 'Financial Insights', desc: 'Track your spending habits with AI-powered analytics and budgeting tools.', color: 'bg-emerald-100 text-emerald-600' }
                  ].map((feature, i) => (
                      <div key={i} className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0">
                          <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                              <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                          </div>
                          <h4 className="text-xl font-bold text-[#001F3F] mb-3">{feature.title}</h4>
                          <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                          <div className="mt-6 flex items-center text-[#0055FF] font-bold text-sm cursor-pointer group-hover:gap-2 transition-all">
                              Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Corporate Strip */}
      <div ref={statsRef} className="bg-[#001F3F] py-16 text-white relative overflow-hidden opacity-0">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#0055FF] rounded-full blur-[100px] opacity-20"></div>
           <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
               <div className="p-4 border-r border-white/10 last:border-0">
                   <h3 className="font-extrabold text-4xl mb-1">2M+</h3>
                   <p className="text-sm text-blue-200 font-medium uppercase tracking-wide">Active Users</p>
               </div>
               <div className="p-4 border-r border-white/10 last:border-0">
                   <h3 className="font-extrabold text-4xl mb-1">$12B+</h3>
                   <p className="text-sm text-blue-200 font-medium uppercase tracking-wide">Transactions Processed</p>
               </div>
               <div className="p-4 border-r border-white/10 last:border-0">
                   <h3 className="font-extrabold text-4xl mb-1">99.9%</h3>
                   <p className="text-sm text-blue-200 font-medium uppercase tracking-wide">Uptime Guarantee</p>
               </div>
               <div className="p-4">
                   <h3 className="font-extrabold text-4xl mb-1">150+</h3>
                   <p className="text-sm text-blue-200 font-medium uppercase tracking-wide">Countries Supported</p>
               </div>
           </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                  <div className="col-span-1 md:col-span-2">
                      <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 bg-[#001F3F] rounded flex items-center justify-center text-white">
                              <span className="material-symbols-outlined text-lg">account_balance</span>
                          </div>
                          <span className="text-xl font-extrabold text-[#001F3F]">Bank Nexus</span>
                      </div>
                      <p className="text-slate-500 text-sm max-w-sm mb-6">
                          Empowering your financial future with secure, simple, and smart banking solutions. Licensed and regulated by the Financial Conduct Authority.
                      </p>
                      <div className="flex gap-4">
                          <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#0055FF] hover:text-white transition-colors cursor-pointer"><span className="material-symbols-outlined text-sm">public</span></span>
                          <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#0055FF] hover:text-white transition-colors cursor-pointer"><span className="material-symbols-outlined text-sm">mail</span></span>
                          <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#0055FF] hover:text-white transition-colors cursor-pointer"><span className="material-symbols-outlined text-sm">call</span></span>
                      </div>
                  </div>
                  
                  <div>
                      <h4 className="font-bold text-[#001F3F] mb-4">Products</h4>
                      <ul className="space-y-2 text-sm text-slate-500">
                          <li className="hover:text-[#0055FF] cursor-pointer">Checking Accounts</li>
                          <li className="hover:text-[#0055FF] cursor-pointer">Savings Vaults</li>
                          <li className="hover:text-[#0055FF] cursor-pointer">Credit Cards</li>
                          <li className="hover:text-[#0055FF] cursor-pointer">Loans</li>
                      </ul>
                  </div>

                  <div>
                      <h4 className="font-bold text-[#001F3F] mb-4">Company</h4>
                      <ul className="space-y-2 text-sm text-slate-500">
                          <li className="hover:text-[#0055FF] cursor-pointer">About Us</li>
                          <li className="hover:text-[#0055FF] cursor-pointer">Careers</li>
                          <li className="hover:text-[#0055FF] cursor-pointer">Press</li>
                          <li className="hover:text-[#0055FF] cursor-pointer">Privacy Policy</li>
                      </ul>
                  </div>
              </div>
              <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-xs text-slate-400">© 2024 Bank Nexus. All rights reserved.</p>
                  <div className="flex gap-6 text-xs text-slate-400 font-medium">
                      <span className="hover:text-[#001F3F] cursor-pointer">Terms</span>
                      <span className="hover:text-[#001F3F] cursor-pointer">Privacy</span>
                      <span className="hover:text-[#001F3F] cursor-pointer">Security</span>
                  </div>
              </div>
          </div>
      </footer>
    </div>
  );
};

export default LandingPage;