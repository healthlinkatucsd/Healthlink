import type { Metadata } from "next";
import Link from "next/link";
import PastHackathonGallery from "../PastHackathonGallery";

export const metadata: Metadata = {
  title: "Hackathon 2025 Recap | HealthLink UCSD",
  description: "Photos, winning teams, and community moments from the 2025 HealthLink Life Sciences Hackathon.",
};

export default function Hackathon2025Page() {
  return <main className="min-h-screen bg-gradient-to-b from-[#071225] via-[#0a1b35] to-[#102647] text-white">
    <section className="relative overflow-hidden bg-cover bg-center px-6 pb-20 pt-36 text-center" style={{ backgroundImage: "url('/hackathon/last-year/01.png')" }}>
      <div className="absolute inset-0 bg-black/70" /><div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#071225]" />
      <div className="relative mx-auto max-w-4xl space-y-6"><Link href="/hackathon" className="text-sm text-blue-200 underline hover:text-white">← All hackathons</Link><p className="text-sm uppercase tracking-[0.25em] text-blue-300">2025 recap</p><h1 className="text-5xl font-extrabold leading-tight sm:text-7xl">HealthLink Life Sciences Hackathon</h1><p className="mx-auto max-w-2xl text-xl text-blue-100">Look back at the teams, ideas, and community that came together at The Basement.</p></div>
    </section>
    <div className="mx-auto max-w-6xl space-y-12 px-6 pb-20"><section aria-labelledby="photos-heading" className="space-y-6"><h2 id="photos-heading" className="text-3xl font-bold text-blue-200">2025 in photos</h2><p className="text-neutral-300">Featuring first-place team PATH, second-place Exhale Biosciences, third-place BlurBS, and track award winners Symmyo, Take 2, and Clarity AI.</p><PastHackathonGallery /></section><nav aria-label="Explore hackathons" className="flex flex-wrap gap-4"><Link href="/hackathon" className="rounded-full border border-white/25 px-6 py-3 font-semibold hover:bg-white/10">All hackathons</Link><Link href="/hackathon/2026" className="rounded-full bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-400">View 2026 recap →</Link></nav></div>
  </main>;
}
