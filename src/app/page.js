import Banner from "@/Components/Banner";
import Featured from "@/Components/Featured";
import SportsCategories from "@/Components/SportsCategories";
import WhyChooseUs from "@/Components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <Featured></Featured>
    <SportsCategories></SportsCategories>
    <WhyChooseUs></WhyChooseUs>
   </div>
  );
}
