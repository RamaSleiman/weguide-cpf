import { Mail } from "lucide-react";
import Network from "./network";
import { Logo, Slide, type SlideProps } from "./ui";

export default function ClosingSlide(p: SlideProps) {
  return (
    <Slide {...p} theme="dark" chrome={false}>
      <Network
        width={640}
        height={760}
        count={58}
        seed={42}
        className="pointer-events-none absolute right-20 top-[160px]"
      />

      <header className="relative">
        <Logo theme="dark" className="h-14 self-start" />
      </header>

      <div className="relative my-auto max-w-[1000px]">
        <p className="text-xl font-semibold uppercase tracking-wider text-[#A3A9FE]">The future is yours</p>
        <p className="mt-8 text-balance text-[84px] font-bold leading-[1.1] tracking-tight text-white">
          The future of work is not something we simply wait for.
        </p>
        <p className="mt-6 text-balance text-[84px] font-bold leading-[1.1] tracking-tight text-[#A3A9FE]">
          It&apos;s something we help build.
        </p>
      </div>

      <div className="stagger relative flex items-center gap-6">
        <p className="text-3xl font-semibold text-white">Questions?</p>
        <div className="flex items-center gap-3">
          <Mail className="h-6 w-6 text-[#A3A9FE]" />
          <span className="text-2xl font-medium text-white">hello@weguideworld.com</span>
        </div>
      </div>
    </Slide>
  );
}
