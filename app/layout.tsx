import "./globals.css";
import { Inter } from "next/font/google";
import Facebook from "@/components/universal/MessengerChatBot";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Facebook />
      </body>
    </html>
  );
}
