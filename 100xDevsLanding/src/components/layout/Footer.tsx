import { Link } from "react-router-dom";
import { Youtube, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 px-6 relative overflow-hidden border-t-4 border-[#04102d]">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-20 lg:mb-32">
        <div className="flex-shrink-0">
          <span
            className="text-[32px] font-black tracking-tighter text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            100<span className="text-[#e13a45]">x</span>Devs
          </span>
        </div>

        <div className="flex flex-col gap-4 text-center md:text-left">
          <Link
            to="/terms"
            onClick={() => window.scrollTo(0, 0)}
            className="text-white/70 hover:text-white font-semibold transition-colors cursor-pointer"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy-policy"
            onClick={() => window.scrollTo(0, 0)}
            className="text-white/70 hover:text-white font-semibold transition-colors cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            to="/refund-policy"
            onClick={() => window.scrollTo(0, 0)}
            className="text-white/70 hover:text-white font-semibold transition-colors cursor-pointer"
          >
            Refund & Cancellation
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@harkirat1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-[14px] bg-[#1a1a1a] border-2 border-[#333] flex items-center justify-center text-white hover:bg-[#333] hover:text-[#ff0000] transition-colors cursor-pointer"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/kirat_tw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-[14px] bg-[#1a1a1a] border-2 border-[#333] flex items-center justify-center text-white hover:bg-[#333] hover:text-[#1da1f2] transition-colors cursor-pointer"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/kirat_ins/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-[14px] bg-[#1a1a1a] border-2 border-[#333] flex items-center justify-center text-white hover:bg-[#333] hover:text-[#e1306c] transition-colors cursor-pointer"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/100xdevs/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-[14px] bg-[#1a1a1a] border-2 border-[#333] flex items-center justify-center text-white hover:bg-[#333] hover:text-[#0a66c2] transition-colors cursor-pointer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-white/40 font-semibold text-sm">
            © 2026 100xDevs. All rights reserved.
          </p>
        </div>
      </div>

      <div className="w-full relative flex justify-center pointer-events-none mt-auto">
        <h1
          className="text-[15vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-transparent select-none text-center w-full"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          100xDEVS
        </h1>
      </div>
    </footer>
  );
}
