import type { Metadata } from "next";
import "./globals.css";
import { Epilogue } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Epilogue({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Human Resource Landing Page",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={montserrat.className}
      >
        <main className="">
        <Navbar />
        {children}
        </main>
        <Footer />
        
      </body>
    </html>
  );
}
