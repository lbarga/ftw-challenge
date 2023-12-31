import MaterialRegistry from "@/registries/material-registry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledJsxRegistry from "../registries/styled-registry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FTWFY",
  description: "FTWFY",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>{" "}
      <body>
        <StyledJsxRegistry>
          <MaterialRegistry>{children}</MaterialRegistry>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
