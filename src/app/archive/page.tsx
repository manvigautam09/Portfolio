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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link className="back" href="/#projects">
          Back to Manvi Sharma
        </Link>
        <ThemeToggle />
      </div>
      <h1>All projects</h1>
      <p>Client platforms, products I led, and things I built to learn.</p>

      <div className="table-wrap">
        <table className="table">
          <caption className="visually-hidden">All projects, with where each was made and its technologies</caption>
          <thead>
            <tr>
              <th scope="col">Project</th>
              <th scope="col">Made at</th>
              <th scope="col" className="hide-sm">
                Built with
              </th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.title}>
                <td className="title">
                  {p.title}
                  <span className="desc">{p.summary}</span>
                </td>
                <td>{p.madeAt}</td>
                <td className="hide-sm">
                  <ul className="chips" aria-label="Built with">
                    {p.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </td>
                <td>
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
