import { Search } from 'lucide-react';

export function CoursesPage() {
  return (
    <div className="w-full flex flex-col flex-grow bg-[#f8f9fa]">
     
      <div className="w-full flex justify-center pt-12 pb-12 lg:pt-16 lg:pb-16 bg-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="relative w-full rounded-[32px] border-4 border-[#04102d] shadow-[8px_8px_0_#0bae95] lg:shadow-[12px_12px_0_#0bae95] overflow-hidden flex flex-col items-center justify-center p-10 lg:p-20 group">
            
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('https://100xdevs.com/banner.webp')" }}
            ></div>
            
            <div className="absolute inset-0 bg-[#04102d]/60 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#04102d]/95 via-[#04102d]/60 to-[#04102d]/80 z-10"></div>

            <div className="relative z-20 w-full flex flex-col items-center text-center">
              
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-white overflow-hidden border-2 border-white shadow-[0_0_0_1px_#0bae95]">
                  <img src="https://100xdevs.com/harkirat-transparent.png" alt="Harkirat Singh" className="w-full h-full object-cover bg-[#0bae95]/20 object-top" />
                </div>
                <span className="text-white font-semibold text-[14px]">Mentored by Harkirat Singh</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-5 drop-shadow-xl tracking-tight">
                Choose Your <br className="sm:hidden" />
                <span className="relative inline-block pb-1">
                  Learning Path
                  <svg className="absolute w-[105%] h-[16px] -bottom-2 -left-2 text-[#0bae95]" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 15 Q 50 20 100 5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-base lg:text-[19px] font-bold text-white/90 max-w-2xl leading-relaxed mb-10 drop-shadow-md">
                Master real engineering skills with hands-on mentorship. From full-stack development to DevOps — get job-ready with structured, industry-focused programs.
              </p>

              <div className="w-full max-w-xl relative group/input">
                <div className="absolute inset-0 bg-[#0bae95] rounded-xl transform translate-x-1 translate-y-1 transition-transform group-focus-within/input:translate-x-0 group-focus-within/input:translate-y-0"></div>
                <div className="relative flex items-center bg-white rounded-xl border-4 border-[#04102d] overflow-hidden focus-within:outline-none focus-within:ring-4 focus-within:ring-[#0bae95]/30 transition-all">
                  <div className="pl-5 pr-2 py-3 lg:py-4">
                    <Search className="w-5 h-5 text-[#04102d]/50" strokeWidth={3} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search for courses, topics..." 
                    className="w-full bg-transparent border-none outline-none py-3 lg:py-4 pr-5 text-base font-bold text-[#04102d] placeholder:text-[#04102d]/40"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <h2 className="text-3xl lg:text-5xl font-black text-[#04102d] mb-12">Featured Programs</h2>
       
      </div>

    </div>
  );
}
