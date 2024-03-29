import scaleImg from "../../../public/scale.jpg";
import Hero from "@/components/hero";

const Scale = () => {
  return (
    <Hero
      imageData={scaleImg}
      imageAlt='steel factory'
      title='Scale your app to infinity'
    />
  );
};

export default Scale;
