import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dentiq Dental Clinic",
  description: "Шүдний эмнэлгийн үйлчилгээ, 3D танилцуулга, холбоо барих нүүр хуудас.",
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
