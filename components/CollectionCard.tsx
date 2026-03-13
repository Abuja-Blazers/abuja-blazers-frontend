import { formatCurrency } from "@/utils/data"
import Image from "next/image"

type Collection = {
  tag?: string
  image: string
  clothingType: string
  title: string
  price: number
}

export default function CollectionCard({ collection }: { collection: Collection }) {
    const { tag, image, clothingType, title, price } = collection;

    return (
        <div className="w-full h-full flex flex-col justify-between border-2 border-grey-300 rounded-2xs">
            <div className=" bg-stc-300 py-20 px-20 w-full h-full">
                {tag && 
                <div className="self-end bg-stc-200 py-8 px-40 max-w-fit rounded uppercase text-grey-800 font-button">
                    {tag}
                </div>}
                <div className="relative aspect-3/4 w-full h-full overflow-hidden">
                    <Image
                        src={image}
                        alt="Clothing Item"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="bg-grey-500 p-20 flex flex-col gap-20 w-full uppercase">
                <p className="text-grey-25 font-label">{clothingType}</p>
                <p className="text-grey-200 font-button">{title}</p>
                <p className="font-title text-stc-200">{formatCurrency(price)}</p>
            </div>
        </div>
    )
}