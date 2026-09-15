import { createFileRoute, Link } from "@tanstack/react-router";
import { JobMark } from "@/components/marks";
import { JOBS } from "@/lib/content";

export const Route = createFileRoute("/jobs/")({ component: JobsPage });

function JobsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        SLEEVES · ALL WEATHER
      </p>
      <h1 className="mt-3 font-mono text-4xl tracking-tight">
        Hire jobs, not stories
      </h1>
      <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-muted">
        If two holdings are paid by the same surprise, you do not have two
        employees. You have one employee wearing two uniforms.
      </p>
      <div className="mt-10 grid gap-3">
        {JOBS.map((job) => (
          <Link
            key={job.id}
            to="/jobs/$id"
            params={{ id: job.id }}
            className="grid gap-4 rounded-md border border-line bg-panel p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center hover:border-accent"
          >
            <span
              className="flex size-14 items-center justify-center rounded-sm text-bg"
              style={{ background: job.color }}
            >
              <JobMark id={job.id} className="size-8" />
            </span>
            <span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {job.role} · {job.bbg}
              </span>
              <span className="mt-1 block font-mono text-2xl">{job.name}</span>
              <span className="mt-2 block font-sans text-sm leading-relaxed text-muted">
                {job.blurb}
              </span>
            </span>
            <span className="font-mono text-3xl tabular-nums text-accent">
              {job.weight}
              <span className="text-lg text-muted">%</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
