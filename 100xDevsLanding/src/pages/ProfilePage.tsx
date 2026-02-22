import { Link } from "react-router-dom";

export function ProfilePage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-black mb-4">My Profile</h1>
      <p className="text-lg text-gray-600 mb-8">This is a temporary profile page.</p>
      <Link to="/" className="px-6 py-3 bg-[#04102d] text-white rounded-xl font-bold hover:bg-[#081840] transition-colors">
        Return Home
      </Link>
    </div>
  );
}

