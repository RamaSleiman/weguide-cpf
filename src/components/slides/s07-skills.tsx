import { Briefcase, Check, Cpu, HeartHandshake } from "lucide-react";
import CountUp from "./count-up";
import { Eyebrow, Slide, type SlideProps, Title } from "./ui";

const stats = [
  { value: <CountUp to={39} suffix="%" delay={600} />, label: "of today's job skills will change by 2030", source: "WEF 2025" },
  { value: "7 in 10", label: "employers say analytical thinking is essential", source: "WEF 2025" },
  {
    value: <CountUp to={71} suffix="%" delay={800} />,
    label: "of leaders would hire a less-experienced candidate with AI skills over a more experienced one without",
    source: "Microsoft Work Trend Index 2024",
  },
];

const groups = [
  {
    icon: Cpu,
    name: "Technical skills",
    note: "Use technology well",
    skills: ["AI literacy & AI tools", "Digital literacy", "Basic coding concepts", "Data literacy", "Digital platforms & software"],
  },
  {
    icon: HeartHandshake,
    name: "Human skills",
    note: "What technology can't replace",
    skills: ["Critical thinking", "Problem-solving", "Creativity", "Communication", "Adaptability", "Collaboration"],
    highlight: true,
  },
  {
    icon: Briefcase,
    name: "Business skills",
    note: "Get things done",
    skills: ["Project management", "Initiative", "Decision-making", "Understanding business needs", "Time management"],
  },
];

export default function SkillsSlide(p: SlideProps) {
  return (
    <Slide {...p}>
      <Eyebrow>Skills that will set you apart</Eyebrow>
      <Title>What to start building today</Title>

      <div className="mt-8 grid grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.source + s.label} className="flex flex-col rounded-xl bg-[#F5F3FF] px-7 py-6">
            <p className="text-6xl font-bold leading-none tracking-tight text-[#6E41F4]">{s.value}</p>
            <p className="mt-3 text-xl font-medium leading-snug text-[#1A1530]">{s.label}</p>
            <p className="mt-auto pt-2 text-base text-[#9B93B8]">{s.source}</p>
          </div>
        ))}
      </div>

      <div className="stagger mt-6 grid flex-1 grid-cols-3 gap-6">
        {groups.map(({ icon: Icon, name, note, skills, highlight }) => (
          <div
            key={name}
            className={`flex flex-col rounded-xl border bg-white p-7 shadow-md ${
              highlight ? "border-2 border-[#6E41F4]" : "border-[#DDD8F0]"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#6E41F4] text-white">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-[#1A1530]">{name}</p>
                <p className="text-lg text-[#5C5472]">{note}</p>
              </div>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              {skills.map((s) => (
                <li key={s} className="flex items-center gap-3 text-xl text-[#1A1530]">
                  <Check className="h-5 w-5 shrink-0 text-[#6E41F4]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="late mt-5 text-3xl font-semibold text-[#1A1530]">
        Technical skills open the door. <span className="text-[#6E41F4]">Human skills help you grow.</span>
      </p>
    </Slide>
  );
}
