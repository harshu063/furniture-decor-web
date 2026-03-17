import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Feature72Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

// Using img-08 through img-13 — distinct from Gallery (img-14–21) and About (img-01)
const furnitureServices: Feature[] = [
  {
    id: "custom-furniture",
    title: "Custom Furniture Design",
    description: "Every piece starts with your vision. Our craftsmen work closely with you to design bespoke furniture tailored to your space, taste, and lifestyle — from sketch to final piece in premium teak, sheesham, or mango wood.",
    image: "/images/img-08.jpeg",
  },
  {
    id: "bedroom-sets",
    title: "Bedroom Sets",
    description: "Complete bedroom sets in premium teak and sheesham — king beds with carved headboards, spacious wardrobes with premium fittings, matching dressers, bedside tables, and custom storage solutions.",
    image: "/images/img-09.jpeg",
  },
  {
    id: "living-room",
    title: "Living Room Furniture",
    description: "Handcrafted sofa sets, centre tables, TV units, and display shelves in rich wood finishes. We blend contemporary aesthetics with traditional Rajasthani craftsmanship for your living space.",
    image: "/images/img-10.jpeg",
  },
  {
    id: "office-furniture",
    title: "Office & Commercial Furniture",
    description: "Professional, ergonomic office desks, executive chairs, conference tables, and modular storage — built for daily use while maintaining an elegant, productive workspace.",
    image: "/images/img-11.jpeg",
  },
  {
    id: "kitchen-cabinets",
    title: "Kitchen Cabinets & Modular Interiors",
    description: "Modular kitchen cabinets, overhead storage, pantry organisers, and countertops crafted to maximise space efficiency while adding warmth and elegance to your kitchen.",
    image: "/images/img-12.jpeg",
  },
  {
    id: "wooden-decor",
    title: "Wooden Handicrafts & Décor",
    description: "Our artisans handcraft premium wooden décor — carved wall panels, decorative shelves, door panels, hand-painted almirahs, and bespoke art pieces that define your interior.",
    image: "/images/img-13.jpeg",
  },
];

export const Feature72 = ({
  heading = "Our Services",
  description = "At Maa Ashapura Furniture, we offer a comprehensive range of furniture crafting and interior solutions. Every piece is made with superior wood, skilled craftsmanship, and careful attention to detail — built to last generations.",
  linkUrl = "/contact",
  linkText = "Get a Free Quote",
  features = furnitureServices,
}: Feature72Props) => {
  return (
    <section className="py-14 md:py-24 bg-[#F8F8F2]">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col gap-14">
        {/* Section header */}
        <div className="max-w-lg">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#88734C] block mb-3">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202e44] mb-4">{heading}</h2>
          <p className="text-base text-[#202e44]/70 leading-relaxed mb-6">{description}</p>
          <Link
            to={linkUrl}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#88734C] hover:text-[#202e44] transition-colors group"
          >
            {linkText}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Feature grid */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-7">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#202e44]/10 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-4 py-4 md:px-7 md:py-7">
                <h3 className="text-lg font-semibold text-[#202e44] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#202e44]/70 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
