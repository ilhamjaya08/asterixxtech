import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AsterixxTech",
  description: "Lorem ipsum dolor sit amet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
