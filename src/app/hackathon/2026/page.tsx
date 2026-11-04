import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhotoCarousel from "../PhotoCarousel";
import PartnerGraphic from "../PartnerGraphic";
import { gallery, judges, schedule, winners } from "./recap";

export const metadata: Metadata = { title: "Hackathon 2026 Recap | HealthLink UCSD", description: "Winners, judges, and photos from the HealthLink Life Sciences Hackathon, October 2-4, 2026 at The Basement, UC San Diego." };
const card = "rounded-3xl border border-blue-500/30 bg-white/5 p-6 shadow-lg shadow-blue-900/20";

const winnerSlides = winners.map(winner => ({
  src: winner.photo,
  eyebrow: winner.award,
  title: winner.team,
  detail: winner.tagline,
  alt: `${winner.team} team on stage with their prizes`,
  extra: <div className="grid gap-4 text-sm text-neutral-300 md:grid-cols-[2fr_1fr]">
    <p>{winner.description}</p>
    <dl className="space-y-2">
      <div><dt className="text-xs uppercase tracking-[0.18em] text-blue-300">Team</dt><dd>{winner.members.join(", ")}</dd></div>
      <div><dt className="text-xs uppercase tracking-[0.18em] text-blue-300">Prize</dt><dd>{winner.prize}</dd></div>
      <div><a className="underline hover:text-blue-200" href={winner.url} target="_blank" rel="noreferrer">View on Devpost</a></div>
    </dl>
  </div>,
}));

export default function HackathonRecapPage() {
  return <main className="min-h-screen bg-gradient-to-b from-[#071225] via-[#0a1b35] to-[#102647] text-white">
    <section className="relative overflow-hidden bg-cover bg-center px-6 pb-24 pt-36 text-center" style={{ backgroundImage: "url('/hackathon/2026/group.jpg')" }}>
      <div className="absolute inset-0 bg-black/70" /><div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#071225]" />
      <div className="relative mx-auto max-w-4xl space-y-6">
        <p className="text-sm uppercase tracking-[0.25em] text-blue-300">Recap / October 2-4, 2026 / The Basement, UC San Diego</p>
        <h1 className="text-5xl font-extrabold leading-tight sm:text-7xl">HealthLink Life Sciences Hackathon</h1>
        <p className="text-xl text-blue-100 sm:text-2xl">Innovating the Future of Health & Technology</p>
        <p className="mx-auto max-w-2xl text-neutral-300">Three days of building at The Basement: teams of three and four took on four tracks, from clinical diagnostics to personalized medicine, and pitched working prototypes to founders, investors, and UC San Diego leaders.</p>
        <div className="flex flex-wrap justify-center gap-3"><a href="#winners" className="inline-block rounded-full bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-400">Meet the winners</a><a href="#photos" className="rounded-full border border-white/25 px-6 py-3 font-semibold hover:bg-white/10">See the photos</a></div>
      </div>
    </section>
    <div className="mx-auto max-w-6xl space-y-20 px-6 pb-20">
      <section aria-label="By the numbers" className="grid gap-4 grid-cols-2 sm:grid-cols-4">
        {[["3", "days of building"], ["4", "tracks"], ["8", "judges"], ["5", "awards"]].map(([value, label]) => <div key={label} className={card + " text-center"}><p className="text-4xl font-extrabold text-blue-200">{value}</p><p className="mt-2 text-sm text-neutral-300">{label}</p></div>)}
      </section>
      <section id="winners" className="scroll-mt-28 space-y-6">
        <div><p className="text-xs uppercase tracking-[0.2em] text-blue-300">Winners</p><h2 className="mt-3 text-4xl font-extrabold">Five teams took home awards.</h2><p className="mt-4 text-neutral-300">One winner from each track, plus the audience favorite.</p></div>
        <PhotoCarousel slides={winnerSlides} label="Hackathon 2026 winners" />
      </section>
      <section id="judges" className="scroll-mt-28 space-y-8">
        <div><p className="text-xs uppercase tracking-[0.2em] text-blue-300">Speakers & judges</p><h2 className="mt-3 text-4xl font-extrabold">The people in the room.</h2><p className="mt-4 text-neutral-300">Our judges also led the fireside chat, lightning talks, and workshops that shaped the weekend.</p></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {judges.map(judge => <div key={judge.name} className={card}><div className="flex items-center gap-4"><Image src={judge.photo} alt={`Photo of ${judge.name}`} width={64} height={64} className="h-16 w-16 shrink-0 rounded-full border border-blue-300/30 object-cover" /><div><h3 className="text-lg font-bold">{judge.name}</h3><a className="text-sm text-blue-300 underline hover:text-blue-200" href={judge.linkedin} target="_blank" rel="noreferrer" aria-label={`${judge.name} on LinkedIn`}>LinkedIn</a></div></div><p className="mt-4 text-sm text-blue-200">{judge.role}</p>{judge.bio && <p className="mt-3 text-sm text-neutral-300">{judge.bio}</p>}</div>)}
        </div>
      </section>
      <section id="schedule" className="scroll-mt-28 space-y-8">
        <div><p className="text-xs uppercase tracking-[0.2em] text-blue-300">The weekend</p><h2 className="mt-3 text-4xl font-extrabold">From kickoff to awards.</h2></div>
        <div className="grid gap-4 md:grid-cols-3">
          {schedule.map(day => <div key={day.day} className={card}><h3 className="text-lg font-bold text-blue-200">{day.day}</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-300">{day.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}
        </div>
      </section>
      <section id="photos" className="scroll-mt-28 space-y-6"><h2 className="text-3xl font-medium text-blue-300">Photos</h2><PhotoCarousel slides={gallery} label="Hackathon 2026 photos" /></section>
      <section className="rounded-3xl border border-blue-500/40 bg-gradient-to-r from-blue-600/20 to-transparent p-8 sm:p-10"><p className="text-xs uppercase tracking-[0.2em] text-blue-300">Thank you</p><h2 className="mt-3 text-4xl font-extrabold">To the partners who made it happen.</h2><p className="my-5 max-w-2xl text-neutral-300">OpenSwarm, Harbor, CLD-9, Raisi, Agencity, Rho, and The Basement made this weekend possible.</p><PartnerGraphic /><div className="mt-6 flex flex-wrap gap-3"><Link href="/hackathon/sponsors" className="inline-block rounded-full bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-400">Sponsors & partners</Link><Link href="/hackathon" className="rounded-full border border-white/25 px-6 py-3 font-semibold hover:bg-white/10">Back to the hackathon</Link></div></section>
    </div>
  </main>;
}
