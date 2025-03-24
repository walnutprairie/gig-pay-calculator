"use client";

import "../styles/globals.css";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
