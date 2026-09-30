import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Registration will be connected to the backend later.
    console.log("Registration submitted");
  };

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-32">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden bg-marama-green p-12 text-white lg:flex lg:flex-col lg:justify-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Join Marama Foods
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight xl:text-5xl">
            Start your journey toward better living.
          </h1>

          <p className="mt-6 max-w-md leading-7 text-white/75">
            Create your Marama Foods account and make shopping for wholesome
            foods and nutritious meal kits simple.
          </p>

          <div className="mt-10 h-1 w-16 rounded-full bg-maroon" />
        </div>

        {/* Register Form */}
        <div className="p-8 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-md">
            {/* Mobile Heading */}
            <div className="lg:hidden">
              <p className="text-sm font-semibold uppercase tracking-widest text-maroon">
                Join Marama Foods
              </p>
            </div>

            <h2 className="mt-2 text-3xl font-bold text-marama-green sm:text-4xl">
              Create Account
            </h2>

            <p className="mt-3 text-gray-600">
              Create your account to get started.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm text-gray-800 outline-none transition duration-300 placeholder:text-gray-400 focus:border-marama-green focus:bg-white focus:ring-2 focus:ring-marama-green/10"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm text-gray-800 outline-none transition duration-300 placeholder:text-gray-400 focus:border-marama-green focus:bg-white focus:ring-2 focus:ring-marama-green/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-12 text-sm text-gray-800 outline-none transition duration-300 placeholder:text-gray-400 focus:border-marama-green focus:bg-white focus:ring-2 focus:ring-marama-green/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 transition duration-300 hover:text-marama-green"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full cursor-pointer rounded-full bg-marama-green px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-maroon"
              >
                Create Account
              </button>
            </form>

            {/* Login */}
            <p className="mt-8 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-marama-green transition duration-300 hover:text-maroon"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
 
