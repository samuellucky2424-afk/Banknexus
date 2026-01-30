import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const brandingRef = useRef(null);

  // PIN State
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [isConfirmingPin, setIsConfirmingPin] = useState(false);
  const [pinError, setPinError] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    citizenship: '',
    address: '',
    ssn: '',
    password: '',
    confirmPassword: '',
    agreed: false
  });

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreed: e.target.checked }));
  };

  // PIN Keypad Handler
  const handlePinClick = (num: number) => {
    setPinError('');
    if (isConfirmingPin) {
      if (confirmPin.length < 4) setConfirmPin(prev => prev + num);
    } else {
      if (pin.length < 4) setPin(prev => prev + num);
    }
  };

  const handlePinBackspace = () => {
    setPinError('');
    if (isConfirmingPin) {
      setConfirmPin(prev => prev.slice(0, -1));
    } else {
      setPin(prev => prev.slice(0, -1));
    }
  };

  const handlePinSubmit = () => {
    if (!isConfirmingPin) {
        if (pin.length === 4) {
            setIsConfirmingPin(true);
        }
    } else {
        if (confirmPin.length === 4) {
            if (pin === confirmPin) {
                // Save PIN and complete signup
                localStorage.setItem('nexus_pin', pin);
                navigate('/dashboard');
            } else {
                setPinError("PINs do not match. Try again.");
                setConfirmPin('');
                setPin('');
                setIsConfirmingPin(false);
            }
        }
    }
  };

  // Animation Trigger on Step Change
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Animate Title
    tl.fromTo(titleRef.current, 
      { opacity: 0, x: -20 }, 
      { opacity: 1, x: 0, duration: 0.5 }
    );

    // Stagger Fields
    const fields = (formRef.current as any)?.children;
    if (fields) {
      tl.fromTo(fields, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.4 }, 
        "-=0.3"
      );
    }
  }, [step, isConfirmingPin]);

  // Initial Entrance Animation for Branding
  useEffect(() => {
    gsap.fromTo(brandingRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  // Navigation Logic
  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step === 4 && isConfirmingPin) {
        setIsConfirmingPin(false);
        setPin('');
        setConfirmPin('');
        return;
    }
    if (step > 1) setStep(step - 1);
    else navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white font-display text-slate-900 selection:bg-[#0055FF] selection:text-white flex overflow-hidden">
      
      {/* Left Panel - Branding (Hidden on Mobile) */}
      <div ref={brandingRef} className="hidden lg:flex lg:w-1/2 bg-[#001F3F] relative flex-col justify-between p-12 overflow-hidden text-white">
          {/* Abstract Background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
             <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#0055FF] rounded-full blur-[120px] opacity-40"></div>
             <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-400 rounded-full blur-[100px] opacity-20"></div>
          </div>

          <div className="relative z-10">
              <div className="flex items-center gap-3 mb-12">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#001F3F]">
                      <span className="material-symbols-outlined text-2xl">account_balance</span>
                  </div>
                  <span className="text-2xl font-extrabold tracking-tight">Bank Nexus</span>
              </div>

              <h1 className="text-5xl font-extrabold leading-tight mb-6">
                  Join the Future of <br/>
                  <span className="text-[#0055FF]">Digital Banking</span>
              </h1>
              <p className="text-blue-100 text-lg max-w-md leading-relaxed">
                  Experience seamless transactions, smart savings, and bank-grade security. Create your account in minutes.
              </p>
          </div>

          <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-[#001F3F] bg-gray-200"></div>
                      ))}
                  </div>
                  <div>
                      <p className="font-bold">2 Million+</p>
                      <p className="text-xs text-blue-200">Trusted Users</p>
                  </div>
              </div>
              <div className="flex gap-6 text-sm text-blue-200 font-medium">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">check_circle</span> FDIC Insured</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">check_circle</span> 256-bit Encryption</span>
              </div>
          </div>
      </div>

      {/* Right Panel - Form Flow */}
      <div className="w-full lg:w-1/2 flex flex-col h-screen bg-white relative">
        
        {/* Header (Mobile & Desktop) */}
        <header className="flex-none px-6 py-6 flex items-center justify-between z-20 bg-white">
          <button 
            onClick={prevStep}
            className="w-10 h-10 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          
          {/* Mobile Logo Only */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="w-8 h-8 bg-[#001F3F] rounded-lg flex items-center justify-center text-white">
                 <span className="material-symbols-outlined text-lg">account_balance</span>
            </div>
            <span className="font-extrabold text-[#001F3F] text-lg">Nexus</span>
          </div>

          <button onClick={() => navigate('/login')} className="text-sm font-bold text-[#0055FF] hover:text-[#001F3F] transition-colors">
            Log In
          </button>
        </header>

        {/* Progress Bar */}
        <div className="px-8 lg:px-20 pb-4">
            <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#001F3F]">
                    {step === 1 ? 'Account Basics' : step === 2 ? 'Identity Check' : step === 3 ? 'Secure Account' : 'Create PIN'}
                </span>
                <span className="text-xs font-bold text-slate-400">Step {step} of 4</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full flex overflow-hidden">
                <div className={`h-full bg-[#0055FF] transition-all duration-500 ease-out`} style={{width: `${step * 25}%`}}></div>
            </div>
        </div>

        {/* Scrollable Form Area */}
        <main ref={containerRef} className="flex-1 overflow-y-auto px-8 lg:px-20 py-4 no-scrollbar flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
              <div ref={titleRef} className="mb-8">
                <h2 className="text-3xl font-extrabold text-[#001F3F] mb-2">
                    {step === 1 && "Let's get started"}
                    {step === 2 && "Verify your identity"}
                    {step === 3 && "Secure your account"}
                    {step === 4 && (isConfirmingPin ? "Confirm your PIN" : "Create a PIN")}
                </h2>
                <p className="text-slate-500 font-medium">
                    {step === 1 && "Enter your details to begin your banking journey."}
                    {step === 2 && "We are required to verify your identity by law."}
                    {step === 3 && "Set a strong password to protect your assets."}
                    {step === 4 && "Create a 4-digit PIN for transactions."}
                </p>
              </div>

              <form ref={formRef} className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                
                {/* --- STEP 1: BASICS --- */}
                {step === 1 && (
                    <>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-slate-700">First Name</label>
                                <input 
                                    name="firstName" 
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    type="text" 
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-medium text-slate-900 bg-slate-50 focus:bg-white" 
                                    placeholder="Jane" 
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-slate-700">Last Name</label>
                                <input 
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    type="text" 
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-medium text-slate-900 bg-slate-50 focus:bg-white" 
                                    placeholder="Doe" 
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700">Email Address</label>
                            <div className="relative">
                                <input 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email" 
                                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-medium text-slate-900 bg-slate-50 focus:bg-white" 
                                    placeholder="jane.doe@example.com" 
                                />
                                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700">Mobile Number</label>
                            <div className="relative">
                                <input 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type="tel" 
                                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-medium text-slate-900 bg-slate-50 focus:bg-white" 
                                    placeholder="(555) 123-4567" 
                                />
                                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">call</span>
                            </div>
                        </div>
                    </>
                )}

                {/* --- STEP 2: IDENTITY --- */}
                {step === 2 && (
                    <>
                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700">Date of Birth</label>
                            <div className="relative">
                                <input 
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    type="date" 
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-medium text-slate-900 bg-slate-50 focus:bg-white" 
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700">Citizenship</label>
                            <div className="relative">
                                <select 
                                    name="citizenship"
                                    value={formData.citizenship}
                                    onChange={handleChange}
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-medium text-slate-900 bg-slate-50 focus:bg-white appearance-none"
                                >
                                    <option value="" disabled>Select Country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="UK">United Kingdom</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700">Home Address</label>
                            <input 
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                type="text" 
                                className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-medium text-slate-900 bg-slate-50 focus:bg-white" 
                                placeholder="Street address, City, State" 
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700">SSN / Tax ID</label>
                            <div className="relative">
                                <input 
                                    name="ssn"
                                    value={formData.ssn}
                                    onChange={handleChange}
                                    type="password" 
                                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-medium text-slate-900 bg-slate-50 focus:bg-white tracking-widest" 
                                    placeholder="•••-••-••••" 
                                />
                                 <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">shield</span>
                            </div>
                            <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                                <span className="material-symbols-outlined text-[12px] filled">lock</span>
                                Encrypted with bank-grade security.
                            </p>
                        </div>
                    </>
                )}

                {/* --- STEP 3: SECURITY --- */}
                {step === 3 && (
                    <>
                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700">Create Password</label>
                            <div className="relative">
                                <input 
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    type="password" 
                                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-medium text-slate-900 bg-slate-50 focus:bg-white" 
                                    placeholder="••••••••" 
                                />
                                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">key</span>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700">Confirm Password</label>
                            <div className="relative">
                                <input 
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    type="password" 
                                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-medium text-slate-900 bg-slate-50 focus:bg-white" 
                                    placeholder="••••••••" 
                                />
                                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">check_circle</span>
                            </div>
                        </div>

                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 mt-2">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <div className="relative flex items-center mt-0.5">
                                    <input 
                                        type="checkbox" 
                                        checked={formData.agreed}
                                        onChange={handleCheckboxChange}
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all checked:border-[#0055FF] checked:bg-[#0055FF]" 
                                    />
                                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                                <span className="text-sm text-slate-600 leading-snug">
                                    I certify that I am 18 years of age or older, and I agree to the <span className="text-[#0055FF] font-bold">User Agreement</span> and <span className="text-[#0055FF] font-bold">Privacy Policy</span>.
                                </span>
                            </label>
                        </div>
                    </>
                )}

                {/* --- STEP 4: CREATE PIN --- */}
                {step === 4 && (
                    <div className="flex flex-col items-center">
                        {/* PIN Dots */}
                        <div className="flex gap-4 mb-8">
                            {[0, 1, 2, 3].map((i) => {
                                const currentPin = isConfirmingPin ? confirmPin : pin;
                                return (
                                    <div key={i} className={`w-4 h-4 rounded-full transition-all duration-200 ${
                                        i < currentPin.length 
                                        ? 'bg-[#0055FF] scale-110' 
                                        : 'bg-slate-200'
                                    }`}></div>
                                );
                            })}
                        </div>
                        
                        {pinError && (
                            <div className="text-red-500 text-sm font-bold mb-4 animate-pulse">
                                {pinError}
                            </div>
                        )}

                        {/* Custom Keypad */}
                        <div className="w-full max-w-xs grid grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                                <button 
                                    key={n} 
                                    onClick={() => handlePinClick(n)}
                                    type="button"
                                    className="h-14 rounded-xl bg-slate-50 hover:bg-slate-100 text-xl font-bold text-slate-800 transition-colors"
                                >
                                    {n}
                                </button>
                            ))}
                            <div className="h-14"></div>
                            <button 
                                onClick={() => handlePinClick(0)} 
                                type="button"
                                className="h-14 rounded-xl bg-slate-50 hover:bg-slate-100 text-xl font-bold text-slate-800 transition-colors"
                            >
                                0
                            </button>
                            <button 
                                onClick={handlePinBackspace} 
                                type="button"
                                className="h-14 rounded-xl hover:bg-red-50 text-slate-500 hover:text-red-500 flex items-center justify-center transition-colors"
                            >
                                <span className="material-symbols-outlined">backspace</span>
                            </button>
                        </div>
                    </div>
                )}
              </form>
          </div>
        </main>

        {/* Footer Actions */}
        <div className="p-6 bg-white border-t border-slate-100 lg:px-20 z-20">
            <div className="max-w-md mx-auto w-full">
                {step < 4 ? (
                    <button 
                        onClick={nextStep}
                        className="w-full h-14 bg-[#0055FF] hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-500/30 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                        Continue
                        <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </button>
                ) : (
                    <button 
                        onClick={handlePinSubmit}
                        disabled={isConfirmingPin ? confirmPin.length !== 4 : pin.length !== 4}
                        className={`w-full h-14 font-bold text-lg rounded-xl shadow-lg transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 ${
                            (isConfirmingPin ? confirmPin.length !== 4 : pin.length !== 4)
                            ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            : 'bg-[#0055FF] hover:bg-blue-700 text-white shadow-blue-500/30'
                        }`}
                    >
                        {isConfirmingPin ? 'Confirm & Finish' : 'Next'}
                        <span className="material-symbols-outlined text-xl">check</span>
                    </button>
                )}
            </div>
        </div>

      </div>
    </div>
  );
};

export default SignUpPage;