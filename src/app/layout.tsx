import type { Metadata } from "next";
import { Inter, Open_Sans, Sansita } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asnet",
  description: "Connect work and workflows to company wide goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <div className="w-full h-full">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
