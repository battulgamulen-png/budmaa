import Header from "./_components/Header";

const navLinks = [
  { label: "WHAT WE DO", href: "#experience" },
  { label: "WHO WE ARE", href: "#statement" },
  { label: "OUR WORK", href: "#gallery" },
];

const experienceCards = [
  {
    title: "Dentistry As Artistry",
    text: "With a custom approach to smile design that seamlessly marries digital and analog techniques, the result is more than a makeover; it is a transformation.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600",
  },
  {
    title: "Unmatched In Quality",
    text: "Each smile is brought to life with precision craftsmanship, world-class ceramists, and advanced digital technology.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1600",
  },
  {
    title: "Impossible To Replicate",
    text: "Creating natural, elegant, and highly personalized cosmetic dentistry results that feel uniquely your own.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600",
  },
];

const steps = [
  {
    title: "1. Schedule A Consultation",
    text: "Start your smile journey with a personalized consultation tailored to your goals.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600",
  },
  {
    title: "2. Transform Your Smile",
    text: "Restored teeth should look natural, elegant, balanced, and beautifully integrated.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1600",
  },
  {
    title: "3. Experience The Difference",
    text: "A refined dental experience designed around comfort, clarity, and long-term confidence.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600",
  },
];

const photos = [
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200",
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200",
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200",
];

const locations = [
  {
    city: "New York",
    address: ["30 E 76th St.", "Floor 5", "New York, NY 10021", "212-794-9600"],
  },
  {
    city: "Los Angeles",
    address: [
      "9400 Brighton Way",
      "Suite 301",
      "Beverly Hills, CA 90210",
      "310-601-4288",
    ],
  },
  {
    city: "Miami",
    address: [
      "300 S Biscayne Boulevard",
      "Suite C-202A",
      "Miami, FL 33131",
      "786-245-7968",
    ],
  },
  {
    city: "Dubai",
    address: [
      "63 Al Thanya St, Villa B",
      "Umm Suqeim 2, Jumeirah",
      "Dubai, UAE",
      "+971 47091000",
    ],
  },
];

function BackgroundImage({
  image,
  className,
}: {
  className: string;
  image: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#f7f6f1] text-[#171717]">
      <Header
        links={navLinks}
        ctaHref="#contact"
        ctaLabel="SCHEDULE A CONSULTATION"
      />

      <section className="relative min-h-[38rem] pt-20 sm:min-h-[44rem] sm:pt-24 lg:min-h-[54rem]">
        <BackgroundImage
          image="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=2200"
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/36" />

        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-[1800px] items-end px-5 pb-10 sm:min-h-[calc(100svh-6rem)] sm:px-7 sm:pb-14 lg:px-10 lg:pb-20">
          <div className="max-w-4xl text-white">
            <h1 className="text-[2rem] font-black uppercase leading-[0.93] tracking-[0.08em] sm:text-4xl md:text-5xl xl:text-6xl">
              A New Standard In Dentistry
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 sm:text-xl sm:leading-9 md:mt-6 md:text-2xl">
              It&apos;s not about the teeth; it&apos;s about the life the teeth
              inspire you to live.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex border-b-2 border-white pb-1 text-sm font-black uppercase tracking-[0.2em] sm:mt-9"
            >
              Schedule A Consultation
            </a>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-[#f7f6f1] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-7 lg:px-10">
          <div className="text-center">
            <h2 className="text-2xl font-black uppercase tracking-[0.12em] sm:text-3xl lg:text-4xl">
              Experience A New Kind Of Smile
            </h2>

            <p className="mx-auto mt-4 max-w-5xl text-base leading-7 sm:mt-5 sm:text-lg md:text-xl">
              Traditional craftsmanship meets cutting-edge technology to deliver
              restorative dentistry with natural results and enduring benefits.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-3 md:gap-0">
            {experienceCards.map((card) => (
              <article key={card.title} className="bg-[#f7f6f1]">
                <BackgroundImage
                  image={card.image}
                  className="h-64 w-full bg-cover bg-center sm:h-72 lg:h-[22rem]"
                />

                <div className="px-1 py-6 sm:px-0 sm:py-7">
                  <h3 className="text-[1.65rem] font-black uppercase tracking-[0.1em] lg:text-[2rem]">
                    {card.title}
                  </h3>

                  <p className="mt-4 max-w-[32rem] text-lg leading-relaxed text-black/88">
                    {card.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[34rem] sm:min-h-[42rem] lg:min-h-[52rem]">
        <BackgroundImage
          image="https://images.unsplash.com/photo-1519494080410-f9aa8f52f13e?q=80&w=2200"
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/42" />

        <div className="relative mx-auto flex min-h-[34rem] w-full max-w-[1800px] items-end px-5 py-10 sm:min-h-[42rem] sm:px-7 sm:py-14 lg:min-h-[52rem] lg:px-10 lg:py-20">
          <div className="max-w-[38rem] text-white">
            <h2 className="text-2xl font-black uppercase tracking-[0.1em] sm:text-3xl lg:text-4xl">
              Revolutionizing Modern Dentistry
            </h2>

            <p className="mt-4 text-base leading-7 text-white/92 sm:text-lg sm:leading-8">
              No ordinary office would do because there is nothing ordinary
              about a world-class smile practice. Every detail is designed to
              elevate the experience from functional to unforgettable.
            </p>

            <a
              href="#statement"
              className="mt-8 inline-flex border-b-2 border-white pb-1 text-sm font-black uppercase tracking-[0.2em]"
            >
              About Apa Aesthetic
            </a>
          </div>
        </div>
      </section>

      <section
        id="statement"
        className="bg-[#181818] px-5 py-14 text-center text-white sm:px-7 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px]">
          <h2 className="text-2xl font-black uppercase tracking-[0.12em] sm:text-3xl lg:text-4xl">
            Dentistry Reimagined
          </h2>

          <p className="mx-auto mt-5 max-w-5xl text-base leading-7 text-white/88 sm:mt-6 sm:text-lg sm:leading-8">
            Apa Aesthetic represents the highest echelon of talent from across
            the globe and stands unrivaled in innovation, creativity, and skill.
            Prioritizing both the clinical results and the patient experience,
            the practice offers cosmetic dentistry, reimagined.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-flex border-b-2 border-white pb-2 text-sm font-black uppercase tracking-[0.22em]"
          >
            Schedule A Consultation
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.title}
            className="relative min-h-[26rem] overflow-hidden sm:min-h-[32rem] lg:min-h-[38rem]"
          >
            <BackgroundImage
              image={step.image}
              className="absolute inset-0 bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-black/28" />

            <div className="absolute inset-x-5 bottom-6 text-white sm:inset-x-7 sm:bottom-8 lg:inset-x-10">
              <h3 className="text-[1.75rem] font-black uppercase tracking-[0.08em] lg:text-[2rem]">
                {step.title}
              </h3>

              <p className="mt-4 max-w-[34rem] text-lg leading-relaxed text-white/92">
                {step.text}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section
        id="gallery"
        className="bg-[#f7f6f1] px-5 py-14 sm:px-7 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px]">
          <div className="text-center">
            <h2 className="text-2xl font-black uppercase tracking-[0.12em] sm:text-3xl lg:text-4xl">
              Before And After Photos
            </h2>

            <p className="mx-auto mt-4 max-w-5xl text-base leading-7 sm:mt-5 sm:text-lg">
              Smile makeovers favor careful, nuanced improvements for natural
              results that ensure overall balance and facial harmony.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-8">
            {photos.map((photo, index) => (
              <div key={photo + index} className="relative overflow-hidden">
                <BackgroundImage
                  image={photo}
                  className="h-[18rem] w-full bg-cover bg-center grayscale sm:h-[22rem] lg:h-[24rem]"
                />

                {index === 1 && (
                  <button className="absolute left-1/2 top-1/2 w-[78%] max-w-[22rem] -translate-x-1/2 -translate-y-1/2 bg-black px-4 py-3 text-[0.7rem] font-black uppercase tracking-[0.16em] text-white sm:px-6 sm:py-4 sm:text-xs">
                    See Full Transformation
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="bg-[#181818] px-5 py-14 text-white sm:px-7 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px]">
          <div className="text-center">
            <p className="text-[0.7rem] font-black uppercase tracking-[0.28em] text-white/78 sm:text-sm">
              There&apos;s Only One Apa Aesthetic.
            </p>

            <div className="mt-6 text-[3.6rem] italic tracking-[-0.14em] sm:mt-8 sm:text-7xl">
              apa
              <span className="ml-1 text-[1.15rem] not-italic sm:text-[1.7rem]">
                .
              </span>
              <p className="mt-1 text-[0.62rem] not-italic font-semibold tracking-[0.42em] sm:text-xs">
                AESTHETIC
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 sm:mt-16 sm:grid-cols-2 xl:grid-cols-4">
            {locations.map((item) => (
              <div key={item.city}>
                <h3 className="text-[1.7rem] font-black uppercase tracking-[0.12em]">
                  {item.city}
                </h3>

                <div className="mt-4 space-y-1 text-base leading-8 text-gray-200 sm:text-lg">
                  {item.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

  

          <p className="mt-12 text-center text-xs leading-6 text-gray-400 sm:mt-16 sm:text-sm">
            © 2026 Apa Aesthetic. All Rights Reserved. Privacy Policy.
            Accessibility
          </p>
        </div>
      </footer>
    </main>
  );
}
