import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Raju Hoque - Frontend Developer",
//   description: "Official portfolio of Raju Hoque. Explore my projects, skills, and work experience as a frontend developer specializing in React, Next.js, and UI engineering.",
//   keywords: ["Raju Hoque", "Frontend Developer", "React", "Next.js", "Portfolio"],
//   authors: [{ name: "Raju Hoque", url: "https://portfolio-next-xi-bay.vercel.app/" }],
//   icons: {
//     icon: '/favicon.ico',
//   },
// };


export const metadata: Metadata = {
  title: "Raju Hoque | Frontend Developer",
  description: "Official portfolio of Raju Hoque. Explore my projects, skills, and work experience as a frontend developer specializing in React, Next.js, and UI engineering.",
  keywords: ["Raju Hoque", "Frontend Developer", "React", "Next.js", "Portfolio"],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Raju Hoque | Portfolio",
    description: "Portfolio of Raju Hoque, Frontend Developer.",
    url: "https://rajuhoque.com/",
    siteName: "Raju Hoque Portfolio",
    images: [
      {
        url: "https://rajuhoque.com/profile_image.jpg",
        width: 1200,
        height: 630,
        alt: "Raju Hoque Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raju Hoque | Portfolio",
    description: "Portfolio of Raju Hoque, Frontend Developer.",
    images: ["https://rajuhoque.com/profile_image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
