import "./globals.css";
import { MainNav } from "@/components/layout/main-nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Cognir Platform",
  description: "Powered by COGNIR AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-auto">
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
