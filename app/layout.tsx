import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "../auth";
import AuthProvider from "../components/providers/session-provider";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel Booking",
  description: "Hotel Booking",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <SessionProvider session={session}>
          <Navbar />
          <main className="bg-gray-50 min-h-screen pt-16">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
