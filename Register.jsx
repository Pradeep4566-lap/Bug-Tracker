import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl w-[380px] shadow-lg">
        <h2 className="text-xl font-bold text-center mb-4">
          Create your account
        </h2>

        <input className="input" placeholder="Full Name" />
        <input className="input" placeholder="Email Address" />
        <input className="input" type="password" placeholder="Password" />
        <input className="input" type="password" placeholder="Confirm Password" />

        <button className="w-full bg-blue-600 text-white py-2 rounded mt-2">
          Create Account
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
