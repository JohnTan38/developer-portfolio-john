import Projects from "../components/homepage/projects";
import PageNavigation from "../components/navigation/page-navigation";

export const metadata = {
  title: "John Tan - Projects",
  description:
    "Browse highlighted projects delivered by John Tan across various domains.",
};

export default function ProjectsPage() {
  return (
    <div suppressHydrationWarning>
      <Projects />
      <PageNavigation
        previous={{ href: "/experience-skills", label: "Experience & Skills" }}
        next={{ href: "/education-contact", label: "Education & Contact" }}
      />
    </div>
  );
}
