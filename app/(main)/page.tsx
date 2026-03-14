import Link from "next/link";
import { ArrowRight, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import WhatsappJoinImage from "@/app/assets/images/whatsapp.webp"
import ShoeAd from "@/app/assets/images/shoe-ad.webp"
import { dummyCollection, playerMarket, players } from "@/utils/data";
import CollectionCard from "@/components/CollectionCard";
import clsx from "clsx";
import SectionHeader from "@/components/SectionHeader";
import PlayerCard from "@/components/PlayerCard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/Table";
import Initials from "@/components/Initials";
import { StatusBadge } from "@/components/StatusBadge";


export default function Home() {
    return (
        <div className="pb-20 bg-grey-400">
            <section className="relative min-h-dvh bg-[url('@/app/assets/images/home-background.webp')] bg-cover bg-center flex items-center justify-center">
                <div className="absolute inset-0 bg-black/80"></div>

                <div className="relative max-w-4xl w-full">
                    <div className="flex flex-col gap-30 items-center">
                        <div className="flex flex-col gap-10 items-center">
                            <h1 className="font-heading-lg uppercase text-white">
                                PLAY HARD. 
                                <span className="text-stc-200">&nbsp;BLAZE&nbsp;</span>
                                 up.
                            </h1>
                            <p className="text-grey-200 font-heading leading-24  max-w-554 text-center">
                                Flag football, community, culture. The Blazers are redefining the game in Abuja,
                                on and off the field.
                            </p>
                        </div>
                        <div className="flex items-center gap-19">
                            <Link
                                href="/shop"
                                className="btn btn-primary uppercase px-18 py-20"
                                title="Navigate to shop"
                            >
                                Shop the collection
                            </Link>
                            <Link
                                href="/blazers"
                                className="btn font-button gap-10"
                                title="Navigate to Squad Information"
                            >
                                <CircleArrowRight className="size-16 bg-black" />
                                <span className="text-grey-200">Meet the Squad</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-dvh py-30 px-45 flex flex-col gap-92">
                <Link href="" className="mx-auto grid place-content-center">
                    <Image
                        src={WhatsappJoinImage}
                        className="h-auto object-cover hover:scale-98 active:scale-98 duration-300 ease-in-out"
                        alt=""
                        width={995}
                    />
                </Link>
                <div className="flex flex-col gap-54">
                    <SectionHeader
                        eyebrow="Official Store"
                        title="Shop the Collection"
                        linkHref="/shop"
                        linkLabel="View All Products"
                    />
                    
                    <div className="grid grid-cols-3 gap-20 items-stretch">
                        {dummyCollection.map((value, index) => (
                            <div
                                key={index}
                                className={clsx("w-full", index === 0 && "col-span-1")}
                            >
                                <CollectionCard collection={value} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-50 px-45 flex flex-col gap-60">
                <SectionHeader
                    eyebrow="The Squad"
                    title="Meet the blazers"
                    linkHref="/blazers"
                    linkLabel="Full Roster"
                    description="Athletes. Leaders. Game changers. Get to know the team driving the Blazers to glory."
                />
                <div className="grid grid-cols-3 gap-y-30 gap-x-20">
                    {players.map((player, index) => (
                        <PlayerCard key={index} {...player} />
                    ))}
                </div>
            </section>

            <section className="min-h-dvh pt-60 px-45 flex flex-col gap-70">
                <SectionHeader
                    eyebrow="Transfer Market"
                    title="Player Market"
                    description="Explore available players, submit bids, and track transfer activity in real time."
                    linkHref="/player-market"
                    linkLabel="All Listings"
                />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Player</TableHead>
                            <TableHead>Appearances</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {playerMarket.map((player, index) => (
                            <TableRow key={index}>
                                <TableCell className="flex gap-10 items-center">
                                    <Initials name={player.metadata.name} className="size-34"/>
                                    <span className="flex flex-col gap-5">
                                        <span className="font-title-lg font-bold tracking-normal text-grey-200 capitalize">
                                            {player.metadata.name}
                                        </span>
                                        <span className="font-label tracking-normal leading-none uppercase text-grey-25">
                                            {player.metadata.position}
                                        </span>
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <span className="font-button tracking-[.01em] text-[#CCCCCC]">{player.appearances}</span>
                                </TableCell>
                                <TableCell><StatusBadge text={player.status} /></TableCell>
                                <TableCell><Link href={`/player-market/${player.id}`} className="btn p-10 inline-flex font-button text-stc-200 font-medium uppercase rounded-[3px] border border-stc-200 min-w-77">View</Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section className="min-h-dvh px-45 flex flex-col gap-92">
                <Link href="" className="mx-auto grid place-content-center">
                    <Image
                        src={ShoeAd}
                        className="h-auto object-cover hover:scale-98 active:scale-98 duration-300 ease-in-out"
                        alt=""
                        width={680}
                    />
                </Link>
                <div className="pb-50 px-45">

                </div>
            </section>
        </div>
    )
}