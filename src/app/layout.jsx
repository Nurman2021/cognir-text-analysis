import "./globals.css";
import { NavbarPage } from "@/components/layout/navbar-main";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Cognir Platform",
  description: "Powered by COGNIR AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-auto">
        <NavbarPage />
        {children}
        <Footer />
      </body>
    </html>
  );
}
