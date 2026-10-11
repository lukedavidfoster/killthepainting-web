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
  const live = socials.filter((s) => s.href);

  return (
    <nav
      aria-label="Main"
      className="bg-night/60 fixed inset-x-0 top-0 z-50 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 border-b border-white/8 px-6 py-5 backdrop-blur-md sm:px-10"
    >
      <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 sm:gap-x-10">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="caps text-bone hover:border-pink hover:text-pink border-b-2 border-transparent pb-1 text-[0.7rem] transition-colors sm:text-[0.78rem]"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>

      {live.length > 0 && (
        <ul className="flex items-center gap-5 sm:absolute sm:right-10">
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
    </nav>
  );
}
