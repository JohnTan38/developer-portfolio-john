import AboutSection from "./components/homepage/about";
import HeroSection from "./components/homepage/hero-section";
import PageNavigation from "./components/navigation/page-navigation";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <PageNavigation
        next={{ href: "/experience-skills", label: "Experience & Skills" }}
      />
    </div>
  );
}
