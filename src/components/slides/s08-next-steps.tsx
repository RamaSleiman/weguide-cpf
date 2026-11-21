import { BookOpen, Code2, Hammer, MessageSquare, ShieldCheck } from "lucide-react";
import { Eyebrow, Slide, type SlideProps, Title } from "./ui";

const steps = [
  {
    icon: BookOpen,
    name: "Understand how AI works",
    action: "Learn the basics: what AI is, what it can do, and where it fails.",
    tools: ["Elements of AI", "Code.org: How AI Works"],
    week: "Start chapter 1 of Elements of AI. No maths needed.",
  },
  {
    icon: MessageSquare,
    name: "Practise with AI tools",
    action: "Ask AI to explain a topic, quiz you, or give feedback on your work.",
    tools: ["ChatGPT", "Gemini"],
    note: "Check each app's age rules.",
    week: "Ask: “Explain this lesson simply, then quiz me on it.”",
  },
  {
    icon: Code2,
    name: "Learn code & data basics",
    action: "Short courses take you from zero to your first program or chart.",
    tools: ["Harvard CS50", "Kaggle Learn", "Khan Academy"],
    week: "Watch the first lecture of Harvard's CS50.",
  },
  {
    icon: Hammer,
    name: "Build & share something",
    action: "Design an app screen, analyse data you care about, or make a website.",
    tools: ["Figma", "Canva", "Google Sheets"],
    week: "Redesign your favourite app's home screen in Figma.",
  },
];

const rules = [
  ["Check the facts", "AI can sound sure and still be wrong."],
  ["Protect your privacy", "Never share personal information."],
  ["Think for yourself", "Use AI to learn, not to skip learning."],
  ["Be honest", "Say when you used AI."],
];

export default function NextStepsSlide(p: SlideProps) {
  return (
    <Slide {...p} theme="tint">
      <Eyebrow>Your next steps</Eyebrow>
      <Title>How to build AI literacy, starting this week</Title>

      <ol className="stagger mt-8 grid flex-1 grid-cols-4 gap-5">
        {steps.map(({ icon: Icon, name, action, tools, note, week }, i) => (
          <li key={name} className="flex flex-col rounded-xl border border-[#DDD8F0] bg-white p-7 shadow-md">
            <div className="flex items-center justify-between">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#6E41F4] text-white">
                <Icon className="h-7 w-7" />
              </div>
              <span className="text-5xl font-bold leading-none tracking-tight text-[#D1C4F7]">0{i + 1}</span>
            </div>
            <p className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-[#1A1530]">{name}</p>
            <p className="mt-2 text-xl leading-snug text-[#5C5472]">{action}</p>
            <div className="mb-5 mt-5">
              <p className="text-base font-semibold uppercase tracking-wider text-[#9B93B8]">Try (free)</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="rounded-full bg-[#EDE8FF] px-4 py-1.5 text-lg font-medium text-[#5B32C7]">
                    {t}
                  </span>
                ))}
              </div>
              {note && <p className="mt-2 text-base text-[#9B93B8]">{note}</p>}
            </div>
            <div className="mt-auto rounded-lg bg-[#F5F3FF] p-4">
              <p className="text-base font-semibold uppercase tracking-wider text-[#6E41F4]">This week</p>
              <p className="mt-1 text-lg leading-snug text-[#1A1530]">{week}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="late mt-5 rounded-xl border border-[#D1C4F7] bg-white px-8 py-5">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-7 w-7 text-[#6E41F4]" />
          <p className="text-2xl font-bold tracking-tight text-[#1A1530]">Use AI the smart way</p>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-6">
          {rules.map(([rule, why]) => (
            <div key={rule}>
              <p className="text-xl font-semibold text-[#5B32C7]">{rule}</p>
              <p className="mt-1 text-lg leading-snug text-[#5C5472]">{why}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
