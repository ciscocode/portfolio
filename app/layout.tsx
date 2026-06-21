import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francisco Montenegro — Portfolio",
  description: "Software engineer portfolio showcasing full-stack, desktop, and ML projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-[var(--border)] py-6 text-center text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} Francisco Montenegro
        </footer>
      </body>
    </html>
  );
}
