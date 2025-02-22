import "./globals.css";
import { NavbarPage } from "@/components/layout/NavbarPage";

export const metadata = {
  title: "Text Sentyment Analysis",
  description: "Powered by COGNIR AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-auto">
        <NavbarPage />
        {children}
      </body>
    </html>
  );
}
