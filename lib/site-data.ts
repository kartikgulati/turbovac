import { Building2, Fan, Home, LucideIcon, Sparkles, Truck, Award } from "lucide-react";

export type NavItem = readonly [string, string, boolean];

export const navItems: ReadonlyArray<NavItem> = [
  ["About", "about", false],
  ["Services", "services", false],
  ["Process", "process", false],
  ["Our Work", "/our-work", true],
  ["Reviews", "testimonials", false],
  ["Quote", "quote", false],
];

export type Service = {
  title: string;
  icon: LucideIcon;
  copy: string;
  unavailable?: boolean;
};

export const services: ReadonlyArray<Service> = [
  {
    title: "Commercial Duct Cleaning",
    icon: Building2,
    copy: "Cleaner air and better airflow for offices, retail spaces, clinics, and multi-unit properties.",
    unavailable: true,
  },
  {
    title: "Residential Duct Cleaning",
    icon: Home,
    copy: "Thorough whole-home duct cleaning that reduces dust, allergens, pet dander, and stale indoor air for a healthier living environment.",
  },
  {
    title: "Dryer Vent Cleaning",
    icon: Fan,
    copy: "Remove lint buildup and restrictions to improve dryer performance, lower energy bills, and reduce fire-risk conditions.",
  },
  {
    title: "Sanitization (Dryer Vent, Ducts)",
    icon: Fan,
    copy: "Deep-clean and sanitize your dryer vent to eliminate bacteria, mold spores, and unpleasant odors caused by trapped moisture and lint",
  },
];

export type Feature = {
  title: string;
  icon: LucideIcon;
  badge: string;
  copy: string;
};

export const features: ReadonlyArray<Feature> = [
  {
    title: "Summer Deals",
    icon: Sparkles,
    badge: "20% off",
    copy: "Cool down your space with seasonal savings on duct cleaning for homes and small businesses.",
  },
  {
    title: "Bundle Deals",
    icon: Truck,
    badge: "50% off",
    copy: "Add two services and get a deeper discount — perfect for ducts plus dryer vent cleaning.",
  },
  {
    title: "Referral Program",
    icon: Award,
    badge: "15% off",
    copy: "Share TurboVac with a friend and both of you save on your next service visit.",
  },
];

export const process = [
  ["Inspection", "We assess vents, returns, airflow, and access points before work begins."],
  ["Cleaning", "Negative-air systems and agitation tools remove built-up dust and debris."],
  ["Sanitization", "Targeted sanitizing options help neutralize lingering odors and contaminants."],
  ["Final Quality Check", "We verify system cleanliness, airflow, and jobsite condition before leaving."],
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: ReadonlyArray<Testimonial> = [
  {
    quote:
      "TurboVac handled our office building after hours and left the system spotless. The team was organized, quiet, and professional.",
    name: "Priya M.",
    role: "Property Manager",
  },
  {
    quote:
      "The difference in airflow was immediate. Booking was easy, pricing was clear, and the technicians explained every step.",
    name: "Daniel R.",
    role: "Homeowner",
  },
  {
    quote:
      "We needed dryer vent service across multiple units. TurboVac responded quickly and documented the work properly.",
    name: "Alicia T.",
    role: "Operations Lead",
  },
];

export const faqs = [
  [
    "How often should ducts be cleaned?",
    "Most homes and businesses benefit from duct cleaning every 3 to 5 years. Renovations, pets, allergy concerns, or heavy dust can make earlier service worthwhile.",
  ],
  [
    "What are the benefits of duct cleaning?",
    "Improves indoor air quality by removing accumulated dust, debris, pet hair, pollen, and other airborne particles from your HVAC system.Helps reduce allergens and irritants that may affect people with allergies, asthma, or respiratory sensitivities. Removes unpleasant odours caused by dust buildup, pets, smoke, or moisture inside the duct system. Helps your furnace and air conditioning system operate more efficiently by improving airflow and reducing strain on components. Can extend the lifespan of HVAC equipment by reducing dirt accumulation in critical components. Especially beneficial after renovations, moving into a new home, pet ownership, smoking indoors, or long periods without maintenance.",
  ],
  [
    "What can happen if ducts are not cleaned?",
    "Dust, dirt, pet dander, and debris can continue accumulating inside the ductwork over time.Poor indoor air circulation may contribute to stale air and unpleasant smells throughout the home. Excess buildup may reduce HVAC efficiency, causing the system to work harder and potentially increasing energy costs. Dirty ducts may worsen allergy or respiratory symptoms for sensitive individuals. Construction debris, mold caused by moisture issues, or excessive contamination can remain hidden inside the system if left untreated. Neglected HVAC systems may experience increased wear on components over time.",
  ],
  [
    "How long does service take?",
    "A typical home takes a few hours. Commercial and industrial timing depends on system size, access, and whether work needs to be staged after hours.",
  ],
  [
    "Is dryer vent cleaning important?",
    "Yes. Restricted dryer vents can increase drying time, energy use, and fire risk. Regular cleaning keeps the vent path clear.",
  ],
] as const;

export type ServiceAreaStatus = "available" | "not available" | "coming soon";

export type ServiceArea = {
  name: string;
  status: ServiceAreaStatus;
  x?: number;
  y?: number;
};

export const serviceAreaCities = [
  { name: "Barrie", status: "available", x: 575, y: 556 },
  { name: "Belleville", status: "available", x: 725, y: 618 },
  { name: "Brampton", status: "available", x: 598, y: 620 },
  { name: "Brant", status: "available", x: 520, y: 642 },
  { name: "Brantford", status: "available", x: 508, y: 632 },
  { name: "Brockville", status: "available", x: 802, y: 596 },
  { name: "Burlington", status: "available", x: 560, y: 646 },
  { name: "Cambridge", status: "available", x: 500, y: 622 },
  { name: "Clarence-Rockland", status: "available", x: 812, y: 496 },
  { name: "Cornwall", status: "available", x: 846, y: 548 },
  { name: "Dryden", status: "available", x: 154, y: 238 },
  { name: "Elliot Lake", status: "available", x: 472, y: 446 },
  { name: "Greater Sudbury", status: "available", x: 538, y: 426 },
  { name: "Guelph", status: "available", x: 520, y: 606 },
  { name: "Haldimand County", status: "available", x: 560, y: 674 },
  { name: "Hamilton", status: "available", x: 548, y: 656 },
  { name: "Kawartha Lakes", status: "available", x: 652, y: 564 },
  { name: "Kenora", status: "available", x: 96, y: 246 },
  { name: "Kingston", status: "available", x: 760, y: 624 },
  { name: "Kitchener", status: "available", x: 488, y: 614 },
  { name: "London", status: "available", x: 448, y: 678 },
  { name: "Markham", status: "available", x: 628, y: 610 },
  { name: "Mississauga", status: "available", x: 596, y: 636 },
  { name: "Niagara Falls", status: "available", x: 586, y: 684 },
  { name: "Norfolk County", status: "available", x: 528, y: 680 },
  { name: "North Bay", status: "available", x: 608, y: 438 },
  { name: "Orillia", status: "available", x: 594, y: 542 },
  { name: "Oshawa", status: "available", x: 650, y: 618 },
  { name: "Ottawa", status: "available", x: 782, y: 512 },
  { name: "Owen Sound", status: "available", x: 500, y: 548 },
  { name: "Pembroke", status: "available", x: 696, y: 462 },
  { name: "Peterborough", status: "available", x: 690, y: 584 },
  { name: "Pickering", status: "available", x: 640, y: 626 },
  { name: "Port Colborne", status: "available", x: 584, y: 700 },
  { name: "Prince Edward County", status: "available", x: 724, y: 642 },
  { name: "Quinte West", status: "available", x: 708, y: 612 },
  { name: "Richmond Hill", status: "available", x: 618, y: 598 },
  { name: "Sarnia", status: "available", x: 384, y: 672 },
  { name: "Sault Ste. Marie", status: "available", x: 402, y: 476 },
  { name: "St. Catharines", status: "available", x: 574, y: 676 },
  { name: "St. Thomas", status: "available", x: 442, y: 694 },
  { name: "Stratford", status: "available", x: 466, y: 606 },
  { name: "Temiskaming Shores", status: "available", x: 624, y: 344 },
  { name: "Thorold", status: "available", x: 578, y: 680 },
  { name: "Thunder Bay", status: "available", x: 248, y: 338 },
  { name: "Timmins", status: "available", x: 516, y: 316 },
  { name: "Toronto", status: "available", x: 618, y: 632 },
  { name: "Vaughan", status: "available", x: 610, y: 608 },
  { name: "Waterloo", status: "available", x: 484, y: 606 },
  { name: "Welland", status: "available", x: 574, y: 690 },
  { name: "Windsor", status: "available", x: 338, y: 716 },
  { name: "Woodstock", status: "available", x: 476, y: 646 },
] as const satisfies ReadonlyArray<ServiceArea>;

export const comingSoonProvinces = [
  { name: "Alberta", status: "coming soon" },
  { name: "British Columbia", status: "coming soon" },
  { name: "Manitoba", status: "coming soon" },
  { name: "New Brunswick", status: "coming soon" },
  { name: "Newfoundland and Labrador", status: "coming soon" },
  { name: "Nova Scotia", status: "coming soon" },
  { name: "Prince Edward Island", status: "coming soon" },
  { name: "Quebec", status: "coming soon" },
  { name: "Saskatchewan", status: "coming soon" },
] as const satisfies ReadonlyArray<ServiceArea>;

export const unavailableAreas = [] as const satisfies ReadonlyArray<ServiceArea>;

export type Project = {
  title: string;
  location: string;
  service: string;
  description: string;
};

export const projects: ReadonlyArray<Project> = [
  {
    title: "Residential Duct Cleaning",
    location: "Toronto, ON",
    service: "Whole-home duct cleaning",
    description: "Restored healthy airflow in a family home after 6 years without service. Removed years of dust and pet dander buildup.",
  },
  {
    title: "Commercial Office Build-Out",
    location: "Mississauga, ON",
    service: "Commercial duct cleaning",
    description: "Cleared construction debris from a 12,000 sq ft office HVAC system ahead of tenant move-in. Air quality verified post-service.",
  },
  {
    title: "Dryer Vent Restoration",
    location: "Hamilton, ON",
    service: "Dryer vent cleaning",
    description: "Cleared a heavily restricted dryer vent that was causing 90+ minute dry cycles. Drying time back to under 40 minutes and fire risk eliminated.",
  },
];

export const serviceStatusStyles = {
  available: {
    label: "Available",
    dot: "bg-emerald-500",
    text: "text-emerald-700",
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    fill: "#22c55e",
  },
  "not available": {
    label: "Not available",
    dot: "bg-red-500",
    text: "text-red-700",
    border: "border-red-200",
    bg: "bg-red-50",
    fill: "#ef4444",
  },
  "coming soon": {
    label: "Coming soon",
    dot: "bg-orange-400",
    text: "text-orange-700",
    border: "border-orange-200",
    bg: "bg-orange-50",
    fill: "#fb923c",
  },
} as const;
