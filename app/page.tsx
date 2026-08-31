const strengths = [
  { value: "20+", label: "Years in technical support" },
  { value: "0.3%", label: "Unnecessary truck-roll rate" },
  { value: "46%", label: "Highest Gateway close rate" },
  { value: "4", label: "States supported at AT&T" },
];

const capabilities = [
  { number: "01", title: "Remote troubleshooting", text: "Structured diagnosis across devices, software, connectivity, accounts, remote access, and service issues.", tags: ["Tier 1/2", "Windows", "macOS", "Linux", "Android"] },
  { number: "02", title: "Customer communication", text: "Calm, plain-language guidance that turns technical frustration into clear next steps and stronger customer confidence.", tags: ["De-escalation", "FCR", "VOC", "Retention"] },
  { number: "03", title: "Support operations", text: "Accurate case notes, escalation handling, peer coaching, knowledge documentation, QA, and process improvement.", tags: ["Salesforce", "Siebel", "CRM", "RSA"] },
];

const work = [
  { kicker: "Technical Support", title: "Remote Access Recovery", outcome: "Identified the failure and rewrote the recovery procedure.", text: "Diagnosed an RSA registration and Windows registry issue that interrupted remote access during the work-from-home transition.", tags: ["Root-cause analysis", "RSA", "Windows Registry", "Documentation"] },
  { kicker: "Support Operations", title: "Truck-Roll Reduction", outcome: "Maintained approximately 0.3% unnecessary dispatches.", text: "Used structured questioning and remote diagnosis to resolve receiver, signal, connectivity, and installation issues without avoidable field visits.", tags: ["Remote diagnosis", "Cost avoidance", "First-contact resolution"] },
  { kicker: "Coaching & Enablement", title: "Representative Ramp-Up", outcome: "Helped representatives reach required metrics within four weeks.", text: "Coached new and experienced team members on troubleshooting logic, customer conversations, call flow, and performance standards.", tags: ["Mentoring", "Quality", "Knowledge transfer"] },
  { kicker: "Product & UX", title: "Support-Focused Digital Builds", outcome: "Applied support thinking to clear, usable digital experiences.", text: "Built and documented web, automation, and product concepts with React, TypeScript, UX research, responsive design, and accessibility in mind.", tags: ["React", "TypeScript", "UX Design", "Documentation"] },
];

const timeline = [
  ["2015—Present", "AT&T", "Senior Technical Support & Peer Support"],
  ["2009—2014", "DIRECTV", "Lead Technical Mentor"],
  ["2005—2008", "Cross Computer Repair", "Computer Service Technician"],
  ["2001—2005", "Gateway", "Technical Support Specialist & Sales Trainer"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Alfonzo Anthony IT Support Portfolio home">AA<span>/IT</span><small> Portfolio</small></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#case-study">Case study</a><a href="#experience">Experience</a><a href="/resume">Résumé</a></div>
        <div className="nav-actions">
          <span className="status"><i /> Open to remote roles</span>
          <a className="nav-resume" href="/resume" aria-label="View Alfonzo Anthony's résumé">Résumé</a>
        </div>
      </nav>

      <section className="hero" id="top" aria-labelledby="about-title">
        <div className="hero-copy">
          <p className="eyebrow">Remote Help Desk Analyst · IT Support Specialist</p>
          <h1 id="about-title">I solve technical problems—and make the solution easier to understand.</h1>
          <div className="about-grid">
            <p className="about-label">About me</p>
            <p className="about-text">I’m Alfonzo Anthony, a technical support professional with more than 20 years of experience helping customers and teams resolve hardware, software, mobile, connectivity, account-access, and service issues. I combine patient customer care with structured troubleshooting, clear documentation, and a strong sense of ownership.</p>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Core support approach">
          <div className="portrait-placeholder" role="img" aria-label="Placeholder for Alfonzo Anthony's professional portrait">
            <span className="portrait-initials" aria-hidden="true">AA</span>
            <div><strong>Professional portrait</strong><small>Photo coming soon</small></div>
          </div>
          <p className="panel-label">How I work</p>
          <ol><li><span>01</span>Listen for the real problem</li><li><span>02</span>Isolate the cause</li><li><span>03</span>Explain the next step</li><li><span>04</span>Document the resolution</li></ol>
          <p className="panel-note">Human-centered support. Clear technical thinking.</p>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        {strengths.map((item) => <div className="proof" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </section>

      <section className="section" aria-labelledby="capabilities-title">
        <header className="section-head"><p className="eyebrow">Core capabilities</p><h2 id="capabilities-title">Support that is technical, calm, and accountable.</h2></header>
        <div className="capability-grid">
          {capabilities.map((item) => <article className="capability-card" key={item.number}><span className="card-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}
        </div>
      </section>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <header className="section-head split-head"><div><p className="eyebrow">Selected work</p><h2 id="work-title">Evidence, not just experience.</h2></div><p>Each example connects a technical problem to a practical customer or business outcome.</p></header>
        <div className="work-grid">
          {work.map((item, index) => <article className="work-card" key={item.title}><div className="work-top"><span>{item.kicker}</span><b>0{index + 1}</b></div><h3>{item.title}</h3><p>{item.text}</p><strong>{item.outcome}</strong><div className="tags dark-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}
        </div>
      </section>

      <section className="case-study" id="case-study" aria-labelledby="case-title">
        <header className="case-intro"><p className="eyebrow">Featured case study · AT&T</p><h2 id="case-title">Restoring remote access during a critical work transition.</h2><p>When representatives could not complete RSA registration, the visible symptom looked like an access problem. The real failure was deeper.</p><div className="case-meta"><span><b>Role</b> Technical Support / Peer Support</span><span><b>Focus</b> RSA · Windows · Documentation</span></div></header>
        <div className="case-steps">
          <article><span>01 / Problem</span><h3>Remote access failed at registration.</h3><p>Representatives could not reliably register tokens or connect, disrupting their ability to work remotely.</p></article>
          <article><span>02 / Investigation</span><h3>I looked beyond the visible error.</h3><p>I traced the failure through the RSA registration flow and the local Windows environment instead of repeating the standard steps.</p></article>
          <article><span>03 / Finding</span><h3>The registry state blocked recovery.</h3><p>The issue involved RSA registration and Windows registry data, which meant the existing instructions did not fully clear the failure.</p></article>
          <article><span>04 / Resolution</span><h3>I rewrote the procedure.</h3><p>I documented the cause and created clearer access and token recovery steps so the solution could be repeated consistently.</p></article>
        </div>
        <div className="impact"><span>Impact</span><p>Turned an individual technical fix into reusable team knowledge—restoring access while making future support faster and more consistent.</p></div>
      </section>

      <section className="section experience" id="experience" aria-labelledby="experience-title">
        <header className="section-head"><p className="eyebrow">Experience</p><h2 id="experience-title">A career built around resolution.</h2></header>
        <div className="timeline">{timeline.map(([date, company, role]) => <article key={company}><time>{date}</time><h3>{company}</h3><p>{role}</p></article>)}</div>
        <div className="credentials">
          <div><p className="eyebrow">Certifications</p><p>Google UX Design Professional Certificate · Google Technical Support Fundamentals · Google AI Essentials · Google Prompting Essentials</p></div>
          <div><p className="eyebrow">In progress</p><p>CompTIA A+ · TypeScript Certification · IBM Generative AI Engineering Professional Certificate</p></div>
          <div><p className="eyebrow">Education</p><p>Mary Holmes College · Associate of Applied Science · GPA 3.4</p></div>
        </div>
      </section>

      <footer><div><p className="eyebrow">Ready to contribute</p><h2>Remote IT support with a human touch.</h2></div><div className="footer-action"><p>Alfonzo Anthony<br />Remote Help Desk Analyst · IT Support Specialist<br /><span className="portfolio-domain">it-portfolio.alfonzoanthony.com</span></p><a className="button button-light" href="/resume">View résumé</a></div></footer>
    </main>
  );
}
