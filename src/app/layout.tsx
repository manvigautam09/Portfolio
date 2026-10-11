import type { Metadata, Viewport } from "next";
import "@fontsource/atkinson-hyperlegible/400.css";
import "@fontsource/atkinson-hyperlegible/400-italic.css";
import "@fontsource/atkinson-hyperlegible/700.css";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";
import { profile } from "@/data/profile";
import { themeScript } from "@/components/ThemeToggle";
import { Glow } from "@/components/Glow";

const description = `${profile.name} is a ${profile.title.toLowerCase()} in ${profile.location}. ${profile.tagline}`;

export const metadata: Metadata = {
  // Update this once the custom domain is live.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://manvigautam09.vercel.app"),
  title: { default: `${profile.name} · ${profile.title}`, template: `%s · ${profile.name}` },
  description,
  openGraph: { title: profile.name, description, type: "website" },
  twitter: { card: "summary", creator: "@manvigautam09" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f3fc" },
    { media: "(prefers-color-scheme: dark)", color: "#16121f" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Glow />
        {children}
      </body>
    </html>
  );
}
