import { Link } from 'react-router-dom';

export function Navbar({ onOpenAuth }: { onOpenAuth: () => void }) {
  return (
    <header className="w-full border-b-2 border-[#04102d]/20 bg-white relative z-50">
      <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <span className="text-[24px] font-black tracking-tighter" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            100<span className="text-[#e13a45]">x</span>Devs
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 font-semibold text-[15px] text-[#04102d]/80">
          <Link to="/" className="hover:text-[#04102d] transition-colors cursor-pointer">Home</Link>
          <a href="#" className="hover:text-[#04102d] transition-colors">Courses</a>
          <Link to="/store" className="hover:text-[#04102d] transition-colors cursor-pointer">Store</Link>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={onOpenAuth} className="hidden sm:block px-5 py-2.5 rounded-xl font-bold border-2 border-[#04102d] bg-[#e2eafb] hover:bg-[#d1def8] transition-colors shadow-[2px_2px_0_#04102d] cursor-pointer">
            Sign up
          </button>
          <button onClick={onOpenAuth} className="px-5 py-2.5 rounded-xl bg-[#04102d] text-white hover:bg-gray-800 font-bold transition-colors border-2 border-transparent shadow-[2px_2px_0_#04102d] cursor-pointer">
            Log in
          </button>
        </div>
      </nav>
    </header>
  );
}
