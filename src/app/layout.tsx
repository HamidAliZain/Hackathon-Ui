import Header from "@/components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dine Market",
  description: "A market place for ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"px-0 md:px-8"}>
        <Header />
        <main  className={inter.className}> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
