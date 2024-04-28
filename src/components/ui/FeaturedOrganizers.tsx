import Image from 'next/image';
import React from 'react'

const FeaturedOrganizers = () => {
  return (
    <section className="mb-20">
      <h2 className=" my-10 md:my-16 text-3xl font-serif text-primary-500 text-center">
       Featured Organizers
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 mx-10 justify-between items-center py-10 rounded-lg bg-gradient-to-b from-[#FAF3E0] to-[#FEF9E7">
        <div className="flex flex-col items-center justify-center w-full gap-2 md:gap-5">
          <Image src="/assets/images/nasa.svg" alt="" width={75} height={75} />
          <h3 className="text-lg text-primary-500">NASA</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2 md:gap-5">
          <Image src="/assets/images/meta.svg" alt="" width={75} height={75} />
          <h3 className="text-lg text-primary-500">Meta</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2 md:gap-5">
          <Image
            src="/assets/images/openai.svg"
            alt=""
            width={75}
            height={75}
          />
          <h3 className="text-lg text-primary-500">OpenAI</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2 md:gap-5">
          <Image
            src="/assets/images/microsoft.svg"
            alt=""
            width={75}
            height={75}
          />
          <h3 className="text-lg text-primary-500">Microsoft</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2 md:gap-5">
          <Image
            src="/assets/images/google.svg"
            alt=""
            width={75}
            height={75}
          />
          <h3 className="text-lg text-primary-500">Google</h3>
        </div>
      </div>
    </section>
  );
}

export default FeaturedOrganizers