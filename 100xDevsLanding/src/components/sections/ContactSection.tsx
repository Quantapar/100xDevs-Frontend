export function ContactSection() {
  return (
    <section className="bg-[#e2eafb] py-24 border-t-2 border-[#04102d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#04102d] border-2 border-[#04102d] rounded-[32px] p-8 lg:p-14 shadow-[12px_12px_0_#0bae95] relative flex flex-col lg:flex-row items-center justify-between overflow-hidden">
          

          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1.5px, transparent 1.5px), linear-gradient(90deg, #fff 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }}></div>


          <div className="relative z-10 w-full lg:w-[45%] flex flex-col justify-center mb-12 lg:mb-0 lg:pr-10">
             <h2 className="text-4xl lg:text-[52px] font-black text-white mb-6 leading-tight">
               Having doubts?<br/>Let's get in touch!
             </h2>
             <p className="text-[#e2eafb] text-[18px] lg:text-[20px] font-semibold leading-relaxed">
               Send us your queries and we'll get back to you soon.
             </p>
          </div>


          <div className="relative z-10 w-full lg:w-[55%] max-w-lg lg:max-w-none mx-auto">
             <form className="bg-white border-2 border-[#04102d] rounded-[24px] p-6 lg:p-8 flex flex-col gap-5 shadow-[8px_8px_0_#0bae95]">
                <div>
                   <input 
                     type="text" 
                     placeholder="Your name" 
                     className="w-full bg-[#f8f9fa] border-2 border-[#04102d] rounded-[16px] px-5 py-4 font-bold text-[#04102d] placeholder-[#04102d]/50 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_#0bae95] transition-all"
                   />
                </div>
                <div>
                   <input 
                     type="email" 
                     placeholder="Your email address" 
                     className="w-full bg-[#f8f9fa] border-2 border-[#04102d] rounded-[16px] px-5 py-4 font-bold text-[#04102d] placeholder-[#04102d]/50 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_#0bae95] transition-all"
                   />
                </div>
                <div>
                   <input 
                     type="tel" 
                     placeholder="Your contact number" 
                     className="w-full bg-[#f8f9fa] border-2 border-[#04102d] rounded-[16px] px-5 py-4 font-bold text-[#04102d] placeholder-[#04102d]/50 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_#0bae95] transition-all"
                   />
                </div>
                <div>
                   <textarea 
                     placeholder="Type your query here..." 
                     rows={4}
                     className="w-full bg-[#f8f9fa] border-2 border-[#04102d] rounded-[16px] px-5 py-4 font-bold text-[#04102d] placeholder-[#04102d]/50 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_#0bae95] transition-all resize-none"
                   ></textarea>
                </div>
                
                <button type="button" className="w-full bg-[#0bae95] text-white py-4 rounded-[16px] font-black tracking-wide border-2 border-[#04102d] shadow-[4px_4px_0_#04102d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#04102d] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] text-[19px] cursor-pointer mt-2">
                   Submit
                </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
}
