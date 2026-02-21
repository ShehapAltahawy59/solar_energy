import { getDictionary, type Locale, type Dictionary } from "../../lib/dictionaries";
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
  dictionary?: Dictionary;
}

export default async function ProjectsCarousel({
  projects,
  locale,
  dictionary: dictProp,
}: ProjectsCarouselProps) {
  const dictionary = dictProp ?? (await getDictionary(locale));

  return (
    <ProjectsCarouselClient
      projects={projects}
      dictionary={dictionary}
      locale={locale}
    />
  );
}
