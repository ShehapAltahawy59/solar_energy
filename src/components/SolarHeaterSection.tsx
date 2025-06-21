import { getDictionary, type Locale } from "../../lib/dictionaries";
import SolarHeaterSectionClient from "./SolarHeaterSectionClient";

interface SolarHeaterSectionProps {
  locale: Locale;
}

export default async function SolarHeaterSection({
  locale,
}: SolarHeaterSectionProps) {
  const dictionary = await getDictionary(locale);

  return <SolarHeaterSectionClient dictionary={dictionary} />;
}
