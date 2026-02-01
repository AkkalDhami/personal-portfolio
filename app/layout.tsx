import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast";
import { Navbar } from "@/components/layouts/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});
export const metadata: Metadata = {
  title: "Akkal Dhami - Full Stack Developer",
  description: "Akkal Dhami's Portfolio Website"
};

import { BackToTop } from "@/components/ui/back-to-top";
import { Footer } from "@/components/layouts/footer";
import { BgPattern } from "@/components/layouts/bg-pattern";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-inter antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <ToastProvider position="top-center">
            <AnchoredToastProvider>
              <main className="bg-background relative mx-auto min-h-screen max-w-3xl">
                <Navbar />
                {children}
                <Footer />
                <BackToTop />
              </main>
              <BgPattern />
            </AnchoredToastProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
