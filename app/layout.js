// app/layout.js
import '../styles/globals.css';

export const metadata = {
  title: 'Gig Pay Calculator',
  description: 'Evaluate your delivery offers easily',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


