import Bestreading from "@/components/home/bestreading/Bestreading";
import Departments from "@/components/home/departments/Departments";
import Hero from "@/components/home/hero/Hero";
import LatastBooks from "@/components/home/latastBooks/LatastBooks";
import Popular from "@/components/home/popularbooks/Popular";
import Stidy from "@/components/home/study/Study";
import Trending from "@/components/home/trendingnow/Trending";

export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <Departments></Departments>

      <LatastBooks />
      <Trending />
      <Bestreading />
      <Popular />

      <Stidy></Stidy>

      {/* <CursorDesign></CursorDesign> */}
    </main>
  );
}
