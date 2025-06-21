import { getDictionary, type Locale } from "../../lib/dictionaries";
import WhyUsClient from "./WhyUsClient";

interface WhyUsProps {
  locale: Locale;
}

export default async function WhyUs({ locale }: WhyUsProps) {
  const dictionary = await getDictionary(locale);

  return <WhyUsClient dictionary={dictionary} />;
}
