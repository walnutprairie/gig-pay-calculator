"use client";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-pink-100 via-blue-100 to-white text-pink-900 min-h-screen p-6">
        <main className="max-w-md mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
