import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JobMark } from "@/components/marks";
import { PieChart } from "@/components/pie-chart";
import { EPISODES, JOBS, type JobId, WEATHERS } from "@/lib/content";
import { usePlayer } from "@/store/player";

export const Route = createFileRoute("/jobs/$id")({
  component: JobPage,
  loader: ({ params }) => {
    const job = JOBS.find((j) => j.id === params.id);
    if (!job) throw notFound();
    return job;
  },
});

function JobPage() {
  const job = Route.useLoaderData();
  const play = usePlayer((s) => s.play);
  const related = EPISODES.filter((e) => e.jobIds.includes(job.id));
  const weathers = WEATHERS.filter(
    (w) => w.paid.includes(job.id) || w.fined.includes(job.id),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/jobs" className="font-mono text-sm text-muted hover:text-accent">
        ← SLEEVES
      </Link>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span
            className="inline-flex size-16 items-center justify-center rounded-sm text-bg"
            style={{ background: job.color }}
          >
            <JobMark id={job.id} className="size-9" />
          </span>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {job.role} · {job.weight}% · {job.bbg}
          </p>
          <h1 className="mt-2 font-mono text-4xl tracking-tight">{job.name}</h1>
          <p className="mt-6 font-sans text-lg leading-relaxed">{job.blurb}</p>
          <dl className="mt-8 grid gap-3">
            <Box label="PAID WHEN" body={job.paid} />
            <Box label="FINED WHEN" body={job.fined} />
            <Box label="FAILURE MODE" body={job.failure} />
          </dl>
          <blockquote className="mt-8 border-l-2 border-accent pl-4 font-mono text-xl leading-snug">
            {job.principle}
          </blockquote>
          <p className="mt-6 font-sans text-base leading-relaxed text-muted">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan">
              If you are 25–35
            </span>
            <br />
            {job.forYoung}
          </p>
        </div>
        <aside>
          <PieChart active={job.id as JobId} />
          <h2 className="mt-8 font-mono text-xl">ROOMS</h2>
          <ul className="mt-3 space-y-2">
            {weathers.map((w) => {
              const paid = w.paid.includes(job.id);
              return (
                <li
                  key={w.id}
                  className="flex items-center justify-between rounded-sm bg-panel px-3 py-2 font-mono text-sm"
                >
                  <span>{w.name}</span>
                  <span className={paid ? "text-up" : "text-down"}>
                    {paid ? "PAID" : "FINED"}
                  </span>
                </li>
              );
            })}
          </ul>
          <h2 className="mt-8 font-mono text-xl">HEAR IT</h2>
          <ul className="mt-3 space-y-2">
            {related.map((ep) => (
              <li
                key={ep.slug}
                className="flex items-center justify-between gap-3 rounded-sm border border-line bg-panel px-3 py-2"
              >
                <Link
                  to="/listen/$slug"
                  params={{ slug: ep.slug }}
                  className="min-w-0 truncate font-mono text-sm hover:text-accent"
                >
                  {ep.code} · {ep.title}
                </Link>
                <Button size="sm" variant="outline" onClick={() => play(ep.slug)}>
                  <Play className="size-3.5 translate-x-px" />
                </Button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}

function Box({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-md border border-line bg-panel p-4">
      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        {label}
      </dt>
      <dd className="mt-1 font-sans">{body}</dd>
    </div>
  );
}
