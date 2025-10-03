import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  hp: string; // honeypot
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    hp: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.hp) return; // honeypot filled -> spam
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/movkwppw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", hp: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* honeypot field */}
        <input
          name="hp"
          value={form.hp}
          onChange={(e) =>
            setForm((s) => ({ ...s, hp: (e.target as HTMLInputElement).value }))
          }
          tabIndex={-1}
          autoComplete="off"
          style={{ display: "none" }}
        />

        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-zinc-900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-zinc-900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            className="mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-zinc-900"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-4 py-2 bg-white text-zinc-900 border border-zinc-900 rounded-md hover:bg-zinc-50 transition disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === "success" && (
            <div className="text-sm text-green-600">Thanks — message sent!</div>
          )}
          {status === "error" && (
            <div className="text-sm text-red-600">
              Something went wrong. Try again later.
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
