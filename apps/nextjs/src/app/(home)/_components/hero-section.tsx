import Image from "next/image";

export const HeroSection = () => (
  <section className="container grid place-items-center gap-10 py-20 md:py-32 lg:grid-cols-2">
    <div className="space-y-6 text-center lg:text-start">
      <main className="text-5xl font-bold md:text-6xl">
        <h1 className="inline">
          <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
            NextIQ
          </span>{" "}
        </h1>{" "}
        helps you build your{" "}
        <h2 className="inline">
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
            website
          </span>{" "}
        </h2>
      </main>
      <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
        We are a small team founded by an international and experienced software
        engineer from Madagascar.
        <br />
        <span className="text-xs italic text-muted-foreground">
          "NextIQ: Intelligent Web Solutions!" - chatgpt
        </span>
      </p>
    </div>
    <div>
      <Image
        src="landing.svg"
        alt="logo"
        className="h-[400px] w-[700px]"
        width={700}
        height={400}
      />
    </div>
  </section>
);
