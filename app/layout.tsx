import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
const inter = Inter({ subsets: ["latin"] });

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

export const metadata: Metadata = {
  title: "Jotion",
  description: "The connected workspace where better, faster work happens",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme:dard)",
        url: "/logo-dard.svg",
        href: "/logo-dard.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider publishableKey="pk_test_...">
          <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="jotion-theme-2"
            >
              {children}
            </ThemeProvider>
          </ConvexProviderWithClerk>
        </ClerkProvider>
      </body>
    </html>
  );
}
