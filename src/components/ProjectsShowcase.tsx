import { getDictionary, type Locale } from "../../lib/dictionaries";
import ProjectsShowcaseClient from "./ProjectsShowcaseClient";

interface ProjectsShowcaseProps {
  locale: Locale;
}

export default async function ProjectsShowcase({
  locale,
}: ProjectsShowcaseProps) {
  const dictionary = await getDictionary(locale);

  return <ProjectsShowcaseClient dictionary={dictionary} locale={locale} />;
}
