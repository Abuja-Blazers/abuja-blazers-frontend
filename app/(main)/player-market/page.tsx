"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { CloseIcon } from "yet-another-react-lightbox";

import { HeroSection } from "@/components/HeroSection";
import Initials from "@/components/Initials";
import StatCard from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/Table";
import { formatCompact, playerMarket, PlayerStatus } from "@/utils/data";

const stats = [
  { title: "Listed Players", value: 12, description: "Across All Positions" },
  { title: "Total Market Value", value: "₦4.2M", description: "Combined Listing Value" },
  { title: "Active Bids", value: 12, description: "Currently in Negotiation" },
  { title: "Completed Signings", value: 3, description: "This Season" },
];

export default function PlayerMarketPage() {
  return (
    <Suspense fallback={null}>
      <PlayerMarket />
    </Suspense>
  );
}

function PlayerMarket() {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const status = (searchParams.get("status") ?? "all") as PlayerStatus | "all";
  const filtered = playerMarket
    .filter((p) => status === "all" || p.status === status)
    .filter((p) => p.metadata.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => p.metadata.position.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-grey-400">
      <HeroSection
        eyebrow="Transfer Window Open"
        mainText="Player"
        subText="Market"
        description="Browse available players, submit transfer bids, and track"
        descriptionSubText=" live market activity across Abuja Blazers."
      />
      <section className="py-30 px-16 lg:py-60 lg:px-40 flex flex-col gap-40 lg:gap-70">
        <div className="grid lg:grid-cols-4 gap-20">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-20 lg:items-center">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search players by name or position..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#181818] border border-grey-300 font-button rounded px-20 py-10 text-white placeholder:text-grey-200 outline-none focus:border-stc-900"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-12 top-1/2 -translate-y-1/2">
                <CloseIcon className="size-16 text-icon-inactive" />
              </button>
            )}
          </div>
          <div className="flex gap-10 items-center">
            {[
              { label: "All", href: "all" },
              { label: "Available", href: "available" },
              { label: "Negotiating", href: "negotiating" },
              { label: "Signed", href: "signed" },
            ].map((tab) => (
              <Link
                key={tab.href}
                href={`?status=${tab.href}`}
                scroll={false}
                className={clsx(
                  "btn rounded border border-grey-300 bg-grey-400 p-10 font-button uppercase",
                  status === tab.href && " bg-stc-800 border-[.6px] border-stc-900 text-stc-200",
                )}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Player</TableHead>
              <TableHead>Market Value</TableHead>
              <TableHead>Appearances</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody key={status} className="animate-slide-in">
            {filtered && filtered.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  <div className="flex h-full min-h-[30dvh] w-full flex-col place-content-center items-center gap-y-10 bg-grey-350/20">
                    <span className="text-grey-25 font-label uppercase">No items found.</span>
                  </div>
                </td>
              </tr>
            ) : (
              filtered.map((player, index) => (
                <TableRow key={index}>
                  <TableCell className="flex gap-10 items-center">
                    <Initials name={player.metadata.name} className="size-34" />
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
                    <span className="font-bold text-stc-200 tracking-widest text-[1.313rem]">
                      {formatCompact(1500000)}
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
                      href={`/player-market/${player.id}`}
                      aria-disabled
                      className="pointer-events-none btn p-10 inline-flex font-button text-stc-200 font-medium uppercase rounded-[3px] border border-stc-200 min-w-77"
                    >
                      View
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
