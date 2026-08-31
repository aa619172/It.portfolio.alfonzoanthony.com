import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://it-portfolio.alfonzoanthony.com"),
  title: "Alfonzo Anthony | IT Support Portfolio",
  description: "Technical support portfolio of Alfonzo Anthony, focused on remote help desk, troubleshooting, customer experience, documentation, and support operations.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <aside className="floating-resume" aria-label="Résumé options">
          <span className="floating-resume-label">My Résumé</span>
          <a className="floating-view" href="/resume" aria-label="View Alfonzo Anthony's online résumé">View Résumé</a>
          <a className="floating-download" href="/Alfonzo-Anthony-Remote-IT-Support-Resume.pdf" download aria-label="Download Alfonzo Anthony's résumé as a PDF">Download PDF <span aria-hidden="true">↓</span></a>
        </aside>
      </body>
    </html>
  );
}
