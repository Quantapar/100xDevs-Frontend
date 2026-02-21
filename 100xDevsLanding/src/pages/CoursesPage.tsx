import { useState } from 'react';
import { Search, ChevronDown, Briefcase, Users, Zap } from 'lucide-react';
import { cohorts, oldPrograms } from '../data';
import { useCurrency } from '../context/CurrencyContext';

export function CoursesPage() {
  const [currencyMap, setCurrencyMap] = useState<Record<string, 'INR' | 'USD'>>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { formatPrice } = useCurrency();

  const getCurrency = (id: string) => currencyMap[id] || 'INR';
  const toggleDropdown = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === id ? null : id);
  };
  const selectCurrency = (id: string, curr: 'INR' | 'USD', e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrencyMap({ ...currencyMap, [id]: curr });
    setOpenDropdown(null);
  };

  return (
    <div className="w-full flex flex-col flex-grow bg-[#f8f9fa]" onClick={() => openDropdown !== null && setOpenDropdown(null)}>
     
      <div className="w-full flex justify-center pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16 bg-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative w-full rounded-[32px] border-4 border-[#04102d] shadow-[8px_8px_0_#0bae95] lg:shadow-[12px_12px_0_#0bae95] overflow-hidden flex flex-col items-center justify-center px-4 py-8 sm:p-10 lg:p-20 group">
            
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

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight mb-5 drop-shadow-xl tracking-tight">
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

      <div className="w-full border-t-2 border-[#04102d]"></div>

      <div className="w-full max-w-5xl mx-auto px-6 py-10 sm:py-20 ">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#04102d] mb-6 sm:mb-12">Featured Programs</h2>
       
        <div className="flex flex-col gap-8">
          {cohorts.map((course, idx) => {
             const key = `featured-${idx}`;
             const curr = getCurrency(key);
             const price = formatPrice(course.priceInr, curr);
             const oldPrice = formatPrice(course.oldPriceInr, curr);

             return (
            <div key={key} className={`w-full bg-white rounded-[24px] border-4 border-[#04102d] shadow-[8px_8px_0_#04102d] hover:shadow-[12px_12px_0_#0bae95] hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-stretch group cursor-pointer relative ${openDropdown === key ? 'z-50' : 'z-10'}`}>
              
              <div className="w-full md:w-[48%] flex-shrink-0 relative border-b-4 md:border-b-0 md:border-r-4 border-[#04102d] bg-white flex items-center justify-center rounded-t-[20px] md:rounded-l-[20px] md:rounded-tr-none overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
                
                <div className="w-full h-full flex items-center justify-center relative z-10 p-4 lg:p-6">
                   <div className="w-full rounded-[12px] border-2 border-[#04102d]/10 overflow-hidden shadow-sm">
                     <img src={course.imgUrl} alt={course.title} className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                   </div>
                </div>
              </div>
              <div className="w-full md:w-[52%] p-5 lg:p-8 flex flex-col justify-between bg-white rounded-b-[20px] md:rounded-r-[20px] md:rounded-bl-none z-20">
                <div>
                  <h3 className="text-xl lg:text-2xl font-black text-[#04102d] mb-2 leading-tight pr-4">{course.title}</h3>
                  <p className="text-[#04102d]/80 font-bold text-[15px] mb-5 leading-relaxed line-clamp-2 md:line-clamp-none">
                    {course.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-5 mt-auto">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-[#04102d] tracking-tight">{price}</span>
                      <span className="text-lg font-bold text-[#04102d]/40 line-through">{oldPrice}</span>
                    </div>
                    <span className="bg-[#0bae95]/10 text-[#0bae95] px-3 py-1 rounded-full text-[13px] font-bold border-2 border-[#0bae95] tracking-wide inline-flex items-center">
                      {course.discount}
                    </span>
                  </div>

         
                  <div className="w-full pt-4 border-t-[3px] border-dashed border-[#04102d]/20 flex flex-col sm:flex-row items-center gap-3">
                    
                    <div className="relative w-full sm:w-auto">
                      <div 
                        onClick={(e) => toggleDropdown(key, e)}
                        className="w-full sm:w-[120px] px-4 py-3 rounded-[12px] border-[3px] border-[#04102d] bg-white flex items-center justify-between font-extrabold text-[#04102d] cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-[15px]">{curr}</span>
                        <ChevronDown strokeWidth={3} className={`w-5 h-5 opacity-60 transition-transform ${openDropdown === key ? 'rotate-180' : ''}`} />
                      </div>
                      
                      {openDropdown === key && (
                        <div className="absolute bottom-[calc(100%+8px)] sm:bottom-auto sm:top-[calc(100%+8px)] left-0 w-full bg-white border-2 border-[#04102d] rounded-[12px] overflow-hidden shadow-[4px_4px_0_#0bae95] z-[100]">
                          <div 
                            onClick={(e) => selectCurrency(key, 'INR', e)}
                            className="px-4 py-2 font-extrabold text-[#04102d] hover:bg-gray-100 cursor-pointer border-b-2 border-[#04102d]/10"
                          >
                            INR
                          </div>
                          <div 
                            onClick={(e) => selectCurrency(key, 'USD', e)}
                            className="px-4 py-2 font-extrabold text-[#04102d] hover:bg-gray-100 cursor-pointer"
                          >
                            USD
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <button className="w-full sm:flex-grow bg-[#04102d] text-white py-3 rounded-[12px] font-black tracking-wide border-[3px] border-[#04102d] shadow-[3px_3px_0_#0bae95] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#0bae95] transition-all text-[16px] cursor-pointer flex items-center justify-center gap-2">
                      View Details
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
           );
          })}
        </div>
      </div>


      <div className="w-full bg-[#f0f3f8] border-t-[3px] border-[#04102d] py-10 sm:py-16 lg:py-24 shadow-[inset_0_4px_24px_rgba(4,16,45,0.03)] mt-4 sm:mt-8">
        <div className="w-full max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#04102d] mb-6 sm:mb-12">Old Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {oldPrograms.map((course, idx) => {
             const key = `old-${idx}`;
             const curr = getCurrency(key);
             const price = formatPrice(course.priceInr, curr);
             const oldPrice = formatPrice(course.oldPriceInr, curr);

             return (
            <div key={key} className={`w-full bg-white rounded-[24px] border-4 border-[#04102d] shadow-[8px_8px_0_#04102d] hover:shadow-[12px_12px_0_#0bae95] hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer relative ${openDropdown === key ? 'z-50' : 'z-10'}`}>
              
              <div className="w-full relative border-b-4 border-[#04102d] bg-white flex items-center justify-center rounded-t-[20px] overflow-hidden p-4">
                <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
                
                <div className="w-full flex items-center justify-center relative z-10">
                   <div className="w-full rounded-[12px] border-2 border-[#04102d]/10 overflow-hidden shadow-sm aspect-[16/9]">
                     <img src={course.imgUrl} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                   </div>
                </div>
              </div>

              <div className="w-full p-5 flex flex-col justify-between flex-grow rounded-b-[20px] z-20">
                <div>
                  <h3 className="text-xl font-black text-[#04102d] mb-2 leading-tight pr-2 line-clamp-2 min-h-[56px] sm:h-[56px]">{course.title}</h3>
                  <p className="text-[#04102d]/80 font-bold text-[14px] mb-5 leading-relaxed line-clamp-2 min-h-[42px] sm:h-[42px]">
                    {course.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-5 mt-auto">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[26px] font-black text-[#04102d] tracking-tight leading-none">{price}</span>
                      <span className="text-[17px] font-bold text-[#04102d]/40 line-through leading-none">{oldPrice}</span>
                    </div>
                    <span className="bg-[#0bae95]/10 text-[#0bae95] px-3 py-1 rounded-full text-[13px] font-bold border-2 border-[#0bae95] tracking-wide inline-flex items-center">
                      {course.discount}
                    </span>
                  </div>

                  <div className="w-full pt-4 border-t-[3px] border-dashed border-[#04102d]/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    
                    <div className="relative w-full sm:w-auto flex-shrink-0">
                      <div 
                        onClick={(e) => toggleDropdown(key, e)}
                        className="w-full sm:w-[100px] px-3 py-[10px] rounded-[10px] border-[3px] border-[#04102d] bg-white flex items-center justify-between font-extrabold text-[#04102d] cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-[14px]">{curr}</span>
                        <ChevronDown strokeWidth={3} className={`w-4 h-4 opacity-60 transition-transform ${openDropdown === key ? 'rotate-180' : ''}`} />
                      </div>
                      
                      {openDropdown === key && (
                        <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border-2 border-[#04102d] rounded-[10px] overflow-hidden shadow-[4px_4px_0_#0bae95] z-[100]">
                          <div 
                            onClick={(e) => selectCurrency(key, 'INR', e)}
                            className="px-3 py-2 text-[14px] font-extrabold text-[#04102d] hover:bg-gray-100 cursor-pointer border-b-2 border-[#04102d]/10"
                          >
                            INR
                          </div>
                          <div 
                            onClick={(e) => selectCurrency(key, 'USD', e)}
                            className="px-3 py-2 text-[14px] font-extrabold text-[#04102d] hover:bg-gray-100 cursor-pointer"
                          >
                            USD
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <button className="w-full sm:w-auto flex-grow bg-[#04102d] text-white py-[10px] rounded-[10px] font-black tracking-wide border-[3px] border-[#04102d] shadow-[3px_3px_0_#0bae95] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#0bae95] transition-all text-[15px] cursor-pointer flex items-center justify-center gap-2">
                      View Details
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
           );
          })}
        </div>
        </div>
      </div>


      <div className="w-full bg-[#f0f3f8] py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative w-full min-h-[380px] lg:min-h-[440px] bg-[#04102d] rounded-[32px] lg:rounded-[48px] border-4 border-[#04102d] shadow-[16px_16px_0_#0bae95] overflow-hidden flex flex-col items-center justify-center text-center px-6 py-12 lg:py-16 group">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://100xdevs.com/community6.png" 
                alt="Community" 
                className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#04102d]/80 via-[#04102d]/70 to-[#04102d]/90"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-[64px] font-black text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
                A Community That<br className="hidden lg:block" /> Grows With You
              </h2>
              <p className="text-lg lg:text-xl font-bold text-white/80 mb-16 max-w-2xl mx-auto leading-relaxed">
                Join thousands of developers who are learning, building, and landing dream jobs together in a high-growth environment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16 w-full">
              
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-2xl border-[3px] border-[#04102d] shadow-[6px_6px_0_#0bae95] flex items-center justify-center mb-5 hover:-translate-y-1 transition-transform cursor-default">
                    <Briefcase className="w-8 h-8 text-[#04102d]" strokeWidth={2.5} />
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-white mb-1">50K+</div>
                  <div className="text-sm lg:text-base font-bold text-white/50 uppercase tracking-[0.15em]">Active Learners</div>
                </div>

  
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-2xl border-[3px] border-[#04102d] shadow-[6px_6px_0_#0bae95] flex items-center justify-center mb-5 hover:-translate-y-1 transition-transform cursor-default">
                    <Users className="w-8 h-8 text-[#04102d]" strokeWidth={2.5} />
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-white mb-1">650+</div>
                  <div className="text-sm lg:text-base font-bold text-white/50 uppercase tracking-[0.15em]">Placements</div>
                </div>

           
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-2xl border-[3px] border-[#04102d] shadow-[6px_6px_0_#0bae95] flex items-center justify-center mb-5 hover:-translate-y-1 transition-transform cursor-default">
                    <Zap className="w-8 h-8 text-[#04102d]" strokeWidth={2.5} />
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-white mb-1">Weekly</div>
                  <div className="text-sm lg:text-base font-bold text-white/50 uppercase tracking-[0.15em]">Hackathons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
