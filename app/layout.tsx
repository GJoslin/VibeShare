import type { Metadata } from "next";
import "./global.css";
import Providers from "./provider";  // ⬅️ import

export const metadata: Metadata = {
  title: "VibeShare",
  description: "Mock video sharing app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Providers>   {/* ✅ wrap session provider here */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
