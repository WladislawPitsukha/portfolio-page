import "../style/scroll.css"
import AboutMeSect from "@/components/aboutMe";
import ContactSect from "@/components/contact";
import HomeSect from "@/components/home";
import NavBar from "@/components/navBar";
import Networks from "@/components/networks";
import PortfolioSect from "@/components/portyfolio";
import ServicesSect from "@/components/services";
import SkillsSect from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-row">
      <NavBar />
      <main className="flex flex-col w-full h-full bg-black overflow-y-hidden">
        <HomeSect />
        <AboutMeSect />
        <ServicesSect />
        <SkillsSect />
        <PortfolioSect />
        <ContactSect />
        <Networks />
      </main>
    </div>
  );
}
