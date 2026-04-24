const navItems = [
  { label: "3D Тойм", href: "#showcase" },
  { label: "Үйлчилгээ", href: "#services" },
  { label: "Орчин", href: "#about" },
  { label: "Нэг Харцаар", href: "#overview" },
  { label: "Холбоо барих", href: "#contact" },
];

function LogoMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7 text-cyan-950"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5.25C10.2 5.25 8.78 6.1 7.52 6.1C6.3 6.1 5.03 5.35 3.58 5.35C1.72 5.35 0.5 6.9 0.5 9.2C0.5 10.98 1.17 12.62 2.13 13.89C2.94 14.95 3.6 16.18 3.94 17.86C4.29 19.57 5.22 20.63 6.48 20.63C7.53 20.63 8.23 19.74 8.78 18.48C9.25 17.37 9.74 16.42 11.01 16.42C12.28 16.42 12.76 17.37 13.24 18.48C13.78 19.74 14.49 20.63 15.54 20.63C16.8 20.63 17.73 19.57 18.08 17.86C18.42 16.18 19.08 14.95 19.89 13.89C20.85 12.62 21.52 10.98 21.52 9.2C21.52 6.9 20.3 5.35 18.44 5.35C16.99 5.35 15.72 6.1 14.5 6.1C13.23 6.1 13.8 5.25 12 5.25Z"
        fill="currentColor"
        opacity="0.96"
      />
      <path
        d="M18.9 1.7L19.28 2.94L20.52 3.32L19.28 3.7L18.9 4.94L18.52 3.7L17.28 3.32L18.52 2.94L18.9 1.7Z"
        fill="#F8FAFC"
      />
      <path
        d="M15.75 1L16.03 1.92L16.95 2.2L16.03 2.48L15.75 3.4L15.47 2.48L14.55 2.2L15.47 1.92L15.75 1Z"
        fill="#CFFAFE"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="relative z-30 mx-auto mb-6 w-full max-w-7xl animate-rise-in sm:mb-8 lg:mb-10">
      <div className="rounded-[1.85rem] border border-cyan-950/10 bg-white/78 px-3.5 py-3.5 shadow-[0_24px_80px_-42px_rgba(8,47,73,0.28)] backdrop-blur sm:px-4 sm:py-4 md:px-5">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a href="#top" className="group flex min-w-0 items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(236,254,255,1),rgba(165,243,252,0.85),rgba(209,250,229,0.9))] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_40px_-24px_rgba(8,47,73,0.55)] ring-1 ring-cyan-950/10 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-14 sm:w-14 sm:rounded-[1.35rem]">
              <LogoMark />
            </span>

            <span className="min-w-0">
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-cyan-900/60">
                3D Smile Care
              </span>
              <span className="font-display block truncate text-xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-2xl">
                Dentiq Dental Clinic
              </span>
            </span>
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-2 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:bg-cyan-50 hover:text-cyan-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <a
              href="tel:77002020"
              className="hidden rounded-full border border-cyan-950/10 bg-white/85 px-4 py-2 text-right text-sm text-slate-600 shadow-[0_12px_32px_-24px_rgba(8,47,73,0.35)] lg:flex lg:flex-col"
            >
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Утас
              </span>
              <span className="text-base font-semibold text-slate-900">
                7700 2020
              </span>
            </a>

            <div className="hidden rounded-full border border-emerald-300/30 bg-emerald-50/80 px-4 py-2 text-sm font-medium text-emerald-900 2xl:flex 2xl:items-center 2xl:gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Нээлттэй 09:00 - 20:00
            </div>

            <a
              href="#services"
              className="rounded-full bg-cyan-950 px-4 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 sm:px-5 sm:py-3"
            >
              Үйлчилгээ
            </a>
          </div>
        </div>

        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 xl:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-cyan-950/10 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:bg-cyan-50 hover:text-cyan-950"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
