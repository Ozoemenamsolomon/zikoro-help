import HelpFooter from "@/components/HelpFooter";
import "./globals.css";
import { montserrat } from "@/constants/fonts";
import Footer from "@/components/Footer";
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
