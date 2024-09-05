import AboutMeSect from "@/components/aboutMe";
import HomeSect from "@/components/home";
import NavBar from "@/components/navBar";
import ServicesSect from "@/components/services";

export default function Home() {
  return (
    <div className="flex flex-row">
      <NavBar />
      <main className="flex flex-col w-full h-full bg-black">
        <HomeSect />
        <AboutMeSect />
        <ServicesSect />
      </main>
    </div>
  );
}
