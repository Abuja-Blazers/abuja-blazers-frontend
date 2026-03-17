"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import Photo from "@/app/assets/images/jersey.webp";
import { useCartStore } from "@/app/store/cartStore";
import CollectionCard, { Collection } from "@/components/CollectionCard";
import FeaturedDrop from "@/components/FeaturedDrop";
import { HeroSection } from "@/components/HeroSection";
import TabList, { TabGroup } from "@/components/TabList";
import { formatCurrency } from "@/utils/data";

export default function STCPage() {
  // Not sure how products data will show up here
  // Will there be tags?
  // Note: add tab type to query param
  const { addItem } = useCartStore();
  const router = useRouter();

  const addToCart = (item: Collection) => {
    addItem({
      id: item.id!,
      name: item.title,
      price: item.price,
      quantity: 1,
    });
    router.push("/checkout");
  };

  return (
    <div className="bg-grey-800">
      <HeroSection
        eyebrow="Official Store"
        mainText="Merch"
        subText="Store"
        description="Official Blazers gear and more. Represent the"
        descriptionSubText="team on and off the field."
      />
      <section className="min-h-dvh py-30 px-16 lg:py-60 lg:px-45">
        <div className="grid lg:grid-cols-[280px_1fr] gap-27">
          <div className="py-12">
            <TabList tabList={tabList} />
          </div>
          <div className="flex flex-col gap-20">
            <FeaturedDrop
              image={Photo}
              title="Home Kit"
              edition="2025 edition"
              price={25000}
              description="The official Abuja Blazers home jersey for Season 2025. Premium breathable fabric, embroidered crest, available in all sizes."
            />
            <div className="py-16 flex justify-between items-center border-b border-b-grey-300">
              <p>Showing {dummyProducts.length} products</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-16 lg:gap-10">
              {dummyProducts.map((product, index) => (
                <div
                  key={index}
                  className="w-full h-full flex flex-col justify-between border-2 border-grey-300 rounded-2xs hover:shadow-outer-card hover:border-stc-400 hover:scale-98 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative bg-stc-300 py-20 px-20 w-full h-full rounded-tl-2xs rounded-tr-2xs">
                    {product.tag && (
                      <p
                        className={clsx(
                          "z-50 absolute bg-stc-200 py-8 px-18 max-w-fit rounded uppercase text-grey-800 font-button",
                          product.tagPosition === "left" ? "left-20" : "right-20",
                        )}
                      >
                        {product.tag}
                      </p>
                    )}
                    <div className="relative h-full flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt="Clothing Item"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="bg-grey-500 p-20 flex flex-col gap-20 w-full uppercase rounded-bl-2xs rounded-br-2xs">
                    <p className="text-grey-25 font-label">{product.clothingType}</p>
                    <p className="text-grey-200 font-button">{product.title}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-title text-stc-200">{formatCurrency(product.price)}</p>
                      <button
                        onClick={() => addToCart(product)}
                        className="p-10 btn bg-stc-800 font-button text-stc-200 border-[0.6px]"
                        disabled
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const tabList: Record<string, TabGroup> = {
  categories: {
    type: "categories",
    total: 14,
    links: [
      { label: "All Products", href: "all" },
      { label: "Jerseys", href: "jerseys" },
      { label: "Shirts", href: "shirts" },
      { label: "Headwear", href: "headwear" },
      { label: "Accessories", href: "accessories" },
    ],
  },
  "price range": {
    type: "price-range",
    total: 6,
    links: [
      { label: "Under ₦50,000", href: "<50000" },
      { label: "₦50,000 - ₦150,000", href: "" },
      { label: "₦150,000+", href: ">150000" },
    ],
  },
  collections: {
    type: "collections",
    total: 8,
    links: [
      { label: "Season 25", href: "season-25" },
      { label: "Limited Edition", href: "limited-edition" },
    ],
  },
};

const dummyProducts = [
  {
    id: "1",
    title: "Blazers Demons Slayer T-Shirt",
    tag: "Bestseller",
    clothingType: "Apparel",
    price: 18000,
    tagPosition: "left",
    image: Photo,
  },
  {
    id: "2",
    title: "Blazers Demons Slayer T-Shirt",
    tag: "Bestseller",
    clothingType: "Apparel",
    price: 18000,
    image: Photo,
  },
  {
    id: "3",
    title: "Blazers Snapback Cap",
    tag: "New",
    clothingType: "Headwear",
    price: 20000,
    tagPosition: "left",
    image: Photo,
  },
];
