import { Sora } from "next/font/google"; // Importe a fonte Sora
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNavBar from "@/components/Home/Navbar/ResponsiveNavBar";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

// Defina a fonte Sora
const sora = Sora({
  variable: "--font-sora", // Defina uma variável para usar mais tarde
  subsets: ["latin"], // Subconjunto de caracteres
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], // Defina os pesos que deseja usar (opcional)
});

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata = {
  title: "Josias Portfólio",
  description: "Josias Portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body
        className={`${sora.variable} antialiased`} // Adicione a variável da fonte Sora
      >
        <ResponsiveNavBar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
