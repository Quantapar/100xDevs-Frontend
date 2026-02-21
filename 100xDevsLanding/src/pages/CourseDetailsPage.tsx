import { useParams } from 'react-router-dom';
import { cohorts } from '../data';
import { useEffect, useState } from 'react';
import { ChevronDown, CheckCircle2, Code, FileText, MessageSquare, TrendingUp, UserCheck, Users } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

const allSyllabusData = {
  webDev: {
    title: "Web dev (Every Friday)",
    items: [
      "1. HTML/CSS", "2. JS Basics", "3. JS architecture", "4. Async JS", "5. Node vs Browser JS",
      "6. HTTP and Express", "7. Databases and Mongo", "8. Postgres + Prisma/drizzle", "9. Typescript",
      "10. Turborepo", "11. BunJS", "12. React", "13. Tailwind", "14. NextJS", "15. Websockets + WebRTC", "16. Queues/Pubsubs"
    ]
  },
  devOps: {
    title: "Devops (Every Friday)",
    items: [
      "1. Bash/Terminal", "2. VMs/Baremetal machines", "3. Process management + Reverse proxies",
      "4. Certificates and cert management", "5. ASGs/MIGs", "6. Containers and container runtimes",
      "7. Docker", "8. Kubernetes 1", "9. Kubernetes 2", "10. CI/CD", "11. Monitoring/Observability",
      "12. iac", "13. CDNs + Object stores", "14. Sandboxing/Firecracker"
    ]
  },
  web3: {
    title: "Web3 (Every Sunday)",
    items: [
      "1. Intro to blockchains", "2. Cryptography", "3. Solana architecture", "4. Solana jargons (authority, owner)",
      "5. PDAs", "6. @solana/web3.js or gill", "7. Solana wallet adapter", "8. Data model", "9. Token program",
      "10. Defi (amm, dlmm, clmm, perps)", "11. Rust easy", "12. Rust advance", "13. Anchor", "14. common contracts (staking/escrow)",
      "15. Indexing", "16. MPC and Shamirs", "17. Ad hoc web2 + web3", "18. Partially centralized contracts"
    ]
  },
  ml: {
    title: "Machine Learning and AI (Every Saturday)",
    items: [
      "1. History - what is ai, how did we end up at trnsfmrs. Fast tracking to AI",
      "2. History - what is DL, backprop NLP",
      "3. Neural networks, Pytorch",
      "4. Optional extra class - RNNs, LSTMs, Sequential models",
      "5. Optional extra class - CNNs",
      "6. Coding simple attention",
      "7. Vanilla attention to industry -- Coding other variations of attn",
      "8. Huggingface end to end",
      "9. Instrumenting LLM calls/observability/tracing",
      "10. Vector DBs and RAG",
      "11. Context engineering - Summarization, data collection",
      "12. Agents from first principles",
      "13. Agent frameworks",
      "14. Memory",
      "15. MCP",
      "16. Computer use & multimodal agents",
      "17. What is Finetuning",
      "18. Finetuning a model for any usecase",
      "19. RL fine tuning.",
      "20. Evals -- Testing agents",
      "21. Advance topics"
    ]
  },
  dsa: {
    title: "DSA (Every Thursday)",
    items: [
      "1. Introduction to C++", "2. Loops and Pattern Printing", "3. Arrays / 2D Arrays", "4. Strings",
      "5. Sorting and Searching", "6. Pointers / Pass by val, ref & add", "7. Time and Space Complexity",
      "8. Sets and Maps", "9. Prefix Sums / Sliding Window / Contribution", "10. Bit Manipulation",
      "11. Number Theory Basics", "12. Recursion and Backtracking", "13. Two Pointers", "14. Linked List",
      "15. Stack / Queue / Deque", "16. Binary Tree / BST", "17. Priority Queue / Heap", "18. Trie",
      "19. Greedy", "20. Dynamic Programming", "21. Graphs", "22. Segment Tree / Ordered Set"
    ]
  }
};

export function CourseDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [openSyllabus, setOpenSyllabus] = useState<number | null>(null);
  const [currencyMap, setCurrencyMap] = useState<Record<string, 'INR' | 'USD'>>({});
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const { formatPrice } = useCurrency();
  
  const course = cohorts.find(c => c.id === Number(id)) || cohorts[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div className="w-full flex-grow flex items-center justify-center bg-[#f8f9fa]">
        <h2 className="text-3xl font-black text-[#04102d]">Course not found.</h2>
      </div>
    );
  }

  const tags = ["Web3 Fundamentals", "Cloud Computing", "React & Node.js", "Full Stack Development"];

  let syllabusData = [];
  if (course.id === 25) {
    syllabusData = [allSyllabusData.webDev, allSyllabusData.devOps];
  } else if (course.id === 26) {
    syllabusData = [allSyllabusData.web3];
  } else if (course.id === 27) {
    syllabusData = [allSyllabusData.ml];
  } else {
    syllabusData = [allSyllabusData.webDev, allSyllabusData.devOps, allSyllabusData.web3, allSyllabusData.ml, allSyllabusData.dsa];
  }
  const currency = currencyMap[course.id] || 'INR';

  const selectCurrency = (curr: 'INR' | 'USD', e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrencyMap({ ...currencyMap, [course.id]: curr });
    setOpenDropdown(false);
  };

  return (
    <div className="w-full flex-grow bg-[#f5f7fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8 lg:py-12">
        
        <div className="relative w-full rounded-[32px] sm:rounded-[40px] bg-[#04102d] border-4 border-[#04102d] shadow-[8px_8px_0_#0bae95] lg:shadow-[16px_16px_0_#0bae95] p-6 sm:p-12 lg:p-16 mb-16 overflow-hidden flex flex-col justify-center min-h-[400px]">
          
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="flex flex-col">
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-white leading-[1.15] mb-6 tracking-tight drop-shadow-xl">
                {course.title}
              </h1>
              
              <p className="text-lg lg:text-[20px] font-bold text-white/90 leading-relaxed max-w-xl mb-10 drop-shadow-md">
                Master real-world engineering skills from zero to production. Build scalable web apps, deploy on cloud infrastructure, and create blockchain applications with hands-on mentorship.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-2">
                {tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-[15px] font-bold border border-white/20 shadow-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full mx-auto lg:ml-auto">
              <div className="bg-white rounded-[20px] shadow-[8px_8px_0_#0bae95] border-4 border-white overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-full aspect-[16/9] relative bg-[#e2eafb] group">
                   <img 
                     src={course.imgUrl} 
                     alt={course.title}
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                   />
                </div>
              </div>
            </div>

          </div>
        </div>


        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-6">
           <div className="lg:col-span-7">
             <h2 className="text-3xl lg:text-4xl font-black text-[#04102d] tracking-tight">Course Syllabus</h2>
           </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
           
           
           <div className="lg:col-span-7 flex flex-col space-y-4">
               {syllabusData.map((section, idx) => (
                 <div 
                   key={idx} 
                   className={`bg-white border-[3px] border-[#04102d] rounded-[16px] overflow-hidden transition-all duration-300 cursor-pointer ${openSyllabus === idx ? 'shadow-[6px_6px_0_#0bae95] -translate-y-1' : 'shadow-[4px_4px_0_#04102d] hover:-translate-y-1 hover:shadow-[6px_6px_0_#04102d]'}`}
                   onClick={() => setOpenSyllabus(openSyllabus === idx ? null : idx)}
                 >
                   <div className="p-6 flex items-center justify-between gap-4">
                     <h3 className="font-extrabold text-[18px] lg:text-[20px] text-[#04102d] leading-snug">
                       {section.title}
                     </h3>
                     <div className={`w-10 h-10 rounded-full border-2 border-[#04102d] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openSyllabus === idx ? 'bg-[#0bae95] text-white rotate-180' : 'bg-white text-[#04102d]'}`}>
                       <ChevronDown className="w-6 h-6" strokeWidth={3} />
                     </div>
                   </div>
                   
                   <div 
                      className="overflow-hidden transition-all duration-300 ease-in-out bg-[#f8f9fa] border-t-2 border-[#04102d]/10"
                      style={{ 
                        maxHeight: openSyllabus === idx ? '1000px' : '0px',
                        opacity: openSyllabus === idx ? 1 : 0
                      }}
                   >
                     <div className="p-6">
                        <ul className="space-y-3">
                          {section.items.map((item, idxx) => (
                            <li key={idxx} className="flex items-start gap-3">
                               <CheckCircle2 className="w-5 h-5 text-[#0bae95] shrink-0 mt-[2px]" />
                               <span className="text-[#04102d]/80 font-bold text-[16px] leading-relaxed">
                                 {item}
                               </span>
                            </li>
                          ))}
                        </ul>
                     </div>
                   </div>
                 </div>
               ))}
            </div>

           <div className="lg:col-span-4 w-full">
              <div className="bg-white rounded-[24px] border-4 border-[#04102d] shadow-[12px_12px_0_#0bae95] overflow-hidden sticky top-24">
                <div className="w-full aspect-[16/9] relative bg-[#e2eafb] border-b-4 border-[#04102d]">
                  <img src={course.imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-end gap-3">
                      <span className="text-[44px] leading-none font-black text-[#04102d] tracking-tight">
                        {formatPrice(course.priceInr, currency)}
                      </span>
                      <span className="text-[28px] leading-none font-black text-[#a1a1aa] line-through pb-1">
                        {formatPrice(course.oldPriceInr, currency)}
                      </span>
                    </div>
                    <span className="bg-[#E5FBB8] border-[3px] border-[#04102d] px-4 py-1.5 rounded-full text-[16px] font-black text-[#04102d] shadow-[4px_4px_0_#04102d]">
                      {course.discount}
                    </span>
                  </div>

                  <div className="relative mb-8">
                    <div 
                      className="flex items-center justify-between border-[3px] border-[#04102d] rounded-xl px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors bg-white font-black text-[18px] text-[#04102d]"
                      onClick={(e) => { e.stopPropagation(); setOpenDropdown(!openDropdown); }}
                    >
                      <span className="font-extrabold text-[18px]">{currency}</span>
                      <ChevronDown className="w-7 h-7" strokeWidth={3} />
                    </div>
                    
                    {openDropdown && (
                      <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border-[3px] border-[#04102d] rounded-[10px] overflow-hidden shadow-[4px_4px_0_#0bae95] z-[100]">
                        <div 
                          onClick={(e) => selectCurrency('INR', e)}
                          className="px-4 py-3 text-[15px] font-extrabold text-[#04102d] hover:bg-gray-100 cursor-pointer border-b-2 border-[#04102d]/10"
                        >
                          INR
                        </div>
                        <div 
                          onClick={(e) => selectCurrency('USD', e)}
                          className="px-4 py-3 text-[15px] font-extrabold text-[#04102d] hover:bg-gray-100 cursor-pointer"
                        >
                          USD
                        </div>
                      </div>
                    )}
                  </div>

                  <button className="w-full py-5 rounded-2xl font-black bg-[#04102d] text-white text-[24px] shadow-[6px_6px_0_#0bae95] hover:-translate-y-1 hover:shadow-[8px_8px_0_#0bae95] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[4px_4px_0_#0bae95] transition-all cursor-pointer">
                    Buy Now
                  </button>
                </div>
              </div>
           </div>

        </div>

        <div className="pt-12 mt-20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-[#04102d] tracking-tight mb-4">Who is This For?</h2>
            <p className="text-xl font-bold text-gray-600">Whether you're starting fresh or leveling up, this cohort is designed for your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-[#04102d] rounded-[24px] p-8 shadow-[8px_8px_0_#0bae95] hover:-translate-y-2 hover:shadow-[12px_12px_0_#0bae95] transition-all flex flex-col items-center text-center">
              <div className="w-full aspect-[4/3] rounded-xl bg-white border-[3px] border-[#04102d] mb-6 overflow-hidden flex items-center justify-center p-4">
                <img src="https://100xdevs.com/beginner.svg" alt="Beginners in Tech" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-black text-[#04102d] mb-3">Beginners in Tech</h3>
              <p className="font-bold text-gray-600">Those who want to start a career in software development with strong fundamentals.</p>
            </div>

            <div className="bg-white border-4 border-[#04102d] rounded-[24px] p-8 shadow-[8px_8px_0_#0bae95] hover:-translate-y-2 hover:shadow-[12px_12px_0_#0bae95] transition-all flex flex-col items-center text-center">
              <div className="w-full aspect-[4/3] rounded-xl bg-white border-[3px] border-[#04102d] mb-6 overflow-hidden flex items-center justify-center p-4">
                <img src="https://100xdevs.com/developer.svg" alt="Self-taught Developers" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-black text-[#04102d] mb-3">Self-taught Developers</h3>
              <p className="font-bold text-gray-600">People who already know the basics but need a structured roadmap and real projects to become job-ready.</p>
            </div>

            <div className="bg-white border-4 border-[#04102d] rounded-[24px] p-8 shadow-[8px_8px_0_#0bae95] hover:-translate-y-2 hover:shadow-[12px_12px_0_#0bae95] transition-all flex flex-col items-center text-center">
              <div className="w-full aspect-[4/3] rounded-xl bg-white border-[3px] border-[#04102d] mb-6 overflow-hidden flex items-center justify-center p-4">
                <img src="https://100xdevs.com/professional.svg" alt="Working Professionals" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-black text-[#04102d] mb-3">Working Professionals</h3>
              <p className="font-bold text-gray-600">Anyone looking to upgrade skills in Full-Stack + DevOps and grow into better roles in tech.</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="bg-[#04102d] rounded-[32px] sm:rounded-[40px] border-4 border-[#04102d] overflow-hidden relative p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 shadow-[8px_8px_0_#0bae95] lg:shadow-[16px_16px_0_#0bae95]"
               style={{ 
                 backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 2px, transparent 2px)", 
                 backgroundSize: "40px 40px" 
               }}>
            
            

            <div className="flex-1 relative z-10 flex flex-col">
              <p className="text-xl sm:text-2xl lg:text-[28px] text-white/80 font-bold leading-relaxed mb-8">
                No matter where you're starting from, our structured approach and personalized mentorship will guide you to become a confident, production-ready engineer.
              </p>
              
              <div className="flex items-center">
                <p className="text-xl lg:text-2xl font-black text-white">- Harkirat Singh</p>
              </div>
            </div>

            <div className="w-full lg:w-1/3 relative z-10 flex justify-center lg:justify-end shrink-0">
              <div className="relative w-[280px] h-[280px] lg:w-[350px] lg:h-[350px]">
                
                 <div className="absolute inset-x-4 inset-y-8 bg-[#0bae95] border-4 border-[#04102d] rounded-2xl transform rotate-3" />
                 <div className="absolute inset-x-8 inset-y-4 bg-white/10 border-4 border-[#04102d] rounded-2xl transform -rotate-3 backdrop-blur-sm shadow-xl" />
                 
                
                <img 
                  src="https://100xdevs.com/harkirat-transparent.png" 
                  alt="Harkirat Singh" 
                  className="w-full h-full object-contain object-bottom relative z-20 drop-shadow-2xl scale-110 -translate-y-4"
                />
                
              </div>
            </div>
            
          </div>
        </div>

        {/* Career Outcomes Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-[#04102d] tracking-tight mb-4">Career Outcomes</h2>
            <p className="text-xl font-bold text-gray-600">Everything you need to launch or accelerate your tech career</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-[#04102d] rounded-[24px] p-8 shadow-[8px_8px_0_#0bae95] hover:-translate-y-2 hover:shadow-[12px_12px_0_#0bae95] transition-all flex flex-col items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#fce7f3] border-[3px] border-[#04102d] mb-6 flex items-center justify-center text-[#ec4899] shadow-[4px_4px_0_#0bae95]">
                <Code className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-[#04102d] mb-3">Real-World Projects</h3>
              <p className="font-bold text-gray-600 leading-relaxed">
                Learn Full Stack Development, DevOps, and Blockchain through live sessions, mentorship, and hands-on coding challenges.
              </p>
            </div>

            <div className="bg-white border-4 border-[#04102d] rounded-[24px] p-8 shadow-[8px_8px_0_#0bae95] hover:-translate-y-2 hover:shadow-[12px_12px_0_#0bae95] transition-all flex flex-col items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#fef3c7] border-[3px] border-[#04102d] mb-6 flex items-center justify-center text-[#eab308] shadow-[4px_4px_0_#0bae95]">
                <FileText className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-[#04102d] mb-3">Portfolio Development</h3>
              <p className="font-bold text-gray-600 leading-relaxed">
                Learn Full Stack Development, DevOps, and Blockchain through live sessions, mentorship, and hands-on coding challenges.
              </p>
            </div>

            <div className="bg-white border-4 border-[#04102d] rounded-[24px] p-8 shadow-[8px_8px_0_#0bae95] hover:-translate-y-2 hover:shadow-[12px_12px_0_#0bae95] transition-all flex flex-col items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#dbeafe] border-[3px] border-[#04102d] mb-6 flex items-center justify-center text-[#3b82f6] shadow-[4px_4px_0_#0bae95]">
                <MessageSquare className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-[#04102d] mb-3">Interview Preparation</h3>
              <p className="font-bold text-gray-600 leading-relaxed">
                Collaborate, build, and grow with thousands of passionate learners pushing their limits every day.
              </p>
            </div>

            <div className="bg-white border-4 border-[#04102d] rounded-[24px] p-8 shadow-[8px_8px_0_#0bae95] hover:-translate-y-2 hover:shadow-[12px_12px_0_#0bae95] transition-all flex flex-col items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#ffedd5] border-[3px] border-[#04102d] mb-6 flex items-center justify-center text-[#f97316] shadow-[4px_4px_0_#0bae95]">
                <TrendingUp className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-[#04102d] mb-3">Career Growth</h3>
              <p className="font-bold text-gray-600 leading-relaxed">
                Learn Full Stack Development, DevOps, and Blockchain through live sessions, mentorship, and hands-on coding challenges.
              </p>
            </div>

            <div className="bg-white border-4 border-[#04102d] rounded-[24px] p-8 shadow-[8px_8px_0_#0bae95] hover:-translate-y-2 hover:shadow-[12px_12px_0_#0bae95] transition-all flex flex-col items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#ffe4e6] border-[3px] border-[#04102d] mb-6 flex items-center justify-center text-[#f43f5e] shadow-[4px_4px_0_#0bae95]">
                <UserCheck className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-[#04102d] mb-3">Industry Mentorship</h3>
              <p className="font-bold text-gray-600 leading-relaxed">
                Learn Full Stack Development, DevOps, and Blockchain through live sessions, mentorship, and hands-on coding challenges.
              </p>
            </div>

            <div className="bg-white border-4 border-[#04102d] rounded-[24px] p-8 shadow-[8px_8px_0_#0bae95] hover:-translate-y-2 hover:shadow-[12px_12px_0_#0bae95] transition-all flex flex-col items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#e0f2fe] border-[3px] border-[#04102d] mb-6 flex items-center justify-center text-[#0ea5e9] shadow-[4px_4px_0_#0bae95]">
                <Users className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-[#04102d] mb-3">Community Access</h3>
              <p className="font-bold text-gray-600 leading-relaxed">
                Collaborate, build, and grow with thousands of passionate learners pushing their limits every day.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
