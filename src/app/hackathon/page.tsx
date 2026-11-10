import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { judges, winners } from "./2026/recap";

export const metadata: Metadata = {
  title: "Hackathon | HealthLink UCSD",
  description: "Explore HealthLink's annual Life Sciences Hackathon at UC San Diego, including the latest recap and past events.",
};
const button = "inline-block rounded-full bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-400";
const editions = [
  { year: 2026, photo: "/hackathon/2026/group.jpg", description: "Three days at The Basement. Four tracks, eight judges, and five award-winning teams.", alt: "The 2026 HealthLink hackathon community" },
  { year: 2025, photo: "/hackathon/last-year/01.png", description: "Look back at the community, winning teams, and moments from our 2025 hackathon.", alt: "Participants at the 2025 HealthLink hackathon" },
];

export default function HackathonPage() {
  return <main className="min-h-screen bg-gradient-to-b from-[#071225] via-[#0a1b35] to-[#102647] text-white">
    <section className="relative overflow-hidden bg-cover bg-center px-6 pb-20 pt-36 text-center" style={{ backgroundImage: "url('/home/hero_bg_large.png')" }}>
      <div className="absolute inset-0 bg-black/65" /><div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#071225]" />
      <div className="relative mx-auto max-w-4xl space-y-6">
        <p className="text-sm uppercase tracking-[0.25em] text-blue-300">HealthLink UCSD / Our annual hackathon</p>
        <h1 className="text-5xl font-extrabold leading-tight sm:text-7xl">Build something that moves healthcare forward.</h1>
        <p className="text-xl text-blue-100 sm:text-2xl">HealthLink Life Sciences Hackathon</p>
        <p className="mx-auto max-w-2xl text-neutral-300">Every year, we bring our community together at UC San Diego to explore life sciences challenges, build prototypes, and share ideas for the future of health and technology.</p>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/hackathon/2026" className={button}>View 2026 recap</Link><a href="#past-hackathons" className="rounded-full border border-white/25 px-6 py-3 font-semibold hover:bg-white/10">Explore past hackathons</a></div>
      </div>
    </section>
    <div className="mx-auto max-w-6xl space-y-20 px-6 pb-20">
      <section aria-labelledby="latest-heading" className="overflow-hidden rounded-3xl border border-blue-500/30 bg-white/5">
        <div className="grid md:grid-cols-2">
          <Link href="/hackathon/2026" aria-label="View the 2026 hackathon recap" className="relative block min-h-64"><Image src="/hackathon/2026/group.jpg" alt="The HealthLink hackathon community gathered at The Basement in 2026" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></Link>
          <div className="space-y-5 p-8 sm:p-10"><p className="text-xs uppercase tracking-[0.2em] text-blue-300">Latest edition / October 2–4, 2026</p><h2 id="latest-heading" className="text-3xl font-extrabold sm:text-4xl">A weekend of ideas brought to life.</h2><p className="text-neutral-300">At The Basement, teams built and pitched working prototypes across four tracks, from clinical diagnostics to personalized medicine.</p><p className="text-blue-200">3 days · 4 tracks · {judges.length} judges · {winners.length} awards</p><p className="text-sm text-neutral-300">Meet Lumen Colonoscopy AI, Clinically Speaking, Advoc8, SoleMate, and audience favorite Pleural Sight—and explore the judges, schedule, and photos.</p><Link href="/hackathon/2026" className={button}>Explore the 2026 recap</Link></div>
        </div>
      </section>
      <section id="past-hackathons" aria-labelledby="archive-heading" className="scroll-mt-28 space-y-8">
        <div><p className="text-xs uppercase tracking-[0.2em] text-blue-300">The archive</p><h2 id="archive-heading" className="mt-3 text-4xl font-extrabold">Past hackathons</h2><p className="mt-4 text-neutral-300">A look back at each year&apos;s ideas, people, and achievements.</p></div>
        <div className="grid gap-6 sm:grid-cols-2">{editions.map(edition => <Link key={edition.year} href={`/hackathon/${edition.year}`} className="group overflow-hidden rounded-3xl border border-blue-500/30 bg-white/5 transition hover:border-blue-300/70 hover:bg-white/10"><div className="relative aspect-video"><Image src={edition.photo} alt={edition.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" /></div><div className="space-y-3 p-6"><h3 className="text-3xl font-bold">{edition.year}</h3><p className="text-neutral-300">{edition.description}</p><p className="font-semibold text-blue-300 group-hover:text-blue-200">View {edition.year} recap →</p></div></Link>)}</div>
      </section>
      <section aria-labelledby="next-heading" className="rounded-3xl border border-blue-400/40 bg-blue-500/10 p-8 text-center sm:p-12"><p className="text-xs uppercase tracking-[0.2em] text-blue-300">What&apos;s next</p><h2 id="next-heading" className="mt-3 text-3xl font-bold">The next chapter starts here.</h2><p className="mx-auto mt-4 max-w-2xl text-neutral-300">Details about our next hackathon will be announced here. Until then, explore what our community has built.</p><p className="mt-5 text-sm text-neutral-300">Questions? <a className="underline hover:text-blue-200" href="mailto:healthlinkatucsd@gmail.com">healthlinkatucsd@gmail.com</a></p></section>
    </div>
  </main>;
}
