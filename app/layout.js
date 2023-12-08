"use client";

import { useRouter } from 'next/navigation';
import { Open_Sans, Archivo } from "next/font/google";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import ScrollToTopButton from "@/components/ui/scrollToTopButton";
import "bootstrap/dist/css/bootstrap.css";
import "../public/styles/globals.scss";

const opensans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-secondary",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const router = useRouter();
  const showHeader = router.pathname === "/login" ? false : true;
  return (
    <html lang="en">
      <body className={`${opensans.variable} ${archivo.variable}`}>
        {showHeader && <Header />}
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
