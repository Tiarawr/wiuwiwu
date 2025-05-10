import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[1440px] h-[1024px] relative bg-white overflow-hidden"
    >
      {/* Heading */}
      <div className="absolute left-[527px] top-[162px]">
        <span className="text-black text-3xl font-medium font-poppins">
          Welcome To{" "}
        </span>
        <span className="text-[#B56868] text-3xl font-bold font-poppins">
          checkmykicks
        </span>
        <span className="text-[#B56868] text-3xl font-medium font-poppins">
          !
        </span>
      </div>

      {/* Subheading */}
      <div className="absolute left-[554px] top-[217px] text-black text-base font-medium font-poppins w-96 h-7">
        Enter your Credentials to access your account
      </div>

      {/* Email */}
      <label className="absolute left-[440px] top-[294px] text-black text-xl font-medium font-poppins">
        Email address
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="absolute top-[324px] left-[440px] w-[600px] h-14 bg-white rounded-[20px] border border-stone-300 px-4 text-base font-medium text-zinc-500"
      />

      {/* Password */}
      <label className="absolute left-[440px] top-[404px] text-black text-xl font-medium font-poppins">
        Password
      </label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="absolute top-[434px] left-[440px] w-[600px] h-14 bg-white rounded-[20px] border border-stone-300 px-4 text-base font-medium text-zinc-500"
      />

      {/* Forgot password */}
      <div className="absolute left-[901px] top-[407px] text-blue-900 text-base font-medium font-poppins cursor-pointer">
        forgot password
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="absolute top-[549px] left-[440px] w-[600px] h-14 bg-[#B56868] rounded-[20px] border border-stone-300 text-white text-xl font-bold font-poppins"
      >
        Login
      </button>

      {/* Divider */}
      <div className="absolute left-[440px] top-[678px] w-[600px] h-0 outline-2 outline-offset-[-1px] outline-neutral-300" />
      <div className="absolute left-[731px] top-[666px] text-black text-sm font-medium font-poppins">
        Or
      </div>

      {/* Google Sign In */}
      <div className="absolute left-[440px] top-[728px] w-64 h-14 bg-white rounded-[20px] border border-stone-300" />
      <div className="absolute left-[503px] top-[746px] text-black text-lg font-medium font-poppins">
        Sign in with Google
      </div>

      {/* Apple Sign In */}
      <div className="absolute left-[775px] top-[728px] w-64 h-14 bg-white rounded-[20px] border border-stone-300" />
      <div className="absolute left-[844px] top-[746px] text-black text-lg font-medium font-poppins">
        Sign in with Apple
      </div>

      {/* Bottom Text */}
      <div className="absolute left-[576px] top-[838px] w-80 h-6">
        <span className="text-black text-xl font-medium font-poppins">
          Don’t have an account?{" "}
        </span>
        <span className="text-blue-700 text-xl font-medium font-poppins cursor-pointer">
          Sign Up
        </span>
      </div>
    </form>
  );
}
