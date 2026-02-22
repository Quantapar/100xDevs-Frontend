import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Play,
  FileText,
  Folder,
  Link as LinkIcon,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { cohorts, oldPrograms } from "../data";

const allSyllabusData = {
  webDev: {
    title: "Web dev",
    items: [
      "1. HTML/CSS",
      "2. JS Basics",
      "3. JS architecture",
      "4. Async JS",
      "5. Node vs Browser JS",
      "6. HTTP and Express",
      "7. Databases and Mongo",
      "8. Postgres + Prisma/drizzle",
      "9. Typescript",
      "10. Turborepo",
      "11. BunJS",
      "12. React",
      "13. Tailwind",
      "14. NextJS",
      "15. Websockets + WebRTC",
      "16. Queues/Pubsubs",
    ],
  },
  devOps: {
    title: "Devops",
    items: [
      "1. Bash/Terminal",
      "2. VMs/Baremetal machines",
      "3. Process management + Reverse proxies",
      "4. Certificates and cert management",
      "5. ASGs/MIGs",
      "6. Containers and container runtimes",
      "7. Docker",
      "8. Kubernetes 1",
      "9. Kubernetes 2",
      "10. CI/CD",
      "11. Monitoring/Observability",
      "12. iac",
      "13. CDNs + Object stores",
      "14. Sandboxing/Firecracker",
    ],
  },
  web3: {
    title: "Web3",
    items: [
      "1. Intro to blockchains",
      "2. Cryptography",
      "3. Solana architecture",
      "4. Solana jargons (authority, owner)",
      "5. PDAs",
      "6. @solana/web3.js or gill",
      "7. Solana wallet adapter",
      "8. Data model",
      "9. Token program",
      "10. Defi (amm, dlmm, clmm, perps)",
      "11. Rust easy",
      "12. Rust advance",
      "13. Anchor",
      "14. common contracts (staking/escrow)",
      "15. Indexing",
      "16. MPC and Shamirs",
      "17. Ad hoc web2 + web3",
      "18. Partially centralized contracts",
    ],
  },
  ml: {
    title: "Machine Learning and AI",
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
      "21. Advance topics",
    ],
  },
  dsa: {
    title: "DSA",
    items: [
      "1. Introduction to C++",
      "2. Loops and Pattern Printing",
      "3. Arrays / 2D Arrays",
      "4. Strings",
      "5. Sorting and Searching",
      "6. Pointers / Pass by val, ref & add",
      "7. Time and Space Complexity",
      "8. Sets and Maps",
      "9. Prefix Sums / Sliding Window / Contribution",
      "10. Bit Manipulation",
      "11. Number Theory Basics",
      "12. Recursion and Backtracking",
      "13. Two Pointers",
      "14. Linked List",
      "15. Stack / Queue / Deque",
      "16. Binary Tree / BST",
      "17. Priority Queue / Heap",
      "18. Trie",
      "19. Greedy",
      "20. Dynamic Programming",
      "21. Graphs",
      "22. Segment Tree / Ordered Set",
    ],
  },
};

export function CourseContentPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("activeTab") === "Live & Upcoming" ? "live" : "content",
  );

  const [showSyllabus, setShowSyllabus] = useState(false);
  const [openSyllabusBlock, setOpenSyllabusBlock] = useState<number | null>(
    null,
  );
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  const webDevClasses = [
    {
      id: 101,
      type: "video",
      icon: <Play className="w-8 h-8 fill-[#e2eafb] text-[#0bae95] ml-1" />,
      title:
        "Week 0 - Web Development | Meet your instructor | AMA | Doubt session - Harkirat Singh | 10/01/2026",
      duration: "1 hrs 48 mins 17 secs",
      hasAttachment: true,
      attachmentType: "Link",
    },
    {
      id: 102,
      type: "video",
      icon: <Play className="w-8 h-8 fill-[#e2eafb] text-[#0bae95] ml-1" />,
      title: "Week 1 - Web Development | HTML and CSS | 16/01/2026",
      duration: "2 hrs 20 mins 14 secs",
      hasAttachment: true,
      attachmentType: "Link",
    },
    {
      id: 103,
      type: "video",
      icon: <Play className="w-8 h-8 fill-[#e2eafb] text-[#0bae95] ml-1" />,
      title: "Week 2 - Web Development | JavaScript Basics | 23/01/2026",
      duration: "1 hrs 43 mins 24 secs",
      hasAttachment: true,
      attachmentType: "Link",
    },
    {
      id: 104,
      type: "video",
      icon: <Play className="w-8 h-8 fill-[#e2eafb] text-[#0bae95] ml-1" />,
      title:
        "Week 3 - Web Development | Promises, Callbacks, CPU Tasks | 30/01/2026",
      duration: "1 hrs 50 mins 49 secs",
      hasAttachment: true,
      attachmentType: "Link",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const course =
    cohorts.find((c) => c.id === Number(id)) ||
    oldPrograms.find((c: any) => c.id === Number(id)) ||
    cohorts[0];
  const courseTitle = course.title || "100xSchool Combined Bootcamp";

  let syllabusData: { title: string; items: string[] }[] = [];
  if ((course as any).id > 100) {
    const cid = (course as any).id;
    if (cid === 101)
      syllabusData = [
        allSyllabusData.webDev,
        allSyllabusData.devOps,
        allSyllabusData.web3,
      ];
    else if (cid === 102)
      syllabusData = [allSyllabusData.webDev, allSyllabusData.devOps];
    else if (cid === 103) syllabusData = [allSyllabusData.web3];
    else if (cid === 104) syllabusData = [allSyllabusData.webDev];
    else if (cid === 105) syllabusData = [allSyllabusData.devOps];
    else if (cid === 106)
      syllabusData = [allSyllabusData.webDev, allSyllabusData.devOps];
    else if (cid === 107) syllabusData = [allSyllabusData.webDev];
    else if (cid === 108) syllabusData = [allSyllabusData.devOps];
    else if (cid === 109)
      syllabusData = [allSyllabusData.webDev, allSyllabusData.devOps];
    else
      syllabusData = [
        allSyllabusData.webDev,
        allSyllabusData.devOps,
        allSyllabusData.web3,
      ];
  } else if (course.id === 25) {
    syllabusData = [allSyllabusData.webDev, allSyllabusData.devOps];
  } else if (course.id === 26) {
    syllabusData = [allSyllabusData.web3];
  } else if (course.id === 27) {
    syllabusData = [allSyllabusData.ml];
  } else {
    syllabusData = [
      allSyllabusData.webDev,
      allSyllabusData.devOps,
      allSyllabusData.web3,
      allSyllabusData.ml,
      allSyllabusData.dsa,
    ];
  }

  const handleTabChange = (tab: "content" | "live") => {
    setActiveTab(tab);
    setSearchParams({
      activeTab: tab === "live" ? "Live & Upcoming" : "Content",
    });
  };

  const contentItems = [
    {
      id: 1,
      type: "video",
      icon: <Play className="w-8 h-8 fill-[#e2eafb] text-[#0bae95] ml-1" />,
      title: "How to join Discord and verify yourself",
      duration: "1 mins 23 secs",
      hasAttachment: true,
      attachmentType: "Link",
    },
    {
      id: 2,
      type: "document",
      icon: <FileText className="w-8 h-8 text-[#04102d]" />,
      title: "Discord Invite",
    },
    {
      id: 3,
      type: "folder",
      icon: <Folder className="w-8 h-8 fill-[#e2eafb] text-[#04102d]" />,
      title: "Syllabus",
      isExpandable: true,
      action: () => setShowSyllabus(true),
    },
    {
      id: 4,
      type: "folder",
      icon: <Folder className="w-8 h-8 fill-[#e2eafb] text-[#04102d]" />,
      title: "Warmup Videos",
      isExpandable: true,
    },
    {
      id: 5,
      type: "folder",
      icon: <Folder className="w-8 h-8 fill-[#e2eafb] text-[#04102d]" />,
      title: "Slides and Assignments",
      isExpandable: true,
    },
    {
      id: 6,
      type: "video",
      icon: <Play className="w-8 h-8 fill-[#e2eafb] text-[#0bae95] ml-1" />,
      title: "Orientation Class and Warming Up | 04/01/2025",
      duration: "1 hrs 11 mins 2 secs",
      hasAttachment: true,
      attachmentType: "Link",
    },
    ...(() => {
      let specificFolders = [];
      const generateFolder = (idx: number, title: string) => ({
        id: 200 + idx,
        type: "folder",
        icon: <Folder className="w-8 h-8 fill-[#e2eafb] text-[#04102d]" />,
        title: title,
        isExpandable: true,
        action: () => setActiveFolder(title),
      });

      const cid = (course as any).id;

      if (cid > 100) {
        if (cid === 101)
          specificFolders = ["Web Dev + Devops Bootcamp", "Web3 Bootcamp"];
        else if (cid === 102 || cid === 106 || cid === 109)
          specificFolders = ["Web Dev + Devops Bootcamp"];
        else if (cid === 103) specificFolders = ["Web3 Bootcamp"];
        else if (cid === 104 || cid === 107)
          specificFolders = ["Complete Web Development"];
        else if (cid === 105 || cid === 108)
          specificFolders = ["Devops Bootcamp"];
        else specificFolders = ["Web Dev + Devops Bootcamp", "Web3 Bootcamp"];
      } else if (cid === 25) {
        specificFolders = ["Web Dev + Devops Bootcamp"];
      } else if (cid === 26) {
        specificFolders = ["Web3 Bootcamp"];
      } else if (cid === 27) {
        specificFolders = ["AI&ML Bootcamp"];
      } else {
        specificFolders = [
          "Web Dev + Devops Bootcamp",
          "Web3 Bootcamp",
          "AI&ML Bootcamp",
          "DSA Bootcamp",
        ];
      }

      return specificFolders.map((title, idx) => generateFolder(idx, title));
    })(),
    {
      id: 11,
      type: "folder",
      icon: <Folder className="w-8 h-8 fill-[#e2eafb] text-[#04102d]" />,
      title: "React Native ( Optional / Bonus Sessions )",
      isExpandable: true,
    },
    {
      id: 12,
      type: "folder",
      icon: <Folder className="w-8 h-8 fill-[#e2eafb] text-[#04102d]" />,
      title: "Extra Guest Lectures (Optional)",
      isExpandable: true,
    },
    {
      id: 13,
      type: "folder",
      icon: <Folder className="w-8 h-8 fill-[#e2eafb] text-[#04102d]" />,
      title: "Extra Content ( Optional )",
      isExpandable: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 md:py-12 bg-white min-h-screen text-[#04102d]">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => {
            if (showSyllabus) {
              setShowSyllabus(false);
            } else if (activeFolder) {
              setActiveFolder(null);
            } else {
              navigate("/profile");
            }
          }}
          className="w-12 h-12 flex items-center justify-center bg-[#04102d] text-white rounded-[14px] border-2 border-[#04102d] shadow-[4px_4px_0_#0bae95] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0bae95] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] cursor-pointer shrink-0"
        >
          <ArrowLeft className="w-6 h-6" strokeWidth={3} />
        </button>
        <h1 className="text-2xl md:text-3xl font-black text-[#04102d] leading-tight break-words">
          {showSyllabus ? `${courseTitle} Syllabus` : courseTitle}
        </h1>
      </div>

      {!showSyllabus && (
        <div className="flex gap-8 border-b-[3px] border-[#04102d]/10 mb-8 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => handleTabChange("content")}
            className={`cursor-pointer pb-3 font-black text-[22px] whitespace-nowrap transition-all relative ${
              activeTab === "content"
                ? "text-[#04102d]"
                : "text-[#04102d]/40 hover:text-[#04102d]/80"
            }`}
          >
            Content
            {activeTab === "content" && (
              <div className="absolute -bottom-[3px] left-0 w-full h-[5px] bg-[#0bae95] rounded-full z-10"></div>
            )}
          </button>
          <button
            onClick={() => handleTabChange("live")}
            className={`cursor-pointer pb-3 font-black text-[22px] whitespace-nowrap transition-all relative ${
              activeTab === "live"
                ? "text-[#04102d]"
                : "text-[#04102d]/40 hover:text-[#04102d]/80"
            }`}
          >
            Live & Upcoming
            {activeTab === "live" && (
              <div className="absolute -bottom-[3px] left-0 w-full h-[5px] bg-[#0bae95] rounded-full z-10"></div>
            )}
          </button>
        </div>
      )}

      {activeTab === "content" && !showSyllabus && !activeFolder && (
        <div className="w-full max-w-5xl mx-auto pb-12">
          <div className="flex flex-col gap-4">
            {contentItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  if (item.type === "video")
                    navigate(`/new-courses/${id}/video/${item.id}`);
                  else if (item.action) item.action();
                }}
                className="bg-white border-2 border-[#04102d] rounded-[16px] shadow-[4px_4px_0_#0bae95] hover:-translate-y-1 hover:shadow-[6px_6px_0_#0bae95] transition-all duration-200 cursor-pointer flex flex-col overflow-hidden"
              >
                <div className="p-3 md:p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#e2eafb] border-2 border-[#04102d] rounded-[12px] shadow-[2px_2px_0_#04102d] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-[15px] md:text-[17px] font-black text-[#04102d]">
                        {item.title}
                      </h3>
                      {item.duration && (
                        <p className="text-sm md:text-base font-bold text-gray-500 flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                          </span>
                          {item.duration}
                        </p>
                      )}
                    </div>
                  </div>

                  {item.isExpandable && (
                    <div className="hidden md:flex flex-col items-center justify-center w-10 h-10 bg-white text-[#04102d] shrink-0">
                      <ChevronRight
                        className="w-6 h-6 text-gray-400"
                        strokeWidth={3}
                      />
                    </div>
                  )}
                </div>

                {item.hasAttachment && (
                  <div className="bg-[#f8fafc] border-t-2 border-[#04102d] px-6 py-3 flex items-center gap-3">
                    <span className="text-sm font-bold text-gray-500">
                      Attachments:
                    </span>
                    <button
                      className="flex items-center gap-2 bg-white px-3 py-1.5 border-2 border-[#04102d] rounded-lg text-sm font-black shadow-[2px_2px_0_#04102d] hover:bg-gray-50 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LinkIcon className="w-4 h-4" />
                      {item.attachmentType || "Link"}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 border-2 border-gray-200 rounded-full bg-white mb-4">
              <ChevronRight
                className="w-5 h-5 text-gray-400 rotate-90"
                strokeWidth={3}
              />
            </div>
            <p className="text-gray-400 font-bold text-[15px]">
              No more items to load
            </p>
          </div>
        </div>
      )}

      {activeTab === "content" && !showSyllabus && activeFolder && (
        <div className="w-full max-w-5xl mx-auto pb-12 animate-in fade-in duration-300">
          <div className="flex items-center gap-2 text-gray-500 font-bold mb-6">
            <span
              className="hover:text-[#04102d] cursor-pointer"
              onClick={() => setActiveFolder(null)}
            >
              Home
            </span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#04102d]">{activeFolder}</span>
          </div>

          <div className="flex flex-col gap-4">
            {webDevClasses.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  if (item.type === "video")
                    navigate(`/new-courses/${id}/video/${item.id}`);
                }}
                className="bg-white border-2 border-[#04102d] rounded-[16px] shadow-[4px_4px_0_#0bae95] hover:-translate-y-1 hover:shadow-[6px_6px_0_#0bae95] transition-all duration-200 cursor-pointer flex flex-col overflow-hidden"
              >
                <div className="p-3 md:p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#e2eafb] border-2 border-[#04102d] rounded-[12px] shadow-[2px_2px_0_#04102d] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-[15px] md:text-[17px] font-black text-[#04102d]">
                        {item.title}
                      </h3>
                      {item.duration && (
                        <p className="text-sm md:text-base font-bold text-gray-500 flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                          </span>
                          {item.duration}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {item.hasAttachment && (
                  <div className="bg-[#f8fafc] border-t-2 border-[#04102d] px-6 py-3 flex items-center gap-3">
                    <span className="text-sm font-bold text-gray-500">
                      Attachments:
                    </span>
                    <button
                      className="flex items-center gap-2 bg-white px-3 py-1.5 border-2 border-[#04102d] rounded-lg text-sm font-black shadow-[2px_2px_0_#04102d] hover:bg-gray-50 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LinkIcon className="w-4 h-4" />
                      {item.attachmentType || "Link"}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 border-2 border-gray-200 rounded-full bg-white mb-4">
              <ChevronRight
                className="w-5 h-5 text-gray-400 rotate-90"
                strokeWidth={3}
              />
            </div>
            <p className="text-gray-400 font-bold text-[15px]">
              No more items to load
            </p>
          </div>
        </div>
      )}

      {showSyllabus && (
        <div className="w-full max-w-4xl mx-auto pb-12 animate-in fade-in duration-300">
          <div className="flex items-center gap-2 text-gray-500 font-bold mb-6">
            <span
              className="hover:text-[#04102d] cursor-pointer"
              onClick={() => setShowSyllabus(false)}
            >
              Content
            </span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#04102d]">Syllabus</span>
          </div>

          <div className="flex flex-col space-y-4">
            {syllabusData.map((section, idx) => (
              <div
                key={idx}
                className={`bg-white border-4 border-[#04102d] rounded-[20px] overflow-hidden transition-all duration-300 cursor-pointer ${openSyllabusBlock === idx ? "shadow-[8px_8px_0_#0bae95] -translate-y-1" : "shadow-[4px_4px_0_#04102d] hover:-translate-y-1 hover:shadow-[8px_8px_0_#04102d]"}`}
                onClick={() =>
                  setOpenSyllabusBlock(openSyllabusBlock === idx ? null : idx)
                }
              >
                <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                  <h3 className="font-extrabold text-[20px] lg:text-[24px] text-[#04102d] leading-snug">
                    {section.title}
                  </h3>
                  <div
                    className={`w-12 h-12 rounded-full border-[3px] border-[#04102d] flex items-center justify-center flex-shrink-0 transition-transform duration-300 shadow-[2px_2px_0_#04102d] ${openSyllabusBlock === idx ? "bg-[#0bae95] text-white rotate-180 shadow-[2px_2px_0_#04102d]" : "bg-[#e2eafb] text-[#04102d]"}`}
                  >
                    <ChevronDown className="w-7 h-7" strokeWidth={3.5} />
                  </div>
                </div>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out bg-[#f8fafc] border-t-4 border-[#04102d]"
                  style={{
                    maxHeight: openSyllabusBlock === idx ? "1500px" : "0px",
                    opacity: openSyllabusBlock === idx ? 1 : 0,
                  }}
                >
                  <div className="p-6 md:p-8">
                    <ul className="space-y-4">
                      {section.items.map((item, idxx) => (
                        <li key={idxx} className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-[#0bae95] shrink-0 mt-[2px]" />
                          <span className="text-[#04102d]/90 font-bold text-[17px] leading-relaxed">
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
        </div>
      )}

      {activeTab === "live" && !showSyllabus && (
        <div className="w-full max-w-5xl mx-auto py-12 text-center border-2 border-dashed border-[#04102d]/20 rounded-[24px]">
          <p className="text-xl font-bold text-[#04102d]/40">
            No live sessions currently scheduled.
          </p>
        </div>
      )}
    </div>
  );
}
