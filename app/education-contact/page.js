import ContactSection from "../components/homepage/contact";
import Education from "../components/homepage/education";
import PageNavigation from "../components/navigation/page-navigation";

export const metadata = {
  title: "John Tan - Education & Contact",
  description:
    "Learn about John Tan's academic background and get in touch.",
};

export default function EducationContactPage() {
  return (
    <div suppressHydrationWarning>
      <Education />
      <ContactSection />
      <PageNavigation
        previous={{ href: "/projects", label: "Projects" }}
      />
    </div>
  );
}
