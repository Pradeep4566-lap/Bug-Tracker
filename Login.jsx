import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600">
      <div className="bg-white w-[400px] rounded-2xl shadow-xl p-8">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800">
          🐛 Bug Tracker_Project Management 
        </h1>
        <p className="text-center text-gray-500 mt-1 mb-6">
          Sign in to your account
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="input mt-1"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="input mt-1"
          />
        </div>

        {/* Options */}
        <div className="flex items-center justify-between text-sm mb-6">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" />
            Remember me
          </label>
          <span className="text-indigo-600 cursor-pointer hover:underline">
            Forgot password?
          </span>
        </div>

        {/* Button */}
        <Link to="/dashboard">
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition">
            Sign In
          </button>
        </Link>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
