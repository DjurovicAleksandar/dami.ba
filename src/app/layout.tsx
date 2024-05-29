import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navigation/Nav";
import Footer from "@/components/footer/Footer";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dami",
  description: "Prostor za rast",
};

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <body className={epilogue.className}>
        <Nav />
        {children}
        <Footer />
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
