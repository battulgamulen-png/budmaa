"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type HeaderLink = {
  href: string;
  label: string;
};

type HeaderProps = {
  ctaHref: string;
  ctaLabel: string;
  links: HeaderLink[];
};

export default function Header({ ctaHref, ctaLabel, links }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f7f6f1]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-[1800px] items-center justify-between px-5 sm:h-24 sm:px-7 lg:px-10">
        <Link
          href="#top"
          className="shrink-0 leading-none text-[#171717]"
          onClick={() => setOpen(false)}
        >
          <div className="text-[2.85rem] italic tracking-[-0.14em] sm:text-[3.55rem]">
            Dentic Dental Clinic<span className="ml-1 text-[1rem] not-italic sm:text-[1.2rem]">.</span>
          </div>
      
        </Link>

        <nav className="hidden items-center gap-7 xl:flex 2xl:gap-10">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[0.78rem] font-black tracking-[0.17em] text-[#171717] transition-opacity duration-200 hover:opacity-65 2xl:text-[0.92rem]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={ctaHref}
            className="border-b border-[#171717] pb-1 text-[0.78rem] font-black tracking-[0.17em] text-[#171717] transition-opacity duration-200 hover:opacity-65 2xl:text-[0.92rem]"
          >
            {ctaLabel}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md p-2 text-[#171717] xl:hidden"
          aria-expanded={open}
          aria-label={open ? "Цэс хаах" : "Цэс нээх"}
        >
          {open ? <X size={34} strokeWidth={2.25} /> : <Menu size={34} strokeWidth={2.25} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-black/10 bg-[#f7f6f1] transition-[max-height,opacity] duration-300 xl:hidden ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-5 py-5 sm:px-7">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-black tracking-[0.17em] text-[#171717]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={ctaHref}
            className="pt-2 text-sm font-black tracking-[0.17em] text-[#171717] underline underline-offset-4"
            onClick={() => setOpen(false)}
          >
            {ctaLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
