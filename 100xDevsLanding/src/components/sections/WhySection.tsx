import { Code } from 'lucide-react';
import { whyCards } from '../../data';

export function WhySection() {
  return (
    <section id="why-100xdevs" className="bg-[#f8f9fa] border-t-2 border-[#04102d] py-24">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-[#04102d] mb-4">Why 100xDevs?</h2>
        <p className="text-[#04102d]/70 text-lg lg:text-xl font-semibold max-w-2xl mx-auto">
          Our most comprehensive and impactful learning experiences
        </p>
      </div>

      <div className="w-full relative overflow-hidden py-4">
         

         <div className="flex w-max gap-6 animate-marquee lg:hover:[animation-play-state:paused]">
           

           {[...whyCards, ...whyCards].map((card, idx) => (
              <div key={idx} className={`w-[280px] md:w-[350px] lg:w-[380px] aspect-square flex-shrink-0 cursor-pointer ${card.cardBg} ${card.shadow} border-2 border-[#04102d] rounded-[24px] p-8 md:p-10 flex flex-col justify-start transition-transform hover:-translate-y-2 duration-300`}>
                 <div className={`w-14 h-14 rounded-full border-2 border-[#04102d] flex items-center justify-center mb-6 xl:mb-8 ${card.iconBg} ${card.iconShadow}`}>
                    <Code className={`w-6 h-6 ${card.iconColor}`} strokeWidth={3} />
                 </div>
                 <h3 className={`text-2xl lg:text-[26px] font-black leading-tight mb-4 ${card.textMain}`}>{card.title}</h3>
                 <p className={`font-bold leading-relaxed text-[15px] ${card.textSub}`}>
                    {card.desc}
                 </p>
              </div>
           ))}

         </div>
      </div>
    </section>
  );
}
