import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScanToPay: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center">
      {/* Camera Viewfinder (Simulated) */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=1374&auto=format&fit=crop" 
            alt="Camera Feed" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Header */}
      <div className="relative z-20 w-full flex items-center justify-between p-4 text-white">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-black/20 backdrop-blur-md">
              <span className="material-symbols-outlined">close</span>
          </button>
          <h2 className="text-lg font-bold">Scan QR Code</h2>
          <button className="p-2 rounded-full bg-black/20 backdrop-blur-md">
              <span className="material-symbols-outlined">flash_on</span>
          </button>
      </div>

      {/* Scanning Overlay */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full px-10">
          <div className="relative w-full aspect-square border-2 border-white/50 rounded-3xl overflow-hidden shadow-[0_0_0_1000px_rgba(0,0,0,0.6)]">
              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-xl"></div>
              
              {/* Scanning laser animation */}
              <div className="absolute left-0 right-0 h-1 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
          </div>
          <p className="mt-8 text-white text-sm font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">Align QR code within the frame</p>
      </div>

      {/* Footer Controls */}
      <div className="relative z-20 w-full p-6 flex flex-col gap-4 bg-gradient-to-t from-black via-black/80 to-transparent pt-12">
          <button className="w-full h-14 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2" onClick={() => navigate('/transfer/amount')}>
              <span className="material-symbols-outlined">keyboard</span>
              Enter Code Manually
          </button>
          <div className="flex justify-center gap-8 text-white/80">
              <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white">
                  <span className="material-symbols-outlined p-3 bg-white/10 rounded-full">image</span>
                  <span className="text-xs font-medium">Gallery</span>
              </div>
              <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white">
                  <span className="material-symbols-outlined p-3 bg-white/10 rounded-full">history</span>
                  <span className="text-xs font-medium">History</span>
              </div>
          </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ScanToPay;