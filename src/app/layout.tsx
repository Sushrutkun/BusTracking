import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body style={inter.style}>
        <Providers>
          <Navbar />
          <div className="mt-[20px] container max-w-7xl mx-auto h-full pt-12">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
