import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Résumé | Alfonzo Anthony",
  description: "Online résumé for Alfonzo Anthony, Remote Help Desk Analyst and IT Support Specialist.",
  alternates: { canonical: "/resume" },
};

const jobs = [
  {
    company: "AT&T",
    role: "Senior Technical Support & Peer Support",
    dates: "2015-Present",
    bullets: [
      "Provide advanced technical and account support, diagnosing mobile-device, application, connectivity, service, billing, and account-access issues.",
      "Earned Android Master certification and served in the MI60 peer-escalation role, assisting representatives with complex cases and helping customers avoid repeat contacts.",
      "Identified an RSA registration and Windows registry failure affecting remote access; documented the cause and rewrote the access and token recovery procedures.",
      "Supported teams across Texas, Louisiana, Florida, and Mississippi while coaching representatives on troubleshooting, CRM use, customer communication, and resolution quality.",
      "Use active listening and de-escalation to manage high-pressure interactions and move each case toward a practical resolution.",
    ],
  },
  {
    company: "DIRECTV",
    role: "Lead Technical Mentor",
    dates: "2009-2014",
    bullets: [
      "Resolved receiver, remote-control, signal, connectivity, installation, and account problems through structured remote troubleshooting.",
      "Maintained approximately a 0.3% unnecessary truck-roll rate by isolating problems and completing remote fixes whenever possible.",
      "Coached new and tenured representatives, helping them reach required quality and performance standards within four weeks.",
    ],
  },
  {
    company: "Cross Computer Repair",
    role: "Computer Service Technician",
    dates: "2005-2008",
    bullets: ["Diagnosed, repaired, configured, and upgraded Windows computers, hardware, operating systems, drivers, software, peripherals, and small-network connections."],
  },
  {
    company: "Gateway",
    role: "Technical Support Specialist & Sales Trainer",
    dates: "2001-2005",
    bullets: [
      "Delivered phone support for desktop and laptop hardware, Windows, software, peripherals, internet connectivity, and system performance issues.",
      "Achieved the call center's highest sales close rate at 46% and was promoted to trainer.",
    ],
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <nav className="nav" aria-label="Resume navigation">
        <a className="wordmark" href="/" aria-label="Back to portfolio">AA<span>/IT</span></a>
        <div className="resume-nav-actions">
          <a href="/">Portfolio</a>
          <a className="button button-lime" href="/Alfonzo-Anthony-Remote-IT-Support-Resume.pdf" download>Download PDF</a>
        </div>
      </nav>

      <header className="resume-hero">
        <div><p className="eyebrow">Online résumé</p><h1>Alfonzo<br />Anthony</h1></div>
        <div className="resume-role"><p>Remote Help Desk Analyst</p><p>IT Support Specialist</p><a className="button button-dark" href="/Alfonzo-Anthony-Remote-IT-Support-Resume.pdf" download>Download résumé PDF ↓</a></div>
      </header>

      <div className="resume-shell">
        <aside className="resume-sidebar">
          <section><p className="eyebrow">Core skills</p><ul><li>Tier 1/2 Support</li><li>Remote Troubleshooting</li><li>Incident Triage</li><li>Escalation Handling</li><li>Case Documentation</li><li>Customer De-escalation</li><li>Peer Coaching</li><li>Knowledge Management</li></ul></section>
          <section><p className="eyebrow">Systems & tools</p><p>Windows · macOS · Linux · Android · iOS · RSA · Salesforce · Siebel · Microsoft 365 · Google Workspace</p></section>
          <section><p className="eyebrow">Education</p><p><b>Mary Holmes College</b><br />Associate of Applied Science<br />GPA 3.4</p></section>
        </aside>

        <article className="resume-main">
          <section className="resume-summary"><p className="eyebrow">Professional summary</p><p>Remote technical support professional with more than 20 years of experience helping customers and employees resolve hardware, software, mobile-device, connectivity, account-access, and service issues. Known for staying calm during difficult calls, asking the right questions, explaining technical steps in plain language, and following problems through to resolution.</p></section>
          <section><p className="eyebrow">Professional experience</p><div className="resume-jobs">{jobs.map((job) => <article className="resume-job" key={job.company}><header><div><h2>{job.company}</h2><p>{job.role}</p></div><time>{job.dates}</time></header><ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div></section>
          <section className="resume-credentials"><p className="eyebrow">Certifications</p><ul><li>Google UX Design Professional Certificate - 2026</li><li>Google Technical Support Fundamentals - December 2025</li><li>Google AI Essentials · Google Prompting Essentials · Google Cloud AI/LLM and Responsible AI coursework</li><li><b>In progress:</b> CompTIA A+ · TypeScript Certification · IBM Generative AI Engineering Professional Certificate</li></ul></section>
        </article>
      </div>

      <section className="resume-download-band"><div><p className="eyebrow">Keep a copy</p><h2>Download the résumé for review.</h2></div><a className="button button-lime" href="/Alfonzo-Anthony-Remote-IT-Support-Resume.pdf" download>Download PDF ↓</a></section>
    </main>
  );
}
