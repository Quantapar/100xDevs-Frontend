import { podcasts } from "../../data";

export function PodcastsSection() {
  return (
    <section className="bg-[#f8f9fa] py-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0bae95] border-2 border-[#04102d] rounded-[32px] p-8 lg:p-14 shadow-[12px_12px_0_#04102d] relative overflow-hidden flex flex-col">
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)",
              backgroundSize: "60px 60px",
            }}
          ></div>

          <div className="relative z-10 mb-12 max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Listen to our Podcasts
            </h2>
            <p className="text-white/90 text-[17px] lg:text-[19px] font-semibold leading-relaxed">
              Unfiltered discussions on engineering, startups, and career growth
              with industry experts and successful developers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {podcasts.map((podcast, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#04102d] rounded-[24px] p-4 flex flex-col shadow-[8px_8px_0_#04102d] hover:-translate-y-2 hover:shadow-[12px_12px_0_#04102d] transition-all duration-300"
              >
                <div className="w-full aspect-video border-2 border-[#04102d] rounded-[16px] bg-gray-100 flex-shrink-0 overflow-hidden mb-5">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${podcast.id}?rel=0`}
                    title={podcast.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="flex flex-col flex-grow px-2 pb-2">
                  <h3 className="text-[17px] lg:text-[19px] font-semibold text-[#04102d]/90 leading-snug line-clamp-3">
                    {podcast.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
