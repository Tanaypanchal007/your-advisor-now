import Image from "next/image";
import React from "react";

const StartingHeaderImage = ({ imageSrc, title }) => {
  return (
    <>
      <section className="relative">
        <Image
          src={imageSrc}
          alt={title || "Header Img"}
          width={600}
          height={600}
          className="w-full h-[170px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-5xl">{title}</h1>
        </div>
      </section>
    </>
  );
};

export default StartingHeaderImage;
