import Network from "./network";
import { Logo, Slide, type SlideProps } from "./ui";

const hubs = [
  { x: 380, y: 110, label: "AI" },
  { x: 130, y: 330, label: "Data" },
  { x: 600, y: 360, label: "3D worlds" },
  { x: 250, y: 600, label: "Cloud" },
  { x: 590, y: 640, label: "Design" },
];

const facts = ["Founded 2026", "Beirut, Lebanon", "1,300+ data points"];

export default function IntroSlide(p: SlideProps) {
  return (
    <Slide {...p} theme="dark" chrome={false}>
      <Network
        hubs={hubs}
        width={720}
        height={760}
        count={60}
        className="pointer-events-none absolute right-24 top-[220px]"
      />

      <header className="relative flex items-center justify-between">
        <Logo theme="dark" className="h-14" />
        <p className="text-xl font-medium text-[#A3A9FE]">CPF Future Careers Forum · 28 November 2026</p>
      </header>

      <div className="relative my-auto max-w-[900px]">
        <p className="text-xl font-semibold uppercase tracking-wider text-[#A3A9FE]">Technology company · Beirut</p>
        <h1 className="mt-6 text-[112px] font-bold leading-none tracking-tight text-white">
          Turning data into direction.
        </h1>
        <p className="mt-10 text-3xl leading-relaxed text-[#D1C4F7]">
          WeGuide builds immersive 3D web experiences and AI‑powered tools that turn data into better decisions.
        </p>
      </div>

      <ul className="stagger relative flex gap-4">
        {facts.map((f) => (
          <li
            key={f}
            className="rounded-full border border-[#6E41F4]/60 bg-white/5 px-7 py-3 text-2xl font-medium text-white"
          >
            {f}
          </li>
        ))}
      </ul>
    </Slide>
  );
}
