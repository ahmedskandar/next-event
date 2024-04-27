import Image from "next/image";
import React from "react";

const FeatureCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col text-center items-center justify-center gap-5 bg-[#fff7ed] p-8 rounded-lg">
      {/* <FontAwesomeIcon size='2xl' icon={faPerson}/> */}
      <Image src={imageSrc} alt="" width={75} height={75} />
      <h3 className="text-xl font-bold text-primary-500">{title}</h3>
      <p className="text-center text-primary-500">{description}</p>
    </div>
  );
};

export default FeatureCard;
