import type { ComponentType } from "react";
import IntroSlide from "./s01-intro";
import WhatWeBuildSlide from "./s02-what-we-build";
import HowProductsAreMadeSlide from "./s03-how-products-are-made";
import WhoWorksInTechSlide from "./s04-who-works-in-tech";
import ForcesShapingTechSlide from "./s05-forces-shaping-tech";
import CareersOfTomorrowSlide from "./s06-careers-of-tomorrow";
import SkillsSlide from "./s07-skills";
import NextStepsSlide from "./s08-next-steps";
import ClosingSlide from "./s09-closing";
import type { SlideProps } from "./ui";

export type SlideDef = { id: string; component: ComponentType<SlideProps> };

// Add slides here in presentation order.
export const slides: SlideDef[] = [
  { id: "intro", component: IntroSlide },
  { id: "what-we-build", component: WhatWeBuildSlide },
  { id: "how-products-are-made", component: HowProductsAreMadeSlide },
  { id: "who-works-in-tech", component: WhoWorksInTechSlide },
  { id: "forces-shaping-tech", component: ForcesShapingTechSlide },
  { id: "careers-of-tomorrow", component: CareersOfTomorrowSlide },
  { id: "skills", component: SkillsSlide },
  { id: "next-steps", component: NextStepsSlide },
  { id: "closing", component: ClosingSlide },
];
