import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentalidade Imersiva | Ebook",
  description: "Baixe seu ebook gratuitamente",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
