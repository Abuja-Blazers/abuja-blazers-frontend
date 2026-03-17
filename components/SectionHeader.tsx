import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  linkHref?: string;
  linkLabel?: string;
}

export default function SectionHeader({ eyebrow, title, description, linkHref, linkLabel }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-20 lg:flex-row lg:gap-0 lg:justify-between w-full">
      <div className="flex flex-col gap-20 lg:gap-0 lg:max-w-300">
        <p className="font-button uppercase text-stc-200">{eyebrow}</p>
        <div className="flex flex-col gap-10">
          <h1 className="max-w-280 uppercase font-satoshi text-[2.5rem] font-[900] leading-none tracking-[-0.03em] text-grey-200">
            {title}
          </h1>
          {description && <p className="font-label leading-19 tracking-normal text-grey-25">{description}</p>}
        </div>
      </div>
      {linkHref && (
        <Link href={linkHref} className="self-end btn text-stc-200 uppercase flex gap-4 items-center">
          {linkLabel}
          <ArrowRight className="size-18 text-inherit" />
        </Link>
      )}
    </div>
  );
}
