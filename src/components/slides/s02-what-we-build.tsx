import { Box, Database, LayoutDashboard, Sparkles } from "lucide-react";
import CountUp from "./count-up";
import Network from "./network";
import { Eyebrow, Slide, type SlideProps, Title } from "./ui";

const capabilities = [
  {
    icon: Box,
    name: "Immersive 3D worlds",
    note: "Real-time 3D that runs straight in the web browser, with no download, tuned to run smoothly even on low-end laptops.",
  },
  {
    icon: Sparkles,
    name: "AI‑powered insights",
    note: "AI turns 1,300+ data points into clear, personalised reports, checked automatically and reviewed by a person before release.",
  },
  {
    icon: Database,
    name: "Secure cloud data",
    note: "A cloud database where every user can only access their own data. Privacy is designed in from day one.",
  },
  {
    icon: LayoutDashboard,
    name: "Smart web platform",
    note: "One platform with dedicated dashboards for different user roles, plus real-time notifications.",
  },
];

export default function WhatWeBuildSlide(p: SlideProps) {
  return (
    <Slide {...p}>
      <div className="pointer-events-none absolute right-0 top-0">
        <Network width={620} height={420} count={34} seed={21} className="opacity-60" />
      </div>

      <div className="relative grid flex-1 grid-cols-[1fr_1.35fr] gap-16">
        {/* Left: message */}
        <div className="flex flex-col">
          <Eyebrow>What we build</Eyebrow>
          <Title>Technology that turns data into decisions</Title>
          <p className="mt-8 text-3xl leading-relaxed text-[#5C5472]">
            We combine 3D, AI and cloud technology to help people make better, data-driven decisions.
          </p>

          <div className="mt-auto rounded-xl border border-[#D1C4F7] bg-[#F5F3FF] p-8">
            <p className="text-[96px] font-bold leading-none tracking-tight text-[#6E41F4]">
              <CountUp to={1300} suffix="+" />
            </p>
            <p className="mt-4 text-2xl font-semibold text-[#1A1530]">data points analysed with AI</p>
            <p className="mt-2 text-xl text-[#5C5472]">Built with young users in mind.</p>
          </div>
        </div>

        {/* Right: capabilities */}
        <div className="stagger grid grid-cols-2 gap-6 self-end">
          {capabilities.map(({ icon: Icon, name, note }) => (
            <div key={name} className="flex flex-col rounded-xl border border-[#DDD8F0] bg-white p-8 shadow-md">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#6E41F4] text-white">
                <Icon className="h-8 w-8" />
              </div>
              <p className="mt-6 text-3xl font-semibold tracking-tight text-[#1A1530]">{name}</p>
              <p className="mt-3 text-2xl leading-snug text-[#5C5472]">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
