import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/homepage/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foodie",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div  className="max-w-3xl mx-auto">
          
          {children}
          </div>
      </body>
    </html>
  );
}
