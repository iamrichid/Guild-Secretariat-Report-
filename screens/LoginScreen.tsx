
import React, { useState, useRef } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startBiometricScan = async () => {
    setIsScanning(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      // Simulate scanning delay
      setTimeout(() => {
        setScanComplete(true);
        setTimeout(() => {
          // Stop camera
          stream.getTracks().forEach(track => track.stop());
          onLogin();
        }, 1000);
      }, 3000);
    } catch (err) {
      console.error("Biometric error:", err);
      alert("Could not access camera for biometric login.");
      setIsScanning(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background-light dark:bg-background-dark">
      {isScanning && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 text-white">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/50 mb-8">
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              className="w-full h-full object-cover grayscale brightness-75"
            />
            {!scanComplete && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-full h-1 bg-primary/80 animate-[bounce_2s_infinite] shadow-[0_0_15px_rgba(19,91,236,1)]"></div>
              </div>
            )}
            {scanComplete && (
              <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-500 text-6xl animate-pulse filled">check_circle</span>
              </div>
            )}
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">
              {scanComplete ? "Identity Verified" : "Scanning Face ID..."}
            </h3>
            <p className="text-gray-400 text-sm">
              Please look directly at your screen.
            </p>
          </div>
          <button 
            onClick={() => {
              if (videoRef.current?.srcObject) {
                (videoRef.current.srcObject as MediaStream).getTracks().forEach(t => t.stop());
              }
              setIsScanning(false);
            }} 
            className="mt-12 text-gray-400 font-medium underline"
          >
            Cancel
          </button>
        </div>
      )}

      <div className="w-full max-w-[400px] flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative mb-6 group">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-t from-primary/20 to-secondary/40 opacity-60 blur-xl transition duration-200"></div>
            <div className="relative flex h-32 w-32 items-center justify-center">
              <img 
                alt="YPG Logo" 
                className="h-full w-full object-contain drop-shadow-md" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASiSiDftiDw7kAnyP4IhmvzKHCp9LiCMap09ZR_zzQtAouFDv-klvkOVCirzZP4N-2p263RAai5ohC6heIKJF_RVOxcAGKnw4gv8BFmiisMllEMSCRxPXvnslzVT7LzX26qc1GR5WZdc2dfOaCVwyhXfik46ZQ2gGRUbkM-Z28gz0GFm9F6EMeXQvhTS5h4P1u_jXmc0v8sXTQhoyuZaRsyXZACBsHXYO4OuXPgU_0C8mhFkEDuwy7EFZckx3VIPb9nkLP9CMiITxN" 
              />
            </div>
          </div>
          <h1 className="text-slate-900 dark:text-white tracking-tight text-[28px] font-bold leading-tight px-4 pb-2">
            YPG Secretariat Portal
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal px-4">
            Digitizing our reporting standards.
          </p>
        </div>

        <div className="flex flex-col gap-5 bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft dark:shadow-none border border-slate-100 dark:border-slate-800">
          <label className="flex flex-col gap-1.5">
            <span className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal">Email or User ID</span>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-slate-400">person</span>
              <input 
                className="form-input flex w-full min-w-0 flex-1 rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-background-dark focus:border-primary h-12 placeholder:text-slate-400 pl-11 pr-4 text-base font-normal transition-all duration-200" 
                placeholder="Enter your ID" 
                type="text" 
              />
            </div>
          </label>

          <label className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal">Password</span>
            </div>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-slate-400">lock</span>
              <input 
                className="form-input flex w-full min-w-0 flex-1 rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-background-dark focus:border-primary h-12 placeholder:text-slate-400 pl-11 pr-12 text-base font-normal transition-all duration-200" 
                placeholder="Enter your password" 
                type={showPassword ? "text" : "password"} 
              />
              <button 
                className="absolute right-0 top-0 bottom-0 flex items-center justify-center px-4 text-slate-400 hover:text-primary transition-colors" 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
            <div className="flex justify-end pt-1">
              <a className="text-primary text-sm font-medium hover:text-blue-700 hover:underline transition-colors" href="#">Forgot Password?</a>
            </div>
          </label>

          <div className="pt-2 flex flex-col gap-4">
            <button 
              onClick={onLogin}
              className="flex w-full items-center justify-center rounded-xl bg-primary hover:brightness-110 active:scale-[0.98] text-white text-base font-bold h-12 shadow-lg shadow-primary/30 transition-all duration-200"
            >
              Login
            </button>
            <button 
              onClick={startBiometricScan}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 dark:bg-background-dark hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium h-12 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[24px]">face</span>
              <span>Login with Biometrics</span>
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Don't have an account? 
            <a className="text-primary dark:text-blue-400 font-semibold hover:underline decoration-secondary decoration-2 underline-offset-2 ml-1" href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
