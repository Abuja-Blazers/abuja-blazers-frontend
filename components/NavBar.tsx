"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import BlazersLogo from "@/app/assets/vectors/blazers-logo.svg";

const links = [
  { label: "The Squad", route: "https://abujablazers.com/blazers" },
  { label: "Merch Store", route: "https://shop.abujablazers.com" },
  { label: "Player Market", route: "https://players.abujablazers.com" },
  { label: "Soul's corner", route: "https://abujablazers.com/curator" },
  { label: "News & Media", route: "https://abujablazers.com/news" },
  { label: "Donate", route: "https://abujablazers.com/donate" },
]

export const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (route: string) => {
    if (route.startsWith('http')) {
      return typeof window !== 'undefined' && window.location.href.startsWith(route)
    }
    return pathname === route
  }

  return (
    <>
      <nav className="bg-grey-800 relative z-50">
        <div className="px-16 lg:px-30 mx-auto flex items-center justify-between">
          <Link href="https://abujablazers.com/">
            <Image src={BlazersLogo} alt="Blazers Logo" width={68} className="object-cover h-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-40 py-12">
            <div className="flex items-center gap-20">
              {links.map(({ label, route }) => (
                <Link
                  key={route}
                  href={route}
                  className={clsx(
                    "btn p-10 h-40 inline-flex font-button hover:text-stc-200 font-medium uppercase",
                    isActive(route) ? "text-stc-200" : "text-grey-250",
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>
            <button className="btn font-button p-10 btn-primary hover:btn-primary-hover uppercase">Get Tickets</button>
          </div>

          <button
            className="lg:hidden flex flex-col justify-center items-center size-40 gap-5"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={clsx(
                "block h-1.5 w-24 bg-[#F24822] transition-all duration-300 origin-center",
                open && "translate-y-6.5 rotate-45",
              )}
            />
            <span
              className={clsx(
                "block h-1.5 w-24 bg-[#F24822] transition-all duration-300",
                open && "opacity-0 scale-x-0",
              )}
            />
            <span
              className={clsx(
                "block h-1.5 w-24 bg-[#F24822] transition-all duration-300 origin-center",
                open && "-translate-y-6.5 -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      <div
        className={clsx(
          "lg:hidden fixed inset-0 z-40 bg-grey-800 flex flex-col px-30 pt-100 pb-40 gap-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none",
        )}
      >
        {links.map(({ label, route }, index) => (
          <Link
            key={route}
            href={route}
            className={clsx(
              "font-heading uppercase py-16 border-b border-grey-400 transition-all duration-300",
              isActive(route) ? "text-stc-200" : "text-grey-250 hover:text-stc-200",
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: open ? `${index * 50}ms` : "0ms" }}
          >
            {label}
          </Link>
        ))}

        <button
          className="btn font-heading p-10 max-w-fit btn-primary hover:btn-primary-hover uppercase mt-20 w-full transition-all duration-300"
          style={{ transitionDelay: open ? `${links.length * 50}ms` : "0ms" }}
        >
          Get Tickets
        </button>
      </div>
    </>
  );
};
