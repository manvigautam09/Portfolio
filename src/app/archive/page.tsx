import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/profile";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "All projects",
  description: "Every project Manvi Sharma has worked on, from client platforms to side projects.",
};

export default function Archive() {
  return (
    <main id="content" className="archive" tabIndex={-1}>
      <div className="archive-top">
        <Link className="back" href="/#projects">
          Back to Manvi Sharma
        </Link>
        <ThemeToggle />
      </div>
      <h1>All projects</h1>
      <p>Client platforms, products I led, and things I built to learn.</p>

      <div className="table-wrap">
        <table className="table" role="table">
          <caption className="visually-hidden">All projects, with where each was made and its technologies</caption>
          <thead role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader">Project</th>
              <th scope="col" role="columnheader">Made at</th>
              <th scope="col" role="columnheader">Built with</th>
              <th scope="col" role="columnheader">Link</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {projects.map((p) => (
              <tr key={p.title} role="row">
                <td className="title" role="cell">
                  {p.title}
                  <span className="desc">{p.summary}</span>
                </td>
                <td role="cell" data-label="Made at">{p.madeAt}</td>
                <td role="cell">
                  <ul className="chips" aria-label="Built with">
                    {p.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </td>
                <td role="cell" className={p.link ? undefined : "empty"}>
                  {p.link ? (
                    <a href={p.link.href} target="_blank" rel="noopener noreferrer">
                      {p.link.label}
                      <span className="visually-hidden"> for {p.title} (opens in a new tab)</span>
                    </a>
                  ) : (
                    <span className="visually-hidden">No public link</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
