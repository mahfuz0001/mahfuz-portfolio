import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex">
      <div className="ml-0 mr-auto max-w-2xl py-40 text-[#c0c0c0]">
        <h1 className="text-4xl font-bold">Greetings!</h1>
        <p className="pt-7 text-3xl">
          I am <strong className="text-white">Mahfuz</strong>, a skilled
          frontend developer and a passionate discord bot developer with over
          two years of experience in:
        </p>
        <br />
        <ul className="list-inside list-disc text-2xl">
          <li>Frontend Development</li>
          <li>Backend Developement</li>
          <li>Discord.js</li>
          <li>Node.js</li>
        </ul>
      </div>
      <div className="ml-auto mr-0 py-40">
        <Image
          src="/hero-img.webp"
          width={600}
          height={200}
          alt="hero-image"
          className=""
        />
      </div>
    </div>
  );
};

export default Hero;
