import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad border-t border-line py-10">
      <div className="shell flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-muted">
          © {year} {site.name}
        </p>
        <p className="text-sm text-ink-muted">{site.domain}</p>
      </div>
    </footer>
  );
}
