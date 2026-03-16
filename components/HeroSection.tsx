interface HeroSectionProps {
  eyebrow: string;
  mainText: string;
  subText: string;
  description: string;
  descriptionSubText: string;
}

export const HeroSection = ({ eyebrow, mainText, subText, description, descriptionSubText }: HeroSectionProps) => {
  return (
    <section className="px-45 py-57 flex flex-col gap-8 items-start justify-center border-y border-y-grey-300 bg-[linear-gradient(0deg,rgba(17,17,17,0.2),rgba(17,17,17,0.2)),linear-gradient(267.06deg,rgba(255,92,0,0.21)_23.55%,rgba(17,17,17,0.3)_64.33%)] backdrop-blur-[100px]">
      <p className="font-button leading-none uppercase text-stc-200">{eyebrow}</p>
      <div className="max-w-309">
        <h1 className="text-[2.5rem] text-white uppercase font-[700] tracking-[-0.03em]">
          {mainText}&nbsp;
          <br />
          <span className="text-stc-200">{subText}</span>
        </h1>
      </div>
      <p className="max-w-419 font-button text-grey-25">
        {description} <br></br>
        {descriptionSubText}
      </p>
    </section>
  );
};
