import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Sollos Franchising | Franquia Sniper",
  description: "Sollos Franchising - A maior rede de franquias de entretenimento com estandes de tiro de airsoft do Brasil. Seja um franqueado!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
