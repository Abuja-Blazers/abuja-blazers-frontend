import Link from "next/link";

import CuratorLink from "@/components/CuratorLink";
import { HeroSection } from "@/components/HeroSection";
import Initials from "@/components/Initials";

export default function CuratorPage() {
  return (
    <div className="bg-grey-800">
      <HeroSection
        eyebrow="Curated by Soul Express"
        mainText="SOUL’S"
        subText="CORNER"
        description="Stories, culture, and unfiltered takes on flag"
        descriptionSubText="football, Abuja, and everything in between."
      />
      <section className="py-50 px-44 flex flex-col gap-73">
        <div className="w-full py-43 px-80 grid grid-cols-[1fr_1.5fr_1fr] items-center border-2 rounded-2xs bg-grey-400 border-stc-400 bg-[linear-gradient(0deg,#111111,#111111),linear-gradient(267.06deg,rgba(255,92,0,0.021)_44.6%,rgba(17,17,17,0.03)_64.33%)] backdrop-blur-[100px]">
          <div className="flex gap-20 items-center">
            <Initials name="Soul Express" className="size-[calc(64px*0.8)]" />
            <div className="flex flex-col">
              <p className="font-label tracking-[.05em] uppercase text-stc-200 text-[.625rem]">
                Content Creator & Founder
              </p>
              <p className="font-title text-grey-200 text-2xl uppercase">SOUL EXPRESSS</p>
            </div>
          </div>
          <p className="font-label tracking-normal text-grey-25 justify-self-center">
            Founder of Soul Express. Writer, flag football enthusiast, and Abuja's most passionate&nbsp;<br></br>sports
            storyteller. Soul's Corner is where the game meets culture.
          </p>
          <Link
            href="https://instagram.com/soul.expresss"
            className="btn max-h-fit bg-stc-800 border-[0.6] border-stc-900 p-10 rounded font-button uppercase justify-self-end"
          >
            Follow Soul
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-16">
          {curatorLinks.map((content, index) => (
            <CuratorLink key={index} content={content} />
          ))}
        </div>
      </section>
    </div>
  );
}

const curatorLinks = [
  {
    link: "",
    type: "Feature",
    tag: "Soul Express",
    title: "Why Flag Football Is The Future Of Nigerian Street Sports",
    description:
      "From dusty pitches to Al-Amin International School field in Maitama, flag football is no longer underground. It's the movement.",
  },
  {
    link: "",
    type: "Interview",
    tag: "Season Recap",
    title: "Inside The Blazers Locker Room, Season 3 Reflections",
    description:
      "From dusty pitches to Al-Amin International School field in Maitama, flag football is no longer underground. It's the movement.",
  },
  {
    link: "",
    type: "Essay",
    tag: "Culture",
    title: "The Soul Of The Game: What The Blazers Mean To Abuja",
    description:
      "From dusty pitches to Al-Amin International School field in Maitama, flag football is no longer underground. It's the movement.",
  },
];
