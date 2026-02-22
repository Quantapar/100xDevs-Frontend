export function CommunitySection() {
  return (
    <section className="bg-[#f8f9fa] py-12 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#2a3c61] border-2 border-[#04102d] rounded-[32px] p-8 lg:p-14 shadow-[12px_12px_0_#04102d] relative flex flex-col lg:flex-row items-center justify-between overflow-hidden">
          <div className="relative z-10 w-full lg:w-[50%] mb-12 lg:mb-0">
            <h2 className="text-4xl lg:text-[52px] font-black text-white mb-8 leading-tight">
              A Community That Has
              <br />
              Your Back
            </h2>
            <ul className="space-y-4 text-white/90 font-semibold text-[16px] lg:text-[17px]">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div>
                <span>Active Discord with 24/7 community support</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div>
                <span>Collaborate on open source and build together</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div>
                <span>Weekly study groups and peer code reviews</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div>
                <span>Job referrals and opportunity sharing</span>
              </li>
            </ul>
          </div>

          <div className="relative w-full lg:w-[45%] h-[300px] lg:h-[400px] flex items-end justify-center lg:justify-end pointer-events-none">
            <img
              src="https://100xdevs.com/community1.png"
              alt="Community Collage"
              className="w-full h-auto object-contain xl:scale-[1.15] origin-bottom lg:origin-bottom-right pointer-events-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12 lg:mt-16">
          <div className="w-full aspect-[4/3] rounded-[24px] border-2 border-[#04102d] overflow-hidden shadow-[6px_6px_0_#0bae95] hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[10px_10px_0_#0bae95] transition-all duration-300 cursor-pointer">
            <img
              src="https://100xdevs.com/community2.png"
              alt="Community members"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="w-full aspect-[4/3] rounded-[24px] border-2 border-[#04102d] overflow-hidden shadow-[6px_6px_0_#04102d] hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[10px_10px_0_#04102d] transition-all duration-300 cursor-pointer">
            <img
              src="https://100xdevs.com/community3.png"
              alt="Community meetup"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="w-full aspect-[4/3] rounded-[24px] border-2 border-[#04102d] overflow-hidden shadow-[6px_6px_0_#0bae95] hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[10px_10px_0_#0bae95] transition-all duration-300 cursor-pointer">
            <img
              src="https://100xdevs.com/community4.png"
              alt="Community hackers"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="w-full aspect-[4/3] rounded-[24px] border-2 border-[#04102d] overflow-hidden shadow-[6px_6px_0_#04102d] hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[10px_10px_0_#04102d] transition-all duration-300 cursor-pointer">
            <img
              src="https://100xdevs.com/community5.png"
              alt="Community chilling"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
