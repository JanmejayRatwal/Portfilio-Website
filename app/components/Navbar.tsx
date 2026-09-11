"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold tracking-[0.2em] text-white"
            >
              JR
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-7 text-sm text-white/50 sm:flex">
              <a href="#home" className="transition hover:text-white">
                Home
              </a>

              <a href="#work" className="transition hover:text-white">
                Work
              </a>

              <a
                href="#freelance"
                className="transition hover:text-white"
              >
                Freelance
              </a>

              <a
                href="#skills"
                className="transition hover:text-white"
              >
                Skills
              </a>

              <a href="#about" className="transition hover:text-white">
                About
              </a>

              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>

              <span className="h-4 w-px bg-white/10" />

              <a
                href="https://github.com/JanmejayRatwal"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/janmejayratwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/20 hover:text-white sm:hidden"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              <span className="text-lg">
                {open ? "×" : "☰"}
              </span>
            </button>
          </div>

          {/* Mobile navigation */}
          {open && (
            <div className="mt-4 border-t border-white/10 pt-4 sm:hidden">
              <div className="flex flex-col gap-1 text-sm text-white/60">
                <a
                  href="#home"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 transition hover:bg-white/5 hover:text-white"
                >
                  Home
                </a>

                <a
                  href="#work"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 transition hover:bg-white/5 hover:text-white"
                >
                  Work
                </a>

                <a
                  href="#freelance"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 transition hover:bg-white/5 hover:text-white"
                >
                  Freelance
                </a>

                <a
                  href="#skills"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 transition hover:bg-white/5 hover:text-white"
                >
                  Skills
                </a>
                <a
                  href="#about"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 transition hover:bg-white/5 hover:text-white"
                >
                  About
                </a>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 transition hover:bg-white/5 hover:text-white"
                >
                  Contact
                </a>

                <div className="my-2 h-px bg-white/10" />

                <a
                  href="https://github.com/JanmejayRatwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-3 py-2.5 transition hover:bg-white/5 hover:text-white"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/janmejayratwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-3 py-2.5 transition hover:bg-white/5 hover:text-white"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}