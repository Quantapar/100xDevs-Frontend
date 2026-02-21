import { Code2, ChevronRight } from 'lucide-react';

export function HeroSection() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-12 lg:pt-16 pb-12 lg:pb-16 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      

      <div className="flex flex-col gap-8 lg:pr-10">
        <h1 className="text-4xl lg:text-[56px] font-black leading-[1.05] tracking-[-0.03em] text-[#04102d]">
          Master Full Stack
          <br />
          Development
          <div className="inline-flex items-center align-middle ml-4">
            <span className="w-12 h-12 lg:w-16 lg:h-16 bg-[#0bae95] border-[3px] border-[#04102d] rounded-full flex items-center justify-center shadow-[4px_4px_0_#04102d]">
              <Code2 className="w-6 h-6 lg:w-8 lg:h-8 text-white" strokeWidth={3} />
            </span>
          </div>
          <br />
          With Actively Building
          <br />
          Deep <span className="bg-[#e2eafb] px-4 pt-1 mt-2 pb-2 rounded-2xl relative inline-block border-[3px] border-[#04102d] shadow-[4px_4px_0_#04102d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#04102d] transition-all cursor-pointer">Projects</span>
        </h1>

        <p className="text-[#04102d]/80 text-lg lg:text-[19px] max-w-lg leading-relaxed font-semibold">
          Join a community of developers transforming their careers with practical, real-world programming skills.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
          <button 
            onClick={() => document.getElementById('cohorts')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#04102d] text-white border-2 border-[#04102d] px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors whitespace-nowrap hidden sm:block shadow-[4px_4px_0_#0bae95] cursor-pointer"
          >
            Explore Courses
          </button>
          <button 
            onClick={() => document.getElementById('why-100xdevs')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#04102d] border-2 border-[#04102d] px-8 py-4 rounded-xl font-bold hover:bg-[#e2eafb] transition-colors whitespace-nowrap hidden sm:flex items-center gap-2 shadow-[4px_4px_0_#04102d] cursor-pointer"
          >
            Learn more <ChevronRight className="w-5 h-5" />
          </button>
        </div>


      </div>


      <div className="relative w-full h-[400px] lg:h-[550px] flex justify-center lg:justify-end pr-0 lg:pr-6 mt-4 lg:mt-0 z-10">
        
        <div className="relative w-full max-w-[400px] lg:max-w-[480px] h-full flex items-start justify-center">
          
          <img 
             src="https://100xdevs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.3fed4f92.png&w=1080&q=75" 
             alt="Harkirat Singh" 
             className="w-full h-auto object-contain z-10 scale-[1.05] md:scale-[1.1] lg:scale-[1.15] origin-top"
          />
        </div>
      </div>

    </main>
  );
}
