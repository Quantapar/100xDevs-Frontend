import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { merchItems } from '../data';
import { useNavigate } from 'react-router-dom';

export function StorePage() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [showDropdown, setShowDropdown] = useState(false);
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col flex-grow bg-white" onClick={() => setShowDropdown(false)}>
      <div className="w-full flex justify-center pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16 bg-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative w-full rounded-[32px] border-4 border-[#04102d] shadow-[8px_8px_0_#0bae95] lg:shadow-[12px_12px_0_#0bae95] overflow-hidden flex items-center min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] group">
            
            <div 
              className="absolute inset-0 bg-cover bg-[center_top_10%] bg-no-repeat transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('https://100xdevs.com/100xdevs-store.png')" }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-r from-[#04102d]/95 via-[#04102d]/70 to-transparent z-10 w-full md:w-[70%] transition-colors group-hover:from-[#04102d]/100"></div>
            
            <div className="relative z-20 w-full flex flex-col items-start px-6 sm:px-8 lg:px-16 mt-6">
              <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black text-white leading-tight mb-4 sm:mb-6 drop-shadow-xl tracking-tight">
                Wear the <br className="sm:hidden" />
                <span className="relative inline-block pb-1 sm:ml-4 lg:ml-5">
                  100x Mindset
                  <svg className="absolute w-[105%] h-[16px] lg:h-[20px] -bottom-2 -left-2 text-[#0bae95]" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 15 Q 50 20 100 5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-base lg:text-[20px] font-bold text-white/90 max-w-lg leading-relaxed mt-2 drop-shadow-md">
                Official merchandise for builders who ship, learn & grow together!
              </p>
            </div>
          </div>
        </div>
      </div>

   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#04102d]">Our Bestselling Merch</h2>
          
          <div className="relative">
            <div 
              onClick={(e) => { e.stopPropagation(); setShowDropdown(!showDropdown); }}
              className="px-4 sm:px-6 py-3 rounded-xl border-4 border-[#04102d] bg-white shadow-[4px_4px_0_#04102d] hover:shadow-[2px_2px_0_#04102d] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-between sm:justify-center gap-4 cursor-pointer font-black text-[#04102d]"
            >
              <span>{currency}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${showDropdown ? 'rotate-180' : ''}`} strokeWidth={3} />
            </div>

            {showDropdown && (
              <div className="absolute top-full right-0 mt-3 w-32 bg-white border-4 border-[#04102d] rounded-xl shadow-[8px_8px_0_#0bae95] overflow-hidden z-50">
                <div 
                  onClick={() => { setCurrency('INR'); setShowDropdown(false); }}
                  className="px-6 py-3 font-black text-[#04102d] hover:bg-gray-50 cursor-pointer border-b-2 border-gray-100"
                >
                  INR
                </div>
                <div 
                  onClick={() => { setCurrency('USD'); setShowDropdown(false); }}
                  className="px-6 py-3 font-black text-[#04102d] hover:bg-gray-50 cursor-pointer"
                >
                  USD
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {merchItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => navigate(`/store/${item.id}`)}
              className="group bg-white rounded-[24px] border-2 border-[#04102d] overflow-hidden shadow-[6px_6px_0_#04102d] hover:-translate-y-2 hover:shadow-[10px_10px_0_#0bae95] transition-all duration-300 flex flex-col cursor-pointer"
            >
              
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
                  <span className="text-2xl font-black text-[#04102d]">{formatPrice(item.priceInr, currency)}</span>
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
