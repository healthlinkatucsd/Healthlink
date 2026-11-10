"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type Slide = { src: string; title: string; detail: string; alt: string; eyebrow?: string; extra?: ReactNode };

export default function PhotoCarousel({ slides: photos, label }: { slides: Slide[]; label: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const playing = !paused && !reducedMotion && visible;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    if (root.current) observer.observe(root.current);
    return () => { preference.removeEventListener("change", update); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex(current => (current + 1) % photos.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [playing, photos.length]);

  function go(next: number) {
    setPaused(true);
    setIndex((next + photos.length) % photos.length);
  }
  const control = "min-h-11 rounded-full border border-blue-300/30 px-4 py-2 text-sm text-blue-100 hover:bg-blue-400/10 focus-visible:outline-2 focus-visible:outline-blue-300";

  return <div ref={root} role="region" aria-roledescription="carousel" aria-label={label} className="overflow-hidden rounded-3xl border border-blue-500/30 bg-slate-950/50 shadow-xl shadow-blue-900/20"
    onFocusCapture={event => { if (!(event.target instanceof HTMLElement) || !event.target.hasAttribute("data-playback")) setPaused(true); }}
    onKeyDown={event => {
      if (event.key === "ArrowRight") { event.preventDefault(); go(index + 1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); go(index - 1); }
    }}>
    <div className="overflow-hidden" style={{ touchAction: "pan-y" }}
      onTouchStart={event => { touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
      onTouchCancel={() => { touch.current = null; }}
      onTouchEnd={event => {
        if (!touch.current) return;
        const dx = event.changedTouches[0].clientX - touch.current.x;
        const dy = event.changedTouches[0].clientY - touch.current.y;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(index + (dx < 0 ? 1 : -1));
        touch.current = null;
      }}>
      <div className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none" style={{ transform: `translateX(-${index * 100}%)` }}>
        {photos.map((photo, position) => <div key={photo.title} role="group" aria-roledescription="slide" aria-label={`${position + 1} of ${photos.length}: ${photo.title}`} aria-hidden={position !== index} className="relative h-[420px] w-full shrink-0 sm:h-[580px]">
          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 1100px" className="object-contain" loading={position < 2 ? "eager" : "lazy"} />
        </div>)}
      </div>
    </div>
    <div className="space-y-4 border-t border-blue-300/15 p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div aria-live={playing ? "off" : "polite"} aria-atomic="true">{photos[index].eyebrow && <p className="text-xs uppercase tracking-[0.18em] text-blue-300">{photos[index].eyebrow}</p>}<h3 className="text-xl font-semibold text-blue-200">{photos[index].title}</h3><p className="mt-1 text-sm text-neutral-300">{photos[index].detail}</p></div>
        <div className="flex items-center gap-2">
          <button type="button" className={control} onClick={() => go(index - 1)} aria-label="Previous photo">Previous</button>
          {!reducedMotion && <button type="button" data-playback className={control} onClick={() => setPaused(value => !value)} aria-label={paused ? "Play slideshow" : "Pause slideshow"}>{paused ? "Play" : "Pause"}</button>}
          <button type="button" className={control} onClick={() => go(index + 1)} aria-label="Next photo">Next</button>
        </div>
      </div>
      {photos[index].extra}
      <div className="flex flex-wrap items-center gap-1" aria-label="Choose a photo">
        {photos.map((photo, position) => <button key={photo.title} type="button" aria-label={`Show photo ${position + 1}: ${photo.title}`} aria-current={position === index ? "true" : undefined} onClick={() => go(position)} className="flex h-11 w-8 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-blue-300"><span className={`h-2 rounded-full transition-all motion-reduce:transition-none ${position === index ? "w-6 bg-blue-300" : "w-2 bg-white/30"}`} /></button>)}
        <span className="ml-auto text-sm tabular-nums text-neutral-400">{index + 1} / {photos.length}</span>
      </div>
    </div>
  </div>;
}
