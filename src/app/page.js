import CursorDesign from "@/components/cursorDesign/CursorDesign";
import Departments from "@/components/home/departments/Departments";
import Hero from "@/components/home/hero/Hero";
import Stidy from "@/components/home/study/Study";

export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <Departments></Departments>
      <Stidy></Stidy>

      {/* <CursorDesign></CursorDesign> */}
    </main>
  );
}
