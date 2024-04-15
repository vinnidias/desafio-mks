import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { CartWrapper } from "@/context/cartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desafio MKS Sistemas",
  description: "App criado com Next para o desafio MKS Sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <Providers>
          <CartWrapper>
            <Navbar />
            {children}
            <Footer />
          </CartWrapper>
        </Providers>
      </body>
    </html>
  );
}
