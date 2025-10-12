import Experience from "../components/homepage/experience";
import Skills from "../components/homepage/skills";
import PageNavigation from "../components/navigation/page-navigation";

export const metadata = {
  title: "John Tan - Experience & Skills",
  description:
    "Explore the professional experience and technical skills of John Tan.",
};

export default function ExperienceSkillsPage() {
  return (
    <div suppressHydrationWarning>
      <Experience />
      <Skills />
      <PageNavigation
        previous={{ href: "/", label: "Home" }}
        next={{ href: "/projects", label: "Projects" }}
      />
    </div>
  );
}
