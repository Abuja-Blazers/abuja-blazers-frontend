"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import PhotoOne from "@/app/assets/images/2do.webp"
import Bari from "@/app/assets/images/bari.webp"
import Edmonson from "@/app/assets/images/edmonson.webp"
import Gorilla from "@/app/assets/images/gorilla.webp"
import Jennifer from "@/app/assets/images/jennifer.webp"
import KT from "@/app/assets/images/kayt.webp"
import Mizu from "@/app/assets/images/mizu.webp"
import Ogbuo from "@/app/assets/images/ogbuo.webp"
import Prof from "@/app/assets/images/prof.webp"
import Socrates from "@/app/assets/images/socrates.webp"
import Soul from "@/app/assets/images/soul.webp"
import Vava from "@/app/assets/images/vava.webp"
import Zedd from "@/app/assets/images/zedd.webp"
import { HeroSection } from "@/components/HeroSection";
import Initials from "@/components/Initials";
import MemberCard from "@/components/MemberCard";
import { Suspense } from "react";

export default function BlazersSquadPage() {
  return (
    <div className="bg-grey-800">
      <HeroSection
        eyebrow="season 2025"
        mainText="The"
        subText="Squad"
        description="Meet the athletes powering Abuja Blazers. 22"
        descriptionSubText="players. One goal. Dominate."
      />
      <section className="px-16 lg:px-45 py-30 lg:y-50 flex flex-col gap-30 lg:gap-73">
        <div className="w-full py-20 lg:py-43 px-20 lg:px-80 grid gap-15 lg:gap-0 lg:grid-cols-[1fr_1.5fr_1fr] items-center border-2 rounded-2xs bg-grey-400 border-stc-400 bg-[linear-gradient(0deg,#111111,#111111),linear-gradient(267.06deg,rgba(255,92,0,0.021)_44.6%,rgba(17,17,17,0.03)_64.33%)] backdrop-blur-[100px]">
          <div className="flex gap-20 items-center">
            <Initials name="G Sent" className="size-[calc(64px*0.8)]" />
            <div className="flex flex-col">
              <p className="font-label tracking-[.05em] uppercase text-stc-200 text-[.625rem]">Team Captain</p>
              <p className="font-title text-grey-200 text-2xl uppercase">G Sent</p>
              <p className="font-label-xs  text-grey-25">Quarterback · #12</p>
            </div>
          </div>
          <div className="justify-self-center">
            <PlayerStats
              stats={{
                games: 6,
                tds: 4,
                accuracy: 79,
                seasons: 1,
              }}
            />
          </div>
          <Link
            href="https://players.abujablazers.com"
            className="btn max-h-fit bg-stc-800 border-[0.6] border-stc-900 p-10 rounded font-button uppercase justify-self-end"
          >
            View Profile
          </Link>
        </div>
        <Suspense fallback={null}>
            <PlayerFilterTabs />
        </Suspense>
      </section>
    </div>
  );
}

const PlayerFilterTabs = () => {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") ?? "all";

  const filtered = members.filter((m) => {
    if (activeTab === "all") return true;
    if (activeTab === "offense") return m.tag.includes("Offensive");
    if (activeTab === "defense") return m.tag.includes("Defensive");
    return true;
  });

  return (
    <div className="flex gap-20 flex-col overflow-hidden">
      <div className="flex gap-20">
        {[
          { label: "All Players", href: "all" },
          { label: "Offense", href: "offense" },
          { label: "Defense", href: "defense" },
        ].map((tab) => (
          <Link
            key={tab.href}
            href={`?tab=${tab.href}`}
            scroll={false}
            className={clsx(
              "btn rounded border border-grey-300 bg-grey-400 p-10 font-button uppercase",
              activeTab === tab.href && " bg-stc-800 border-[.6px] border-stc-900 text-stc-200",
            )}
          >
            {tab.label}
          </Link>
        ))}
      </div>
      <div key={activeTab} className="grid lg:grid-cols-4 gap-x-20 gap-y-50 animate-slide-in">
        {filtered.map((m, index) => (
          <MemberCard key={index} member={m.member} />
        ))}
      </div>
    </div>
  );
};

const PlayerStats = ({ stats }: { stats: { games: number; tds: number; accuracy: number; seasons: 1 } }) => {
  return (
    <div className="flex gap-20 items-center">
      <div className="flex flex-col">
        <p className="font-inter text-[2.5rem] font-semibold tracking-[-0.07em] uppercase text-stc-200">
          {stats.games}
        </p>
        <p className="font-label-xs font-medium text-grey-25 uppercase">Games</p>
      </div>
      <div className="flex flex-col">
        <p className="font-inter text-[2.5rem] font-semibold tracking-[-0.07em] uppercase text-stc-200">{stats.tds}</p>
        <p className="font-label-xs font-medium text-grey-25 uppercase">TDS</p>
      </div>
      <div className="flex flex-col">
        <p className="font-inter text-[2.5rem] font-semibold tracking-[-0.07em] uppercase text-stc-200">
          {stats.accuracy}%
        </p>
        <p className="font-label-xs font-medium text-grey-25 uppercase">Accuracy</p>
      </div>
      <div className="flex flex-col">
        <p className="font-inter text-[2.5rem] font-semibold tracking-[-0.07em] uppercase text-stc-200">
          {stats.seasons}
        </p>
        <p className="font-label-xs font-medium text-grey-25 uppercase">Seasons</p>
      </div>
    </div>
  );
};



const members = [
  {
    member: {
      name: "Koumei",
      jerseyName: "KT",
      jerseyNum: 21,
      image: KT,
      value: 21,
      position: "Quarterback",
      secondaryPosition: "Right Corner",
    },
    tag: ["All", "Offensive", "Defensive"],
  },
  {
    member: {
      name: "Abimbola Odunmbaku",
      jerseyName: "Bimbo",
      jerseyNum: 66,
      image: null,
      value: 66,
      position: "Right Corner",
      secondaryPosition: "WR (X)",
    },
    tag: ["All", "Defensive", "Offensive"],
  },
  {
    member: {
      name: "Valerie",
      jerseyName: "Valedictorian",
      jerseyNum: 1,
      image: Vava,
      value: 1,
      position: "Left Corner",
      secondaryPosition: "Center",
    },
    tag: ["All", "Defensive"],
  },
  {
    member: {
      name: "Barry G",
      jerseyName: "BARí",
      jerseyNum: 30,
      image: Bari,
      value: 30,
      position: "Left Corner",
      secondaryPosition: "Right Corner",
    },
    tag: ["All", "Defensive"],
  },
  {
    member: {
      name: "Oore-ofe",
      jerseyName: "OA PROF",
      jerseyNum: 6,
      image: Prof,
      value: 6,
      position: "Center",
      secondaryPosition: "Left Corner",
    },
    tag: ["All", "Offensive", "Defensive"],
  },
  {
    member: {
      name: "Mansur A",
      jerseyName: "AMAZ",
      jerseyNum: 10,
      image: null,
      value: 10,
      position: "WR (A or Y)",
      secondaryPosition: null,
    },
    tag: ["All", "Defensive"],
  },
  {
    member: {
      name: "David",
      jerseyName: "2do",
      jerseyNum: 9,
      image: PhotoOne,
      value: 9,
      position: "WR (Z)",
      secondaryPosition: null,
    },
    tag: ["All", "Offensive"],
  },
  {
    member: {
      name: "Godsent N",
      jerseyName: "Gsent",
      jerseyNum: 12,
      image: null,
      value: 12,
      position: "QB",
      secondaryPosition: "WR",
    },
    tag: ["All", "Offensive"],
  },
  {
    member: {
      name: "Olaoluwanis",
      jerseyName: "SOCRATES",
      jerseyNum: 44,
      image: Socrates,
      value: 44,
      position: "WR (Z)",
      secondaryPosition: "Right Safety",
    },
    tag: ["All", "Offensive", "Defensive"],
  },
  {
    member: {
      name: "Shepuya",
      jerseyName: "MIZU (SAMURAI)",
      jerseyNum: 11,
      image: Mizu,
      value: 11,
      position: "WR (H)",
      secondaryPosition: null,
    },
    tag: ["All", "Offensive"],
  },
  {
    member: {
      name: "Ali",
      jerseyName: "Ali Jr",
      jerseyNum: 23,
      image: null,
      value: 23,
      position: "WR (A)",
      secondaryPosition: null,
    },
    tag: ["All", "Offensive"],
  },
  {
    member: {
      name: "Toluwalashe",
      jerseyName: "AIRAZAQ",
      jerseyNum: 18,
      image: null,
      value: 18,
      position: "WR (H)",
      secondaryPosition: null,
    },
    tag: ["All", "Offensive"],
  },
  {
    member: {
      name: "Nnamdi",
      jerseyName: "Nnamdi",
      jerseyNum: 17,
      image: null,
      value: 17,
      position: "Rusher",
      secondaryPosition: null,
    },
    tag: ["All", "Defensive"],
  },
  {
    member: {
      name: "Amarachi Obi",
      jerseyName: "Amie",
      jerseyNum: 8,
      image: null,
      value: 8,
      position: "Center",
      secondaryPosition: null,
    },
    tag: ["All", "Offensive"],
  },
  {
    member: {
      name: "Judy Ogbuo",
      jerseyName: "Judy",
      jerseyNum: 27,
      image: Ogbuo,
      value: 27,
      position: "Safety",
      secondaryPosition: null,
    },
    tag: ["All", "Offensive", "Defensive"],
  },
  {
    member: {
      name: "Shedrach E",
      jerseyName: "ShadraQ",
      jerseyNum: 3,
      image: null,
      value: 3,
      position: "WR (Y)",
      secondaryPosition: null,
    },
    tag: ["All", "Offensive"],
  },
  {
    member: {
      name: "Edmonson",
      jerseyName: "Edmonson",
      jerseyNum: 88,
      image: Edmonson,
      value: 88,
      position: "WR (Y)",
      secondaryPosition: null,
    },
    tag: ["All", "Offensive"],
  },
  {
    member: {
      name: "Temitope Fayanjuola",
      jerseyName: "T. Forge",
      jerseyNum: 7,
      image: null,
      value: 7,
      position: "Rusher",
      secondaryPosition: null,
    },
    tag: ["All", "Offensive"],
  },
  {
    member: {
      name: "Soul",
      jerseyName: "Soul",
      jerseyNum: 19,
      image: Soul,
      value: 19,
      position: "WR (H)",
      secondaryPosition: "MLB",
    },
    tag: ["All", "Offensive", "Defensive"],
  },
  {
    member: {
      name: "Alex Gideon",
      jerseyName: "Bhig ALEX",
      jerseyNum: 111,
      image: null,
      value: 111,
      position: "QB",
      secondaryPosition: "Right Safety",
    },
    tag: ["All", "Offensive", "Defensive"],
  },
  {
    member: {
      name: "James B",
      jerseyName: "James B",
      jerseyNum: 4,
      image: null,
      value: 4,
      position: "WR (Z)",
      secondaryPosition: "Rusher",
    },
    tag: ["All", "Offensive"],
  },
  {
    member: {
      name: "Usang Asim",
      jerseyName: "Lord Flacko",
      jerseyNum: 96,
      image: null,
      value: 96,
      position: "Rusher",
      secondaryPosition: "Rusher",
    },
    tag: ["All", "Defensive"],
  },
  {
    member: {
      name: "Melchizedek Odeh",
      jerseyName: "Zedd",
      jerseyNum: 5,
      image: Zedd,
      value: 5,
      position: "Right Corner",
      secondaryPosition: "Left Corner",
    },
    tag: ["All", "Defensive"],
  },
  {
    member: {
      name: "Jennifer Okhiria",
      jerseyName: "JENNIFER",
      jerseyNum: 8,
      image: Jennifer,
      value: 8,
      position: "Center",
      secondaryPosition: "R/L Corner",
    },
    tag: ["All", "Defensive"],
  },
  {
    member: {
      name: "Abdul Hafiz",
      jerseyName: "Gorilla",
      jerseyNum: 14,
      image: Gorilla,
      value: 14,
      position: "WR (A)",
      secondaryPosition: "Safety",
    },
    tag: ["All", "Offensive", "Defensive"],
  },
  {
    member: {
      name: "Achema Okpanachi",
      jerseyName: "SILVERBACK ARCHI",
      jerseyNum: 33,
      image: null,
      value: 33,
      position: "WR (H)",
      secondaryPosition: "WR (C)",
    },
    tag: ["All", "Offensive"],
  },
  {
    member: {
      name: "Reni Olorunda",
      jerseyName: "Renz",
      jerseyNum: 9,
      image: null,
      value: 9,
      position: "WR (H)",
      secondaryPosition: "WR (C)",
    },
    tag: ["All", "Offensive"],
  },
  {
    member: {
      name: "Jasim Usman",
      jerseyName: "Jasim",
      jerseyNum: 2,
      image: null,
      value: 2,
      position: "WR (H)",
      secondaryPosition: null,
    },
    tag: ["All", "Offensive"],
  },
];