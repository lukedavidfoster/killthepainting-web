"use client";

import { useRef, useState } from "react";
import { film, sections } from "@/content/film";

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" aria-hidden="true">
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" />
    </svg>
  );
}

function YouTube() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" aria-hidden="true">
      <rect
        x="1.8"
        y="5"
        width="20.4"
        height="14"
        rx="4.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M10 9.2l5 2.8-5 2.8z" fill="currentColor" />
    </svg>
  );
}

function XLogo() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.2l-4.9-6.4L5.1 21H2l7.3-8.3L2.4 3h6.3l4.4 5.8zm-1.1 16.1h1.7L7.7 4.8H5.9z"
      />
    </svg>
  );
}

function Letterboxd() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      aria-hidden="true"
      fill="currentColor"
    >
      <circle cx="6.1" cy="12" r="4.3" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.9" cy="12" r="4.3" />
    </svg>
  );
}

const socials = [
  {
    key: "instagram",
    href: film.links.instagram,
    label: "Instagram",
    icon: <Instagram />,
  },
  { key: "youtube", href: film.links.youtube, label: "YouTube", icon: <YouTube /> },
  { key: "x", href: film.links.x, label: "X", icon: <XLogo /> },
  {
    key: "letterboxd",
    href: film.links.letterboxd,
    label: "Letterboxd",
    icon: <Letterboxd />,
  },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const live = socials.filter((s) => s.href);
  // Contact only appears once there is an address to send people to.
  const shown = sections.filter(
    (section) => section.id !== "contact" || film.links.contactEmail,
  );

  return (
    <nav
      aria-label="Main"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
      className="bg-night/60 fixed inset-x-0 top-0 z-50 border-b border-white/8 px-6 py-5 backdrop-blur-md sm:px-10"
    >
      <div className="mx-auto grid w-full max-w-[82rem] grid-cols-[1fr_auto] items-center gap-y-3 lg:grid-cols-[1fr_auto_1fr]">
        <span className="hidden lg:block" aria-hidden="true" />
        <button
          ref={toggle}
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="navigation-links"
          onClick={() => setOpen(!open)}
          className="text-bone hover:text-pink flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <ul
          id="navigation-links"
          onClick={() => setOpen(false)}
          className={`${open ? "flex" : "hidden"} col-span-2 row-start-2 flex-col items-start gap-5 border-t border-white/8 pt-5 pb-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-10 lg:gap-y-2 lg:border-0 lg:p-0`}
        >
          {shown.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="caps text-bone hover:border-pink hover:text-pink border-b-2 border-transparent pb-1 text-[0.7rem] transition-colors sm:text-[0.78rem]"
              >
                {section.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={film.links.soundtrack}
              className="caps text-bone hover:border-pink hover:text-pink border-b-2 border-transparent pb-1 text-[0.7rem] transition-colors sm:text-[0.78rem]"
            >
              Soundtrack
            </a>
          </li>
        </ul>

        {live.length > 0 && (
          <ul className="col-start-2 row-start-1 flex items-center justify-end gap-5 lg:col-start-3">
            {live.map((social) => (
              <li key={social.key}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="text-bone hover:text-pink block transition-colors"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
