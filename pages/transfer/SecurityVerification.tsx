import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SecurityVerification: React.FC = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [shake, setShake] = useState<boolean>(false);

  const handleNumberClick = (num: number) => {
    if (pin.length < 4) {
      setPin(prev => prev + num);
      setError(false);
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
    setError(false);
  };

  useEffect(() => {
    if (pin.length === 4) {
      // Get stored PIN (default to 1234 if not set for demo purposes)
      const storedPin = localStorage.getItem('nexus_pin') || '1234';

      setTimeout(() => {
        if (pin === storedPin) {
            navigate('/transfer/success');
        } else {
            setError(true);
            setShake(true);
            setTimeout(() => {
                setPin('');
                setShake(false);
            }, 500);
        }
      }, 300);
    }
  }, [pin, navigate]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col items-center justify-start overflow-hidden">
        <div className="relative w-full max-w-3xl h-screen bg-background-light dark:bg-background-dark flex flex-col">
            <div className="flex items-center p-4 pb-2 justify-between">
                <div onClick={() => navigate(-1)} className="flex size-12 shrink-0 items-center cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </div>
                <h2 className="text-lg font-bold flex-1 text-center pr-12">Security Verification</h2>
            </div>
            
            <div className="flex-1 px-6 flex flex-col items-center justify-center -mt-20">
                <div className={`mb-8 p-4 rounded-full transition-colors duration-300 ${error ? 'bg-red-100 text-red-500' : 'bg-primary/10 text-primary'}`}>
                    <span className="material-symbols-outlined text-4xl">{error ? 'lock_open' : 'lock'}</span>
                </div>
                
                <h2 className="text-[24px] font-bold leading-tight text-center pb-2">Enter Transaction PIN</h2>
                <p className={`text-sm text-center pb-8 transition-colors ${error ? 'text-red-500 font-bold' : 'text-slate-600 dark:text-slate-400'}`}>
                    {error ? 'Incorrect PIN. Please try again.' : 'Enter your 4-digit PIN to confirm this transfer.'}
                </p>

                {/* PIN Dots */}
                <div className={`flex justify-center gap-6 mb-12 ${shake ? 'animate-[shake_0.5s_ease-in-out]' : ''}`}>
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className={`w-4 h-4 rounded-full transition-all duration-200 ${
                            i < pin.length 
                            ? (error ? 'bg-red-500' : 'bg-primary scale-110') 
                            : 'bg-slate-300 dark:bg-slate-700'
                        }`}></div>
                    ))}
                </div>
            </div>

            {/* Custom Numeric Keypad */}
            <div className="w-full bg-slate-100 dark:bg-[#161d2b] p-6 rounded-t-3xl shadow-2xl pb-10">
                 <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                        <button 
                            key={n} 
                            onClick={() => handleNumberClick(n)}
                            className="h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 text-2xl font-bold shadow-sm active:bg-slate-200 dark:active:bg-slate-700 transition-colors"
                        >
                            {n}
                        </button>
                    ))}
                    <div className="h-16"></div> {/* Spacer */}
                    <button 
                        onClick={() => handleNumberClick(0)} 
                        className="h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 text-2xl font-bold shadow-sm active:bg-slate-200 dark:active:bg-slate-700 transition-colors"
                    >
                        0
                    </button>
                    <button 
                        onClick={handleBackspace} 
                        className="h-16 flex items-center justify-center rounded-2xl hover:bg-white/50 text-slate-700 dark:text-slate-300"
                    >
                        <span className="material-symbols-outlined">backspace</span>
                    </button>
                 </div>
            </div>
        </div>
        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
          }
        `}</style>
    </div>
  );
};

export default SecurityVerification;