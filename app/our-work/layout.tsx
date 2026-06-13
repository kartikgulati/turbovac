import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | TurboVac Duct Cleaning Projects",
  description:
    "See real before and after results from TurboVac residential, commercial, and dryer vent cleaning projects across Ontario.",
};

export default function OurWorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
