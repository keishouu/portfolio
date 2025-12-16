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

export const metadata: Metadata = {
  title: "Roni Jem Bueno - Frontend Developer",
  description:
    "Welcome to my portfolio! I am a passionate frontend developer specializing in creating beautiful, responsive, and user-centric web applications. With expertise in modern JavaScript frameworks and UI/UX principles, I transform designs into seamless interactive experiences.",
  keywords: [
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "UI/UX",
    "Responsive Design",
    "Web Animation",
    "Modern Web Development",
    "CSS Expert",
    "Performance Optimization",
    "Web Accessibility",
    "Component Design",
    "Roni Jem Bueno",
  ],
  authors: [{ name: "Roni Jem Bueno" }],
  creator: "Roni Jem Bueno",
  openGraph: {
    title: "Roni Jem Bueno - Frontend Developer Portfolio",
    description:
      "Passionate frontend developer crafting beautiful and interactive web experiences. Explore my projects and frontend development expertise.",
    url: "https://your-domain.com",
    siteName: "Roni Jem Bueno - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roni Jem Bueno - Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roni Jem Bueno - Frontend Developer",
    description:
      "Passionate frontend developer crafting beautiful and interactive web experiences. Explore my projects and frontend development expertise.",
    creator: "@ronsicles",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="df41ba95-4701-4396-bd10-fb03d2fc3233"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
