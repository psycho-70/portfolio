import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from 'next/script';
import { AppProvider } from './Context/AppContext'; // Adjust based on your folder structure

// Metadata for static site generation or other use
export const metadata = {

  title: "Furqan_Khattak - Home",
  description: "Welcome to Information World, your one-stop destination . Explore a world of knowledge and stay informed.",

 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >

<link rel="icon" href="/Logo.png" sizes="any" />

      <body>
        <div>
        <AppProvider>

            <Navbar />
            {children}
            <Footer />
        </AppProvider>
          
        </div>
        <Script src="https://cdn.lordicon.com/xdjxvujz.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
