import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import Nav from "@/shared/components/Nav";
import Footer from "@/shared/components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const almarai = Almarai({
  subsets: ["latin"],
  variable: "--font-almarai",
  display: "swap",
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${almarai.variable} font-sans`}>
      <body className="antialiased bg-[#F3F3F3] vsc-domain-localhost vsc-initialized">
        <Nav />
        {children}
        <Footer />

        {/* WhatsApp Button */}
        <WhatsAppButton
          phoneNumber="+201000041191"
          message="Hello! I'm interested in learning English with Englisher Academy. Can you help me get started?"
        />
      </body>
    </html>
  );
}
