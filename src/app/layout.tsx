import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import the Font Awesome styles manually
import "@fortawesome/fontawesome-svg-core/styles.css";

// Get the configuration object
import { config } from "@fortawesome/fontawesome-svg-core";

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Events",
  description:
    "Discover exciting events near you and beyond with our comprehensive events website. From concerts to conferences, easily find and explore events by date, location, or category. Get all the details you need, including date, time, venue, and ticket information. Join the fun and connect with communities around you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Add site icons in head tag */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
