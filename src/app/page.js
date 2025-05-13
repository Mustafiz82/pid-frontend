import ArticleSlider from "@/components/pages/home/ArticleSlider";
import Banner from "@/components/pages/home/Banner";
import BannerImage from "@/components/pages/home/BannerImage";
import Brands from "@/components/pages/home/Brands";
import DesignStrengthSection from "@/components/pages/home/DesignStrengthSection";
import ManufacturingSolutions from "@/components/pages/home/ManufacturingSolutions";
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
      <ManufacturingSolutions/>
      <BannerImage/>
      <ArticleSlider/>
    </div>
  );
}
