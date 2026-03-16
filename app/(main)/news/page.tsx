import PhotoMain from "@/app/assets/images/home-background.webp";
import PhotoFive from "@/app/assets/images/photo-five.webp";
import PhotoFour from "@/app/assets/images/photo-four.webp";
import PhotoOne from "@/app/assets/images/photo-one.webp";
import PhotoThree from "@/app/assets/images/photo-three.webp";
import PhotoTwo from "@/app/assets/images/photo-two.webp";
import CuratorLink from "@/components/CuratorLink";
import { HeroSection } from "@/components/HeroSection";
import { PhotoGrid } from "@/components/PhotoGrid";
import SectionHeader from "@/components/SectionHeader";

export default function NewsPage() {
  return (
    <div className="bg-grey-800">
      <HeroSection
        eyebrow="Latest Updates"
        mainText="NEWS &"
        subText="Media"
        description="Match reports, announcements, photo galleries and"
        descriptionSubText=" everything happening around Abuja Blazers."
      />
      <section className="bg-grey-800 py-60 px-44">
        <div className="grid grid-cols-3 gap-16">
          {newsLinks.map((piece, index) => (
            <CuratorLink key={index} content={piece} />
          ))}
        </div>
      </section>
      <section className="bg-grey-800 px-44 pb-53 flex flex-col gap-21">
        <SectionHeader eyebrow="Media" title="Photo Gallery" />
        <PhotoGrid
          images={[
            PhotoMain,
            PhotoOne,
            PhotoThree,
            PhotoFour,
            PhotoFive,
            PhotoFour,
            PhotoMain,
            PhotoOne,
            PhotoThree,
            PhotoFive,
          ]}
        />
      </section>
    </div>
  );
}

const newsLinks = [
  {
    link: "",
    type: "Match Report",
    title: "Blazers Claim 3rd Consecutive Win in Style",
    description:
      "From dusty pitches to Al-Amin International School field in Maitama, flag football is no longer underground. It's the movement.",
  },
  {
    link: "",
    type: "Photos",
    title: "Training Day Gallery - February Camp",
    description:
      "From dusty pitches to Al-Amin International School field in Maitama, flag football is no longer underground. It's the movement.",
  },
  {
    link: "",
    type: "Announcement",
    title: "Fan Day 2026 - Come Through to Farm City",
    description:
      "From dusty pitches to Al-Amin International School field in Maitama, flag football is no longer underground. It's the movement.",
  },
];
