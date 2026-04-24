import Header from "./_components/Header";

const services = [
  {
    id: "01",
    title: "Имплант ба нөхөн сэргээх",
    body: "Алдагдсан шүдийг тав тухтай, байгалийн харагдах шийдлээр сэргээнэ.",
  },
  {
    id: "02",
    title: "Шүд цайруулах",
    body: "Эмчийн хяналттай аюулгүй whitening үйлчилгээ нэг өдрийн дотор хийгдэнэ.",
  },
  {
    id: "03",
    title: "Хүүхдийн үзлэг",
    body: "Зөөлөн харилцаа, айдас багатай орчин, урьдчилан сэргийлэх зөвлөгөө.",
  },
  {
    id: "04",
    title: "Аппарат ба aligner",
    body: "Инээмсэглэлийн тэгш хэмийг шат дараатай, төлөвлөгөөтэй засна.",
  },
  {
    id: "05",
    title: "Яаралтай тусламж",
    body: "Өвдөлт, хугарал, буйлны үрэвслийн үед хурдан цаг гаргаж үйлчилнэ.",
  },
];

const visitFlow = [
  {
    step: "1",
    title: "Эхний оношилгоо",
    body: "3D зураг, эмчийн үзлэг, таны хэрэгцээнд тохирсон төлөвлөгөөг гаргана.",
  },
  {
    step: "2",
    title: "Тайван эмчилгээ",
    body: "Орчин үеийн төхөөрөмж, өвдөлт багатай аргачлалаар эмчилгээг хийнэ.",
  },
  {
    step: "3",
    title: "Дараах хяналт",
    body: "Эмчилгээний дараах зөвлөгөө, хяналтын цаг, урт хугацааны арчилгааг өгнө.",
  },
];

export default function Home() {
  return (
    <main
      id="top"
      className="relative isolate min-h-screen overflow-hidden px-6 py-10 text-slate-950 sm:px-8 lg:px-12"
    >
      <Header />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.98),_rgba(231,248,253,0.95)_32%,_rgba(213,244,241,0.88)_58%,_rgba(241,252,255,0.98)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(14,116,144,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,116,144,0.05)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      <div className="pointer-events-none absolute -left-12 top-14 -z-10 h-44 w-44 rounded-full bg-cyan-300/45 blur-3xl animate-float-gentle" />
      <div className="pointer-events-none absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-emerald-200/55 blur-3xl animate-float-delayed" />
      <div className="pointer-events-none absolute bottom-8 left-1/2 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl animate-float-gentle" />

      <section className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="animate-rise-in rounded-[2rem] border border-cyan-950/10 bg-white/78 p-7 shadow-[0_24px_80px_-36px_rgba(8,47,73,0.28)] backdrop-blur xl:p-10">
            <p className="mb-4 inline-flex items-center rounded-full border border-cyan-950/10 bg-cyan-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-900/80">
              Aurora Dental Studio
            </p>
            <h1 className="font-display max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-balance text-slate-900 sm:text-6xl lg:text-7xl">
              Инээмсэглэлд итгэл нэмдэг шүдний эмнэлэг.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Үзлэг, оношилгоо, эмчилгээ, гоо заслын үйлчилгээг нэг дороос.
              Тайван орчин, орчин үеийн тоног төхөөрөмж, ойлгомжтой зөвлөгөөтэй.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#appointment"
                className="rounded-full bg-cyan-950 px-6 py-3 text-center text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Цаг захиалах
              </a>
              <a
                href="#services"
                className="rounded-full border border-cyan-950/10 bg-white/80 px-6 py-3 text-center text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-white"
              >
                Үйлчилгээ үзэх
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-cyan-950/10 bg-white/70 p-4">
                <p className="text-sm text-slate-500">Туршлага</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">
                  12+ жил
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-cyan-950/10 bg-white/70 p-4">
                <p className="text-sm text-slate-500">Сэтгэл ханамж</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">
                  4.9/5
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-cyan-950/10 bg-white/70 p-4">
                <p className="text-sm text-slate-500">Хурдан цаг</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">
                  Same-day
                </p>
              </div>
            </div>
          </div>

          <aside
            id="appointment"
            className="animate-rise-in-delayed rounded-[2rem] border border-cyan-950/10 bg-slate-950 p-6 text-white shadow-[0_30px_90px_-40px_rgba(8,47,73,0.68)] lg:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  Today&apos;s Appointments
                </p>
                <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em]">
                  Эмчилгээний зөв замыг эхний үзлэгээс эхлүүлнэ.
                </h2>
              </div>
              <div className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                Open
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] bg-white/8 p-5 ring-1 ring-white/10">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Өнөөдрийн хуваарь</span>
                <span>09:00 - 20:00</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-white" />
              </div>

              <div className="mt-6 grid gap-3 text-sm text-white/85">
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <p className="text-white/50">Эхний зөвлөгөө</p>
                  <p className="mt-2 font-medium text-white">
                    30 минутын дэлгэрэнгүй үзлэг
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <p className="text-white/50">Яаралтай тусламж</p>
                  <p className="mt-2 font-medium text-white">
                    Өвдөлттэй тохиолдолд хурдан цаг
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <p className="text-white/50">Хаяг</p>
                  <p className="mt-2 font-medium text-white">
                    Хотын төв, 24/7 parking-той
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-cyan-400/12 p-4 ring-1 ring-cyan-300/20">
                <p className="text-sm text-cyan-100/70">
                  Эмчилгээний төлөвлөгөө
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  Ил тод үнэ, үе шаттай тайлбар
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-emerald-400/12 p-4 ring-1 ring-emerald-300/20">
                <p className="text-sm text-emerald-100/70">Аюулгүй орчин</p>
                <p className="mt-2 text-lg font-medium text-white">
                  Ариутгал, халдвар хамгааллын өндөр стандарт
                </p>
              </div>
            </div>
          </aside>
        </div>

        <section className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div
            id="about"
            className="animate-rise-in rounded-[2rem] border border-cyan-950/10 bg-white/70 p-6 shadow-[0_18px_50px_-36px_rgba(8,47,73,0.28)] backdrop-blur lg:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-900/60">
              Яагаад бид гэж
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900">
              Тайван мэдрэмж, цэвэр орчин, нарийн төлөвлөгөө.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Манай баг зөвхөн шүд эмчлэхээс гадна айдсыг багасгаж, урт
              хугацааны арчилгааг ойлгомжтой болгоход төвлөрдөг.
            </p>
          </div>

          <div
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            id="services"
          >
            {services.map((service) => (
              <article
                key={service.id}
                className="animate-rise-in rounded-[1.75rem] border border-cyan-950/10 bg-white/72 p-5 shadow-[0_18px_50px_-36px_rgba(8,47,73,0.28)] backdrop-blur transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-900/50">
                  {service.id}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            id="journey"
            className="animate-rise-in rounded-[2rem] border border-cyan-950/10 bg-cyan-950 p-6 text-white shadow-[0_24px_80px_-36px_rgba(8,47,73,0.64)] lg:p-8"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/65">
              Patient Journey
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {visitFlow.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4"
                >
                  <p className="text-sm text-cyan-100/70">0{item.step}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/72">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="contact"
            className="animate-rise-in rounded-[2rem] border border-cyan-950/10 bg-white/72 p-6 shadow-[0_18px_50px_-36px_rgba(8,47,73,0.28)] backdrop-blur lg:p-8"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-900/55">
              Quick Contact
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900">
              Шинэ инээмсэглэлээ өнөөдрөөс эхлүүл.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Цаг авах, үнэ асуух, эсвэл эмчилгээний сонголтоо тодруулах бол
              манай багтай холбогдоорой.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-[1.5rem] border border-cyan-950/10 bg-cyan-50/70 p-4">
                <p className="text-sm text-slate-500">Утас</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  7700 2020
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-cyan-950/10 bg-cyan-50/70 p-4">
                <p className="text-sm text-slate-500">Instagram</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  @aurora.dental
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-cyan-950/10 bg-cyan-50/70 p-4">
                <p className="text-sm text-slate-500">Ажлын цаг</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  Даваа - Бямба, 09:00 - 20:00
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
