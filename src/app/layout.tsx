import HelpFooter from "@/components/HelpFooter";
import "./globals.css";
import { montserrat } from "@/constants/fonts";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(`https://help.zikoro.com/`),
  title: "Help App – Your Guide to Support, Solutions & Self-Help Resources",
  description:
    "Help App offers a seamless way to find solutions, get support, and access self-help resources. Whether you're facing technical issues or seeking personal guidance, Help App is here to assist you effectively.",

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    url: "/zikoro-og.jpeg",
    title: "Zikoro - Appointment Scheduling & Booking",
    description:
      "Discover Help App, the platform that simplifies support. Access solutions, contact support teams, and explore helpful resources all in one user-friendly space.",
    images: [
      {
        url: "/zikoro-og.jpeg",
        width: 1200,
        height: 630,
        alt: "Access support and solutions with Help App.",
      },
    ],
  },

  // Twitter Card (Twitter)
  twitter: {
    card: "summary_large_image",
    site: "@zikoro", // Your Twitter handle
    title: "Help App – Your Guide to Support, Solutions & Self-Help Resources",
    description:
      "Find support, troubleshoot problems, and explore resources easily with Help App. Empower yourself with tools and expert-backed guidance.",
    creator: "@zikoro",
  },

  // Additional SEO fields (optional)
  keywords:
    "Help App, support platform, customer support, technical help, troubleshooting, self-help resources, guidance app, online help center, support ticket system, HelpApp platform",
  robots: "index, follow",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <HelpFooter />
        <Footer />
      </body>
    </html>
  );
}
