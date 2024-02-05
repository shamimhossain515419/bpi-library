import CursorDesign from "@/components/cursorDesign/CursorDesign";
import Departments from "@/components/home/departments/Departments";
import Hero from "@/components/home/hero/Hero";
import LatastBooks from "@/components/home/latastBooks/LatastBooks";
import Stidy from "@/components/home/study/Study";

export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <Departments></Departments>

      <LatastBooks />

      <Stidy></Stidy>

      {/* <CursorDesign></CursorDesign> */}
    </main>
  );
}
