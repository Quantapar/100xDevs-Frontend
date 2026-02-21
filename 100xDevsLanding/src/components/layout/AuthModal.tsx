import { Link } from 'react-router-dom';
import { X, Code2 } from 'lucide-react';
import { useEffect } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
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
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-[#04102d]/60 backdrop-blur-sm transition-opacity" onClick={onClose}>
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

        <div className="w-full md:w-[52%] p-8 lg:p-12 flex flex-col pt-12 md:pt-12">
           <div className="flex justify-center mb-8 lg:mb-12">
             <span className="text-[32px] font-black tracking-tighter text-[#04102d]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
               100<span className="text-[#e13a45]">x</span>Devs
             </span>
           </div>

           <h3 className="text-[24px] lg:text-[26px] font-black text-[#04102d] mb-6 md:mb-8 text-center md:text-left leading-tight">Sign in to your account</h3>

           <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="block text-[15px] font-black text-[#04102d] mb-2">Email or Phone</label>
                <input 
                  type="text" 
                  placeholder="Enter your phone number or email"
                  className="w-full border-2 border-[#04102d] rounded-[14px] px-5 py-3.5 bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0bae95]/20 font-bold text-[#04102d] placeholder:text-gray-400/80 transition-all font-sans text-[15px]"
                />
                <p className="text-[13px] text-[#04102d]/60 font-bold mt-2.5">
                  Please add country code if you are a user outside of India
                </p>
              </div>

              <button className="w-full bg-[#04102d] text-white py-4 mt-2 rounded-[14px] font-black tracking-wide border-2 border-[#04102d] shadow-[4px_4px_0_#0bae95] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0bae95] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] text-lg cursor-pointer flex items-center justify-center">
                Continue
              </button>
           </form>

           <div className="mt-8 md:mt-auto pt-6 text-center md:text-left">
             <p className="text-[13px] font-bold text-[#04102d]/70">
               By signing in, you agree to our <Link to="/terms" onClick={() => { window.scrollTo(0,0); onClose(); }} className="text-[#04102d] hover:text-[#0bae95] underline decoration-2 underline-offset-2 transition-colors cursor-pointer">Terms & Conditions</Link> & <Link to="/privacy-policy" onClick={() => { window.scrollTo(0,0); onClose(); }} className="text-[#04102d] hover:text-[#0bae95] underline decoration-2 underline-offset-2 transition-colors cursor-pointer">Privacy Policy</Link>
             </p>
           </div>
        </div>

      </div>
    </div>
  );
}
