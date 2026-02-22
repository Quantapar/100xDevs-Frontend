import { useState } from "react";
import { User, Edit2, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { cohorts, oldPrograms } from "../data";

const MOCK_PURCHASED_COURSES = [...cohorts, ...oldPrograms].map((course) => ({
  id: course.id,
  title: course.title,
  description: course.desc,
  image: course.imgUrl,
}));

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"courses" | "merch">("courses");

  return (
    <div className="max-w-5xl mx-auto w-full px-6 py-12 md:py-16 text-[#04102d]">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-black mb-2 text-[#04102d] tracking-tight">
          My Profile
        </h1>
        <p className="text-gray-500 font-bold">
          Manage your account settings and preferences
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-[22px] font-black mb-6 text-[#04102d]">
          Personal Information
        </h2>

        <div className="bg-white border-2 border-[#04102d] rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[8px_8px_0_#0bae95] hover:-translate-y-2 hover:shadow-[12px_12px_0_#0bae95] transition-all duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-24 h-24 bg-[#E5FBB8] border-2 border-[#04102d] shadow-[4px_4px_0_#04102d] rounded-full flex items-center justify-center shrink-0">
              <User className="w-10 h-10 text-[#04102d]" strokeWidth={2.5} />
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="text-2xl font-black text-[#04102d]">
                Manu Sharma
              </h3>
              <p className="text-gray-600 text-sm font-bold">7078735629</p>
              <p className="text-gray-600 text-sm font-bold">
                Manusharma2462@gmail.com
              </p>
            </div>
          </div>

          <button className="cursor-pointer flex items-center justify-center gap-2.5 bg-[#04102d] text-white px-6 py-3 rounded-[14px] font-black border-2 border-[#04102d] shadow-[4px_4px_0_#0bae95] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0bae95] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] whitespace-nowrap w-full md:w-auto">
            <Edit2 className="w-5 h-5" strokeWidth={2.5} />
            Edit Profile
          </button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-[22px] font-black mb-6 text-[#04102d]">Security</h2>

        <div className="bg-white border-2 border-[#04102d] rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[8px_8px_0_#0bae95] hover:-translate-y-2 hover:shadow-[12px_12px_0_#0bae95] transition-all duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 bg-white border-2 border-[#04102d] shadow-[4px_4px_0_#0bae95] rounded-full flex items-center justify-center shrink-0">
              <Lock className="w-7 h-7 text-[#04102d]" strokeWidth={2.5} />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-[19px] font-black text-[#04102d]">
                Change Password
              </h3>
              <p className="text-gray-600 text-sm font-bold">
                Update your password to keep your account secure
              </p>
            </div>
          </div>

          <button className="cursor-pointer flex items-center justify-center bg-white text-[#04102d] px-6 py-3 rounded-[14px] font-black border-2 border-[#04102d] shadow-[4px_4px_0_#04102d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#04102d] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] whitespace-nowrap w-full md:w-auto">
            Change Password
          </button>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black mb-6 text-[#04102d]">Purchases</h2>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("courses")}
            className={`cursor-pointer px-8 py-2.5 rounded-[14px] font-bold border-2 border-[#04102d] transition-all ${
              activeTab === "courses"
                ? "bg-[#04102d] text-white shadow-[4px_4px_0_#0bae95]"
                : "bg-white text-[#04102d] hover:bg-gray-50 shadow-[4px_4px_0_#04102d]"
            }`}
          >
            Courses
          </button>
          <button
            onClick={() => setActiveTab("merch")}
            className={`cursor-pointer px-8 py-2.5 rounded-[14px] font-bold border-2 border-[#04102d] transition-all ${
              activeTab === "merch"
                ? "bg-[#04102d] text-white shadow-[4px_4px_0_#0bae95]"
                : "bg-white text-[#04102d] hover:bg-gray-50 shadow-[4px_4px_0_#04102d]"
            }`}
          >
            Merch
          </button>
        </div>

        {activeTab === "courses" && (
          <div className="grid grid-cols-1 gap-6">
            {MOCK_PURCHASED_COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-white border-2 border-[#04102d] rounded-[24px] p-4 flex flex-col md:flex-row md:items-center gap-6 lg:gap-8 shadow-[8px_8px_0_#0bae95] hover:-translate-y-2 hover:shadow-[12px_12px_0_#0bae95] transition-all duration-300 relative group overflow-hidden"
              >
                <div className="w-full md:w-[48%] lg:w-[45%] xl:w-[40%] aspect-[16/9] bg-gray-100 rounded-[16px] border-2 border-[#04102d] overflow-hidden flex-shrink-0 relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-100"
                  />
                </div>

                <div className="flex flex-col flex-grow py-2 lg:py-4 h-full justify-center">
                  <h3 className="text-2xl md:text-3xl font-black text-[#04102d] mb-3 leading-tight pr-4">
                    {course.title}
                  </h3>

                  <p className="text-[#04102d]/80 font-bold text-[15px] sm:text-[16px] mb-8 lg:pr-8 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap items-center mt-auto gap-4">
                    <Link
                      to={`/new-courses/${course.id}/content`}
                      className="inline-flex items-center justify-center cursor-pointer bg-[#04102d] text-white px-8 py-3 rounded-[14px] font-black border-2 border-[#04102d] shadow-[4px_4px_0_#0bae95] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0bae95] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                    >
                      View
                    </Link>

                    <button className="cursor-pointer bg-white text-[#04102d] px-6 py-3 rounded-[14px] font-black border-2 border-[#04102d] shadow-[4px_4px_0_#04102d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#04102d] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
                      View Invoice
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {MOCK_PURCHASED_COURSES.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-xl font-bold text-gray-400">
                  No courses purchased yet.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "merch" && (
          <div className="py-12 flex flex-col items-center justify-center border-2 border-dashed border-[#04102d]/20 rounded-[24px]">
            <p className="text-center text-xl font-bold text-[#04102d]/40 mb-6">
              No merch purchased yet.
            </p>
            <Link
              to="/store"
              className="cursor-pointer bg-[#04102d] text-white px-8 py-3 rounded-[14px] font-black border-2 border-[#04102d] shadow-[4px_4px_0_#0bae95] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0bae95] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
            >
              Browse Store
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
