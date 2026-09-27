import {
  ArrowUpRight,
  Braces,
  ChevronDown,
  Database,
  Mail,
  Network,
  Sparkles,
  Terminal,
} from 'lucide-react'

const experience = [
  {
    period: '2026 — now',
    company: 'Magnus Investment Partners',
    role: 'AI Pipeline Engineer',
    description:
      'Designing autonomous agent loops and real-time data workflows that turn supply-chain telemetry into operational decisions.',
    tags: ['AWS Bedrock', 'LangChain', 'Vector search'],
  },
  {
    period: '2025 — 2026',
    company: 'Surmount Technologies',
    role: 'Artificial Intelligence Engineer',
    description:
      'Built DigiSteth, a production audio-classification pipeline for early heart and lung disease detection, reaching approximately 80% diagnostic accuracy.',
    tags: ['PyTorch', 'Azure', 'Playwright'],
  },
  {
    period: '2024 — 2026',
    company: 'MyEdMaster',
    role: 'Machine Learning Engineer',
    description:
      'Created an adaptive textbook platform that orchestrates multiple LLMs, compiles custom PDFs, and generates interactive math visuals.',
    tags: ['Python', 'Django', 'React'],
  },
  {
    period: '2023 — 2024',
    company: 'Metaphor Data',
    role: 'Machine Learning Engineer',
    description:
      'Developed Slack and Teams intelligence bots using generative AI, vector search, sentiment analysis, and institutional knowledge retrieval.',
    tags: ['MongoDB', 'Redshift', 'LLMs'],
  },
]

const skills = [
  ['01', 'Data engineering', 'SQL · Python · Spark · Airflow · ETL/ELT · Databricks'],
  ['02', 'AI systems', 'RAG · LLM orchestration · vector databases · prompt engineering'],
  ['03', 'Cloud & product', 'AWS · Azure · GCP · React · TypeScript · production APIs'],
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f3ee] text-[#151515] selection:bg-[#d6ff3f] selection:text-[#151515]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10" aria-label="Main navigation">
        <a href="#top" className="font-mono text-sm font-bold tracking-[-0.06em]">RS<span className="text-[#a6c900]">.</span></a>
        <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#696964] md:flex">
          <a className="transition-colors hover:text-[#151515]" href="#work">Selected work</a>
          <a className="transition-colors hover:text-[#151515]" href="#experience">Experience</a>
          <a className="transition-colors hover:text-[#151515]" href="#credentials">Credentials</a>
          <a className="transition-colors hover:text-[#151515]" href="#contact">Contact</a>
        </div>
        <a href="mailto:ronelsolomon@gmail.com" className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
          Let&apos;s talk <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </nav>

      <section id="top" className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1.4fr_0.6fr] lg:px-10 lg:pb-32 lg:pt-32">
        <div>
          <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#6e741f]"><span className="size-2 rounded-full bg-[#b4d900]" /> AI pipeline engineer / data engineer</p>
          <h1 className="max-w-5xl text-[clamp(3.8rem,9vw,9.25rem)] font-semibold leading-[0.86] tracking-[-0.085em]">I build the systems <span className="text-[#b4d900]">behind</span> intelligent products.</h1>
          <div className="mt-12 flex max-w-2xl flex-col gap-8 border-l border-[#d1d0c9] pl-5 text-lg leading-relaxed text-[#686863] sm:flex-row sm:gap-10">
            <p>I&apos;m Ronel Solomon — a data and AI engineer focused on making complex information useful, reliable, and ready for the real world.</p>
            <a href="#work" className="flex shrink-0 items-center gap-2 self-start border-b border-[#151515] pb-1 text-sm font-semibold text-[#151515]">Explore the work <ChevronDown className="size-4" /></a>
          </div>
        </div>
        <div className="relative flex min-h-[290px] items-end justify-end lg:pt-24">
          <div className="absolute right-4 top-0 size-52 rounded-full border border-[#d7d6ce] sm:size-64" />
          <div className="absolute right-20 top-16 size-36 rounded-full bg-[#d6ff3f] sm:size-44" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thomas_Walking-qiTedVbvsZvVqUSyKT2lRosKVQMd3s.gif" alt="Pixel-art character walking" className="absolute -bottom-7 right-0 z-20 size-24 object-contain sm:-bottom-9 sm:right-2 sm:size-32" />
          <div className="relative z-10 w-full max-w-xs bg-[#171817] p-6 text-[#f5f3ee] shadow-[14px_14px_0_#dadbd2]">
            <div className="mb-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[#b5b7ae]"><span>Currently thinking</span><Sparkles className="size-4 text-[#d6ff3f]" /></div>
            <p className="text-2xl leading-tight tracking-[-0.04em]">How can data move from a pipeline to a better decision?</p>
            <div className="mt-10 h-px bg-[#444640]" />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#b5b7ae]">Milpitas, California · UTC−07</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7d6ce] bg-[#eae9e2]" aria-label="Career highlights">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#d7d6ce] lg:grid-cols-4">
          {[['2+', 'years engineering'], ['80%', 'diagnostic accuracy'], ['500+', 'learners reached'], ['40%', 'less manual reporting']].map(([value, label]) => <div key={label} className="px-6 py-8 lg:px-10"><p className="text-4xl font-semibold tracking-[-0.07em]">{value}</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777770]">{label}</p></div>)}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#8a950f]">01 / Selected work</p><h2 className="max-w-xl text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">From messy inputs to clear outcomes.</h2></div><p className="max-w-xs text-sm leading-relaxed text-[#6b6b65]">A few examples of building at the intersection of data infrastructure, applied ML, and human usefulness.</p></div>
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="group flex min-h-[390px] flex-col justify-between bg-[#171817] p-7 text-[#f5f3ee] transition-transform hover:-translate-y-1 sm:p-10"><div className="flex items-start justify-between"><span className="flex size-12 items-center justify-center rounded-full bg-[#d6ff3f] text-[#171817]"><Network className="size-5" /></span><span className="font-mono text-xs text-[#a8aaa1]">01 / 03</span></div><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#d6ff3f]">Healthcare AI</p><h3 className="max-w-lg text-4xl font-semibold leading-none tracking-[-0.06em]">DigiSteth: listening for what&apos;s next.</h3><p className="mt-5 max-w-md text-sm leading-relaxed text-[#b5b7ae]">An end-to-end audio classification system for heart and lung disease detection, from signal preprocessing to real-time Azure inference.</p></div></article>
          <article className="group flex min-h-[390px] flex-col justify-between bg-[#d6ff3f] p-7 transition-transform hover:-translate-y-1 sm:p-10"><div className="flex items-start justify-between"><span className="flex size-12 items-center justify-center rounded-full border border-[#151515] text-[#151515]"><Braces className="size-5" /></span><span className="font-mono text-xs text-[#5d660e]">02 / 03</span></div><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#5d660e]">EdTech · Generative AI</p><h3 className="max-w-lg text-4xl font-semibold leading-none tracking-[-0.06em]">A textbook that writes itself.</h3><p className="mt-5 max-w-md text-sm leading-relaxed text-[#4f580e]">A multi-model platform generating personalized math lessons, custom PDFs, graphs, and interactive coordinate models.</p></div></article>
          <article className="group flex min-h-[300px] flex-col justify-between border border-[#d1d0c9] p-7 transition-colors hover:bg-white sm:p-10 lg:col-span-2 lg:flex-row lg:items-end"><div className="flex items-start gap-5"><span className="flex size-12 items-center justify-center rounded-full border border-[#d1d0c9]"><Database className="size-5" /></span><div><p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[#8a950f]">Infrastructure · Knowledge systems</p><h3 className="max-w-xl text-4xl font-semibold leading-none tracking-[-0.06em]">Making institutional knowledge findable.</h3></div></div><p className="mt-8 max-w-sm text-sm leading-relaxed text-[#6b6b65] lg:mt-0">Vector search, conversational datasets, and Slack / Teams bots that turn 1,000+ conversations into useful answers.</p></article>
        </div>
      </section>

      <section id="experience" className="scroll-mt-10 bg-[#171817] px-6 py-24 text-[#f5f3ee] lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#d6ff3f]">02 / Experience</p><h2 className="text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">The through line.</h2></div><p className="max-w-lg self-end text-lg leading-relaxed text-[#afb1a8]">Whether it&apos;s a supply chain, a classroom, or a clinical signal, the question stays the same: how do we create dependable systems around uncertainty?</p></div><div className="border-t border-[#3c3e3a]">{experience.map((item) => <article key={item.company} className="grid gap-4 border-b border-[#3c3e3a] py-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-10"><p className="font-mono text-xs uppercase tracking-[0.15em] text-[#8c8e86]">{item.period}</p><div className="grid gap-5 md:grid-cols-[0.6fr_1fr_0.7fr] md:gap-8"><div><h3 className="text-xl font-medium tracking-[-0.03em]">{item.company}</h3><p className="mt-1 text-sm text-[#d6ff3f]">{item.role}</p></div><p className="text-sm leading-relaxed text-[#afb1a8]">{item.description}</p><div className="flex flex-wrap content-start gap-2">{item.tags.map((tag) => <span key={tag} className="border border-[#484b45] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#afb1a8]">{tag}</span>)}</div></div></article>)}</div></div></section>

      <section id="credentials" className="border-t border-[#d7d6ce] bg-[#eae9e2] px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#8a950f]">03 / Credentials</p><h2 className="text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">Proof of practice.</h2><p className="mt-6 max-w-sm text-sm leading-relaxed text-[#6b6b65]">A graduate education in data science, plus a written reflection on the privacy, fairness, and accountability behind applied AI.</p></div><div className="grid gap-4 sm:grid-cols-2"><a href="/usf-ms-data-science-degree.pdf" target="_blank" rel="noreferrer" className="group flex min-h-52 flex-col justify-between border border-[#c8c7bf] bg-[#f5f3ee] p-6 transition-transform hover:-translate-y-1"><div className="flex items-start justify-between"><span className="font-mono text-xs uppercase tracking-[0.15em] text-[#8a950f]">Education</span><ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div><div><h3 className="text-2xl font-medium tracking-[-0.04em]">M.S. Data Science</h3><p className="mt-2 text-sm text-[#6b6b65]">University of San Francisco</p><p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8a950f]">View credential</p></div></a><a href="/final-paper-on-ethics.pdf" target="_blank" rel="noreferrer" className="group flex min-h-52 flex-col justify-between bg-[#171817] p-6 text-[#f5f3ee] transition-transform hover:-translate-y-1"><div className="flex items-start justify-between"><span className="font-mono text-xs uppercase tracking-[0.15em] text-[#d6ff3f]">Writing</span><ArrowUpRight className="size-4 text-[#d6ff3f] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div><div><h3 className="text-2xl font-medium tracking-[-0.04em]">Ethics in applied AI</h3><p className="mt-2 text-sm text-[#b5b7ae]">Privacy, fairness, and accountability in knowledge systems.</p><p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#d6ff3f]">Read paper</p></div></a></div></div></section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#8a950f]">04 / Toolkit</p><h2 className="text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">Good tools. Better questions.</h2></div><div className="border-t border-[#d1d0c9]">{skills.map(([number, title, detail]) => <div key={number} className="grid grid-cols-[42px_1fr] gap-5 border-b border-[#d1d0c9] py-7 sm:grid-cols-[70px_0.7fr_1fr] sm:gap-8"><p className="font-mono text-xs text-[#8a950f]">{number}</p><h3 className="text-2xl font-medium tracking-[-0.04em]">{title}</h3><p className="col-start-2 text-sm leading-relaxed text-[#72726b] sm:col-start-auto">{detail}</p></div>)}</div></section>

      <section id="contact" className="scroll-mt-10 bg-[#d6ff3f] px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-[#5d660e]">04 / Get in touch</p><h2 className="max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[0.86] tracking-[-0.09em]">Have a hard problem? Let&apos;s make it legible.</h2><div className="mt-12 flex flex-col justify-between gap-8 border-t border-[#a7c52f] pt-6 sm:flex-row sm:items-end"><a href="mailto:ronelsolomon@gmail.com" className="group flex items-center gap-3 text-xl font-medium tracking-[-0.03em]">ronelsolomon@gmail.com <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a><div className="flex gap-4"><a aria-label="LinkedIn" href="https://www.linkedin.com/in/ronel-solomon" className="flex size-10 items-center justify-center rounded-full border border-[#9ebd22] text-[10px] font-bold transition-colors hover:bg-[#151515] hover:text-[#d6ff3f]">in</a><a aria-label="GitHub" href="https://github.com/ronel-solomon" className="flex size-10 items-center justify-center rounded-full border border-[#9ebd22] text-[10px] font-bold transition-colors hover:bg-[#151515] hover:text-[#d6ff3f]">GH</a><a aria-label="Email" href="mailto:ronelsolomon@gmail.com" className="flex size-10 items-center justify-center rounded-full border border-[#9ebd22] transition-colors hover:bg-[#151515] hover:text-[#d6ff3f]"><Mail className="size-4" /></a></div></div></div></section>
      <footer className="flex flex-col justify-between gap-3 bg-[#171817] px-6 py-6 font-mono text-[10px] uppercase tracking-[0.15em] text-[#8c8e86] sm:flex-row lg:px-10"><span>© 2026 Ronel Solomon</span><span className="flex items-center gap-2"><Terminal className="size-3" /> Built with intent</span><span>MS Data Science · USF</span></footer>
    </main>
  )
}

export const dynamic = 'force-static'
