"use client";

import Image from "next/image";
import { useState } from "react";

type ClinicScene = {
  id: string;
  label: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
  tags: readonly string[];
};

type ClinicEnvironmentGalleryProps = {
  scenes: readonly ClinicScene[];
};

export default function ClinicEnvironmentGallery({
  scenes,
}: ClinicEnvironmentGalleryProps) {
  const [selectedSceneId, setSelectedSceneId] = useState(scenes[0]?.id ?? "");

  const activeScene =
    scenes.find((scene) => scene.id === selectedSceneId) ?? scenes[0];

  if (!activeScene) {
    return null;
  }

  return (
    <div className="mt-8 grid gap-5 xl:grid-cols-[0.88fr_1.12fr]">
      <div className="space-y-3">
        {scenes.map((scene) => {
          const isActive = scene.id === activeScene.id;

          return (
            <button
              key={scene.id}
              type="button"
              onClick={() => setSelectedSceneId(scene.id)}
              aria-pressed={isActive}
              className={`w-full rounded-[1.7rem] border p-4 text-left transition-all duration-300 sm:p-5 ${
                isActive
                  ? "border-cyan-300/45 bg-cyan-950 text-white shadow-[0_28px_80px_-44px_rgba(8,47,73,0.75)]"
                  : "border-cyan-950/10 bg-white/80 text-slate-900 shadow-[0_18px_50px_-38px_rgba(8,47,73,0.22)] hover:-translate-y-0.5 hover:bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.28em] ${
                      isActive ? "text-cyan-100/65" : "text-cyan-900/45"
                    }`}
                  >
                    {scene.label}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] sm:text-xl">
                    {scene.title}
                  </h3>
                </div>

                <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                    isActive
                      ? "bg-white/12 text-white"
                      : "bg-cyan-50 text-cyan-950"
                  }`}
                >
                  {scene.id}
                </span>
              </div>

              <p
                className={`mt-4 text-sm leading-6 ${
                  isActive ? "text-white/72" : "text-slate-600"
                }`}
              >
                {scene.body}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {scene.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1 text-xs ${
                      isActive
                        ? "border border-white/10 bg-white/8 text-white/74"
                        : "border border-cyan-950/10 bg-cyan-50 text-cyan-950"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-950/10 bg-slate-950 p-3 text-white shadow-[0_36px_100px_-44px_rgba(8,47,73,0.58)] sm:p-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.18),transparent_28%)]" />

        <div key={activeScene.id} className="relative animate-rise-in">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.65rem] border border-white/10 bg-slate-900/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_90px_-42px_rgba(0,0,0,0.78)] sm:aspect-[16/12] xl:aspect-[5/4]">
            <Image
              src={activeScene.imageSrc}
              alt={activeScene.imageAlt}
              fill
              sizes="(min-width: 1280px) 42vw, (min-width: 768px) 70vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,8,23,0.72),transparent_42%)]" />

            <div className="absolute left-3 top-3 rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em] text-white/78 backdrop-blur sm:left-4 sm:top-4">
              Эмнэлгийн орчин
            </div>

            <div className="absolute bottom-3 left-3 right-3 rounded-[1.4rem] border border-white/10 bg-slate-950/48 p-3 backdrop-blur sm:bottom-4 sm:left-4 sm:right-4 sm:p-4">
              <p className="text-xs uppercase tracking-[0.26em] text-cyan-100/65">
                {activeScene.label}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                {activeScene.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/72">
                {activeScene.caption}
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {activeScene.tags.map((tag) => (
              <div
                key={tag}
                className="rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/76"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
