import Banner from "@/components/pages/home/Banner";
import Brands from "@/components/pages/home/Brands";
import DesignStrengthSection from "@/components/pages/home/DesignStrengthSection";
import RightBrand from "@/components/pages/home/RightBrand";
import SustainabilitySection from "@/components/pages/home/SustainabilitySection";

export default function Home() {
  return (
    <div>
      <Banner />
      <Brands />
      <RightBrand/>
      <SustainabilitySection />
      <DesignStrengthSection/>
    </div>
  );
}
