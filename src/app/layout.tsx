import HelpFooter from "@/components/HelpFooter";
import "./globals.css";
import { montserrat } from "@/constants/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <div className="sticky top-4 z-100">
          <Navbar />
        </div>
        {children}
        <HelpFooter />
        <Footer />
      </body>
    </html>
  );
}
