import { Link, useNavigate } from 'react-router-dom';
import { X, Code2, ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  mode?: 'login' | 'signup';
  onClose: () => void;
  onLogin?: (name: string) => void;
}

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", 
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", 
  "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", 
  "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export function AuthModal({ isOpen, mode = 'login', onClose, onLogin }: AuthModalProps) {
  const [currentMode, setCurrentMode] = useState<'login' | 'signup' | 'login_password' | 'login_otp'>(mode);
  const navigate = useNavigate();
  const [otpTimer, setOtpTimer] = useState(20);
  const [loginId, setLoginId] = useState('');
  const [loginError, setLoginError] = useState('');
  const [signupForm, setSignupForm] = useState({ fullName: '', email: '', phone: '', state: '', password: '' });
  const [signupErrors, setSignupErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (currentMode === 'login_otp' && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentMode, otpTimer]);

  useEffect(() => {
    setCurrentMode(mode);
    if (!isOpen) {
      setLoginId('');
      setLoginError('');
      setSignupForm({ fullName: '', email: '', phone: '', state: '', password: '' });
      setSignupErrors({});
    }
  }, [mode, isOpen]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-[#04102d]/60 backdrop-blur-sm transition-opacity overflow-y-auto" onClick={onClose}>
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 pb-20">
        <div 
          className="w-full max-w-4xl bg-white border-2 border-[#04102d] rounded-[32px] shadow-[12px_12px_0_#0bae95] p-2.5 flex flex-col md:flex-row relative animate-in zoom-in-95 duration-200"
          onClick={e => e.stopPropagation()}
        >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors z-50 border-2 border-[#04102d] text-[#04102d] shadow-[2px_2px_0_#04102d] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer"
        >
          <X className="w-5 h-5 flex-shrink-0" strokeWidth={3} />
        </button>

        <div className="w-full md:w-[48%] bg-[#04102d] rounded-[24px] px-8 pt-8 md:px-10 md:pt-10 flex flex-col relative overflow-hidden border-2 border-[#04102d] shadow-inner flex-shrink-0 min-h-[380px] md:min-h-[500px]">
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1.5px, transparent 1.5px), linear-gradient(90deg, #fff 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="relative z-10 flex justify-between items-start mb-6 gap-4">
             <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mt-1 tracking-tight">
               Become a 100x<br />Developer
             </h2>
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Code2 className="w-6 h-6 text-[#0bae95]" strokeWidth={3} />
             </div>
          </div>
          
          <p className="relative z-10 text-white/80 font-bold text-lg max-w-[280px] leading-snug">
            Hands-on bootcamps, real projects — start building today.
          </p>

          <div className="flex-grow flex items-end justify-center mt-6 relative z-10 pointer-events-none select-none">
            <img src="https://100xdevs.com/harkirat-transparent.png" alt="Kirat Singh" className="w-[85%] max-w-[280px] h-auto object-contain object-bottom pointer-events-auto" />
          </div>
        </div>

        <div className="w-full md:w-[52%] p-8 lg:p-12 flex flex-col pt-12 md:pt-12 relative">
           
           <div className="flex items-center justify-center mb-8 lg:mb-12 relative w-full">
             {currentMode !== 'login' && (
                <button 
                  onClick={(e) => { e.stopPropagation(); setCurrentMode('login'); }}
                  className="absolute left-0 w-8 h-8 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={3} />
                </button>
             )}
             <span className="text-[28px] sm:text-[32px] font-black tracking-tighter text-[#04102d]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
               100<span className="text-[#e13a45]">x</span>Devs
             </span>
           </div>

           <h3 className="text-[22px] lg:text-[24px] font-bold text-[#04102d] mb-6 md:mb-8 text-center md:text-left leading-tight">
             {currentMode === 'login' && 'Log in to your account'}
             {currentMode === 'signup' && 'Create your account'}
             {currentMode === 'login_password' && 'Enter your password to Log in'}
             {currentMode === 'login_otp' && 'Verify OTP'}
           </h3>

           {currentMode === 'login' && (
             <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-[15px] font-bold text-[#04102d] mb-2">Phone Number/Email</label>
                  <input 
                    type="text" 
                    value={loginId}
                    onChange={(e) => {
                      setLoginId(e.target.value);
                      if (loginError) setLoginError('');
                    }}
                    placeholder="Enter your phone number or email"
                    className={`w-full border ${loginError ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} rounded-[10px] px-4 py-3 bg-white focus:outline-none focus:border-[#0bae95] focus:ring-1 focus:ring-[#0bae95] font-semibold text-[#04102d] placeholder:text-gray-400 transition-all text-[15px]`}
                  />
                  {loginError ? (
                    <p className="text-[13px] text-red-500 font-semibold mt-2.5">
                      {loginError}
                    </p>
                  ) : (
                    <p className="text-[13px] text-gray-500 font-semibold mt-2.5">
                      Add country code if entering phone number.
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-3 mt-2">
                  <button 
                    onClick={() => {
                      setCurrentMode('login_password');
                    }}
                    className="w-full bg-[#04102d] text-white py-3.5 rounded-[10px] font-bold text-[16px] transition-all cursor-pointer flex items-center justify-center hover:bg-[#081840]"
                  >
                    Log in using password
                  </button>
                  <button 
                    onClick={() => {
                      setCurrentMode('login_otp'); 
                      setOtpTimer(20); 
                    }}
                    className="w-full bg-white border border-gray-300 text-[#04102d] py-3.5 rounded-[10px] font-bold text-[16px] transition-all cursor-pointer flex items-center justify-center hover:bg-gray-50"
                  >
                    Log in using OTP
                  </button>
                </div>

                <div className="text-center mt-2">
                  <span className="text-[14px] text-gray-600 font-bold">Don't have an account? </span>
                  <button type="button" onClick={() => setCurrentMode('signup')} className="text-[14px] text-[#04102d] font-bold underline hover:text-[#0bae95] cursor-pointer">
                    Sign up
                  </button>
                </div>
             </form>
           )}

           {currentMode === 'login_password' && (
             <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-[15px] font-bold text-[#04102d] mb-2">Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-[10px] px-4 py-3 bg-white focus:outline-none focus:border-[#0bae95] focus:ring-1 focus:ring-[#0bae95] font-semibold text-[#04102d] placeholder:text-gray-400 transition-all text-[15px]"
                  />
                  <div className="mt-3">
                    <button type="button" className="text-[14px] text-[#04102d] font-bold hover:text-[#0bae95] cursor-pointer">
                      Forgot your password?
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const nameToUse = loginId.trim() || 'User';
                    if (onLogin) {
                      onLogin(nameToUse);
                      onClose();
                    }
                  }}
                  className="w-full bg-[#04102d] text-white py-3.5 rounded-[10px] font-bold text-[16px] transition-all cursor-pointer flex items-center justify-center hover:bg-[#081840]"
                >
                  Log in
                </button>

                <div className="text-center mt-2">
                  <span className="text-[14px] text-gray-600 font-bold">Don't have an account? </span>
                  <button type="button" onClick={() => setCurrentMode('signup')} className="text-[14px] text-[#04102d] font-bold underline hover:text-[#0bae95] cursor-pointer">
                    Sign up
                  </button>
                </div>
             </form>
           )}

           {currentMode === 'login_otp' && (
             <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
                <p className="text-[15px] text-[#04102d] font-semibold -mt-4 mb-2">
                  Enter OTP sent to your phone/email
                </p>
                
                <div className="flex gap-4 justify-between w-full">
                  {[1, 2, 3, 4].map((i) => (
                    <input 
                      key={i}
                      type="text" 
                      maxLength={1}
                      className="w-full h-[54px] border border-gray-400 rounded-[10px] text-center text-xl font-bold text-[#04102d] focus:outline-none focus:border-[#0bae95] focus:ring-2 focus:ring-[#0bae95] transition-all"
                    />
                  ))}
                </div>

                <button 
                  onClick={() => {
                    const nameToUse = loginId.trim() || 'User';
                    if (onLogin) {
                      onLogin(nameToUse);
                      onClose();
                    }
                  }}
                  className="w-full bg-[#04102d] text-white py-3.5 rounded-[10px] font-bold text-[16px] transition-all cursor-pointer flex items-center justify-center hover:bg-[#081840]"
                >
                  Log in
                </button>

                <div className="text-center mt-2">
                  {otpTimer > 0 ? (
                    <>
                      <span className="text-[14px] text-gray-500 font-bold">Request new OTP in </span>
                      <span className="text-[14px] text-[#04102d] font-bold underline cursor-pointer hover:text-[#0bae95]">{otpTimer} seconds</span>
                    </>
                  ) : (
                    <button type="button" onClick={() => setOtpTimer(20)} className="text-[14px] text-[#04102d] font-bold underline cursor-pointer hover:text-[#0bae95] transition-colors">
                      Resend OTP
                    </button>
                  )}
                </div>
             </form>
           )}

           {currentMode === 'signup' && (
             <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-[13px] font-bold text-[#04102d] mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    value={signupForm.fullName}
                    onChange={(e) => {
                      setSignupForm({...signupForm, fullName: e.target.value});
                      if (signupErrors.fullName) setSignupErrors({...signupErrors, fullName: ''});
                    }}
                    placeholder="Enter your full name"
                    className={`w-full border ${signupErrors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} rounded-[10px] px-4 py-2.5 bg-white focus:outline-none focus:border-[#0bae95] focus:ring-1 focus:ring-[#0bae95] font-semibold text-[#04102d] placeholder:text-gray-400 transition-all text-[14px]`}
                  />
                  {signupErrors.fullName && <p className="text-[12px] text-red-500 font-semibold mt-1">{signupErrors.fullName}</p>}
                </div>
                
                <div>
                  <label className="block text-[13px] font-bold text-[#04102d] mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    value={signupForm.email}
                    onChange={(e) => {
                      setSignupForm({...signupForm, email: e.target.value});
                      if (signupErrors.email) setSignupErrors({...signupErrors, email: ''});
                    }}
                    placeholder="Enter your email address"
                    className={`w-full border ${signupErrors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} rounded-[10px] px-4 py-2.5 bg-white focus:outline-none focus:border-[#0bae95] focus:ring-1 focus:ring-[#0bae95] font-semibold text-[#04102d] placeholder:text-gray-400 transition-all text-[14px]`}
                  />
                  {signupErrors.email && <p className="text-[12px] text-red-500 font-semibold mt-1">{signupErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#04102d] mb-1.5">Phone Number</label>
                  <input 
                    type="text" 
                    value={signupForm.phone}
                    onChange={(e) => {
                      setSignupForm({...signupForm, phone: e.target.value});
                      if (signupErrors.phone) setSignupErrors({...signupErrors, phone: ''});
                    }}
                    placeholder="Enter your phone number (with country code)"
                    className={`w-full border ${signupErrors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-400'} rounded-[10px] px-4 py-2.5 bg-white focus:outline-none focus:border-[#0bae95] focus:ring-1 focus:ring-[#0bae95] font-semibold text-[#04102d] placeholder:text-gray-400 transition-all text-[14px]`}
                  />
                  {signupErrors.phone && <p className="text-[12px] text-red-500 font-semibold mt-1">{signupErrors.phone}</p>}
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#04102d] mb-1.5">State</label>
                  <select 
                    className={`w-full border ${signupErrors.state ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} rounded-[10px] px-4 py-2.5 bg-white focus:outline-none focus:border-[#0bae95] focus:ring-1 focus:ring-[#0bae95] font-semibold text-[#04102d] appearance-none transition-all text-[14px] ${!signupForm.state ? 'text-gray-500' : ''}`}
                    value={signupForm.state}
                    onChange={(e) => {
                      setSignupForm({...signupForm, state: e.target.value});
                      if (signupErrors.state) setSignupErrors({...signupErrors, state: ''});
                    }}
                  >
                    <option value="" disabled>Select your state</option>
                    {INDIAN_STATES.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  {signupErrors.state && <p className="text-[12px] text-red-500 font-semibold mt-1">{signupErrors.state}</p>}
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#04102d] mb-1.5">Password</label>
                  <input 
                    type="password" 
                    value={signupForm.password}
                    onChange={(e) => {
                      setSignupForm({...signupForm, password: e.target.value});
                      if (signupErrors.password) setSignupErrors({...signupErrors, password: ''});
                    }}
                    placeholder="Create a strong password"
                    className={`w-full border ${signupErrors.password ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} rounded-[10px] px-4 py-2.5 bg-white focus:outline-none focus:border-[#0bae95] focus:ring-1 focus:ring-[#0bae95] font-semibold text-[#04102d] placeholder:text-gray-400 transition-all text-[14px]`}
                  />
                  {signupErrors.password && <p className="text-[12px] text-red-500 font-semibold mt-1">{signupErrors.password}</p>}
                </div>

                <button 
                  onClick={() => {
                    const nameToUse = signupForm.fullName.trim() || 'User';
                    if (onLogin) {
                      onLogin(nameToUse);
                      onClose();
                      navigate('/profile');
                    }
                  }}
                  className="w-full bg-[#04102d] text-white py-3 mt-2 rounded-[10px] font-bold tracking-wide transition-all text-[15px] cursor-pointer flex items-center justify-center hover:bg-[#081840]"
                >
                  Sign up
                </button>

                <div className="text-center mt-1">
                  <span className="text-[13px] text-gray-600 font-bold">Already have an account? </span>
                  <button type="button" onClick={() => setCurrentMode('login')} className="text-[13px] text-[#04102d] font-bold underline hover:text-[#0bae95] cursor-pointer">
                    Log in
                  </button>
                </div>
             </form>
           )}

           <div className="mt-8 md:mt-auto pt-6 text-center md:text-left">
             <p className="text-[13px] font-bold text-[#04102d]/70">
               By signing in, you agree to our <Link to="/terms" onClick={() => { window.scrollTo(0,0); onClose(); }} className="text-[#04102d] hover:text-[#0bae95] underline decoration-2 underline-offset-2 transition-colors cursor-pointer">Terms & Conditions</Link> & <Link to="/privacy-policy" onClick={() => { window.scrollTo(0,0); onClose(); }} className="text-[#04102d] hover:text-[#0bae95] underline decoration-2 underline-offset-2 transition-colors cursor-pointer">Privacy Policy</Link>
             </p>
           </div>
        </div>

      </div>
      </div>
    </div>
  );
}
