// @flow strict

import Link from "next/link";

const baseButtonClasses =
  "inline-flex w-full items-center justify-center rounded-md border border-theme-muted bg-theme-surface px-6 py-3 text-sm font-semibold uppercase tracking-wide text-theme-contrast transition hover:border-[#16f2b3] hover:text-theme-accent sm:w-auto";

function PageNavigation({ previous, next }) {
  return (
    <nav className="mt-12 flex flex-col items-stretch gap-4 border-t border-[#25213b] pt-8 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1">
        {previous ? (
          <Link
            href={previous.href}
            className={`${baseButtonClasses} justify-center sm:justify-start`}
          >
            Previous: {previous.label}
          </Link>
        ) : (
          <span aria-hidden className="block h-12" />
        )}
      </div>
      <div className="flex-1 text-right">
        {next ? (
          <Link
            href={next.href}
            className={`${baseButtonClasses} justify-center sm:justify-end`}
          >
            Next: {next.label}
          </Link>
        ) : (
          <span aria-hidden className="block h-12" />
        )}
      </div>
    </nav>
  );
}

export default PageNavigation;
