import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from 'next/script';


// Metadata for static site generation or other use
export const metadata = {

  title: "Informative World - Home",
  description: "Welcome to Information World, your one-stop destination . Explore a world of knowledge and stay informed.",

 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="custom-background text-white">

<link rel="icon" href="/Logo.png" sizes="any" />

      <body>
        <div>
        
            <Navbar />
            {children}
            <Footer />
          
        </div>
        <Script src="https://cdn.lordicon.com/xdjxvujz.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
