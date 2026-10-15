import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: [
    { path: "../../public/assets/fonts/Poppins-Regular.ttf", weight: "400" },
    { path: "../../public/assets/fonts/Poppins-Medium.ttf", weight: "500" },
    { path: "../../public/assets/fonts/Poppins-SemiBold.ttf", weight: "600" },
    { path: "../../public/assets/fonts/Poppins-Bold.ttf", weight: "700" },
  ],
  variable: "--font-poppins", display: "swap",
});

export const metadata: Metadata = {
  title: "Jessel Ann Piamonte — Software Engineer",
  description: "Software engineer building thoughtful web and mobile experiences with React, React Native, TypeScript, Laravel, and PostgreSQL. Explore my work and experience.",
};

const themeScript = `(function(){var t;try{t=localStorage.getItem('portfolio-theme')}catch(e){}var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light'})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={poppins.variable} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body className="font-sans">{children}</body></html>;
}
