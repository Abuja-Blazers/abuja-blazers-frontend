import clsx from "clsx";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-t-grey-300 bg-grey-400">
      <div className="px-16 lg:px-45 py-30 lg:py-60 flex flex-col gap-69">
        <div className="grid gap-30 lg:grid-cols-2 lg:gap-0 justify-between items-center">
          <div className="max-w-309 flex flex-col gap-16">
            <h1 className="font-lg text-white uppercase">Abuja Blazers</h1>
            <p className="font-label leading-19 tracking-normal text-grey-25">
              Abuja's flag football team. We play hard, we dress hard, and we build community. Join the movement.
            </p>
            <div className="col-span-2 grid grid-cols-6 gap-10 items-center">
              {shareLinks.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  className="bg-grey-700 hover:bg-stc-800 border border-grey-300 hover:border-stc-700 rounded-[3px] text-grey-50 font-button leading-21 flex items-center justify-center size-[calc(44px*0.8)] text-[1.313rem] btn"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-30 lg:gap-y-0 lg:grid-cols-3">
            {footerNavigation.map((value, index) => (
              <div
                key={index}
                className={clsx(
                  "flex flex-col gap-32",
                  index === 1 && "lg:justify-self-center",
                  index === 2 && "lg:justify-self-end",
                )}
              >
                <p className="font-heading font-medium text-white uppercase">{value.title}</p>
                <div className="flex flex-col gap-20">
                  {value.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.link}
                      className="text-grey-25 font-medium font-heading transition-colors duration-300 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4),0_0_40px_rgba(255,255,255,0.2)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-t-grey-300 grid gap-20 lg:gap-0 lg:grid-cols-3 justify-between py-40">
          <p className="text-grey-25 font-label tracking-normal">© 2026 Abuja Blazers. All rights reserved.</p>
          <p className="lg:text-center text-grey-25 font-label tracking-normal">Abuja, Nigeria</p>
          <p className="lg:text-right text-grey-25 font-label tracking-normal">Studio Fameely</p>
        </div>
      </div>
    </footer>
  );
}

const shareLinks = [
  { label: "FB", link: "https://www.facebook.com/61576337445464" },
  { label: "IG", link: "https://www.instagram.com/abujablazersff?igsh=NXoxYjF3cmVtaWN3&utm_source=qr" },
  { label: "TT", link: "https://www.tiktok.com/@abujablazersff" },
  { label: "YT", link: "https://www.youtube.com/@AbujaBlazersff" },
  { label: "X", link: "" },
];

const footerNavigation = [
  {
    title: "Explore",
    links: [
      { label: "The Squad", link: "/blazers" },
      { label: "Merch Store", link: "/shop" },
      { label: "Player Market", link: "/player-market" },
      { label: "Soul's Corner", link: "/curator" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "News & Media", link: "/news" },
      { label: "Tickets", link: "" },
      { label: "Donate", link: "/donate" },
      { label: "Contact Us", link: "/contact-us" },
    ],
  },
  {
    title: "Club",
    links: [
      { label: "About Blazers", link: "" },
      { label: "Sponsorship", link: "" },
      { label: "Privacy Policy", link: "" },
      { label: "Terms of Use", link: "" },
    ],
  },
];
