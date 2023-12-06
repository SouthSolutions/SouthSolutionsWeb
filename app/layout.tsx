import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SouthSolutions | tu app, tu web",
  description: "En nuestro sitio web, ofrecemos servicios de creación de aplicaciones móviles y páginas web personalizadas para ayudar a nuestros clientes a llevar sus ideas al siguiente nivel. Desde aplicaciones móviles para iOS y Android hasta sitios web de comercio electrónico y blogs, nuestro equipo de expertos puede ayudarte a crear la presencia en línea que necesitas para tener éxito. ¡Contáctanos hoy para obtener más información!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
