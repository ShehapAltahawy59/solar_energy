import { getDictionary, type Locale } from "../../lib/dictionaries";
import ProjectsCarouselClient from "./ProjectsCarouselClient";

interface Project {
  id: string;
  title: string;
  location: string;
  capacity: string;
  imageUrl: string;
  description: string;
  client?: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
  locale: Locale;
}

export default async function ProjectsCarousel({
  projects,
  locale,
}: ProjectsCarouselProps) {
  const dictionary = await getDictionary(locale);

  return (
    <ProjectsCarouselClient
      projects={projects}
      dictionary={dictionary}
      locale={locale}
    />
  );
}
