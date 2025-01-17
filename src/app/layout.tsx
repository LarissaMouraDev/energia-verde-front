import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Energia Verde",
  description: "Sistemas de gerenciamento de resíduos inteligente" ,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="bg-white">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
