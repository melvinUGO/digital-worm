import { NavigationContextProvider } from "@/contexts/navigaionContext";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Sidebar from "@/components/navigation/Sidebar";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavigationContextProvider>
          <Navbar />
          <Sidebar />
          {children}
        </NavigationContextProvider>
      </body>
    </html>
  );
}
