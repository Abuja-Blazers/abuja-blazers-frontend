import Image from "next/image";
import Link from "next/link";

import FootballHeld from "@/app/assets/images/football-orange.webp";

type Content = {
  link: string;
  type: string;
  tag?: string;
  title: string;
  description: string;
};

export default function CuratorLink({ content }: { content: Content }) {
  const { link, type, tag, title, description } = content;

  return (
    <Link
      href={link}
      className="w-full h-full flex flex-col justify-between border-2 border-grey-300 rounded-2xs hover:shadow-outer-card hover:border-stc-400 hover:scale-98 transition-all duration-300 cursor-pointer"
    >
      <div className="relative bg-stc-300 py-20 px-20 w-full h-full rounded-tl-2xs rounded-tr-2xs">
        <div className="relative h-full flex items-center justify-center">
          <Image
            src={FootballHeld}
            alt="Hand holding Football"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto object-cover"
          />
        </div>
      </div>
      <div className="bg-grey-400 p-20 flex flex-col gap-8 w-full rounded-bl-2xs rounded-br-2xs">
        <p className="text-stc-200 font-caption uppercase">
          {type}&nbsp;{tag && <span>· {tag}</span>}
        </p>
        <p className="text-grey-200 font-title-lg tracking-normal font-bold">{title}</p>
        <p className="text-grey-25 font-caption">{description}</p>
      </div>
    </Link>
  );
}
