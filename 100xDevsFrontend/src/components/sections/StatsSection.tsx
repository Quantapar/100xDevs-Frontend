export function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        <div className="bg-[#e2eafb] border-2 border-[#04102d] rounded-[20px] p-8 flex-1 shadow-[6px_6px_0_#04102d] flex flex-col justify-center items-center text-center">
          <h3 className="font-black text-4xl lg:text-5xl mb-2 text-[#04102d]">
            27
          </h3>
          <p className="text-sm lg:text-[15px] font-bold text-[#04102d]/80 leading-snug">
            Students cracked GSoC 2025
          </p>
        </div>
        <div className="bg-[#0bae95] border-2 border-[#04102d] rounded-[20px] p-8 flex-1 shadow-[6px_6px_0_#04102d] flex flex-col justify-center items-center text-center">
          <h3 className="font-black text-4xl lg:text-5xl mb-2 text-white">
            $150K
          </h3>
          <p className="text-sm lg:text-[15px] font-bold text-[#04102d]/90 leading-snug">
            Highest International package
          </p>
        </div>
        <div className="bg-white border-2 border-[#04102d] rounded-[20px] p-8 flex-1 shadow-[6px_6px_0_#04102d] flex flex-col justify-center items-center text-center">
          <h3 className="font-black text-4xl lg:text-5xl mb-2 text-[#04102d]">
            200+
          </h3>
          <p className="text-sm lg:text-[15px] font-bold text-[#04102d]/80 leading-snug">
            High paying internships
          </p>
        </div>
      </div>
    </section>
  );
}
