"use client"
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";

// Load Poppins with desired weights
const poppins = Poppins({
  subsets: ["latin"], // Set subset to 'latin' for better compatibility
  weight: ["400", "500", "600", "700"], // Select desired weights
  variable: "--font-poppins", // Use CSS variable for flexibility
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <head>
        {/* You can manually set metadata here if needed */}
        <title>JPD</title>
        {/* <meta name="description" content={metadata.description} /> */}
      </head>
      <body
        className={`${poppins.variable} antialiased`} // Apply Poppins globally
      >
        <Provider store={store}>
          <div className="sm:h-full w-full">
            <div className="h-[54px] w-full border-b border-[#E0DEF7]">
              <Navbar />
            </div>
            {/* Render the child page content here */}
            <div className="h-[calc(100%-54px)] w-full bg-[#F7F7FD] ">
              {children}
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
