import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navigation/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dami",
  description: "Prostor za rast",
};

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <LayoutWrapper>{children}</LayoutWrapper>
    </html>
  );
}
