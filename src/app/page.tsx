import ClinicEnvironmentGallery from "./_components/ClinicEnvironmentGallery";
import Header from "./_components/Header";

const services = [
  {
    id: "01",
    title: "Имплант ба нөхөн сэргээх",
    body: "Алдагдсан шүдийг тав тухтай, байгалийн харагдах шийдлээр сэргээнэ.",
    duration: "90 мин",
  },
  {
    id: "02",
    title: "Шүд цайруулах",
    body: "Эмчийн хяналттай аюулгүй whitening үйлчилгээ нэг өдрийн дотор хийгдэнэ.",
    duration: "60 мин",
  },
  {
    id: "03",
    title: "Хүүхдийн үзлэг",
    body: "Зөөлөн харилцаа, айдас багатай орчин, урьдчилан сэргийлэх зөвлөгөө.",
    duration: "30 мин",
  },
  {
    id: "04",
    title: "Аппарат ба aligner",
    body: "Инээмсэглэлийн тэгш хэмийг шат дараатай, төлөвлөгөөтэй засна.",
    duration: "45 мин",
  },
  {
    id: "05",
    title: "Яаралтай тусламж",
    body: "Өвдөлт, хугарал, буйлны үрэвслийн үед хурдан цаг гаргаж үйлчилнэ.",
    duration: "20 мин",
  },
];

const quickFacts = [
  {
    label: "Туршлага",
    value: "12+ жил",
    note: "Нөхөн сэргээх, гоо засал, урьдчилан сэргийлэлт",
  },
  {
    label: "Төлөвлөлт",
    value: "3D зураглал",
    note: "Оношилгоо, тайлбар, үе шат нь нэг дор харагдана",
  },
  {
    label: "Сэтгэл ханамж",
    value: "4.9/5",
    note: "Тайван орчин, ойлгомжтой харилцааг илүүд үздэг",
  },
];

const studioPillars = [
  {
    id: "01",
    title: "Ойлгомжтой төлөвлөгөө",
    body: "Ямар эмчилгээ, хэдий хугацаанд, ямар шатлалаар явахыг эхнээс нь тайлбарлана.",
  },
  {
    id: "02",
    title: "Цэвэр, тайван орчин",
    body: "Эмх цэгцтэй хүлээлгийн бүс, ариутгалын өндөр стандарт, айдас багатай орчин.",
  },
  {
    id: "03",
    title: "3D харагдахуйц мэдээлэл",
    body: "Зураглал, тайлбар, дараагийн алхам бүрийг хэт их текстгүйгээр ойлгомжтой үзүүлнэ.",
  },
];

const overviewItems = [
  "Үйлчилгээ бүр ямар зориулалттайг нэг мөр тайлбартайгаар харуулна.",
  "3D мэдрэмжтэй картууд нь чухал мэдээллийг давхарлаж, илүү амархан ялгаруулна.",
  "Холбоо барих мэдээлэл, ажлын цаг, сошиал сувгууд төгсгөлд нэг дор байна.",
];

const contactItems = [
  {
    label: "Утас",
    value: "7700 2020",
    note: "Өдөр бүр ресепшн хариу өгнө",
  },
  {
    label: "Instagram",
    value: "@aurora.dental",
    note: "Ажилбар, зөвлөгөө, орчны зураг",
  },
  {
    label: "Ажлын цаг",
    value: "Даваа - Ням",
    note: "09:00 - 20:00",
  },
];

const environmentScenes = [
  {
    id: "01",
    label: "Хүлээлгийн хэсэг",
    title: "Тайван, цэвэр reception zone",
    body: "Олон хүнтэй ч замбараатай харагдах, тайван суух хэсэгтэй, зөөлөн гэрэлтэй орчны зураг.",
    imageSrc: "/clinic-lounge.svg",
    imageAlt: "Шүдний эмнэлгийн хүлээлгийн хэсгийн зураг",
    caption:
      "Эхний сэтгэгдэл нь тайван байх ёстой гэсэн санааг reception, sofa, зөөлөн гэрэл, нээлттэй орон зайгаар харуулж байна.",
    tags: ["Reception desk", "Soft lighting", "Waiting sofa"],
  },
  {
    id: "02",
    label: "Эмчилгээний өрөө",
    title: "Шүдний сандалтай treatment room",
    body: "Үндсэн эмчилгээний орчин, dental chair, гэрэл, багажны хэсгийг илүү цэвэр харагдахаар үзүүлнэ.",
    imageSrc: "/clinic-treatment.svg",
    imageAlt: "Шүдний эмчилгээний өрөө болон dental chair-ийн зураг",
    caption:
      "Dental chair, overhead light, storage cabinet зэрэг нь нэг зураг дээр төвлөрч, эмчилгээ хаана явагдахыг тодорхой ойлгуулна.",
    tags: ["Dental chair", "Sterile setup", "Focused lighting"],
  },
  {
    id: "03",
    label: "Зөвлөгөөний булан",
    title: "Эмчтэй тайлбарлах consultation corner",
    body: "Зөвлөгөө өгөх, plan тайлбарлах, зураг үзүүлэх хэсгийг арай дулаан өнгөөр харуулж илүү найрсаг болгоно.",
    imageSrc: "/clinic-consultation.svg",
    imageAlt: "Шүдний эмчийн зөвлөгөөний өрөөний зураг",
    caption:
      "Эмчилгээний өмнөх тайлбар, plan ярилцах, дэлгэц дээр зураг үзүүлэх орчныг тусдаа scene болгон гаргалаа.",
    tags: ["Consultation desk", "X-ray screen", "Calm seating"],
  },
] as const;

const showcaseLayers = [
  {
    id: "01",
    title: "Чиглүүлэх rail",
    note: "Hero-оос эхлээд section бүр рүү алдахгүй чиглүүлнэ.",
  },
  {
    id: "02",
    title: "Төв canvas",
    note: "Нэг төв pane дээр гол мессеж, тайлбар, detail-ийг төвлөрүүлнэ.",
  },
  {
    id: "03",
    title: "Туслах cards",
    note: "Үнэ, орчин, тайлбарын жижиг блок нь гүнийг нэмээд замбараагүй болгохгүй.",
  },
];

const showcaseMetrics = [
  {
    value: "Гүн",
    label: "3D мэдрэмж",
  },
  {
    value: "Тод",
    label: "эрэмбэтэй урсгал",
  },
  {
    value: "Тайван",
    label: "өнгөний хэмнэл",
  },
];

export default function Home() {
  return (
    <main
      id="top"
      className="relative isolate min-h-screen overflow-hidden px-4 py-6 text-slate-950 sm:px-6 sm:py-8 lg:px-8 xl:px-10"
    >
      <Header />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.98),_rgba(231,248,253,0.95)_32%,_rgba(213,244,241,0.88)_58%,_rgba(241,252,255,0.98)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(14,116,144,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,116,144,0.05)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      <div className="pointer-events-none absolute -left-12 top-14 -z-10 h-44 w-44 rounded-full bg-cyan-300/45 blur-3xl animate-float-gentle" />
      <div className="pointer-events-none absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-emerald-200/55 blur-3xl animate-float-delayed" />
      <div className="pointer-events-none absolute bottom-8 left-1/2 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl animate-float-gentle" />

      <section className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8">
        <section className="grid items-start gap-5 xl:min-h-[calc(100vh-7rem)] xl:grid-cols-[1.02fr_0.98fr] xl:items-center xl:gap-8 2xl:gap-10">
          <div className="animate-rise-in rounded-[2.15rem] border border-cyan-950/10 bg-white/80 p-5 shadow-[0_24px_90px_-36px_rgba(8,47,73,0.26)] backdrop-blur sm:p-7 xl:p-9">
            <p className="mb-4 inline-flex items-center rounded-full border border-cyan-950/10 bg-cyan-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-900/80">
              3D Дентал Орчин
            </p>
            <h1 className="font-display max-w-3xl text-[clamp(2.5rem,8vw,4.85rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-balance text-slate-900">
              Шүдний эмчилгээний мэдээллийг нэг харцаар ойлгох цэгцтэй орчин.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7 lg:text-lg">
              Олон давхар UI, зөөлөн гэрэл, 3D мэдрэмжтэй картуудын
              тусламжтайгаар үйлчилгээгээ илүү тодорхой, эмх цэгцтэй, итгэл
              төрүүлэхээр үзүүллээ.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#showcase"
                className="rounded-full bg-cyan-950 px-6 py-3 text-center text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                3D тойм үзэх
              </a>
              <a
                href="#services"
                className="rounded-full border border-cyan-950/10 bg-white/80 px-6 py-3 text-center text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-white"
              >
                Үйлчилгээ үзэх
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[1.55rem] border border-cyan-950/10 bg-white/72 p-4 shadow-[0_14px_40px_-32px_rgba(8,47,73,0.25)]"
                >
                  <p className="text-sm text-slate-500">{fact.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">
                    {fact.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {fact.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {studioPillars.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[1.45rem] border border-cyan-950/8 bg-cyan-50/55 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-900/45">
                    {item.id}
                  </p>
                  <p className="mt-3 text-base font-semibold text-slate-900">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside
            id="showcase"
            className="animate-rise-in-delayed relative overflow-hidden rounded-[2.2rem] border border-cyan-950/10 bg-slate-950 p-5 text-white shadow-[0_36px_110px_-42px_rgba(8,47,73,0.72)] sm:p-6 lg:p-7 xl:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.28),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.2),transparent_28%),linear-gradient(180deg,rgba(7,14,25,0.92),rgba(6,26,42,0.98))]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:28px_28px] opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_88%)]" />
            <div className="pointer-events-none absolute right-8 top-12 h-24 w-24 rounded-full border border-white/10 bg-white/6 blur-[2px]" />
            <div className="pointer-events-none absolute bottom-10 left-8 h-20 w-20 rounded-full bg-cyan-300/18 blur-2xl" />
            <div className="pointer-events-none absolute left-1/2 top-24 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-300/12 blur-3xl" />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  3D Тойм
                </p>
                <h2 className="font-display mt-3 text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-[-0.04em] text-balance">
                  Одоо төв stage, арын plane, урд micro-card-ууд нь илүү ялгардаг.
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-6 text-white/68">
                  Нүд эхлээд төв блок руу очоод, дараа нь хажуугийн туслах
                  картууд руу шилждэг байхаар depth hierarchy-ийг нь сайжрууллаа.
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-2">
                <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                  Premium depth
                </div>
                <div className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                  3 давхарга · 1 төв focus
                </div>
              </div>
            </div>

            <div className="scene-3d relative mt-8 h-[30rem] sm:h-[35rem] lg:h-[38rem] xl:h-[40rem]">
              <div className="absolute inset-x-4 bottom-8 h-24 rounded-[2.4rem] border border-cyan-200/10 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(34,211,238,0.01))] shadow-[0_30px_80px_-36px_rgba(34,211,238,0.28)] [transform:translateZ(10px)_rotateX(74deg)] sm:inset-x-8 sm:bottom-10 sm:h-28" />

              <div className="absolute inset-x-3 top-8 bottom-20 [transform:translateZ(24px)] sm:inset-x-5 sm:top-10 sm:bottom-24">
                <div className="relative h-full overflow-hidden rounded-[2.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_34px_120px_-60px_rgba(0,0,0,0.8)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_50%)]" />
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[0.68rem] font-medium uppercase tracking-[0.28em] text-white/42 sm:inset-x-7 sm:top-7">
                    <span>Арын plane</span>
                    <span>01 / 03</span>
                  </div>

                  <div className="absolute inset-x-4 bottom-4 grid gap-3 sm:inset-x-7 sm:bottom-7 sm:grid-cols-3">
                    {showcaseLayers.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-[1.45rem] border border-white/10 bg-white/6 p-4 backdrop-blur"
                      >
                        <p className="text-xs uppercase tracking-[0.26em] text-white/35">
                          Layer {item.id}
                        </p>
                        <p className="mt-3 text-base font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/58">
                          {item.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 top-12 w-[92%] max-w-[34rem] [transform:translateX(-50%)_translateZ(118px)] sm:top-14 sm:w-[88%] xl:max-w-[38rem]">
                <div className="animate-prism-sway relative overflow-hidden rounded-[2.35rem] border border-white/12 bg-[linear-gradient(145deg,rgba(9,16,29,0.98),rgba(7,60,92,0.95),rgba(13,112,107,0.9))] p-5 shadow-[0_65px_180px_-48px_rgba(0,0,0,0.84)] sm:p-6">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(103,232,249,0.16),transparent_34%)]" />

                  <div className="relative flex items-center justify-between gap-3 text-sm text-white/60">
                    <span>Holographic stage</span>
                    <span>Төв тайлбарын pane</span>
                  </div>

                  <div className="relative mt-8 grid gap-6 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
                    <div className="relative mx-auto flex h-56 w-full max-w-[16rem] items-center justify-center rounded-[2.25rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_30px_90px_-42px_rgba(255,255,255,0.28)] sm:h-64 sm:max-w-[18rem]">
                      <div className="absolute inset-3 rounded-[1.9rem] border border-white/10" />
                      <div className="animate-glow-breathe absolute h-48 w-48 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.96),rgba(125,211,252,0.88),rgba(45,212,191,0.34),transparent_72%)]" />
                      <div className="absolute h-44 w-44 rounded-full border border-white/18" />
                      <div className="absolute h-32 w-32 rounded-full border border-cyan-100/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-28 w-28 drop-shadow-[0_20px_38px_rgba(255,255,255,0.32)]"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 5.25C10.2 5.25 8.78 6.1 7.52 6.1C6.3 6.1 5.03 5.35 3.58 5.35C1.72 5.35 0.5 6.9 0.5 9.2C0.5 10.98 1.17 12.62 2.13 13.89C2.94 14.95 3.6 16.18 3.94 17.86C4.29 19.57 5.22 20.63 6.48 20.63C7.53 20.63 8.23 19.74 8.78 18.48C9.25 17.37 9.74 16.42 11.01 16.42C12.28 16.42 12.76 17.37 13.24 18.48C13.78 19.74 14.49 20.63 15.54 20.63C16.8 20.63 17.73 19.57 18.08 17.86C18.42 16.18 19.08 14.95 19.89 13.89C20.85 12.62 21.52 10.98 21.52 9.2C21.52 6.9 20.3 5.35 18.44 5.35C16.99 5.35 15.72 6.1 14.5 6.1C13.23 6.1 13.8 5.25 12 5.25Z"
                            fill="url(#toothGradient)"
                          />
                          <path
                            d="M18.9 1.7L19.28 2.94L20.52 3.32L19.28 3.7L18.9 4.94L18.52 3.7L17.28 3.32L18.52 2.94L18.9 1.7Z"
                            fill="#F8FAFC"
                          />
                          <defs>
                            <linearGradient
                              id="toothGradient"
                              x1="2"
                              y1="3"
                              x2="22"
                              y2="22"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFFFFF" />
                              <stop offset="0.42" stopColor="#BAE6FD" />
                              <stop offset="1" stopColor="#5EEAD4" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-orbit-slow relative h-56 w-56">
                          <div className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-cyan-100 shadow-[0_0_18px_rgba(224,242,254,0.9)]" />
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-orbit-reverse relative h-44 w-44">
                          <div className="absolute left-1/2 bottom-0 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-200 shadow-[0_0_18px_rgba(167,243,208,0.9)]" />
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <h3 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-semibold tracking-[-0.04em] text-white">
                        Төв тайлбарын pane нь илүү cinematic, илүү тод focus-той боллоо.
                      </h3>
                      <p className="mt-4 text-sm leading-6 text-white/72">
                        Depth plane нь арын суурь болж, floating card-ууд нь
                        supporting context өгөх тул үндсэн мэдээлэл замбараагүй
                        харагдахгүй байна.
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {showcaseMetrics.map((item) => (
                          <div
                            key={item.label}
                            className="rounded-[1.35rem] border border-white/12 bg-white/8 p-4"
                          >
                            <p className="text-xl font-semibold text-white">
                              {item.value}
                            </p>
                            <p className="mt-2 text-sm text-white/55">
                              {item.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs text-white/72">
                          3D зураглал
                        </span>
                        <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs text-white/72">
                          зөөлөн glow
                        </span>
                        <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs text-white/72">
                          clean navigation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-2 top-6 hidden w-48 [transform:translateZ(86px)_rotateX(8deg)_rotateY(18deg)] xl:block 2xl:right-0 2xl:top-5 2xl:w-56">
                <div className="animate-float-delayed rounded-[1.9rem] border border-white/12 bg-white/9 p-4 shadow-[0_30px_90px_-42px_rgba(0,0,0,0.58)] backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/55">
                    Гол блок
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Ил тод үнэ ба тайлбар
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Micro-card нь supporting info өгөөд, үндсэн pane-ийг
                    сатааруулахгүй.
                  </p>
                </div>
              </div>

              <div className="absolute left-2 top-40 hidden w-48 [transform:translateZ(78px)_rotateX(4deg)_rotateY(-18deg)] xl:block 2xl:left-0 2xl:top-44 2xl:w-56">
                <div className="animate-float-deep rounded-[1.9rem] border border-white/12 bg-white/10 p-4 shadow-[0_28px_84px_-38px_rgba(0,0,0,0.56)] backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.28em] text-emerald-100/60">
                    Орчны блок
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Тайван гэрэл
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Cyan-emerald palette нь технологитой хэрнээ тайван сэтгэгдэл
                    үлдээнэ.
                  </p>
                </div>
              </div>

              <div className="absolute inset-x-3 bottom-3 [transform:translateZ(54px)] sm:inset-x-6 sm:bottom-4">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-3 shadow-[0_22px_68px_-36px_rgba(0,0,0,0.56)] backdrop-blur sm:p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-white/45">Нэг харцаар</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Төв stage, арын plane, support cards гэсэн 3 шаттай scene
                      </p>
                    </div>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                      Эрэмбэтэй бүтэц
                    </span>
                  </div>

                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {showcaseMetrics.map((item) => (
                      <div
                        key={item.value}
                        className="rounded-[1.15rem] border border-white/8 bg-white/6 px-3 py-2 text-sm text-white/68"
                      >
                        <span className="font-semibold text-white">
                          {item.value}
                        </span>{" "}
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section
          id="about"
          className="animate-rise-in rounded-[2rem] border border-cyan-950/10 bg-white/72 p-5 shadow-[0_18px_50px_-36px_rgba(8,47,73,0.28)] backdrop-blur sm:p-6 lg:p-8"
        >
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-900/60">
                Орчны танилцуулга
              </p>
              <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.04em] text-slate-900">
                Таб дээр дарахад эмнэлгийн өөр өөр орчны зураг хажуу талдаа гарч ирнэ.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Орчин хэсгийг илүү амьд болгохын тулд reception, treatment
                room, consultation corner гэсэн 3 scene бэлдэж, дармагц зураг
                нь солигддог болголоо.
              </p>
            </div>

            <div className="self-start rounded-full border border-cyan-950/10 bg-cyan-50/80 px-4 py-2 text-sm text-cyan-950">
              3 scene gallery
            </div>
          </div>

          <ClinicEnvironmentGallery scenes={[...environmentScenes]} />
        </section>

        <section id="services" className="grid gap-4">
          <div className="animate-rise-in rounded-[1.9rem] border border-cyan-950/10 bg-white/72 p-5 shadow-[0_18px_50px_-36px_rgba(8,47,73,0.22)] backdrop-blur sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-900/55">
              Үйлчилгээ
            </p>
            <h2 className="font-display mt-3 text-[clamp(1.9rem,3.7vw,3rem)] font-semibold tracking-[-0.04em] text-slate-900">
              Үндсэн үйлчилгээнүүдээ тусдаа цэвэр grid дээр үлдээлээ.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 [perspective:1600px]">
            {services.map((service) => (
              <article
                key={service.id}
                className="animate-rise-in group relative overflow-hidden rounded-[1.85rem] border border-cyan-950/10 bg-white/76 p-5 shadow-[0_22px_60px_-38px_rgba(8,47,73,0.26)] backdrop-blur transition-transform duration-500 hover:[transform:translateY(-10px)_rotateX(6deg)_rotateY(-7deg)] sm:p-6"
              >
                <div className="pointer-events-none absolute inset-x-5 top-0 h-20 rounded-b-[2rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_70%)]" />
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-900/50">
                  {service.id}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.body}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="rounded-full border border-cyan-950/10 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-950">
                    {service.duration}
                  </span>
                  <span className="text-sm text-slate-500">Тод тайлбар</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div
              id="overview"
              className="animate-rise-in rounded-[2rem] border border-cyan-950/10 bg-white/72 p-5 shadow-[0_18px_50px_-36px_rgba(8,47,73,0.28)] backdrop-blur sm:p-6 lg:p-8"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-900/55">
                Нэг харцаар
              </p>
              <h2 className="font-display mt-4 text-[clamp(1.9rem,3.5vw,2.75rem)] font-semibold tracking-[-0.04em] text-slate-900">
                Хэрэглэгчийг төөрүүлэхгүй, харин чиглүүлдэг бүтэц.
              </h2>

              <div className="mt-5 space-y-3">
                {overviewItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-cyan-950/10 bg-cyan-50/70 p-4 text-sm leading-6 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              id="contact"
              className="animate-rise-in rounded-[2rem] border border-cyan-950/10 bg-white/72 p-5 shadow-[0_18px_50px_-36px_rgba(8,47,73,0.28)] backdrop-blur sm:p-6 lg:p-8"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-900/55">
                Холбоо барих
              </p>
              <h2 className="font-display mt-4 text-[clamp(2rem,3.8vw,3.25rem)] font-semibold tracking-[-0.04em] text-slate-900">
                Сувгуудыг нь төгсгөлд нь цэгцтэй байршууллаа.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Утас, сошиал, ажлын цагийг тус бүрд нь ялгаж өгснөөр хамгийн
                хэрэгтэй мэдээллүүд амархан олдоно.
              </p>

              <div className="mt-6 grid gap-3">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-cyan-950/10 bg-cyan-50/70 p-4"
                  >
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
