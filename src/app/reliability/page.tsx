import reliabilityImg from "../../../public/reliability.jpg";
import Hero from "@/components/hero";

// console.log(reliabilityImg);

const Reliability = () => {
  return (
    <Hero
      imageData={reliabilityImg}
      imageAlt='welding'
      title='Super high reliability hosting!'
    />
  );
};

export default Reliability;
