import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "@/devlink/global.css";
import "./globals.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import { Navbar } from "@/devlink";
import { Footer } from "@/devlink";

export const metadata: Metadata = {
  title: "Careers Playground",
  description: "Webflow Cloud NextJS example app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <DevLinkProvider>
          <div
            style={{
              position: "fixed",
              width: "100%",
              zIndex: 1,
              backgroundColor: "var(--background)",
            }}
          >
            <Navbar />
          </div>
          {children}
          <Footer />
        </DevLinkProvider>
      </body>
    </html>
  );
}
