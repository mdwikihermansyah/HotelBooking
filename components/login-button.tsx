"use client";

import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { signIn } from "next-auth/react";

export const LoginGoogleButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Sign in error:", error);
      alert("Terjadi kesalahan saat sign in. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleManualSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // * Simulasi proses sign in manual
    setTimeout(() => {
      alert(
        "Fitur sign in manual sedang dalam pengembangan. Silakan gunakan Google Sign In."
      );
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className={`flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white font-semibold py-3 px-6 text-lg rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <span className="flex items-center gap-2">
          <FaGoogle className="text-2xl animate-bounce" />
          <span>{isLoading ? "Loading..." : "Sign In With Google"}</span>
        </span>
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">atau</span>
        </div>
      </div>

      {/* * Form login manual sebagai alternatif */}
      <div className="mt-6">
        <form onSubmit={handleManualSignIn} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};
