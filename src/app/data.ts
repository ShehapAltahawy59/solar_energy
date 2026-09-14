interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export const companyInfo = {
  establishedYear: 2015,
  registrationNumber: "100450",
  taxNumber: "814-710-763",
  about:
    "شركة متخصصة في توريد وتركيب جميع أنظمة الطاقة الشمسية في جميع محافظات جمهورية مصر العربية. حيث قامت بتنفيذ مشاريع كثيرة منذ 2017 لتشغيل الآبار وتعمل في كافة القطاعات مثل القطاع الزراعي والصناعي والسكني",
  leadEngineer: "م. مصطفي الطحاوي",
};

export const completedProjects = [
  {
    title: "محطة بابوحماد الشرقيه",
    capacity: "1.5 كيلو وات",
    location: "ارض العباسه",
    client: "عمرو محمد السيد",
    imageUrl: "/images/projects/agriculture/abohammad.webp",
  },
  {
    title: "محطة مزرعه رأس صدر",
    capacity: "10 حصان",
    location: "طريق شرم الشيخ",
    client: " المهندس صلاح",
    imageUrl: "/images/projects/agriculture/rassedr.webp",
  },
  {
    title: "محطةاوف جريد براس صدر",
    capacity: "1.5 كيلو وات",
    location: "طريق شرم الشيخ",
    client: "المهندس صلاح",
    imageUrl: "/images/projects/agriculture/ras_serrd_off.webp",
  },
  {
    title: "محطة ديرب نجم",
    capacity: "7.5 كيلو وات",
    location: "طريق ديرب نجم المنصوره",
    client: "احمد منصور",
    imageUrl: "/images/projects/agriculture/negm.webp",
  },
  {
    title: "محطة بالمغره",
    capacity: "25 كيلو وات",
    location: "المغره",
    client: " طارق عوض",
    imageUrl: "/images/projects/agriculture/mogra.webp",
  },
  {
    title: "مصنع المراعي",
    capacity: "100 كيلو وات",
    location: "طريق مصر اسكندريه الزراعي - محافظه الغربيه",
    client: "احمد عايد",
    type: "مصنع",
  },
  {
    title: "محطة السادات المتحركة",
    capacity: "180 كيلو وات",
    location: "مدينه السادات - محافظه المنوفيه",
    client: "",
    type: "متحركة",
  },
  {
    title: "مزرعة نبع البركة",
    capacity: "90 كيلو وات",
    location: "طريق وادي النطرون العلمين",
    client: "",
    type: "مزرعة",
  },
  {
    title: "محطة العلمين المتحركة",
    capacity: "25 كيلو وات",
    location: "مدينه العلمين",
    client: "حسن عبد العليم",
    type: "متحركة",
  },
  {
    title: "محطة سيناء",
    capacity: "",
    location: "سيناء - بئر العبد",
    client: "سيد الشبراوي",
  },
  {
    title: "محطة مطروح 1",
    capacity: "",
    location: "مطروح",
    client: "بويد",
  },
  {
    title: "محطة مطروح 2",
    capacity: "",
    location: "مطروح",
    client: "عطيوة الفقي",
  },
  {
    title: "محطة مطروح 3",
    capacity: "",
    location: "مطروح",
    client: "عاشور ادريس",
  },
  {
    title: "محطة طنطا",
    capacity: "",
    location: "طنطا",
    client: "ابراهيم كتكت",
  },
  {
    title: "محطة زفتى",
    capacity: "",
    location: "زفتي",
    client: "رضا البري",
  },
  {
    title: "محطة السباعي",
    capacity: "",
    location: "",
    client: "ابو العلا السباعي",
  },
  {
    title: "محطة المنوفية",
    capacity: "",
    location: "المنوفية",
    client: "الكابتن محمد محسن",
  },
  {
    title: "محطة وادي النطرون",
    capacity: "105.5 كيلو وات",
    location: "البحيرة - وادي النطرون - المجابرة بجوار شركة الوطنية للدواجن",
    client: "محمد عثمان ابو وفيه",
    status: "قيد التنفيذ - ابريل 2025",
  },
  {
    title: "مصنع كفر الزيات",
    capacity: "75 كيلو وات",
    location: "كفر الزيات",
    client: "طلعت شومان",
    type: "مصنع - اون جريد",
    status: "قيد التنفيذ - مايو 2024",
  },
];

export const companyServices = [
  {
    title: "تركيب وصيانة المحطات",
    description: "توريد وتركيب محطات الطاقة الشمسية وعمل صيانات دورية للمحطات",
    icon: "🔧",
  },
  {
    title: "توريد وتطوير",
    description:
      "توريد قطع المحطات ورفع كفاءة محطات تم تركيبها عن طريق شركات اخرى",
    icon: "📦",
  },
  {
    title: "متابعة مستمرة",
    description: "متابعة دورية لعملائنا ما بعد التركيب",
    icon: "📊",
  },
  {
    title: "دراسة متخصصة",
    description:
      "دراسة جدوى كاملة للمكان وموقع المحطة لتحديد الانواع والقدرات المناسبة",
    icon: "📝",
  },
];

export const companyValues = [
  {
    title: "جودة عالية",
    description:
      "مراقبه الجودة أولوية قصوى للشركة كفاءة المنتجات والتركيبات خاضعة لعمليات تفتيش صارمة",
    icon: "⭐",
  },
  {
    title: "حلول مخصصة",
    description:
      "لكل محطة دراسة خاصة بها وليس تطبيق كل المحطات بنفس المكونات والأنواع",
    icon: "🎯",
  },
  {
    title: "دعم شامل",
    description:
      "فريق كامل من خدمة العملاء ذوي الخبرة الفائقة لافادة العملاء على اكمل وجه وارضائهم",
    icon: "🤝",
  },
];

export const features = companyValues;

export const heatPumpFeatures: Feature[] = [
  {
    title: "كفاءة عالية",
    description: "تصل نسبة كفاءة الطاقة (COP) إلى 16",
  },
  {
    title: "صديقة للبيئة",
    description: "تعتمد على الهواء كمصدر للطاقة",
  },
  {
    title: "تحكم ذكي",
    description: "إمكانية التحكم عبر تطبيق الهاتف",
  },
  {
    title: "عمر افتراضي طويل",
    description: "مكونات عالية الجودة وأداء موثوق",
  },
];

export const woodPelletFeatures: string[] = [
  "خفض التكاليف بنسبة تصل إلى 25%",
  "انبعاثات أقل من ثاني أكسيد الكربون",
  "احتراق نظيف لا يترك رواسب كبيرة",
  "إعادة تدوير المخلفات الزراعية",
];
