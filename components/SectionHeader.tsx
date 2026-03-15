import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  linkHref: string;
  linkLabel: string;
}

export default function SectionHeader({ eyebrow, title, description, linkHref, linkLabel }: SectionHeaderProps) {
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col max-w-300">
        <p className="font-button uppercase text-stc-200">{eyebrow}</p>
        <div className="flex flex-col gap-10">
          <h1 className="max-w-280 uppercase font-satoshi text-[2.5rem] font-[900] leading-none tracking-[-0.03em] text-grey-200">
            {title}
          </h1>
          {description && <p className="font-label leading-14 tracking-normal text-grey-25">{description}</p>}
        </div>
      </div>
      <Link href={linkHref} className="self-end btn text-stc-200 uppercase">
        {linkLabel}
        <ArrowRight className="size-18 text-inherit" />
      </Link>
    </div>
  );
}
