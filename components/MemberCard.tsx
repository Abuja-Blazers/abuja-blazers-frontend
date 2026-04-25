import Image, { StaticImageData } from "next/image";
import jersey from "@/app/assets/images/jersey.webp"

export default function MemberCard({
  member,
}: {
  member: {
    image: StaticImageData | null;
    value: number | null;
    name: string;
    position: string;
    stats?: {
      games: number;
      tds: number;
      accuracy?: number;
      seasons?: number;
      yards: number;
    };
  };
}) {
  const { image, value, name, position, stats } = member;
  const img = image ?? jersey;

  return (
    <div className="bg-linear-to-b from-[#181818] to-grey-400 border-2 border-grey-300 rounded-2xs">
      <div className="relative rounded-tl-2xs rounded-tr-2xs">
        <span className="rounded-full grid place-content-center absolute top-30 right-16 size-36 bg-[#AB4D18] font-button leading-none text-grey-200 z-1000">
          #{value}
        </span>
        <Image
          src={img}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-340 object-cover rounded-tl-2xs rounded-t-2xs brightness-50 hover:brightness-100"
        />
      </div>
      <div className="px-10 lg:px-29 flex flex-col divide-y divide-grey-300">
        <div className="pt-26 pb-8 px-10 flex flex-col gap-4">
          <p className="font-title-lg  tracking-normal font-medium text-grey-200">{name}</p>
          <p className="font-caption tracking-[0.06em] text-stc-200 font-medium uppercase">{position}</p>
        </div>
      
        <div className="flex flex-col gap-16 px-10 pt-8 pb-26">
           {stats && 
            <div className="flex gap-20 items-center">
            <div className="flex flex-col gap-2">
              <p className="font-title-lg font-medium tracking-[-0.07em] uppercase text-grey-200">{stats.games}</p>
              <p className="font-label-xs font-medium text-grey-25 uppercase">Games</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-title-lg font-medium tracking-[-0.07em] uppercase text-grey-200">{stats.tds}</p>
              <p className="font-label-xs font-medium text-grey-25 uppercase">TDS</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-title-lg font-medium tracking-[-0.07em] uppercase text-grey-200">{stats.yards}</p>
              <p className="font-label-xs font-medium text-grey-25 uppercase">Accuracy</p>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}
