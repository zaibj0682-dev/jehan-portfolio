"use client";
import { useState } from "react";
import PrimaryButton from "./ui/PrimaryButton";

type Status = "idle" | "loading" | "success" | "error";

const PROJECT_TYPES = [
  "Landing page",
  "Business website",
  "Online store",
  "Redesign or migration",
  "Care plan",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
    _gotcha: "",
  });

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (form._gotcha) return;
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL;
      if (!endpoint) throw new Error("Webhook not configured");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          projectType: form.projectType,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass = [
    "w-full rounded-[12px] px-4 py-3",
    "bg-[rgba(255,255,255,0.05)] border border-white/10",
    "text-body text-[14px] tracking-[-0.02em] leading-[1.5]",
    "placeholder:text-muted",
    "focus:outline-none focus:border-white/30",
    "transition-colors duration-300",
  ].join(" ");

  if (status === "success") {
    return (
      <div className="flex flex-col gap-3 py-8">
        <p className="text-heading text-h6">Message sent.</p>
        <p className="text-body">I&apos;ll reply within about an hour with a clear plan and timeline.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4" noValidate>
      {/* Honeypot — hidden from humans */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none h-0 w-0"
        value={form._gotcha}
        onChange={(e) => update("_gotcha", e.target.value)}
      />

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-caption text-muted">Name *</label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-caption text-muted">Email *</label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-type" className="text-caption text-muted">Project type</label>
        <select
          id="contact-type"
          className={inputClass + " appearance-none cursor-pointer"}
          value={form.projectType}
          onChange={(e) => update("projectType", e.target.value)}
        >
          <option value="">Select a type…</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-caption text-muted">Message *</label>
        <textarea
          id="contact-message"
          required
          rows={5}
          placeholder="Tell me about your project…"
          className={inputClass + " resize-none"}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </div>

      {status === "error" && (
        <p className="text-[14px] text-red-400">Something went wrong. Please try again or email me directly.</p>
      )}

      <PrimaryButton type="submit" disabled={status === "loading"} className="self-start">
        {status === "loading" ? "Sending…" : "Send message"}
      </PrimaryButton>
    </form>
  );
}
