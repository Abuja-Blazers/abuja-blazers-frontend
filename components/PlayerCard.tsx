import Initials from "./Initials";

interface PlayerCardProps {
  name: string;
  position: string;
  title: string;
}
export default function PlayerCard({ name, position, title }: PlayerCardProps) {
  return (
    <div className="bg-grey-400 border-2 border-grey-300 rounded-2xs cursor-pointer hover:bg-grey-500 hover:border-stc-500 hover:scale-98 transition-all duration-300 ease-in-out">
      <div className="px-30 py-24">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-20">
            <Initials name={name} className="size-54" />
            <div className="flex flex-col gap-5">
              <p className="text-grey-200 font-title-lg font-[900] tracking-normal capitalize">{name}</p>
              <p className="text-grey-25 font-label tracking-normal uppercase">{title}</p>
            </div>
          </div>
          <h1 className="font-inter font-bold text-[2.125rem] leading-none text-grey-350">#{position}</h1>
        </div>
      </div>
    </div>
  );
}
