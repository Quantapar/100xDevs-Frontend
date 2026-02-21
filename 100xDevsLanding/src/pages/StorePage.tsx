import { ArrowRight } from 'lucide-react';

const merchItems = [
  {
    id: 1,
    title: '100x Cool T-Shirt for Everyday Flex - White',
    price: '₹999',
    bgColor: 'bg-[#e2eafb]', 
    imagePath: 'https://appx-content-v2.classx.co.in/subject/2026-01-20-0_8779263070024793.jpg',
  },
  {
    id: 2,
    title: '100x Cool T-Shirt for Everyday Flex - Black',
    price: '₹999',
    bgColor: 'bg-[#04102d]/10',
    imagePath: 'https://appx-content-v2.classx.co.in/subject/2026-01-20-0_3411687194845816.jpg',
  },
  {
    id: 3,
    title: '100x Cool T-Shirt for Everyday Flex - Cream',
    price: '₹999',
    bgColor: 'bg-[#f1ecd9]',
    imagePath: 'https://appx-content-v2.classx.co.in/subject/2026-01-21-0_3317186839576379.jpeg',
  },
  {
    id: 4,
    title: '100x Cool T-Shirt for Everyday Flex - Light Grey',
    price: '₹999',
    bgColor: 'bg-[#cbd5e1]',
    imagePath: 'https://appx-content-v2.classx.co.in/subject/2026-01-23-0_44568583421620445.jpeg',
  }
];

export function StorePage() {
  return (
    <div className="w-full flex flex-col flex-grow bg-white">
      <div className="w-full relative overflow-hidden flex items-center h-[520px] border-b-2 border-[#04102d] shadow-[0_8px_0_#0bae95]">

        <div 
          className="absolute inset-0 bg-cover bg-[center_top_20%] bg-no-repeat z-0" 
          style={{ backgroundImage: "url('https://100xdevs.com/100xdevs-store.png')" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#04102d] via-[#04102d]/80 to-transparent z-10 w-full md:w-[70%]"></div>
        

        <div className="max-w-7xl mx-auto px-6 w-full relative z-20 flex items-center mt-6">
          <div className="flex flex-col items-start w-full md:max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-8">
              Wear the <br />
              <span className="relative inline-block mt-2">
                100x Mindset
                <svg className="absolute w-[105%] h-[20px] -bottom-3 -left-2 text-[#0bae95]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 15 100 5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-lg lg:text-[22px] font-bold text-white max-w-lg leading-relaxed mt-4 drop-shadow-lg">
              Official merchandise for builders who ship, learn & grow together!
            </p>
          </div>
        </div>
      </div>

   
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        <h2 className="text-3xl lg:text-5xl font-black text-[#04102d] mb-12">Our Bestselling Merch</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {merchItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-[24px] border-2 border-[#04102d] overflow-hidden shadow-[6px_6px_0_#04102d] hover:-translate-y-2 hover:shadow-[10px_10px_0_#0bae95] transition-all duration-300 flex flex-col cursor-pointer">
              
              <div className={`w-full aspect-square ${item.bgColor} flex items-center justify-center relative border-b-2 border-[#04102d] overflow-hidden`}>
                <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>
                
                <img 
                  src={item.imagePath} 
                  alt={item.title} 
                  className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                <h3 className="text-[20px] font-black text-[#04102d] leading-snug pr-4">{item.title}</h3>
                <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-dashed border-gray-200">
                  <span className="text-2xl font-black text-[#04102d]">{item.price}</span>
                  <div className="flex items-center gap-2 text-[#0bae95] font-bold group-hover:text-[#04102d] transition-colors">
                    <span className="text-[15px]">View Details</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pb-8 opacity-60 flex items-center justify-center gap-4">
          <div className="h-[2px] w-16 bg-[#04102d]/20 rounded-full"></div>
          <p className="font-bold text-[15px] text-[#04102d]">Yay! You have seen it all</p>
          <div className="h-[2px] w-16 bg-[#04102d]/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
