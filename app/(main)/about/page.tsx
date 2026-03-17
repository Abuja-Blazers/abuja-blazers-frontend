import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import WhatsappJoinImage from "@/app/assets/images/whatsapp.webp";
import Diamond from "@/app/assets/vectors/diamond.svg";
import Divider from "@/app/assets/vectors/divider.svg";
import HandShake from "@/app/assets/vectors/handshake.svg";
import Muscle from "@/app/assets/vectors/muscle.svg";
import Target from "@/app/assets/vectors/target.svg";
import BottomCTA from "@/components/BottomCTA";
import { HeroSection } from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import { SupportCard } from "@/components/SupportCard";

export default function AboutPage() {
  return (
    <div className="bg-grey-800">
      <HeroSection
        eyebrow="Our Story"
        mainText="About"
        subText="Abuja Blazers"
        description="From grassroots movement to Abuja's premier flag football"
        descriptionSubText="team. This is our journey."
      />
      <section className="py-60">
        <div className="w-full max-w-795 p-10">
          <p className="font-heading font-bold text-grey-200">
            Abuja Blazers was founded in 2023 with a simple mission: bring elite flag football to Nigeria's capital and
            build a community around the sport we love.
          </p>
          <p className="font-label font-medium tracking-normal text-grey-250">
            What started as a group of friends playing pickup games in American International School, Abuja (AISA) has
            grown into Abuja's most recognised flag football team, competing at the highest level and representing the
            city with pride.
            <br></br>
            We're more than just athletes. We're community builders, youth mentors, and ambassadors for flag football
            across Nigeria. Every game we play, every practice we run, every piece of merch we sell, it's all about
            growing the sport and bringing people together.
            <br></br>
            Today, the Blazers are ranked #1 in the North Zone, have qualified for the National Flag Football Series,
            and continue to push the boundaries of what's possible for flag football in Nigeria.
          </p>
        </div>
      </section>
      <section className="px-45 py-28 flex flex-col gap-28">
        <SectionHeader eyebrow="Our core values" title="What We Stand For" />
        <div className="py-10">
          <div className="grid grid-cols-4 gap-20">
            {support.map((info, index) => (
              <SupportCard key={index} {...info} />
            ))}
          </div>
        </div>
        <Link href="" className="mx-auto grid place-content-center">
          <Image
            src={WhatsappJoinImage}
            className="h-auto object-cover hover:scale-98 active:scale-98 duration-300 ease-in-out"
            alt=""
            width={995}
          />
        </Link>
      </section>
      <section className="px-45 py-28 flex flex-col gap-28">
        <SectionHeader eyebrow="Our journey" title="The Blazers Timeline" />
        <div className="py-30"></div>
        <div className="py-10 flex flex-col gap-10 max-w-776">
          {timeline.map((timeline, index) => (
            <TimelineItem key={index} title={timeline.title} description={timeline.description} year={timeline.year} />
          ))}
        </div>
      </section>
      <BottomCTA title="Join The Movement" description="">
        <div className="flex gap-10 items-center">
          <Link
            href="/shop"
            className={clsx(
              "btn rounded p-20 font-button uppercase bg-stc-800 border-[.6px] border-stc-900 text-stc-200",
            )}
          >
            Shop the Merch
          </Link>
          <Link
            href="/blazers"
            className={clsx("btn rounded p-20 font-button uppercase border-[1.5px] border-grey-300 bg-grey-400")}
          >
            Meet the Squad
          </Link>
        </div>
      </BottomCTA>
    </div>
  );
}

const TimelineItem = ({ year, title, description }: { year: number; title: string; description: string }) => {
  return (
    <div className="py-8 grid grid-cols-3 gap-36">
      <p className="text-stc-200 text-[2.375rem] font-extrabold font-inter leading-none">{year}</p>
      <Image
        src={Divider}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-49 object-cover rounded-tl-2xs rounded-t-2xs"
      />
      <div className="flex-1 flex flex-col">
        <p className="uppercase font-title-lg text-grey-200">{title}</p>
        <p className="font-label tracking-normal text-grey-25">{description}</p>
      </div>
    </div>
  );
};
const support = [
  {
    icon: <Image src={Diamond} alt="" width={24} className="h-auto object-cover" />,
    title: "Excellence",
    description: "We compete at the highest level and hold ourselves to championship standards.",
  },
  {
    icon: <Image src={HandShake} alt="" width={24} className="h-auto object-cover" />,
    title: "Community",
    description: "We build connections, support each other, and give back to Abuja.",
  },
  {
    icon: <Image src={Muscle} alt="" width={24} className="h-auto object-cover" />,
    title: "Resilience",
    description: "We push through challenges and never back down from competition.",
  },
  {
    icon: <Image src={Target} alt="" width={24} className="h-auto object-cover" />,
    title: "Integrity",
    description: "We play with honor, respect our opponents, and represent Abuja with pride.",
  },
];

const timeline = [
  { year: 2023, title: "Foundation Year", description: "Blazers created." },
  { year: 2024, title: "Expansion", description: "Roster expands to 22 players." },
  { year: 2025, title: "Growth", description: "Abuja Blazers officially formed a new team" },
  {
    year: 2026,
    title: "Growth",
    description: "Launch official merch store. Soul Express joins the team. Launch player transfer market.",
  },
];
