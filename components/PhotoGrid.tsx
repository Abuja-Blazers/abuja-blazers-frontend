"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const PhotoGrid = ({ images }: { images: StaticImageData[] }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((src) => ({ src: typeof src === "string" ? src : src.src }));

  return (
    <>
      <div
        className="grid grid-cols-3 gap-x-16 gap-y-50"
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
      >
        <div className="col-span-3 aspect-16/7 relative">
          <Image src={images[0]} alt="" fill className="object-cover rounded-2xs border-2 border-grey-300 cursor-pointer" />
        </div>

        {images.slice(1).map((src, i) => (
          <div
            key={i}
            className="aspect-square relative"
            onClick={() => {
              setIndex(i + 1);
              setOpen(true);
            }}
          >
            <Image src={src} alt="" fill className="object-cover rounded-2xs border-2 border-grey-300 cursor-pointer" />
          </div>
        ))}
      </div>
      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
    </>
  );
};
