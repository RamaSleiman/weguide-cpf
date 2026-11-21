import type { CSSProperties } from "react";
import { BarChart3, Bot, Cloud, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import CountUp from "./count-up";
import { Eyebrow, Slide, type SlideProps, Title } from "./ui";

const forces = [
  { icon: Sparkles, name: "Artificial intelligence", note: "Software that can learn, write and spot patterns." },
  { icon: Bot, name: "Automation", note: "Machines and software take over repetitive tasks." },
  { icon: BarChart3, name: "Data-driven decisions", note: "Companies decide using evidence, not guesses." },
  { icon: Cloud, name: "Cloud computing", note: "Apps and data live online, available anywhere." },
  { icon: ShieldCheck, name: "Cybersecurity", note: "Protecting people and data from attacks." },
  { icon: Smartphone, name: "Digital transformation", note: "Banks, hospitals and shops are all moving online." },
];

const jobs = [
  { label: "Jobs created", value: "170M", width: "100%", bar: "bg-[#6E41F4]", delay: "900ms" },
  { label: "Jobs displaced", value: "92M", width: `${(92 / 170) * 100}%`, bar: "bg-[#D1C4F7]", delay: "1150ms" },
];

export default function ForcesShapingTechSlide(p: SlideProps) {
  return (
    <Slide {...p}>
      <Eyebrow>The future of technology</Eyebrow>
      <Title>The forces shaping tech</Title>

      <div className="mt-10 grid flex-1 grid-cols-[1.7fr_1fr] gap-10">
        {/* Six forces */}
        <div className="stagger grid grid-cols-3 grid-rows-2 gap-5">
          {forces.map(({ icon: Icon, name, note }) => (
            <div key={name} className="flex flex-col rounded-xl border border-[#DDD8F0] bg-white p-7 shadow-md">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#EDE8FF] text-[#6E41F4]">
                <Icon className="h-7 w-7" />
              </div>
              <p className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-[#1A1530]">{name}</p>
              <p className="mt-2 text-xl leading-snug text-[#5C5472]">{note}</p>
            </div>
          ))}
        </div>

        {/* Evidence */}
        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-[#6E41F4] bg-[#6E41F4] p-8 shadow-md">
            <p className="text-[88px] font-bold leading-none tracking-tight text-white">
              <CountUp to={86} suffix="%" delay={700} />
            </p>
            <p className="mt-4 text-2xl font-semibold leading-snug text-white">
              of employers expect AI and information processing to transform their business by 2030
            </p>
          </div>

          <div className="flex flex-1 flex-col rounded-xl border border-[#DDD8F0] bg-white p-8 shadow-md">
            <p className="text-xl font-semibold uppercase tracking-wider text-[#9B93B8]">Jobs worldwide by 2030</p>
            <div className="mt-5 flex flex-col gap-4">
              {jobs.map((j) => (
                <div key={j.label}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl text-[#5C5472]">{j.label}</span>
                    <span className="text-2xl font-bold text-[#1A1530]">{j.value}</span>
                  </div>
                  <div className="mt-2 h-4 rounded-full bg-[#F5F3FF]">
                    <div
                      className={`grow-x h-4 rounded-full ${j.bar}`}
                      style={{ width: j.width, "--d": j.delay } as CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-auto pt-5 text-4xl font-bold tracking-tight text-[#6E41F4]">
              +78M <span className="text-2xl font-semibold text-[#1A1530]">net new jobs</span>
            </p>
          </div>
        </div>
      </div>

      <div className="late mt-6 flex items-baseline justify-between gap-8">
        <p className="text-3xl font-semibold text-[#1A1530]">
          Jobs aren&apos;t disappearing. <span className="text-[#6E41F4]">They&apos;re changing.</span>
        </p>
        <p className="shrink-0 text-lg text-[#9B93B8]">Source: World Economic Forum, Future of Jobs Report 2025</p>
      </div>
    </Slide>
  );
}
