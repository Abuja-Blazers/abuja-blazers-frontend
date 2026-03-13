import Link from "next/link";
import { ArrowRight, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import WhatsappJoinImage from "@/app/assets/images/whatsapp.webp"
import { dummyCollection } from "@/utils/data";
import CollectionCard from "@/components/CollectionCard";
import clsx from "clsx";


export default function Home() {
    return (
        <div className="pb-20 bg-grey-400">
            <div className="relative min-h-dvh bg-[url('@/app/assets/images/home-background.webp')] bg-cover bg-center flex items-center justify-center">
                <div className="absolute inset-0 bg-black/80"></div>

                <div className="relative max-w-4xl w-full">
                    <div className="flex flex-col gap-30 items-center">
                        <div className="flex flex-col gap-10 items-center">
                            <h1 className="font-heading-lg uppercase text-white">
                                PLAY HARD. 
                                <span className="text-stc-200">&nbsp;BLAZE&nbsp;</span>
                                 up.
                            </h1>
                            <p className="text-grey-200 font-heading leading-24  max-w-554 text-center">
                                Flag football, community, culture. The Blazers are redefining the game in Abuja,
                                on and off the field.
                            </p>
                        </div>
                        <div className="flex items-center gap-19">
                            <Link
                                href="/shop"
                                className="btn btn-primary uppercase px-18 py-20"
                                title="Navigate to shop"
                            >
                                Shop the collection
                            </Link>
                            <Link
                                href="/blazers"
                                className="btn font-button gap-10"
                                title="Navigate to Squad Information"
                            >
                                <CircleArrowRight className="size-16 bg-black" />
                                <span className="text-grey-200">Meet the Squad</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-dvh pt-30 px-45 flex flex-col gap-92">
                <Link href="" className="mx-auto grid place-content-center">
                    <Image
                        src={WhatsappJoinImage}
                        className="h-auto object-cover hover:scale-98 active:scale-98 duration-300 ease-in-out"
                        alt=""
                        width={995}
                    />
                </Link>
                <div className="flex flex-col gap-54">
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col max-w-280">
                            <p className="font-button uppercase text-stc-200">
                                Official Store
                            </p>
                            <h1 className="uppercase font-satoshi text-[2.5rem] font-[900] leading-none tracking-[-0.03em] text-grey-200">
                                Shop the Collection
                            </h1>
                        </div>
                        <Link
                            href="/shop"
                            className="self-end btn text-stc-200 uppercase"
                        >
                            
                            View all Products
                            <ArrowRight className="size-18 text-inherit" />
                        </Link>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-20 items-stretch">
                        {dummyCollection.map((value, index) => (
                            <div
                                key={index}
                                className={clsx("w-full", index === 0 && "col-span-1")}
                            >
                                <CollectionCard collection={value} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}