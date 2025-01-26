import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/shared/navbar/Navbar";
import MainLayout from "@/components/ui/shared/MainLayout";

// Import Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Specify the weights you need
  display: "swap", // Ensures text is visible while the font loads
});

// Import Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600"], // Specify the weights you need
  display: "swap", // Ensures text is visible while the font loads
});
export const metadata: Metadata = {
  title: "facebook ads",
  description: "facebook ads!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={"dark"}>
      <body
        className={`${inter.className} ${outfit.className} max-w-[1800px] mx-auto`}
      >
        <Navbar />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
