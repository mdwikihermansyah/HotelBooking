import { Metadata } from "next";
import { LoginGoogleButton } from "@/components/login-button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In - Booking Hotel",
  description: "Sign in to your account to continue booking your perfect stay",
};

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-blue-50 p-4">
      <div className="bg-white w-full max-w-md p-8 mx-auto rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        <LoginGoogleButton />

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
            >
              Sign up here
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
