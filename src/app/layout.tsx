import "./globals.css";
import { montserrat } from "@/constants/fonts";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
