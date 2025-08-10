
import settings from "@/../content/settings.json";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-16 flex flex-col gap-6">
      <h1 className="text-4xl font-bold tracking-tight">{settings.name}</h1>
      <div className="text-xl opacity-80">{settings.title}</div>
      <p className="max-w-3xl opacity-90">{settings.summary}</p>
      <p className="text-sm opacity-70">{settings.tagline}</p>
      <div className="flex gap-3 mt-4">
        <Link href="/project-showcase" className="rounded-md bg-foreground text-background px-4 py-2 text-sm">Project Showcase</Link>
        <Link href="/publications" className="rounded-md border px-4 py-2 text-sm">Publications</Link>
        <Link href="/resume" className="rounded-md border px-4 py-2 text-sm">Resume</Link>
      </div>
    </section>
  );
}
