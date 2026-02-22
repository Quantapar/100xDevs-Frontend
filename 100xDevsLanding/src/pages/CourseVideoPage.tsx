import {
  ArrowLeft,
  Play,
  Folder,
  Link as LinkIcon,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CourseVideoPage() {
  const navigate = useNavigate();

  const title =
    "Week 0 - Web Development | Meet your instructor | AMA | Doubt session - Harkirat Singh | 10/01/2026";

  const sidebarItems = [
    { title: "How to join Discord and verify yourself", type: "video" },
    { title: "Discord Invite", type: "document" },
    { title: "Syllabus", type: "folder", count: 0 },
    { title: "Warmup Videos", type: "folder", count: 10 },
    { title: "Slides and Assignments", type: "document" },
    { title: "Orientation Class and Warming Up | 04/01/2025", type: "video" },
    {
      title: "Web Dev + Devops Bootcamp",
      type: "folder",
      open: true,
      items: [
        {
          title:
            "Week 0 - Web Development | Meet your instructor | AMA | Doubt session - Harkirat Singh | 10/01/2026",
          type: "video",
          active: true,
        },
        {
          title: "Week 1 - Web Development | HTML and CSS | 16/01/2026",
          type: "video",
        },
        {
          title: "Week 2 - Web Development | JavaScript Basics | 23/01/2026",
          type: "video",
        },
        {
          title:
            "Week 3 - Web Development | Promises, Callbacks, CPU Tasks | 30/01/2026",
          type: "video",
        },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#04102d]">
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 py-6 md:py-8">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center bg-[#04102d] text-white rounded-[10px] border-2 border-[#04102d] shadow-[3px_3px_0_#0bae95] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#0bae95] transition-all cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={3} />
          </button>
          <h1 className="text-xl md:text-2xl font-black text-[#04102d] leading-tight break-words">
            100xSchool Combined Bootcamp
          </h1>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          <div className="xl:col-span-8 flex flex-col gap-6">
            <div className="w-full aspect-video bg-[#04102d] border-4 border-[#04102d] rounded-[24px] shadow-[8px_8px_0_#0bae95] overflow-hidden relative flex items-center justify-center">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                controls
                className="w-full h-full object-cover outline-none"
                preload="metadata"
              />
            </div>

            <h2 className="text-[22px] md:text-[26px] font-black text-[#04102d] leading-tight">
              {title}
            </h2>

            <div className="w-full border-[3px] border-[#04102d] rounded-[24px] shadow-[6px_6px_0_#04102d] bg-white p-6 md:p-8 mt-2">
              <p className="text-sm font-black text-gray-500 tracking-widest mb-4 uppercase">
                Resources
              </p>
              <button className="flex items-center gap-2 bg-white px-5 py-2.5 border-2 border-[#04102d] rounded-[12px] text-[15px] font-black shadow-[4px_4px_0_#0bae95] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0bae95] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer">
                <LinkIcon className="w-5 h-5" />
                View Link
              </button>
            </div>
          </div>

          <div className="xl:col-span-4 w-full">
            <div className="w-full border-4 border-[#04102d] rounded-[30px] bg-white shadow-[12px_12px_0_#0bae95] flex flex-col overflow-hidden max-h-[800px]">
              <div className="p-6 border-b-[3px] border-[#04102d] bg-[#f8fafc]">
                <h3 className="text-[22px] font-black text-[#04102d]">
                  Course Content
                </h3>
              </div>

              <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col custom-scrollbar">
                {sidebarItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col border-b border-[#04102d]/10"
                  >
                    <div
                      className={`flex items-start justify-between p-4 px-5 cursor-pointer hover:bg-gray-50 transition-colors ${item.open ? "bg-gray-50 border-b-2 border-[#04102d]/10" : ""}`}
                    >
                      <div className="flex items-start gap-4 pr-2">
                        <div
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 mt-[2px] ${item.type === "video" ? "bg-[#e2eafb] border-[#0bae95]" : item.type === "document" ? "bg-[#f1f5f9] border-[#04102d]" : "bg-transparent border-transparent"}`}
                        >
                          {item.type === "video" ? (
                            <Play className="w-[14px] h-[14px] text-[#0bae95] fill-[#0bae95] ml-0.5" />
                          ) : item.type === "document" ? (
                            <LinkIcon className="w-[14px] h-[14px] text-[#04102d]" />
                          ) : (
                            <Folder
                              className="w-[20px] h-[20px] text-[#04102d] fill-[#e2eafb]"
                              strokeWidth={2}
                            />
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-[15px] text-[#04102d] leading-[1.3] truncate max-w-[200px] whitespace-normal">
                            {item.title}
                          </span>
                          {item.type === "video" && !item.open && (
                            <span className="text-[12px] font-bold text-gray-400">
                              1 mins 23 secs
                            </span>
                          )}
                        </div>
                      </div>
                      {item.count !== undefined && !item.open && (
                        <span className="bg-gray-100 text-[#04102d] font-black text-[11px] px-2.5 py-1 rounded-full shrink-0">
                          {item.count}
                        </span>
                      )}
                      {item.type === "folder" && item.open !== undefined && (
                        <ChevronDown
                          className={`w-5 h-5 shrink-0 text-gray-500 transition-transform ${item.open ? "rotate-180" : ""}`}
                        />
                      )}
                    </div>

                    {item.open && item.items && (
                      <div className="flex flex-col border-[#04102d]">
                        {item.items.map((sub, j) => (
                          <div
                            key={j}
                            className={`flex items-start gap-3 p-4 px-5 border-l-[3px] cursor-pointer ${sub.active ? "border-[#0bae95] bg-[#e2eafb]/40" : "border-transparent hover:bg-gray-50"}`}
                          >
                            <div
                              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 mt-[2px] ${sub.active ? "bg-[#04102d] border-[#04102d]" : "bg-[#e2eafb] border-[#0bae95]"}`}
                            >
                              <Play
                                className={`w-[14px] h-[14px] ml-0.5 ${sub.active ? "fill-white text-white" : "fill-[#0bae95] text-[#0bae95]"}`}
                              />
                            </div>
                            <div className="flex flex-col pr-2 gap-1">
                              <span
                                className={`font-bold text-[14px] leading-snug whitespace-normal ${sub.active ? "text-[#0bae95]" : "text-[#04102d]/80"}`}
                              >
                                {sub.title}
                              </span>
                              <span className="text-[12px] font-bold text-gray-500">
                                1 hrs 48 mins 17 secs
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
