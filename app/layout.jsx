import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alexanderiscoding",
  description: "Transformando Ideias em Tecnologia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-black">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
