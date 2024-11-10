import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "next js starter kit",
  description: "a basic next js starter kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
