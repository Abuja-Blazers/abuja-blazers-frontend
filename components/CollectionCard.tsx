import Image, { StaticImageData } from "next/image";

import { formatCurrency } from "@/utils/data";
import clsx from "clsx";

export type Collection = {
  id?: string;
  tag?: string;
  tagPosition?: string;
  image: StaticImageData;
  clothingType: string;
  title: string;
  price: number;
};

export default function CollectionCard({ collection }: { collection: Collection }) {
  const { tag, tagPosition, image, clothingType, title, price } = collection;

  return (
    <div className="w-full h-full flex flex-col justify-between border-2 border-grey-300 rounded-2xs hover:shadow-outer-card hover:border-stc-400 hover:scale-98 transition-all duration-300 cursor-pointer">
      <div className="relative bg-stc-300 py-20 px-20 w-full h-full rounded-tl-2xs rounded-tr-2xs">
        {tag && (
          <p className={clsx("absolute bg-stc-200 py-8 px-18 max-w-fit rounded uppercase text-grey-800 font-button", tagPosition === "left" ? "left-20" : "right-20")}>
            {tag}
          </p>
        )}
        <div className="relative h-full flex items-center justify-center">
          <Image
            src={image}
            alt="Clothing Item"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto min-h-180 object-cover"
          />
        </div>
      </div>
      <div className="bg-grey-500 p-20 flex flex-col gap-20 w-full uppercase rounded-bl-2xs rounded-br-2xs">
        <p className="text-grey-25 font-label">{clothingType}</p>
        <p className="text-grey-200 font-button">{title}</p>
        <p className="font-title text-stc-200">{formatCurrency(price)}</p>
      </div>
    </div>
  );
}
