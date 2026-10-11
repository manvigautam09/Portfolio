import Link from "next/link";
import { experience, profile, projects, stack } from "@/data/profile";
import { SectionNav } from "@/components/SectionNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Thumb } from "@/components/Thumb";
import { CopyEmail } from "@/components/CopyEmail";
import { DownloadIcon, ExternalIcon, MailIcon, socialIcon } from "@/components/Icons";

function Chips({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul className="chips" aria-label={label}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function NewTab({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="shell">
      <header className="side">
        <div>
          <h1 className="name">
            <Link href="/">{profile.name}</Link>
          </h1>
          <p className="role">{profile.title}</p>
          <p className="tagline">{profile.tagline}</p>
          <p className="now">
            <strong>Now:</strong> building a GPU capacity marketplace at Thoughtworks. Open to senior
            full-stack roles in Bengaluru or remote.
          </p>
          <SectionNav />
        </div>
        <div className="side-foot">
          <ul className="socials" aria-label="Profiles elsewhere">
            {profile.socials.map((s) => {
              const Icon = socialIcon[s.label];
              return (
                <li key={s.label}>
                  <a className="icon-link" href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}>
                    <Icon />
                    <span className="visually-hidden">{s.label} (opens in a new tab)</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </header>

      <main id="content" className="main" tabIndex={-1}>
        <section className="section about" aria-labelledby="about-title">
          <h2 id="about-title" className="section-title visually-hidden">
            About
          </h2>
          {profile.about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </section>

        <section id="experience" className="section" aria-labelledby="experience-title">
          <h2 id="experience-title" className="section-title">
            Experience
          </h2>
          <ol className="list">
            {experience.map((job) => (
              <li key={job.company} className="entry">
                <p className="entry-period">{job.period}</p>
                <div>
                  <h3>
                    {job.href ? <NewTab href={job.href}>{job.company}</NewTab> : job.company}
                    <span className="visually-hidden">, {job.location}</span>
                  </h3>
                  <ul className="roles">
                    {job.roles.map((r) => (
                      <li key={r.title}>
                        <strong>{r.title}</strong>
                        {job.roles.length > 1 && <span>, {r.period}</span>}
                      </li>
                    ))}
                  </ul>
                  <p>{job.summary}</p>
                  <ul className="highlights">
                    {job.highlights.map((h) => (
                      <li key={h.slice(0, 32)}>{h}</li>
                    ))}
                  </ul>
                  <Chips items={job.tech} label={`Technologies used at ${job.company}`} />
                </div>
              </li>
            ))}
          </ol>
          <a className="more-link" href={profile.resume} download>
            Download résumé (PDF)
          </a>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <h2 id="projects-title" className="section-title">
            Projects
          </h2>
          <ul className="list">
            {featured.map((p) => (
              <li key={p.title} className="project">
                <Thumb kind={p.thumb} />
                <div>
                  <h3>{p.link ? <NewTab href={p.link.href}>{p.title}</NewTab> : p.title}</h3>
                  <p className="project-meta">
                    {p.madeAt}
                    {p.period && `, ${p.period}`}
                  </p>
                  <p>{p.summary}</p>
                  {p.role && (
                    <p className="project-role">
                      <strong>My part:</strong> {p.role}
                    </p>
                  )}
                  {p.link && (
                    <NewTab href={p.link.href} className="ext">
                      {p.link.label}
                      <ExternalIcon />
                    </NewTab>
                  )}
                  <Chips items={p.tech} label={`Built with`} />
                </div>
              </li>
            ))}
          </ul>
          <Link className="more-link" href="/archive">
            See all {projects.length} projects
          </Link>
        </section>

        <section id="stack" className="section" aria-labelledby="stack-title">
          <h2 id="stack-title" className="section-title">
            Tech stack
          </h2>
          {stack.map((g) => (
            <div key={g.group} className="stack-group">
              <h3>{g.group}</h3>
              <p>{g.note}</p>
              <Chips items={g.items} label={g.group} />
            </div>
          ))}
        </section>

        <section id="contact" className="section" aria-labelledby="contact-title">
          <h2 id="contact-title" className="section-title">
            Contact
          </h2>
          <p className="contact-lead">
            I&apos;m looking for my next senior full-stack role. If you&apos;re hiring, or want to talk
            about a product, my inbox is open.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <MailIcon />
              Email me
            </a>
            <CopyEmail email={profile.email} />
            <a className="btn btn-ghost" href={profile.resume} download>
              <DownloadIcon />
              Download résumé
            </a>
          </div>
          <ul className="contact-list">
            <li>
              <span>Email</span> <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            {profile.socials.map((s) => (
              <li key={s.label}>
                <span>{s.label}</span>{" "}
                <NewTab href={s.href}>{s.href.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "")}</NewTab>
              </li>
            ))}
            <li>
              <span>Based in</span> {profile.location}
            </li>
          </ul>
        </section>

        <footer className="footer">
          <p>
            Built with Next.js and deployed on Vercel. Set in Bricolage Grotesque and Atkinson
            Hyperlegible. Every colour meets WCAG AA contrast in both themes.
          </p>
        </footer>
      </main>
    </div>
  );
}
