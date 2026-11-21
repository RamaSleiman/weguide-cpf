import { Code2, Lightbulb, PenTool, RefreshCw, Rocket, Sparkles } from "lucide-react";
import { Eyebrow, Slide, type SlideProps, Title } from "./ui";

const steps = [
  {
    icon: Lightbulb,
    name: "Understand the need",
    note: "What problem are we solving, and for whom?",
    roles: ["Product manager", "Business developer"],
  },
  {
    icon: PenTool,
    name: "Design the experience",
    note: "Plan how it looks, feels and works.",
    roles: ["UI/UX designer", "Product designer"],
  },
  {
    icon: Code2,
    name: "Build it",
    note: "Turn designs into working software and 3D worlds.",
    roles: ["Software developer", "Web developer"],
  },
  {
    icon: Sparkles,
    name: "Add AI & data",
    note: "AI turns 1,300+ data points into insights. Code checks every result.",
    roles: ["AI specialist", "Data analyst"],
  },
  {
    icon: Rocket,
    name: "Review & launch",
    note: "A person reviews before release. Then we tell the world.",
    roles: ["Project coordinator", "Marketing specialist"],
  },
];

export default function HowProductsAreMadeSlide(p: SlideProps) {
  return (
    <Slide {...p} theme="tint">
      <Eyebrow>Inside the tech industry</Eyebrow>
      <Title>How a digital product gets made</Title>
      <p className="mt-6 text-3xl leading-relaxed text-[#5C5472]">
        No one builds it alone. Every step needs different people and different skills.
      </p>

      <div className="relative mt-14">
        {/* Connecting line behind the step markers */}
        <div className="grow-x absolute left-[10%] right-[10%] top-10 h-1 rounded-full bg-[#D1C4F7]" />
        <ol className="stagger relative grid grid-cols-5 gap-6">
          {steps.map(({ icon: Icon, name, note, roles }, i) => (
            <li key={name} className="flex flex-col items-center text-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#6E41F4] text-white shadow-md">
                <Icon className="h-9 w-9" />
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F5F3FF] bg-[#1A1530] text-base font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <div className="mt-6 flex w-full flex-1 flex-col rounded-xl border border-[#DDD8F0] bg-white p-6 shadow-md">
                <p className="text-2xl font-semibold tracking-tight text-[#1A1530]">{name}</p>
                <p className="mt-3 text-xl leading-snug text-[#5C5472]">{note}</p>
                <div className="mt-auto flex flex-col gap-2 pt-5">
                  {roles.map((r) => (
                    <span
                      key={r}
                      className="rounded-full bg-[#EDE8FF] px-3 py-1.5 text-lg font-medium text-[#5B32C7]"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="late mt-auto flex items-center gap-5 rounded-xl border border-[#D1C4F7] bg-white px-8 py-5">
        <RefreshCw className="h-8 w-8 shrink-0 text-[#6E41F4]" />
        <p className="text-2xl text-[#1A1530]">
          <span className="font-semibold">Then it starts again:</span> measure how people use it, learn, and improve.
        </p>
      </div>
    </Slide>
  );
}
