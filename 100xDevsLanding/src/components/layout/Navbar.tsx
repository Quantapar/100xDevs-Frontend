import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  isLoggedIn?: boolean;
  userName?: string | null;
  onLogout?: () => void;
}

export function Navbar({ onOpenAuth, isLoggedIn = false, userName, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isProtectedRoute = location.pathname.startsWith('/profile') || location.pathname.startsWith('/purchases');
  const effectivelyLoggedIn = isLoggedIn || isProtectedRoute;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full border-b-2 border-[#04102d]/20 bg-white relative z-50">
      <nav className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 max-w-7xl mx-auto w-full relative">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <span className="text-[20px] sm:text-[24px] font-black tracking-tighter" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            100<span className="text-[#e13a45]">x</span>Devs
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 font-semibold text-[15px] text-[#04102d]/80">
          <Link to="/" className="hover:text-[#04102d] transition-colors cursor-pointer">Home</Link>
          <Link to="/courses" className="hover:text-[#04102d] transition-colors cursor-pointer">Courses</Link>
          <Link to="/store" className="hover:text-[#04102d] transition-colors cursor-pointer">Store</Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {effectivelyLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-12 h-12 rounded-full bg-[#0b043d] text-white flex items-center justify-center font-bold text-xl cursor-pointer hover:bg-[#1a0f5e] transition-colors shadow-[2px_2px_0_#0bae95]"
              >
                {userName ? userName.charAt(0).toUpperCase() : 'M'}
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-white border-2 border-[#04102d] rounded-[16px] shadow-[4px_4px_0_#0bae95] py-2 flex flex-col z-[100] animate-in slide-in-from-top-2 duration-200 overflow-hidden">
                  <Link to="/profile" onClick={() => setIsDropdownOpen(false)} className="text-left px-5 py-2.5 text-[#04102d] font-bold text-[15px] hover:bg-gray-50 transition-colors w-full cursor-pointer">
                    My Profile
                  </Link>
                  <Link to="/purchases" onClick={() => setIsDropdownOpen(false)} className="text-left px-5 py-2.5 text-[#04102d] font-bold text-[15px] hover:bg-gray-50 transition-colors w-full cursor-pointer">
                    Purchases
                  </Link>
                  <div className="w-full h-[1px] bg-gray-100 my-1 font-bold"></div>
                  <button onClick={() => { setIsDropdownOpen(false); onLogout?.(); navigate('/'); }} className="text-left px-5 py-2.5 text-[#e13a45] font-bold text-[15px] hover:bg-red-50 transition-colors w-full cursor-pointer">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button onClick={() => onOpenAuth('signup')} className="px-5 py-2.5 rounded-xl font-bold border-2 border-[#04102d] bg-[#e2eafb] hover:bg-[#d1def8] transition-colors shadow-[2px_2px_0_#04102d] cursor-pointer">
                Sign up
              </button>
              <button onClick={() => onOpenAuth('login')} className="px-5 py-2.5 rounded-xl bg-[#04102d] text-white hover:bg-gray-800 font-bold transition-colors border-2 border-transparent shadow-[2px_2px_0_#04102d] cursor-pointer">
                Log in
              </button>
            </>
          )}
        </div>

        <div className="lg:hidden flex items-center gap-3">
          {effectivelyLoggedIn ? (
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-10 h-10 rounded-full bg-[#0b043d] text-white flex items-center justify-center font-bold text-lg cursor-pointer hover:bg-[#1a0f5e] transition-colors shadow-[2px_2px_0_#0bae95]"
              >
                {userName ? userName.charAt(0).toUpperCase() : 'M'}
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border-2 border-[#04102d] rounded-[16px] shadow-[4px_4px_0_#0bae95] py-2 flex flex-col z-[100] animate-in slide-in-from-top-2 duration-200 overflow-hidden">
                  <Link to="/profile" onClick={() => setIsDropdownOpen(false)} className="text-left px-4 py-2 text-[#04102d] font-bold text-[14px] hover:bg-gray-50 transition-colors w-full cursor-pointer">
                    My Profile
                  </Link>
                  <Link to="/purchases" onClick={() => setIsDropdownOpen(false)} className="text-left px-4 py-2 text-[#04102d] font-bold text-[14px] hover:bg-gray-50 transition-colors w-full cursor-pointer">
                    Purchases
                  </Link>
                  <div className="w-full h-[1px] bg-gray-100 my-1 font-bold"></div>
                  <button onClick={() => { setIsDropdownOpen(false); onLogout?.(); navigate('/'); }} className="text-left px-4 py-2 text-[#e13a45] font-bold text-[14px] hover:bg-red-50 transition-colors w-full cursor-pointer">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => onOpenAuth('login')} className="px-4 py-2 rounded-xl bg-[#04102d] text-white hover:bg-gray-800 font-bold sm:font-bold text-sm sm:text-base border-2 border-[#04102d] shadow-[2px_2px_0_#0bae95] transition-all cursor-pointer">
              Log in
            </button>
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border-2 border-[#04102d] rounded-xl bg-white shadow-[2px_2px_0_#0bae95] cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5 text-[#04102d]" /> : <Menu className="w-5 h-5 text-[#04102d]" />}
          </button>
        </div>
      </nav>

      
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b-4 border-[#04102d] shadow-2xl flex flex-col pt-2 pb-6 px-4 animate-in slide-in-from-top-4 duration-200">
          <Link to="/" onClick={() => setIsOpen(false)} className="py-4 font-bold text-[#04102d] border-b-2 border-gray-100 flex items-center justify-between">
            <span>Home</span>
          </Link>
          <Link to="/courses" onClick={() => setIsOpen(false)} className="py-4 font-bold text-[#04102d] border-b-2 border-gray-100 flex items-center justify-between">
            <span>Courses</span>
          </Link>
          <Link to="/store" onClick={() => setIsOpen(false)} className="py-4 font-bold text-[#04102d] border-b-2 border-gray-100 flex items-center justify-between">
            <span>Store</span>
          </Link>
          
          {!effectivelyLoggedIn && (
            <button 
              onClick={() => { setIsOpen(false); onOpenAuth('signup'); }} 
              className="mt-6 w-full py-3 rounded-xl font-black border-4 border-[#04102d] bg-[#e2eafb] text-[#04102d] hover:bg-[#d1def8] shadow-[4px_4px_0_#04102d]"
            >
              Sign up
            </button>
          )}
        </div>
      )}
    </header>
  );
}
