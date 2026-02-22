import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cohorts } from "../../data";
import { useCurrency } from "../../context/CurrencyContext";
import { useNavigate } from "react-router-dom";

export function CohortsSection() {
  const [currencyMap, setCurrencyMap] = useState<Record<number, "INR" | "USD">>(
    {},
  );
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();

  const getCurrency = (idx: number) => currencyMap[idx] || "INR";
  const toggleDropdown = (idx: number) =>
    setOpenDropdown(openDropdown === idx ? null : idx);
  const selectCurrency = (idx: number, curr: "INR" | "USD") => {
    setCurrencyMap({ ...currencyMap, [idx]: curr });
    setOpenDropdown(null);
  };

  return (
    <section
      id="cohorts"
      className="bg-[#04102d] border-t-2 border-[#04102d] py-16 pb-20 sm:py-24 sm:pb-32"
      onClick={() => openDropdown !== null && setOpenDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 sm:mb-12">
          Featured Cohorts
        </h2>

        {(() => {
          const featuredIdx = 0;
          const featuredCourse = cohorts[featuredIdx];
          const curr = getCurrency(featuredIdx);
          const price = formatPrice(featuredCourse.priceInr, curr);
          const oldPrice = formatPrice(featuredCourse.oldPriceInr, curr);

          return (
            <div
              className={`bg-white border-2 border-[#04102d] rounded-[24px] p-4 lg:p-6 flex flex-col lg:flex-row lg:items-center shadow-[8px_8px_0_#0bae95] hover:-translate-y-2 hover:shadow-[12px_12px_0_#0bae95] transition-all duration-300 mb-8 sm:mb-12 relative ${openDropdown === featuredIdx ? "z-50" : "z-10"}`}
            >
              <div className="w-full lg:w-[48%] lg:flex-shrink-0 aspect-[16/9] bg-gray-100 rounded-[16px] border-2 border-[#04102d] overflow-hidden mb-6 lg:mb-0 lg:mr-8 relative group cursor-pointer">
                <img
                  src={featuredCourse.imgUrl}
                  alt={featuredCourse.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-100"
                />
              </div>

              <div className="flex flex-col flex-grow w-full px-2 pb-2 lg:py-4">
                <div className="flex items-center gap-3 mb-4 lg:mb-6">
                  <span className="bg-[#0bae95] text-white px-3 py-1 rounded-full text-xs font-black border-2 border-[#04102d] uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#04102d] mb-3 sm:mb-4 leading-tight pr-4">
                  {featuredCourse.title}
                </h3>
                <p className="text-[#04102d]/80 font-bold text-base sm:text-[17px] lg:text-[18px] mb-4 sm:mb-6 line-clamp-3">
                  {featuredCourse.desc}
                </p>

                <div className="flex flex-wrap items-center justify-between mt-auto mb-6 sm:mb-8 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[32px] sm:text-[40px] lg:text-[48px] font-black text-[#04102d] leading-none tracking-tight">
                      {price}
                    </span>
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#04102d]/40 line-through">
                      {oldPrice}
                    </span>
                  </div>
                  <span className="bg-[#E5FBB8] border-2 border-[#04102d] px-4 py-2 rounded-full text-[14px] font-black text-[#04102d] shadow-[2px_2px_0_#04102d]">
                    {featuredCourse.discount}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <div className="relative w-full sm:w-[160px]">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(featuredIdx);
                      }}
                      className="w-full h-full border-2 border-[#04102d] bg-white rounded-[14px] px-5 py-4 pb-3.5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-extrabold text-[#04102d] text-lg">
                        {curr}
                      </span>
                      <ChevronDown
                        className={`w-6 h-6 text-[#04102d] transition-transform ${openDropdown === featuredIdx ? "rotate-180" : ""}`}
                        strokeWidth={3}
                      />
                    </div>

                    {openDropdown === featuredIdx && (
                      <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border-2 border-[#04102d] rounded-[14px] overflow-hidden shadow-[4px_4px_0_#0bae95] z-[100]">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            selectCurrency(featuredIdx, "INR");
                          }}
                          className="px-5 py-3 font-extrabold text-[#04102d] hover:bg-gray-100 cursor-pointer border-b-2 border-[#04102d]/10"
                        >
                          INR
                        </div>
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            selectCurrency(featuredIdx, "USD");
                          }}
                          className="px-5 py-3 font-extrabold text-[#04102d] hover:bg-gray-100 cursor-pointer"
                        >
                          USD
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() =>
                      navigate(`/new-courses/${featuredCourse.id}`)
                    }
                    className="w-full flex-grow bg-[#04102d] text-white py-4 rounded-[14px] font-black tracking-wide border-2 border-[#04102d] shadow-[4px_4px_0_#0bae95] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0bae95] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] text-xl cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-12">
          {cohorts.slice(1, 4).map((course, idx) => {
            const actualIdx = idx + 1;
            const curr = getCurrency(actualIdx);
            const price = formatPrice(course.priceInr, curr);
            const oldPrice = formatPrice(course.oldPriceInr, curr);

            return (
              <div
                key={idx}
                className={`bg-white border-2 border-[#04102d] rounded-[24px] p-4 flex flex-col shadow-[8px_8px_0_#0bae95] hover:-translate-y-2 hover:shadow-[12px_12px_0_#0bae95] transition-all duration-300 relative ${openDropdown === actualIdx ? "z-50" : "z-10"}`}
              >
                <div className="w-full aspect-[16/9] bg-gray-100 rounded-[16px] border-2 border-[#04102d] overflow-hidden mb-6 relative group cursor-pointer">
                  <img
                    src={course.imgUrl}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col flex-grow px-2 pb-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#04102d] mb-2 leading-tight pr-4 min-h-[56px] sm:min-h-[64px] flex items-start">
                    {course.title}
                  </h3>
                  <p className="text-[#04102d]/70 font-semibold text-[14px] sm:text-[15px] mb-4 sm:mb-6 line-clamp-2 min-h-[42px] sm:min-h-[48px]">
                    {course.desc}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
                    <div className="flex items-center gap-2">
                      <span className="text-[28px] sm:text-[32px] font-black text-[#04102d] leading-none tracking-tight">
                        {price}
                      </span>
                      <span className="text-lg font-bold text-[#04102d]/40 line-through">
                        {oldPrice}
                      </span>
                    </div>
                    <span className="bg-[#E5FBB8] border-2 border-[#04102d] px-3 py-1 rounded-full text-[13px] font-black text-[#04102d] shadow-[2px_2px_0_#04102d]">
                      {course.discount}
                    </span>
                  </div>

                  <div className="relative w-full mb-4">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(actualIdx);
                      }}
                      className="w-full border-2 border-[#04102d] rounded-[14px] px-4 py-3 pb-2.5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-extrabold text-[#04102d]">
                        {curr}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#04102d] transition-transform ${openDropdown === actualIdx ? "rotate-180" : ""}`}
                        strokeWidth={3}
                      />
                    </div>

                    {openDropdown === actualIdx && (
                      <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border-2 border-[#04102d] rounded-[14px] overflow-hidden shadow-[4px_4px_0_#0bae95] z-[100]">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            selectCurrency(actualIdx, "INR");
                          }}
                          className="px-4 py-3 font-extrabold text-[#04102d] hover:bg-gray-100 cursor-pointer border-b-2 border-[#04102d]/10"
                        >
                          INR
                        </div>
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            selectCurrency(actualIdx, "USD");
                          }}
                          className="px-4 py-3 font-extrabold text-[#04102d] hover:bg-gray-100 cursor-pointer"
                        >
                          USD
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => navigate(`/new-courses/${course.id}`)}
                    className="w-full bg-[#04102d] text-white py-4 rounded-[14px] font-black tracking-wide border-2 border-[#04102d] shadow-[4px_4px_0_#0bae95] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0bae95] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] mt-auto text-lg cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
