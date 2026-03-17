"use client";

import { HeroSection } from "@/components/HeroSection";
import Initials from "@/components/Initials";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PhotoOne from "@/app/assets/images/meet-placeholder-01.jpg"
import PhotoTwo from "@/app/assets/images/meet-placeholder-02.jpg"
import PhotoThree from "@/app/assets/images/meet-placeholder-03.jpg"
import PhotoFour from "@/app/assets/images/meet-placeholder-04.jpg"
import MemberCard from "@/components/MemberCard";

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
                            <p className="font-label tracking-[.05em] uppercase text-stc-200 text-[.625rem]">
                                Team Captain
                            </p>
                            <p className="font-title text-grey-200 text-2xl uppercase">G Sent</p>
                            <p className="font-label-xs  text-grey-25">
                                Quarterback · #1
                            </p>
                        </div>
                    </div>
                    <div className="justify-self-center">
                        <PlayerStats
                            stats={{
                                games: 6,
                                tds: 4,
                                accuracy: 79,
                                seasons: 1
                            }}
                        />
                    </div>
                    <Link
                        href="/player-market"
                        className="btn max-h-fit bg-stc-800 border-[0.6] border-stc-900 p-10 rounded font-button uppercase justify-self-end"
                    >
                        View Profile
                    </Link>
                </div>
                <PlayerFilterTabs />
            </section>
        </div>
    )
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
                    { label: "Defense", href: "defense" }
                ].map((tab) => (
                    <Link key={tab.href} href={`?tab=${tab.href}`} scroll={false} className={clsx("btn rounded border border-grey-300 bg-grey-400 p-10 font-button uppercase", activeTab === tab.href && " bg-stc-800 border-[.6px] border-stc-900 text-stc-200")}>
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

const PlayerStats = ({ stats }: { stats: {games: number, tds: number, accuracy: number, seasons: 1 }}) => {
    return (
        <div className="flex gap-20 items-center">
            <div className="flex flex-col">
                <p className="font-inter text-[2.5rem] font-semibold tracking-[-0.07em] uppercase text-stc-200">{stats.games}</p>
                <p className="font-label-xs font-medium text-grey-25 uppercase">Games</p>
            </div>
            <div className="flex flex-col">
                <p className="font-inter text-[2.5rem] font-semibold tracking-[-0.07em] uppercase text-stc-200">{stats.tds}</p>
                <p className="font-label-xs font-medium text-grey-25 uppercase">TDS</p>
            </div>
            <div className="flex flex-col">
                <p className="font-inter text-[2.5rem] font-semibold tracking-[-0.07em] uppercase text-stc-200">{stats.accuracy}%</p>
                <p className="font-label-xs font-medium text-grey-25 uppercase">Accuracy</p>
            </div>
            <div className="flex flex-col">
                <p className="font-inter text-[2.5rem] font-semibold tracking-[-0.07em] uppercase text-stc-200">{stats.seasons}</p>
                <p className="font-label-xs font-medium text-grey-25 uppercase">Seasons</p>
            </div>
        </div>
    )
}

const members = [
    { 
        member: {
            name: "Judy",
            image: PhotoOne,
            value: 15,
            position: "Wide Receiver",
            stats: {
                games: 6,
                tds: 12,
                yards: 343
            }
        },
        tag: ["All", "Offensive"]
    },
    { 
        member: {
            name: "Ali J",
            image: PhotoTwo,
            value: 15,
            position: "Wide Receiver",
            stats: {
                games: 6,
                tds: 12,
                yards: 343
            }
        },
        tag: ["All", "Defensive"]
    },
    { 
        member: {
            name: "Valerie",
            image: PhotoThree,
            value: 15,
            position: "Wide Receiver",
            stats: {
                games: 6,
                tds: 12,
                yards: 343
            }
        },
        tag: ["All", "Offensive"]
    },
    { 
        member: {
            name: "Olaolu",
            image: PhotoFour,
            value: 15,
            position: "Wide Receiver",
            stats: {
                games: 6,
                tds: 12,
                yards: 343
            }
        },
        tag: ["All", "Defensive"]
    },
    { 
        member: {
            name: "Ore",
            image: PhotoOne,
            value: 15,
            position: "Wide Receiver",
            stats: {
                games: 6,
                tds: 12,
                yards: 343
            }
        },
        tag: ["All", "Offensive"]
    },
    { 
        member: {
            name: "Mansur",
            image: PhotoTwo,
            value: 15,
            position: "Wide Receiver",
            stats: {
                games: 6,
                tds: 12,
                yards: 343
            }
        },
        tag: ["All", "Defensive"]
    },
    { 
        member: {
            name: "Mizu",
            image: PhotoThree,
            value: 15,
            position: "Wide Receiver",
            stats: {
                games: 6,
                tds: 12,
                yards: 343
            }
        },
        tag: ["All", "Offensive"]
    },
    { 
        member: {
            name: "Valerie",
            image: PhotoFour,
            value: 15,
            position: "Wide Receiver",
            stats: {
                games: 6,
                tds: 12,
                yards: 343
            }
        },
        tag: ["All", "Offensive"]
    },
]