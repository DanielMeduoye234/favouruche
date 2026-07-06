import { useState } from "react";
import {
  ArrowRight,
  AtSign,
  Award,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  ExternalLink,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  PenLine,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";

const contactEmail = "Favourgabby214@gmail.com";
const contactPhone = "+2349032407242";
const displayPhone = "+234 903 240 7242";
const linkedInUrl = "https://www.linkedin.com/in/favouruchegabriel";
const resumeHref = "/assets/Favour Uche-Gabriel - Master Resume.pdf";
const photoSrc = "/assets/pic.jpeg";

const roleTitle = "Content, Communications & Executive Support Specialist";

const services = [
  {
    icon: PenLine,
    title: "Content strategy & copywriting",
    text: "Content strategies, customer personas, and clear copy that positions a brand and keeps it consistent."
  },
  {
    icon: Megaphone,
    title: "Social media management & growth",
    text: "Campaign planning, posts, short-form video, and ad copy that turn attention into engagement and leads."
  },
  {
    icon: Search,
    title: "SEO writing & brand storytelling",
    text: "SEO-focused articles, blog posts, and brand narratives that grow visibility and traffic across platforms."
  },
  {
    icon: BriefcaseBusiness,
    title: "Executive & administrative support",
    text: "Executive assistance, recruitment coordination, and reliable follow-up that keeps leaders and projects on track."
  },
  {
    icon: CalendarDays,
    title: "Calendar & schedule management",
    text: "Calendars, meetings, reminders, and appointments handled so nothing important slips through."
  },
  {
    icon: Users,
    title: "Client & stakeholder relations",
    text: "Lead nurturing, complaint handling, negotiation, and follow-through that builds trust and closes deals."
  }
];

const experienceItems = [
  {
    company: "Hexavia Consulting",
    role: "Client Relationship Manager",
    date: "2025",
    points: [
      "Resolved customer complaints directly, improving trust, retention, and long-term brand relationships.",
      "Nurtured leads from ads, referrals, and events into paying customers through clear communication.",
      "Contributed to ₦30–40M in monthly sales through client engagement and deal-conversion strategy.",
      "Closed high-value deals worth over ₦10M by understanding needs and communicating value clearly."
    ]
  },
  {
    company: "Hexavia Consulting",
    role: "Executive Assistant to the COO",
    date: "2025",
    points: [
      "Managed executive calendars, meetings, reminders, and schedules.",
      "Coordinated recruitment, including job postings, screening, and interviews.",
      "Acted as liaison between executives, internal teams, and external stakeholders.",
      "Followed up on projects to keep deadlines and deliverables on track."
    ]
  },
  {
    company: "Coxatech Digital Agency",
    role: "Social Media Manager",
    date: "2024 – Present",
    points: [
      "Develops social media campaigns that improved client engagement by 60% within three months.",
      "Creates posts, short-form videos, and ad copy tailored to each audience.",
      "Works with sales teams on persuasive messaging for lead generation and conversion."
    ]
  },
  {
    company: "African Origins Network",
    role: "Content Writer / Social Media Marketer",
    date: "2024",
    points: [
      "Wrote SEO-optimized blog posts, articles, and breaking news that drove significant traffic.",
      "Managed social pages to grow online visibility and audience engagement.",
      "Collaborated with editors and designers to align storytelling across platforms."
    ]
  },
  {
    company: "GlambyBaseBeauty",
    role: "Content Strategist / Personal Assistant",
    date: "2023 – 2024",
    points: [
      "Developed content strategies and customer personas to sharpen brand positioning and retention.",
      "Built content calendars, beauty tips, testimonials, and promotional campaigns.",
      "Managed appointments and client communications, supporting launches, masterclasses, and events."
    ]
  },
  {
    company: "Esomelite Global Enterprises",
    role: "Executive Secretary",
    date: "2022",
    points: [
      "Managed calendars, appointments, emails, and walk-in clients professionally.",
      "Maintained sales records, correspondence, and inventory documentation.",
      "Assisted with financial records, payment tracking, and follow-ups."
    ]
  }
];

const tools = [
  "Canva",
  "CapCut",
  "Meta Business Suite",
  "Google Workspace",
  "Google Analytics",
  "Monday.com",
  "Notion",
  "ChatGPT",
  "Microsoft Word",
  "ClickUp"
];

const credentials = [
  {
    icon: GraduationCap,
    label: "Education",
    title: "Unique Open University",
    detail: "Health Care Management — 2022 to Present"
  },
  {
    icon: Award,
    label: "Certification",
    title: "HubSpot Academy",
    detail: "Social Media Marketing Certification — 2025"
  }
];

const caseNotes = [
  {
    title: "Campaign & launch support",
    meta: "Content planning and inbox cover",
    text: "A steady posting rhythm, ready product answers, and customer questions grouped by priority so launches stay calm and on-message."
  },
  {
    title: "Client relationships & sales",
    meta: "Lead nurturing and deal conversion",
    text: "Leads from ads, referrals, and events guided toward paying customers, with complaints handled early and value communicated clearly."
  },
  {
    title: "Executive support & operations",
    meta: "Calendars, recruitment, and follow-up",
    text: "Executive schedules kept tidy, hiring coordinated end to end, and project deadlines tracked so leadership can stay focused."
  }
];

const communicationExamples = [
  {
    prompt: "A customer asks for a delivery update.",
    reply: "Hi Ada, thanks for checking in. Your order is already with dispatch, and I will confirm the delivery window with you before 4pm today."
  },
  {
    prompt: "A lead is weighing up before they commit.",
    reply: "Happy to make this easy. Based on what you shared, the standard package covers everything you mentioned. I can send a short breakdown and hold your slot for 48 hours if that helps."
  },
  {
    prompt: "The COO needs a schedule sorted quickly.",
    reply: "Done — I have moved the 2pm to Thursday, confirmed with both teams, and blocked prep time beforehand. Reminders are set and the agenda is in your inbox."
  }
];

const daybookItems = [
  "Inbox & message sweep",
  "Content & caption check",
  "Calendar & schedule review",
  "Client & lead follow-up",
  "Reporting & handoff notes"
];

const processSteps = [
  "Understand the goal: the brief, brand voice, audience, and the team or executive's real priorities.",
  "Plan content, communications, and support tasks around actual capacity and deadlines.",
  "Execute: publish, write, reply, coordinate schedules, and keep stakeholders aligned.",
  "Report what moved — engagement, conversions, and where the next effort should go."
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Favour Uche-Gabriel home">
        <span>F</span>
        <strong>Favour Uche-Gabriel</strong>
      </a>

      <nav aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#experience">Experience</a>
        <a href="#toolkit">Toolkit</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" role="img" aria-label="Content, communications, and executive-support operations preview">
      <div className="visual-topline">
        <span className="pulse-dot" aria-hidden="true" />
        <span>Operations desk</span>
        <strong>Priority queue clear</strong>
      </div>

      <div className="visual-grid">
        <div className="phone-preview">
          <div className="phone-bar" aria-hidden="true" />
          <div className="story-row" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="post-preview">
            <Instagram size={18} aria-hidden="true" />
            <p>Campaign live: copy ready, replies ready, team briefed.</p>
          </div>
          <div className="reaction-row">
            <span>24 comments</span>
            <span>11 DMs</span>
          </div>
        </div>

        <div className="calendar-preview">
          <div className="preview-heading">
            <CalendarDays size={18} aria-hidden="true" />
            <span>Week plan</span>
          </div>
          {["Mon: Content", "Wed: Exec sync", "Fri: Launch", "Sat: Follow-ups"].map((item) => (
            <div className="calendar-item" key={item}>
              <CheckCircle2 size={16} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="inbox-preview">
          <div className="preview-heading">
            <AtSign size={18} aria-hidden="true" />
            <span>Inbox queue</span>
          </div>
          {["Delivery update", "Lead follow-up", "COO calendar"].map((item, index) => (
            <div className="message-item" key={item}>
              <span className="message-avatar">{index + 1}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="chart-preview">
          <div className="preview-heading">
            <BarChart3 size={18} aria-hidden="true" />
            <span>Engagement trend</span>
          </div>
          <svg viewBox="0 0 210 86" role="img" aria-label="Rising engagement activity chart">
            <polyline points="8,67 40,58 72,62 104,38 136,46 168,24 202,18" />
            <circle cx="202" cy="18" r="5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-copy">
        <p className="section-kicker">What she handles</p>
        <h2>Content, communication, client care, and executive support — under one roof.</h2>
        <p>
          Favour combines creativity with structure: she shapes the public voice of a brand,
          keeps the private conversations warm, and holds the operations behind them together.
        </p>
      </div>

      <div className="service-list">
        {services.map(({ icon: Icon, title, text }) => (
          <article className="service-card" key={title}>
            <Icon size={22} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="profile-card">
        <img src={photoSrc} alt="Favour Uche-Gabriel smiling" />
        <div className="profile-card-copy">
          <p className="section-kicker">Resume snapshot</p>
          <h2>Favour Uche-Gabriel</h2>
          <p>{roleTitle}</p>
        </div>

        <div className="profile-links" aria-label="Favour Uche-Gabriel contact details">
          <a href={`tel:${contactPhone}`}>
            <Phone size={17} aria-hidden="true" />
            {displayPhone}
          </a>
          <a href={`mailto:${contactEmail}`}>
            <Mail size={17} aria-hidden="true" />
            {contactEmail}
          </a>
          <span>
            <MapPin size={17} aria-hidden="true" />
            Lagos, Nigeria
          </span>
          <a href={linkedInUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={17} aria-hidden="true" />
            LinkedIn profile
          </a>
        </div>

        <a className="button primary resume-button" href={resumeHref} download>
          <Download size={18} aria-hidden="true" />
          Download resume
        </a>
      </div>

      <div className="experience-copy">
        <p className="section-kicker">Experience</p>
        <h2>One track record across content, clients, and operations.</h2>
        <p>
          Six roles across media, beauty, tech, and consulting — from managing brand pages and
          writing SEO content to closing high-value deals and running an executive's calendar.
        </p>

        <div className="experience-list">
          {experienceItems.map((item) => (
            <article className="experience-item" key={`${item.company}-${item.role}`}>
              <div className="experience-heading">
                <div>
                  <p>{item.date}</p>
                  <h3>{item.company}</h3>
                  <span>{item.role}</span>
                </div>
                <BriefcaseBusiness size={22} aria-hidden="true" />
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Daybook() {
  return (
    <section className="daybook-section" aria-labelledby="daybook-title">
      <div className="daybook-copy">
        <p className="section-kicker">A working day</p>
        <h2 id="daybook-title">What gets checked before anything slips.</h2>
        <p>
          The value is in the small passes: catching repeated questions, keeping the calendar honest,
          following up with clients, and leaving useful notes for the team or executive.
        </p>
      </div>

      <div className="daybook-board" aria-label="Daily content, communications, and support checklist">
        {daybookItems.map((item, index) => (
          <div className="daybook-item" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkStyle() {
  return (
    <section className="work-band" id="work">
      <div className="work-inner">
        <div className="section-copy inverted">
          <p className="section-kicker">Work style</p>
          <h2>Organized enough for executives. Creative enough for content.</h2>
          <p>
            Channels, inboxes, and calendars all move fast, but the tone should never feel rushed.
            Favour keeps the work active, the details tracked, and everyone aware of what matters next.
          </p>
        </div>

        <div className="standards">
          <div>
            <ShieldCheck size={24} aria-hidden="true" />
            <h3>Clear communication guardrails</h3>
            <p>Consistent voice across posts, client replies, complaints, and executive correspondence.</p>
          </div>
          <div>
            <Clock3 size={24} aria-hidden="true" />
            <h3>Reliable follow-through</h3>
            <p>Schedules, deadlines, and deliverables tracked so commitments do not slip.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section">
      <div className="section-copy">
        <p className="section-kicker">How she works</p>
        <h2>A clear operating loop from brief to results.</h2>
      </div>

      <ol className="process-list">
        {processSteps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function CaseNotes() {
  return (
    <section className="section case-section">
      <div className="section-copy">
        <p className="section-kicker">Selected work themes</p>
        <h2>Practical support across the brand, the client, and the back office.</h2>
      </div>

      <div className="case-list">
        {caseNotes.map((note) => (
          <article className="case-note" key={note.title}>
            <p>{note.meta}</p>
            <h3>{note.title}</h3>
            <span>{note.text}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section className="toolkit-section" id="toolkit">
      <div className="section-copy">
        <p className="section-kicker">Toolkit & credentials</p>
        <h2>The tools and training behind the work.</h2>
        <p>
          Day-to-day, Favour works across content, publishing, analytics, and project tools,
          backed by focused training in marketing and healthcare management.
        </p>
      </div>

      <div className="toolkit-body">
        <div className="tool-chips" aria-label="Tools Favour works with">
          {tools.map((tool) => (
            <span className="chip" key={tool}>{tool}</span>
          ))}
        </div>

        <div className="credentials">
          {credentials.map(({ icon: Icon, label, title, detail }) => (
            <article className="credential-card" key={title}>
              <Icon size={22} aria-hidden="true" />
              <p>{label}</p>
              <h3>{title}</h3>
              <span>{detail}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunicationSamples() {
  return (
    <section className="response-section" aria-labelledby="response-title">
      <div className="section-copy">
        <p className="section-kicker">Communication samples</p>
        <h2 id="response-title">One voice, tuned to customers, leads, and leadership.</h2>
      </div>

      <div className="response-list">
        {communicationExamples.map((example) => (
          <article className="response-note" key={example.prompt}>
            <p>{example.prompt}</p>
            <blockquote>{example.reply}</blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "A portfolio visitor";
    const company = formData.get("company")?.toString().trim() || "a business or team";
    const message = formData.get("message")?.toString().trim() || "I would like to discuss content, communications, or executive-support work.";
    const params = new URLSearchParams({
      subject: `Portfolio inquiry from ${name}`,
      body: `Name: ${name}\nCompany or team: ${company}\n\n${message}`
    });

    setSent(true);
    window.location.href = `mailto:${contactEmail}?${params.toString()}`;
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <Sparkles size={28} aria-hidden="true" />
        <h2>Need content, communications, or a steady right hand?</h2>
        <p>
          Share the brand, campaign, customer-care need, or executive support you want help with.
          Favour can turn scattered posts, messages, and schedules into a manageable routine.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Company or team
          <input type="text" name="company" autoComplete="organization" required />
        </label>
        <label>
          What do you need help with?
          <textarea name="message" rows="5" required />
        </label>
        <button type="submit">
          <Send size={18} aria-hidden="true" />
          Send message
        </button>
        <p className={sent ? "form-note visible" : "form-note"} role="status" aria-live="polite">
          Your email app is opening with the inquiry draft.
        </p>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#top" aria-label="Back to top">
        Favour Uche-Gabriel
      </a>
      <div className="footer-links">
        <a href="#services">Services</a>
        <a href="#experience">Experience</a>
        <a href="#toolkit">Toolkit</a>
        <a href={resumeHref} download>Resume</a>
        <a href="#contact">
          <Mail size={16} aria-hidden="true" />
          Contact
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-kicker">Content · Communications · Executive support</p>
            <h1 id="hero-title">Favour Uche-Gabriel keeps content sharp, clients close, and operations calm.</h1>
            <p>
              A multidisciplinary specialist across content strategy, social media, client relations,
              and executive support — combining creativity with structure to move brands and leaders forward.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Start a conversation
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button secondary" href="#services">
                View services
              </a>
              <a className="button ghost" href={resumeHref} download>
                <Download size={18} aria-hidden="true" />
                Download resume
              </a>
            </div>
          </div>
          <HeroVisual />
        </section>

        <Services />
        <Experience />
        <WorkStyle />
        <Daybook />
        <Process />
        <CaseNotes />
        <Toolkit />
        <CommunicationSamples />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
