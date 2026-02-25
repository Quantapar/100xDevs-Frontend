import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data";

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 border-t-2 border-[#04102d]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-[#04102d] mb-4">
            FAQs
          </h2>
          <p className="text-[#04102d]/70 text-lg lg:text-[19px] font-bold">
            Get your questions answered
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-[#f8f9fa] border-2 border-[#04102d] rounded-[16px] overflow-hidden transition-all duration-300 cursor-pointer ${openFaq === idx ? "shadow-[6px_6px_0_#0bae95] -translate-y-1" : "shadow-[4px_4px_0_#04102d] hover:-translate-y-1 hover:shadow-[6px_6px_0_#04102d]"}`}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div className="p-6 lg:p-8 flex items-center justify-between gap-4">
                <h3 className="font-extrabold text-[18px] lg:text-[20px] text-[#04102d] leading-snug">
                  {faq.question}
                </h3>
                <div
                  className={`w-10 h-10 rounded-full border-2 border-[#04102d] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? "bg-[#0bae95] text-white rotate-180" : "bg-white text-[#04102d]"}`}
                >
                  <ChevronDown className="w-6 h-6" strokeWidth={3} />
                </div>
              </div>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openFaq === idx ? "500px" : "0px",
                  opacity: openFaq === idx ? 1 : 0,
                }}
              >
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
                  <p className="text-[#04102d]/80 font-bold text-[16px] lg:text-[17px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
