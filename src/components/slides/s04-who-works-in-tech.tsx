import { Code2, Megaphone, Palette, Briefcase } from "lucide-react";
import { Eyebrow, Slide, type SlideProps, Title } from "./ui";

const families = [
  {
    icon: Code2,
    name: "Technology",
    study: "Computer science, engineering, data science",
    roles: [
      ["Software developer", "builds apps and programs"],
      ["Web developer", "builds websites"],
      ["AI specialist", "builds smart, learning systems"],
      ["Data analyst", "finds answers in data"],
      ["IT specialist", "keeps systems running"],
    ],
  },
  {
    icon: Palette,
    name: "Design & creativity",
    study: "Graphic design, architecture, fine arts",
    roles: [
      ["UI/UX designer", "makes apps easy to use"],
      ["Graphic designer", "creates the visuals"],
      ["Product designer", "shapes the whole product"],
    ],
  },
  {
    icon: Megaphone,
    name: "Marketing & communication",
    study: "Marketing, communication, media",
    roles: [
      ["Digital marketer", "grows the audience online"],
      ["Content creator", "writes, films and posts"],
      ["Social media specialist", "runs the channels"],
      ["Brand & communication", "shapes how we sound"],
    ],
  },
  {
    icon: Briefcase,
    name: "Business & management",
    study: "Business, management, economics",
    roles: [
      ["Business developer", "finds partners and clients"],
      ["Project coordinator", "keeps work on track"],
      ["Product manager", "decides what to build"],
      ["Operations specialist", "keeps everything running smoothly"],
    ],
  },
];

export default function WhoWorksInTechSlide(p: SlideProps) {
  return (
    <Slide {...p}>
      <Eyebrow>Who works at a tech company?</Eyebrow>
      <Title>You don&apos;t have to code to work in tech</Title>
      <p className="mt-4 text-3xl text-[#5C5472]">A tech company like WeGuide needs four kinds of talent.</p>

      <div className="stagger mt-8 grid flex-1 grid-cols-4 gap-6">
        {families.map(({ icon: Icon, name, study, roles }) => (
          <div key={name} className="flex flex-col rounded-xl border border-[#DDD8F0] bg-white shadow-md">
            <div className="h-[186px] rounded-t-xl bg-[#F5F3FF] p-6">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#6E41F4] text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="text-2xl font-bold leading-snug tracking-tight text-[#1A1530]">{name}</p>
              </div>
              <p className="mt-4 text-lg leading-snug text-[#5C5472]">
                <span className="font-semibold text-[#5B32C7]">Study:</span> {study}
              </p>
            </div>
            <ul className="flex flex-col gap-3 p-6">
              {roles.map(([role, what]) => (
                <li key={role}>
                  <p className="text-xl font-semibold text-[#1A1530]">{role}</p>
                  <p className="text-lg text-[#5C5472]">{what}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="late mt-5 text-lg text-[#9B93B8]">
        Typical roles in technology companies. They are examples, not current openings at WeGuide.
      </p>
    </Slide>
  );
}
