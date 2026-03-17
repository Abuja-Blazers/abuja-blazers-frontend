import { HeroSection } from "@/components/HeroSection";

export default function Sponsorship() {
  return (
    <div className="bg-grey-800">
      <HeroSection
        eyebrow="Partner with us"
        mainText="Sponsorship"
        subText="Opportunities"
        description="Join the Abuja Blazers movement."
        descriptionSubText="  Reach thousands of fans and align your brand with Abuja's premier flag football team."
      />
      <section className="py-30 px-45 flex flex-col gap-70"></section>
    </div>
  );
}
