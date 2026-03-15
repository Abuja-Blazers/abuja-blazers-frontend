import { clsx } from "clsx";
import { ComponentProps } from "react";

import { formatInitials } from "@/utils/data";

export default function Initials({ name, className }: { name: string } & ComponentProps<"div">) {
  return (
    <div className={clsx("rounded-full border border-stc-500 bg-stc-400 flex items-center justify-center", className)}>
      <p className="uppercase text-stc-200 font-title">{formatInitials(name)}</p>
    </div>
  );
}
