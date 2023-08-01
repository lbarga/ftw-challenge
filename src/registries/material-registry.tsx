"use client";

import { defaultTheme } from "@/themes/default-theme";
import { ThemeProvider } from "@mui/material";
import React from "react";

export default function MaterialRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
