import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export type TabGroup = {
  type: string;
  total: number;
  links: { label: string; href: string }[];
};

export default function TabList({ tabList }: { tabList: Record<string, TabGroup> }) {
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col gap-16">
      {Object.entries(tabList).map(([key, group]) => {
        const activeTab = searchParams.get(group.type) ?? group.links[0].href;

        return (
          <div key={key} className="py-10 flex flex-col divide-y-[0.5px] divide-grey-300">
            <p className="py-16 font-button uppercase text-grey-25 font-bold">{key.replace("-", " ")}</p>
            <ul className="flex flex-col divide-y-[0.7px] divide-y-grey-300">
              {group.links.map((tab) => (
                <Link
                  key={tab.href}
                  href={`?${new URLSearchParams({ ...Object.fromEntries(searchParams), [group.type]: tab.href })}`}
                  scroll={false}
                  className={clsx(
                    "font-button font-inter text-grey-100 py-16 flex justify-between items-center",
                    activeTab === tab.href && "text-stc-200"
                  )}
                >
                  {tab.label}
                  <span className={clsx("px-4 rounded-full bg-[#181818] text-gray-25", activeTab === tab.href && "text-stc-200 bg-[#23130C]")}>
                    {group.total}
                  </span>
                </Link>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}