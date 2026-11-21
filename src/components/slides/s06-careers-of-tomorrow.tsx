import { BrainCircuit, ChartLine, Code2, Database, Lock, MousePointerClick, TrendingUp } from "lucide-react";
import { Eyebrow, Slide, type SlideProps, Title } from "./ui";

const careers = [
  {
    icon: BrainCircuit,
    name: "AI & machine learning specialist",
    does: "Builds systems that learn from data.",
    why: "AI is moving into every industry.",
  },
  {
    icon: Database,
    name: "Big data specialist",
    does: "Organises huge amounts of information.",
    why: "Every app and company creates massive data.",
  },
  {
    icon: Code2,
    name: "Software & app developer",
    does: "Writes the code behind apps and websites.",
    why: "Every company needs digital products.",
  },
  {
    icon: Lock,
    name: "Security specialist",
    does: "Protects systems and data from hackers.",
    why: "More life online means more attacks.",
  },
  {
    icon: MousePointerClick,
    name: "UI/UX designer",
    does: "Designs apps that are simple and enjoyable to use.",
    why: "People quit apps that confuse them.",
  },
  {
    icon: ChartLine,
    name: "Data analyst",
    does: "Turns numbers into answers and decisions.",
    why: "Companies want evidence, not guesses.",
  },
];

export default function CareersOfTomorrowSlide(p: SlideProps) {
  return (
    <Slide {...p} theme="tint">
      <Eyebrow>Careers of tomorrow</Eyebrow>
      <Title>Some of the fastest-growing jobs to 2030</Title>

      <div className="stagger mt-8 grid flex-1 grid-cols-3 grid-rows-2 gap-5">
        {careers.map(({ icon: Icon, name, does, why }) => (
          <div key={name} className="flex flex-col rounded-xl border border-[#DDD8F0] bg-white p-7 shadow-md">
            <div className="flex items-center gap-4">
              <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#6E41F4] text-white">
                <Icon className="h-7 w-7" />
              </div>
              <p className="text-2xl font-semibold leading-snug tracking-tight text-[#1A1530]">{name}</p>
            </div>
            <dl className="mt-5 flex flex-col gap-3 text-xl leading-snug">
              <div>
                <dt className="text-base font-semibold uppercase tracking-wider text-[#9B93B8]">What they do</dt>
                <dd className="mt-1 text-[#1A1530]">{does}</dd>
              </div>
              <div>
                <dt className="text-base font-semibold uppercase tracking-wider text-[#9B93B8]">Why it matters</dt>
                <dd className="mt-1 text-[#5C5472]">{why}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      <div className="late mt-5 flex items-center gap-6 rounded-xl border border-[#6E41F4] bg-[#6E41F4] px-8 py-5 shadow-md">
        <TrendingUp className="h-9 w-9 shrink-0 text-white" />
        <p className="text-2xl text-white">
          <span className="font-bold">#1 fastest-growing job in the US: AI engineer.</span>{" "}
          <span className="text-[#EDE8FF]">Many of the fastest-growing roles are about building and using AI.</span>
        </p>
      </div>

      <p className="late mt-3 text-lg text-[#9B93B8]">
        Sources: World Economic Forum, Future of Jobs Report 2025 · LinkedIn, Jobs on the Rise 2026
      </p>
    </Slide>
  );
}
