import performanceImg from "../../../public/performance.jpg";
import Hero from "@/components/hero";

const Performance = () => {
  return (
    <Hero
      imageData={performanceImg}
      imageAlt='welding'
      title='We serve high performance applications'
    />
  );
};

export default Performance;
