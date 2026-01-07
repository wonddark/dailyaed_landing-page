import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["300", "700"],
});

export const metadata: Metadata = {
  title: "DailyAED - Track your daily profit in seconds",
  description:
    "DailyAED is an app built for small shop owners in the UAE. It does not" +
    " require any accounting knowledge and simplifies all the complexities to" +
    " the minimum. Just input your income and expenses and the app will give" +
    " you a fast and automatic profit calculation.",
};

export default function RootLayout(props: Readonly<LayoutProps<"/">>) {
  return (
    <html lang="en">
      <body
        className={
          `${interSans.variable} ${poppinsSans.variable} antialiased` +
          " bg-bg text-body font-sans"
        }
      >
        {props.children}
      </body>
    </html>
  );
}
