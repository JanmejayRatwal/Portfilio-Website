import Navbar from "./components/Navbar";
import TypingText from "./components/TypingText";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0014] text-white">
      <Navbar />


      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 md:pt-0"
      >
        {/* Background glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[140px]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute left-[15%] top-[30%] h-40 w-40 rounded-full bg-fuchsia-600/10 blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl text-center fade-up">

          {/* Profile mark */}
          <div className="mb-10 flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl bg-purple-600/30 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-purple-400/20 bg-[#170027] shadow-[0_0_50px_rgba(147,51,234,0.25)]">
                <span className="text-3xl font-semibold tracking-[0.15em] text-white">
                  JR
                </span>
              </div>
            </div>
          </div>

          {/* Typing role */}
          <TypingText />

          {/* Main heading */}
          <h1 className="fade-up fade-up-delay-1 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Janmejay.
            </span>
          </h1>

          {/* Description */}
          <p className="fade-up fade-up-delay-2 mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/50 sm:text-xl">
            I build intelligent developer tools, backend systems and
            automation that solve real-world problems.
          </p>

          {/* Actions */}
          <div className="fade-up fade-up-delay-3 mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-purple-600 px-7 py-3.5 text-sm font-medium shadow-[0_0_30px_rgba(147,51,234,0.2)] transition hover:-translate-y-0.5 hover:bg-purple-500"
            >
              View my work
            </a>

            <a
              href="https://github.com/JanmejayRatwal"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/70 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
            >
              GitHub ↗
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex justify-center">
            <a
              href="#work"
              className="flex flex-col items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/20 transition hover:text-white/40"
            >
              <span>Scroll</span>
              <span className="h-8 w-px bg-white/15" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="relative mx-auto max-w-6xl px-6 py-32"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"
          aria-hidden="true"
        />
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-300">
              Selected Work
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Things I've built.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/35 md:text-right">
            Projects where software engineering, automation and AI
            come together to solve practical problems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Projects will go here */}
          <div className="group md:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-10 transition duration-500 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.05] hover:shadow-[0_20px_80px_rgba(88,28,135,0.15)]">
            <div className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-[#08000f]">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />

                <span className="ml-3 text-xs text-white/25">
                  repopatcher — repository analysis
                </span>
              </div>

              <div className="grid min-h-56 md:grid-cols-[1fr_auto_1fr]">
                {/* Repository */}
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Repository
                  </p>

                  <div className="mt-5 space-y-3 font-mono text-sm">
                    <p className="text-white/50">
                      <span className="text-purple-400">›</span> src/
                    </p>

                    <p className="pl-5 text-white/40">
                      <span className="text-purple-400">›</span> api.py
                    </p>

                    <p className="pl-5 text-white/40">
                      <span className="text-purple-400">›</span> utils.py
                    </p>

                    <p className="pl-5 text-red-300/70">
                      ✕ error detected
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden items-center justify-center px-4 md:flex">
                  <div className="text-2xl text-purple-400/70">→</div>
                </div>

                {/* AI analysis */}
                <div className="border-t border-white/10 p-6 md:border-l md:border-t-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    AI Analysis
                  </p>

                  <div className="mt-5 space-y-3 font-mono text-sm">
                    <p className="text-white/40">
                      analyzing failure...
                    </p>

                    <p className="text-purple-300/70">
                      ✓ root cause identified
                    </p>

                    <p className="text-green-300/70">
                      ✓ patch generated
                    </p>

                    <p className="text-white/30">
                      ready to verify
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8 flex items-start justify-between">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="text-sm uppercase tracking-[0.3em] text-purple-300">
                  Featured Project
                </span>

                <span className="rounded-full border border-amber-400/20 bg-amber-400/5 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-amber-300/80">
                  Currently in development
                </span>
              </div>

              {/*} <a
                href="https://github.com/JanmejayRatwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 transition hover:text-white"
              >
                GitHub ↗
              </a> */}
            </div>

            <h3 className="text-3xl font-semibold sm:text-4xl">
              RepoPatcher
            </h3>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/50">
              An AI-powered developer tool that detects errors in GitHub
              repositories, analyzes failures and assists in automatically
              diagnosing and repairing broken code.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm text-white/35">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400/70" />
              <span>
                Public release coming soon
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Python
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                LLMs
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Automation
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                GitHub
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/5 pt-6">
              <span className="text-xs text-white/40">
                Repository Analysis
              </span>

              <span className="text-white/20">•</span>

              <span className="text-xs text-white/40">
                Error Detection
              </span>

              <span className="text-white/20">•</span>

              <span className="text-xs text-white/40">
                Automated Repair
              </span>
            </div>
          </div>
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.05]">
            <div className="mb-8 flex items-start justify-between">
              <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                Backend / Automation
              </span>

              <div className="flex gap-4">
                <a
                  href="https://github.com/JanmejayRatwal/Candidate-Ranker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://lnkd.in/p/drs_iyFG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  Demo ↗
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-semibold">
              Candidate Ranker
            </h3>

            <div className="mb-8 flex h-36 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <div className="flex items-end gap-2">
                <div className="h-10 w-8 rounded-t bg-purple-400/20" />
                <div className="h-16 w-8 rounded-t bg-purple-400/30" />
                <div className="h-24 w-8 rounded-t bg-purple-400/50" />
                <div className="h-20 w-8 rounded-t bg-purple-400/35" />
                <div className="h-28 w-8 rounded-t bg-purple-400/60" />
              </div>
            </div>

            <p className="mt-4 leading-7 text-white/50">
              A candidate ranking system built to efficiently process and
              evaluate candidate data using multiprocessing and parallel
              execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Python
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Multiprocessing
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Parallel Processing
              </span>
            </div>
          </div>
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.05]">
            <div className="mb-8 flex items-start justify-between">
              <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                Machine Learning
              </span>

              <a
                href="https://github.com/JanmejayRatwal/Email-Spam-Detection"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 transition hover:text-white"
              >
                GitHub ↗
              </a>
            </div>

            <h3 className="text-2xl font-semibold">
              Spam Email Detection
            </h3>

            <div className="mb-8 flex h-36 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <div className="w-full max-w-xs px-6 font-mono text-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-white/30">EMAIL</span>
                  <span className="text-white/30">CLASSIFICATION</span>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-white/40">message_01</span>
                  <span className="text-red-300/60">SPAM</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-white/40">message_02</span>
                  <span className="text-green-300/60">LEGIT</span>
                </div>
              </div>
            </div>

            <p className="mt-4 leading-7 text-white/50">
              A machine learning system that classifies emails as spam or
              legitimate using text-based features and supervised learning
              techniques.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Python
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Scikit-learn
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                NLP
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Machine Learning
              </span>
            </div>

          </div>
          <div className="group md:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-10 transition duration-500 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.05] hover:shadow-[0_20px_80px_rgba(88,28,135,0.15)]">

            {/* Project Visual */}
            <div className="mb-8 grid h-56 grid-cols-2 gap-2 overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-2">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/projects/portfolio-hero.png"
                  alt="Portfolio Website hero"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="overflow-hidden rounded-xl">
                <img
                  src="/projects/portfolio-about.png"
                  alt="Portfolio Website about section"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/*<h3 className="text-2xl font-semibold">
              Portfolio Website
            </h3>*/}

            {/* Project Category */}
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                Web Development
              </span>

              <div className="flex gap-4">
                <a
                  href="https://janmejayr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  Live ↗
                </a>

                <a
                  href="https://github.com/JanmejayRatwal/Portfilio-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Project Name */}
            <h3 className="text-2xl font-semibold">
              Portfolio Website
            </h3>

            {/* Description */}
            <p className="mt-4 leading-7 text-white/50">
              A production-ready developer portfolio built with Next.js,
              TypeScript, and Tailwind CSS to showcase my software engineering
              projects and technical work.
            </p>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Next.js
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                TypeScript
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Tailwind CSS
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Vercel
              </span>
            </div>

          </div>
        </div>
      </section>
      <section
        id="freelance"
        className="relative mx-auto max-w-6xl px-6 py-24"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/15 to-transparent"
          aria-hidden="true"
        />

        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-300">
            Freelance Work
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Built for real clients.
          </h2>

          <p className="mt-5 max-w-2xl text-white/50">
            Websites and software I've built for clients, businesses and
            real-world use cases.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Yacht Website */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.05]">
            <div className="mb-8 flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-purple-300/70">
                  Client Prototype
                </p>

                <p className="mt-3 text-2xl font-semibold text-white/80">
                  Yacht Website
                </p>

                <p className="mt-2 text-sm text-white/30">
                  Private project
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-amber-400/20 bg-amber-400/5 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-amber-300/80">
                Under Development
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-white/40">
                Private
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold">
              Yacht Website — Prototype
            </h3>

            <p className="mt-4 leading-7 text-white/50">
              A website prototype developed for a yacht charter business,
              currently being refined for potential client deployment.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                HTML / CSS
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                JavaScript
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Web Design
              </span>
            </div>

            <div className="mt-7 border-t border-white/5 pt-5 text-sm text-white/30">
              Demo coming soon
            </div>
          </div>

          {/* Car Rental Website */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.05]">
            <div className="mb-8 flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-purple-300/70">
                  Client Prototype
                </p>

                <p className="mt-3 text-2xl font-semibold text-white/80">
                  Car Rental Website
                </p>

                <p className="mt-2 text-sm text-white/30">
                  Private project
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-amber-400/20 bg-amber-400/5 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-amber-300/80">
                Prototype
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-white/40">
                Private
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold">
              Car Rental Website — Boiler
            </h3>

            <p className="mt-4 leading-7 text-white/50">
              A website boilerplate developed as a foundation for a car rental
              business, with the implementation kept private for client use.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                HTML / CSS
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                JavaScript
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Web Development
              </span>
            </div>

            <div className="mt-7 border-t border-white/5 pt-5 text-sm text-white/30">
              Demo coming soon
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className=" relative mx-auto max-w-6xl px-6 py-24"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/15 to-transparent"
          aria-hidden="true"
        />
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-300">
              Tech Stack
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Tools I work with.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition hover:border-purple-400/30 hover:text-white">
              Python
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition hover:border-purple-400/30 hover:text-white">
              C
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition hover:border-purple-400/30 hover:text-white">
              C++
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition hover:border-purple-400/30 hover:text-white">
              JavaScript
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition hover:border-purple-400/30 hover:text-white">
              HTML / CSS
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition hover:border-purple-400/30 hover:text-white">
              Git
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition hover:border-purple-400/30 hover:text-white">
              GitHub
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition hover:border-purple-400/30 hover:text-white">
              Scikit-learn
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition hover:border-purple-400/30 hover:text-white">
              Machine Learning
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition hover:border-purple-400/30 hover:text-white">
              NLP
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition hover:border-purple-400/30 hover:text-white">
              Automation
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition hover:border-purple-400/30 hover:text-white">
              LLMs
            </span>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="relative mx-auto max-w-6xl px-6 py-32"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/15 to-transparent"
          aria-hidden="true"
        />
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr] md:items-start">

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-300">
              About Me
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Building things that actually work.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/50">
            <p>
              I'm Janmejay, a software developer focused on building
              backend systems, developer tools and intelligent automation.
            </p>

            <p>
              I enjoy working at the intersection of software engineering
              and AI/ML — turning complex problems into practical,
              maintainable solutions.
            </p>

            <p>
              My projects range from AI-assisted developer tooling and
              automated repository analysis to parallel data processing
              and machine learning systems.
            </p>
          </div>

        </div>
      </section>
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 pb-20 pt-16"
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 text-center sm:px-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-300">
            Get In Touch
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Let's build something.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/50">
            Whether it's a developer tool, backend system or an interesting
            technical project, I'm always open to building something useful.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:janmejaygratwal@gmail.com"
              className="rounded-full bg-purple-600 px-6 py-3 text-sm font-medium transition hover:bg-purple-500"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/janmejayratwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/70 transition hover:border-white/30 hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/30 sm:flex-row">
          <p>© 2026 Janmejay Ratwal</p>

          <div className="flex gap-6">
            <a
              href="https://github.com/JanmejayRatwal"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/janmejayratwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </section>

    </main >
  );
}