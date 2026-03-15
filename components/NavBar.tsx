import Image from "next/image";
import Link from "next/link";

import BlazersLogo from "@/app/assets/vectors/blazers-logo.svg";

const links = [
  { label: "The Squad", route: "/blazers" },
  { label: "Merch Store", route: "/shop" },
  { label: "Player Market", route: "/player-market" },
  { label: "Soul's corner", route: "/curator" },
  { label: "News & Media", route: "/news" },
  { label: "Donate", route: "/donate" },
];

export const NavBar = () => {
  return (
    <nav className="bg-grey-800">
      <div className="px-30 mx-auto flex items-center justify-between">
        <Image src={BlazersLogo} alt="Blazers Logo" width={68} className="object-cover h-auto" />
        <div className="flex items-center gap-40 py-12">
          <div className="flex items-center gap-20">
            {links.map(({ label, route }) => (
              <Link
                key={route}
                href={route}
                className="btn p-10 h-40 inline-flex font-button hover:text-stc-200 font-medium uppercase"
              >
                {label}
              </Link>
            ))}
          </div>
          <button className="btn font-button p-10 btn-primary hover:btn-primary-hover uppercase">Get Tickets</button>
        </div>
      </div>
    </nav>
  );
};
