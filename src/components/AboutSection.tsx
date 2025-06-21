import { getDictionary, type Locale } from "../../lib/dictionaries";
import AboutSectionClient from "./AboutSectionClient";

interface AboutSectionProps {
  locale: Locale;
}

export default async function AboutSection({ locale }: AboutSectionProps) {
  const dictionary = await getDictionary(locale);

  return <AboutSectionClient dictionary={dictionary} />;
}
