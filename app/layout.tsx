import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TurboVac | Professional Duct Cleaning Services",
  description:
    "TurboVac provides commercial, residential, industrial duct cleaning and dryer vent cleaning with certified technicians and modern HVAC equipment.",
  keywords: [
    "duct cleaning",
    "dryer vent cleaning",
    "commercial duct cleaning",
    "residential duct cleaning",
    "industrial duct cleaning",
    "HVAC cleaning",
    "TurboVac",
  ],
  metadataBase: new URL("https://turbovac.example"),
  openGraph: {
    title: "TurboVac | Professional Duct Cleaning Services You Can Trust",
    description:
      "Request a free duct cleaning quote from certified technicians using advanced equipment for healthier air.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
