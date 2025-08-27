import "./global.css";
import Providers from "./provider";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Providers>
          <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-60 border-r border-zinc-800 hidden md:block">
              <Sidebar />
            </aside>

            {/* Main content */}
            <main className="flex-1 flex flex-col">
              <Header />
              <div className="flex-1 overflow-y-auto">{children}</div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
