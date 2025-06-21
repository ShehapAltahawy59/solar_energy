import { getDictionary, type Locale } from "../../lib/dictionaries";
import TestimonialsClient from "./TestimonialsClient";

interface TestimonialsProps {
  locale: Locale;
}

export default async function Testimonials({ locale }: TestimonialsProps) {
  const dictionary = await getDictionary(locale);

  return <TestimonialsClient dictionary={dictionary} />;
}
