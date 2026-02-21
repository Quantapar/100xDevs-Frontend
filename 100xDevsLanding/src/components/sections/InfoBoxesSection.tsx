export function InfoBoxesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
      

      <div className="bg-[#0bae95] border-2 border-[#04102d] rounded-[24px] p-8 lg:p-10 shadow-[8px_8px_0_#04102d] relative overflow-hidden flex flex-col justify-start">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">Job ready skills that matter</h2>
          <p className="text-white/90 font-semibold text-lg mb-8">Master development through real-world applications, not tutorials</p>
          
          <div className="flex flex-wrap gap-3">
            <span className="bg-white px-5 py-2.5 rounded-full text-[#0bae95] font-bold text-sm border-2 border-[#04102d] shadow-[3px_3px_0_#04102d] transition-transform hover:-translate-y-1">Full Stack Development</span>
            <span className="bg-white px-5 py-2.5 rounded-full text-[#0bae95] font-bold text-sm border-2 border-[#04102d] shadow-[3px_3px_0_#04102d] transition-transform hover:-translate-y-1">Real-World Projects</span>
            <span className="bg-white px-5 py-2.5 rounded-full text-[#0bae95] font-bold text-sm border-2 border-[#04102d] shadow-[3px_3px_0_#04102d] transition-transform hover:-translate-y-1">Open Source Contributions</span>
            <span className="bg-white px-5 py-2.5 rounded-full text-[#0bae95] font-bold text-sm border-2 border-[#04102d] shadow-[3px_3px_0_#04102d] transition-transform hover:-translate-y-1">Production Ready</span>
            <span className="bg-white px-5 py-2.5 rounded-full text-[#0bae95] font-bold text-sm border-2 border-[#04102d] shadow-[3px_3px_0_#04102d] transition-transform hover:-translate-y-1">DevOps & Deployment</span>
            <span className="bg-white px-5 py-2.5 rounded-full text-[#0bae95] font-bold text-sm border-2 border-[#04102d] shadow-[3px_3px_0_#04102d] transition-transform hover:-translate-y-1">Job Ready Portfolio</span>
          </div>
        </div>
      </div>


      <div className="bg-[#04102d] border-2 border-[#04102d] rounded-[24px] p-8 lg:p-10 shadow-[8px_8px_0_#0bae95] relative overflow-hidden flex flex-col justify-start">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">Personally mentoring<br/>India's next 100x engineers</h2>
          <p className="text-[#e2eafb] font-semibold text-[17px] leading-relaxed max-w-md">Taking you from 1x to 100x through practical projects and real-world open source</p>
        </div>
      </div>

    </section>
  );
}
