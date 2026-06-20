import { useState } from "react";
import {
  ArrowRight,
  AtSign,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  ExternalLink,
  Headphones,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles
} from "lucide-react";

const contactEmail = "Favourgabby214@gmail.com";
const contactPhone = "+2349032427242";
const displayPhone = "+234 903 242 7242";
const linkedInUrl = "http://linkedin.com/in/favouruchegabriel";
const resumeHref = "/assets/SMM - Favour Uche-Gabriel.pdf";
const photoSrc = "/assets/pic.jpeg";

const services = [
  {
    icon: CalendarDays,
    title: "Content calendars",
    text: "Weekly plans, caption drafts, publishing checklists, and timing notes for consistent brand activity."
  },
  {
    icon: MessageCircle,
    title: "Community replies",
    text: "Comment moderation, DM triage, friendly answers, and escalation notes for issues that need a manager."
  },
  {
    icon: Headphones,
    title: "Customer care",
    text: "Order updates, complaint handling, follow-up messages, and scripts that keep conversations clear."
  },
  {
    icon: BarChart3,
    title: "Performance reports",
    text: "Simple campaign summaries with what worked, what changed, and what should happen next."
  }
];

const experienceItems = [
  {
    company: "Coxatech Digital Agency",
    role: "Social Media Manager",
    date: "2024 - Present",
    points: [
      "Develops social media campaigns that improved client engagement by 60% within three months.",
      "Creates posts, short videos, and ad copy tailored to each audience.",
      "Works with sales teams on persuasive campaign messaging for leads and conversion."
    ]
  },
  {
    company: "African Origins Network",
    role: "Social Media Marketer & Content Writer",
    date: "Mar - Aug 2024",
    points: [
      "Wrote SEO-focused blog posts, articles, and breaking-news updates that drove traffic.",
      "Managed social pages and promoted digital stories to increase online visibility.",
      "Partnered with editors and designers to keep story presentation clear and consistent."
    ]
  },
  {
    company: "GlambyBaseBeauty",
    role: "Content Strategist",
    date: "Jan - Dec 2024",
    points: [
      "Planned beauty content ideas, testimonials, transformations, and campaign themes.",
      "Built monthly content calendars around visibility, engagement, and customer trust.",
      "Collaborated with the creative team on trend-aware social media content."
    ]
  }
];

const caseNotes = [
  {
    title: "Launch week support",
    meta: "Content planning and inbox cover",
    text: "A seven-day posting rhythm, prepared product answer templates, and customer questions grouped by priority."
  },
  {
    title: "Customer reply library",
    meta: "Voice guide and response scripts",
    text: "Repeated questions turned into saved replies that still sound human, with escalation notes for pricing, delivery, and refunds."
  },
  {
    title: "Monthly page review",
    meta: "Reporting and next actions",
    text: "A practical review of post formats, audience questions, and message patterns to guide the next content focus."
  }
];

const responseExamples = [
  {
    prompt: "A customer asks for a delivery update.",
    reply: "Hi Ada, thanks for checking in. Your order is already with dispatch, and I will confirm the delivery window with you before 4pm today."
  },
  {
    prompt: "A follower wants product details before buying.",
    reply: "Yes, this is available. The medium size fits 10 to 12 items comfortably. I can also send you the color options if you want to compare before ordering."
  },
  {
    prompt: "A complaint needs a calm handoff.",
    reply: "I am sorry this happened. I have shared the order number with the team lead and will stay on this thread until we have a clear next step for you."
  }
];

const daybookItems = [
  "Morning inbox sweep",
  "Caption and asset check",
  "Comment moderation",
  "Customer issue handoff",
  "End-of-day notes"
];

const processSteps = [
  "Audit the current pages, inbox flow, saved replies, and brand voice.",
  "Plan content and customer response priorities around the team's real capacity.",
  "Publish, reply, document repeated questions, and flag urgent issues early.",
  "Report what changed, what customers asked for, and where the next effort should go."
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
        <a href="#work">Work style</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" role="img" aria-label="Campaign planning and customer-care dashboard preview">
      <div className="visual-topline">
        <span className="pulse-dot" aria-hidden="true" />
        <span>Live care desk</span>
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
            <p>New product drop: caption ready, replies ready, team briefed.</p>
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
          {["Mon: Tips", "Wed: Reel", "Fri: Launch", "Sat: Replies"].map((item) => (
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
          {["Delivery update", "Size question", "Thank-you note"].map((item, index) => (
            <div className="message-item" key={item}>
              <span className="message-avatar">{index + 1}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="chart-preview">
          <div className="preview-heading">
            <BarChart3 size={18} aria-hidden="true" />
            <span>Response trend</span>
          </div>
          <svg viewBox="0 0 210 86" role="img" aria-label="Rising response activity chart">
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
        <h2>Reliable content flow and careful customer conversations.</h2>
        <p>
          Favour supports the public side of a brand and the private messages behind it:
          posts, comments, DMs, response notes, and the small details that shape trust.
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
          <p>Social Media Marketer | Content Strategist | Digital Storyteller</p>
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
        <h2>Hands-on social media work across tech, media, and beauty.</h2>
        <p>
          Her experience is focused on building content plans, writing clear copy,
          managing brand pages, and keeping campaigns organized enough to convert attention into action.
        </p>

        <div className="experience-list">
          {experienceItems.map((item) => (
            <article className="experience-item" key={item.company}>
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
        <h2 id="daybook-title">What gets checked before the page goes quiet.</h2>
        <p>
          The value is in the small passes: catching repeated questions, keeping comments tidy,
          making sure posts have context, and leaving useful notes for the business owner.
        </p>
      </div>

      <div className="daybook-board" aria-label="Daily social media and customer-care checklist">
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
          <h2>Organized enough for campaigns. Human enough for customers.</h2>
          <p>
            Social channels move fast, but the tone should not feel rushed. Favour keeps
            the page active, the inbox tidy, and the team aware of what customers are asking.
          </p>
        </div>

        <div className="standards">
          <div>
            <ShieldCheck size={24} aria-hidden="true" />
            <h3>Brand voice guardrails</h3>
            <p>Clear reply patterns for greetings, complaints, product questions, and follow-ups.</p>
          </div>
          <div>
            <Clock3 size={24} aria-hidden="true" />
            <h3>Prompt response rhythm</h3>
            <p>Inbox checks grouped around priority, urgency, and the kind of answer needed.</p>
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
        <h2>A clear operating loop for social media and customer care.</h2>
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
        <h2>Practical support for pages that need consistency and care.</h2>
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

function ResponseExamples() {
  return (
    <section className="response-section" aria-labelledby="response-title">
      <div className="section-copy">
        <p className="section-kicker">Reply samples</p>
        <h2 id="response-title">Customer care that sounds clear, not canned.</h2>
      </div>

      <div className="response-list">
        {responseExamples.map((example) => (
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
    const company = formData.get("company")?.toString().trim() || "a business page";
    const message = formData.get("message")?.toString().trim() || "I would like to discuss social media and customer-care support.";
    const params = new URLSearchParams({
      subject: `Portfolio inquiry from ${name}`,
      body: `Name: ${name}\nCompany or page: ${company}\n\n${message}`
    });

    setSent(true);
    window.location.href = `mailto:${contactEmail}?${params.toString()}`;
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <Sparkles size={28} aria-hidden="true" />
        <h2>Need a steady hand on your social pages?</h2>
        <p>
          Share the channel, customer-care need, or campaign you want support with.
          Favour can help turn scattered posts and messages into a manageable routine.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Company or page
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
        <a href="#work">Work style</a>
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
            <p className="hero-kicker">Social media and customer care</p>
            <h1 id="hero-title">Favour Uche-Gabriel keeps brands active, kind, and easy to reach.</h1>
            <p>
              She plans content, manages social conversations, supports customers, and
              turns everyday questions into a clearer brand experience.
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
        <ResponseExamples />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
