export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <span className="text-[24px] font-black tracking-tighter" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          100<span className="text-[#e13a45]">x</span>Devs
        </span>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 font-semibold text-[15px] text-[#04102d]/80">
        <a href="#" className="hover:text-[#04102d] transition-colors">Home</a>
        <a href="#" className="hover:text-[#04102d] transition-colors">Courses</a>
        <a href="#" className="hover:text-[#04102d] transition-colors">Store</a>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden sm:block px-5 py-2.5 rounded-xl font-bold border-2 border-[#04102d] bg-[#e2eafb] hover:bg-[#d1def8] transition-colors shadow-[2px_2px_0_#04102d] cursor-pointer">
          Sign up
        </button>
        <button className="px-5 py-2.5 rounded-xl bg-[#04102d] text-white hover:bg-gray-800 font-bold transition-colors border-2 border-transparent shadow-[2px_2px_0_#04102d] cursor-pointer">
          Log in
        </button>
      </div>
    </nav>
  );
}
