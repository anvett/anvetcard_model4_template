import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Lato } from "next/font/google";

export const metadata = {
  title: "Javier Egas - Cantante Profesional",
  description:
    "Haz que tu evento sea un momento único e inolvidable con la música y el show de Javier Egas.",
  keywords: "cantante, eventos, música en vivo, shows, conciertos, Javier Egas",
  authors: [{ name: "Javier Egas" }],
  robots: "index, follow",
  openGraph: {
    title: "Javier Egas - Cantante Profesional",
    description: "Haz que tu evento sea un momento inolvidable con el mejor show musical.",
    url: "https://javieregas.anvetcard.com",
    images: [
      {
        url: "https://javieregas.anvetcard.com/assets/images/shared.jpg",
        alt: "Javier Egas - Cantante Profesional",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier Egas - Cantante Profesional",
    description: "Shows en vivo, producción de eventos y música para cada ocasión.",
    images: ["https://javieregas.anvetcard.com/assets/images/shared.jpg"],
  },
  icons: {
    icon: "/assets/icons/favicon.ico",
    shortcut: "/assets/icons/favicon.ico",
    apple: "/assets/icons/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({ children }) {
  const menuConfig = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#services" },
    { label: "Galería", href: "#galeria" },
  ];

  const footerLinks = [...menuConfig];

  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className={`${lato.className} min-h-screen flex flex-col bg-primary text-light`}
      >
        <Navbar
          // 🎨 Estilos generales
          bgColor="bg-dark"
          textColor="text-light"
          borderColor="border-secondary"
          // 🖼️ Logo
          logoSrc="/assets/images/logo.jpg"
          // 📋 Menú
          menuItems={menuConfig}
          // 🅰️ Estilos de texto
          linkTextSize="text-size-2"
          navTextSize="text-size-4"
          // 📱 Mobile (menú)
          mobileMenuBg="bg-primary"
          mobileMenuTextColor="text-light"
          mobileIconColor="text-light"
          mobileIconSize="w-10 h-10"
          customMobileIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-light shadow-md shadow-light"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          }
        />
        <main>{children}</main>
        <Footer
          // 🎨 Estilos visuales actuales
          bgColor="bg-gradient-to-t from-dark-light to-primary-light"
          bgSecondColor="bg-dark"
          textColor="text-light"
          borderColor="border-secondary"
          // 🔗 Enlaces del menú
          footerLinks={[
            { label: "Inicio", href: "#inicio" },
            { label: "Info. Pago", href: "#info_pago" },
            { label: "Servicios", href: "#services" },
          ]}
          linkTextSize="text-size-1"
          // 🖼️ Logo
          footerLogo="/assets/images/logo.jpg"
          // 🔢 Contador de visitas (CountAPI)
          counterOptions={{
            namespace: "anvetcard",
            counterKey: "javierEgas_visitas",
            buttonLabel: "Contador de visitas",
            buttonStyles: "btn btn-rounded text-light border-light text-size-1",
            modalMessageText: "Actualmente {count} personas han visitado tu sitio.",
            modalBg: "bg-gradient-accent",
            modalTextColor: "text-dark",
            modalPadding: "p-6",
            modalRounded: "rounded-xl",
            modalShadow: "shadow-xl shadow-dark",
            buttonCloseText: "Cerrar",
            buttonCloseStyles: "main-button",
          }}
          // © Copyright
          copyrightText="© 2025 Anvetcorp SAS. Todos los derechos reservados."
          copyrightColor="text-light"
          copyrightSize="text-size-2"
        />
      </body>
    </html>
  );
}
