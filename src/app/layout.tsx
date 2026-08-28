import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Majlis Belia FELDA Malaysia",
  description:
    "Majlis Belia Felda Malaysia ialah sebuah badan bukan kerajaan yang ditubuhkan oleh belia dari tanah rancangan Lembaga Kemajuan Tanah Persekutuan (FELDA).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ms" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-montserrat">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
