import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "primereact/resources/themes/lara-light-cyan/theme.css";

// import "/node_modules/primeflex/primeflex.css"
import 'primeicons/primeicons.css';
// import "primeflex/themes/primeone-light.css"   
// import "primeflex/themes/primeone-dark.css"
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/Topbar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akara Cafe",
  description: "I love you more than Akara, Said no one ever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Topbar />
          <Navbar />

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
