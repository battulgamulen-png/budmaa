import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apa Aesthetic | Шүдний гоо зүйн эмнэлэг",
  description:
    "Шүдний гоо зүйн эмчилгээ, инээмсэглэлийн дизайн, зөвлөгөөний цаг авах нүүр хуудас.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
