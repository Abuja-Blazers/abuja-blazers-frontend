import clsx from "clsx";
import { ArrowRight, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import BlazersAd from "@/app/assets/images/abuja-blazers-top.webp";
import ShoeAd from "@/app/assets/images/shoe-ad.webp";
import WhatsappJoinImage from "@/app/assets/images/whatsapp.webp";
import BankAccountCard from "@/components/BankAccountCard";
import CollectionCard from "@/components/CollectionCard";
import CuratorLink from "@/components/CuratorLink";
import Initials from "@/components/Initials";
import PlayerCard from "@/components/PlayerCard";
import SectionHeader from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/Table";
import { dummyCollection, playerMarket, players } from "@/utils/data";

import { curatorLinks } from "./curator/page";
import { newsLinks } from "./news/page";

export default function Home() {
  return (
    <div className="pb-20 bg-grey-400">
      <section className="relative min-h-dvh bg-[url('@/app/assets/images/home-background.webp')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative max-w-4xl w-full px-16 lg:px-0">
          <div className="flex flex-col gap-30 items-center">
            <div className="flex flex-col gap-10 items-start lg:items-center">
              <h1 className="flex flex-col lg:flex-row text-[3.25rem] leading-normal font-heading-lg uppercase text-white">
                <span className="whitespace-nowrap">PLAY HARD.&nbsp;</span>
                <span className="whitespace-nowrap">
                  <span className="text-stc-200">BLAZE&nbsp;</span>
                  UP.
                </span>
              </h1>
              <p className="text-grey-200 font-heading leading-24  max-w-554 lg:text-center">
                Flag football, community, culture. The Blazers are redefining the game in Abuja, on and off the field.
              </p>
            </div>
            <div className="flex w-full lg:w-fit items-center gap-19">
              <Link href="https://shop.abujablazers.com" className="btn btn-primary uppercase px-18 py-20" title="Navigate to shop">
                Shop the collection
              </Link>
              <Link href="/blazers" className="btn font-button gap-10" title="Navigate to Squad Information">
                <CircleArrowRight className="size-16 bg-black" />
                <span className="text-grey-200">Meet the Squad</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-dvh px-16 lg:px-45 py-30 lg:py-30 flex flex-col gap-92">
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
            linkHref="https://shop.abujablazers.com"
            linkLabel="View All Products"
          />

          <div className="grid lg:grid-cols-3 gap-20 items-stretch">
            {dummyCollection.map((value, index) => (
              <div key={index} className={clsx("w-full", index === 0 && "col-span-1")}>
                <CollectionCard collection={value} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-50 px-16 lg:px-45 lg:py-50 flex flex-col gap-60">
        <SectionHeader
          eyebrow="The Squad"
          title="Meet the blazers"
          linkHref="/blazers"
          linkLabel="Full Roster"
          description="Athletes. Leaders. Game changers. Get to know the team driving the Blazers to glory."
        />
        <div className="grid gap-y-10 lg:grid-cols-3 lg:gap-y-30 lg:gap-x-20">
          {players.map((player, index) => (
            <PlayerCard key={index} {...player} />
          ))}
        </div>
      </section>

      <section className="lg:min-h-dvh pt-30 px-16 lg:pt-60 lg:px-45 flex flex-col gap-20 lg:gap-70">
        <SectionHeader
          eyebrow="Transfer Market"
          title="Player Market"
          description="Explore available players, submit bids, and track transfer activity in real time."
          linkHref="https://players.abujablazers.com"
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
                <TableCell className="flex gap-10 items-center min-w-300">
                  <Initials name={player.metadata.name} className="size-54 flex items-center justify-center" />
                  <span className="flex flex-col gap-5">
                    <span className="font-heading lg:font-title-lg font-bold! tracking-normal text-grey-200 capitalize">
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
                <TableCell>
                  <StatusBadge text={player.status} />
                </TableCell>
                <TableCell>
                  <Link
                    href={`https://players.abujablazers.com/${player.id}`}
                    className="pointer-events-none btn p-10 inline-flex font-button text-stc-200 font-medium uppercase rounded-[3px] border border-stc-200 min-w-77"
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section className="min-h-dvh py-20 lg:py-0 px-16 lg:px-45 flex flex-col gap-20 lg:gap-92">
        <Link href="" className="mx-auto grid place-content-center">
          <Image
            src={ShoeAd}
            className="h-auto w-233 lg:w-680 object-cover hover:scale-98 active:scale-98 duration-300 ease-in-out"
            alt=""
            width={0}
          />
        </Link>
        <div className="lg:pb-50 flex flex-col gap-73">
          <SectionHeader
            eyebrow="Soul's Corner"
            title="By Soul Express"
            description="Stories, culture, and takes straight from the Soul Express founder."
            linkHref="/curator"
            linkLabel="All Content"
          />
          <div className="grid lg:grid-cols-3 gap-16">
            {curatorLinks.map((content, index) => (
              <CuratorLink key={index} content={content} />
            ))}
          </div>
        </div>
      </section>
      <section className="pb-50 px-16 lg:px-45 flex flex-col gap-73">
        <SectionHeader eyebrow="News & Media" title="The Community" linkHref="/news" linkLabel="All Posts" />
        <div className="grid lg:grid-cols-3 gap-16">
          {newsLinks.map((piece, index) => (
            <CuratorLink key={index} content={piece} />
          ))}
        </div>
      </section>
      <section className="hidden lg:block">
        <Image
          src={BlazersAd}
          alt="Blazers Ad"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-175 object-cover"
        />
      </section>
      <section className="py-30 lg:py-60 px-16 lg:px-45 flex flex-col gap-30 lg:flex-row lg:gap-0 lg:justify-between">
        <SectionHeader
          eyebrow="Support the Team"
          title="Donate to Abuja Blazers"
          description="Help us grow flag football in Nigeria. Every donation supports player development, equipment, and community programs."
        />
        <BankAccountCard />
      </section>
    </div>
  );
}
