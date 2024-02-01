import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chrommus",
  description: "Modern E-commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            {/* <p>copyright &copy; 2024 - All right reserved by Chrommus Eletronics</p> */}

            <p>copyright &copy; 2024 - All right reserved by 
              <a
                href="#!"
                className="text-white-300 transition duration-100 ease-in-out text-slate-400 hover:text-sky-400"
              >Chrommus Eletronics</a
              >
            </p>

            {/* <p>copyright &copy; 2024 - All right reserved by 
              <div className="bg-neutral-800">
                <a
                  href="#!"
                  className="text-neutral-50 transition duration-150 ease-in-out hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200"
                >Chrommus Eletronics</a
                >
              </div>
            </p> */}
            {/* <p>copyright &copy; 2024 - All right reserved by <a href="/" className="no-underline dark:text-blue-300 hover:underline ...">Chrommus</a></p> */}
            {/* <p>copyright &copy; 2024 - All right reserved by<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Chrommus Eletronics</a> </p> */}
            {/* <p>copyright &copy; 2024 - All right reserved by <a className="btn btn-ghost" href="/">Chrommus Eletronics</a>  </p> */}
          </footer>
        </div>
      </body>
    </html>
  );
}
