import Image, { StaticImageData } from "next/image";

import { formatCurrency } from "@/utils/data";

export default function FeaturedDrop({
  image,
  title,
  edition,
  price,
  description,
}: {
  image: StaticImageData;
  title: string;
  edition: string;
  price: number;
  description: string;
}) {
  return (
    <div className="border border-stc-400 rounded-[.938rem] bg-[#181818] px-16 lg:px-36 py-16 flex flex-col gap-24 lg:gap-0">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-362 object-cover rounded-tl-2xs rounded-t-2xs"
        />
        <div className="max-w-400 flex flex-col gap-30">
          <div className="flex flex-col gap-10 lg:gap-0">
            <p className="font-caption font-bold uppercase text-stc-200">Featured Drop</p>
            <h1 className="max-w-315 text-wrap uppercase text-[2.5rem] lg:text-[3.125rem] text-grey-200 font-bold">
              {title} <br></br>
              <span className="text-stc-200">{edition}</span>
            </h1>
            <p className="font-heading text-grey-25">{description}</p>
          </div>
        </div>
      </div>
      <button className="btn btn-primary flex items-center gap-10 font-button p-10 max-w-fit text-grey-400 uppercase">
        Add to Bag — {formatCurrency(price)}
      </button>
    </div>
  );
}
