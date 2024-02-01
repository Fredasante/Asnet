import Banner from "@/components/Banner/Banner";
import BannerImages from "@/components/Banner/BannerImages";
import FirstSection from "@/components/FirstSection/FirstSection";
import SecondSection from "@/components/SecondSection.tsx/SecondSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <BannerImages />
      <FirstSection />
      <SecondSection />
    </div>
  );
}
