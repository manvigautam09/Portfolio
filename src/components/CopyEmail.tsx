"use client";

import { useState } from "react";
import { CopyIcon } from "./Icons";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email address copied.");
    } catch {
      setStatus(`Copying isn't available here. The address is ${email}.`);
    }
    window.setTimeout(() => setStatus(""), 4000);
  }

  return (
    <>
      <button type="button" className="btn btn-ghost" onClick={copy}>
        <CopyIcon />
        {status === "Email address copied." ? "Copied" : "Copy email address"}
      </button>
      <p role="status" className={status.startsWith("Copying") ? "copy-note" : "visually-hidden"}>
        {status}
      </p>
    </>
  );
}
