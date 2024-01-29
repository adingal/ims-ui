import React from "react";
import Image from "next/image";

type PageTitleProps = {
  title: string;
  imgSource: string;
};

function PageTitle(props: PageTitleProps) {
  const { title, imgSource } = props;

  return (
    <h1 className="flex flex-row items-center justify-start gap-1 text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold font-serif">
      <span>
        <Image src={imgSource} width={24} height={24} alt={title} />
      </span>
      <span>{title}</span>
    </h1>
  );
}

export default PageTitle;
