import { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imageData: StaticImageData;
  imageAlt: string;
  title: string;
}

const Hero = (props: HeroProps) => {
  return (
    <div>
      <div className='absolute -z-10 inset-0'>
        This is the Home Page!
        <Image
          src={props.imageData}
          alt={props.imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-900'></div>
      </div>
      <div className='pt-48 flex justify-center items-center'>
        <h1 className='text-white text-6xl'>{props.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
