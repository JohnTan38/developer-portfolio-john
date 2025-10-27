import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import Providers from "./providers";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Tan - Software Developer",
  description:
    "This is the portfolio of John Tan. I am a Gen AI/ML software engineer and a self taught full stack developer. I love to learn new technologies and I am always open to collaborating with fellow developers. I am a quick learner and I am always looking for new challenges.",
  // add favicon/icon metadata here in the future
  icons: {
    icon: '/profile.png',
    shortcut: '/profile.png',
    apple: '/profile.png',
    },
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} theme-dark`}>
        <Providers>
          <ToastContainer />
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </Providers>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
