"use client";

import { Running } from "healthicons-react";
import Image from "next/image";
import { useState } from "react";

import Facilties from "@/app/assets/vectors/facilities.svg";
import Football from "@/app/assets/vectors/football.svg";
import { HeroSection } from "@/components/HeroSection";
import { SupportCard } from "@/components/SupportCard";
import BankAccountCard from "@/components/BankAccountCard";

export default function DonatePage() {
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    if (!raw) return setCustomAmount("");
    const formatted = "₦" + Number(raw).toLocaleString("en-NG");
    setCustomAmount(formatted);
  };
  return (
    <div className="bg-grey-800">
      <HeroSection
        eyebrow="Support the Team"
        mainText="Donate to"
        subText="Abuja Blazers"
        description="Help us grow flag football in Nigeria. Every donation supports player"
        descriptionSubText="development, equipment, and community programs."
      />
      <section className="min-h-dvh py-30 lg:py-60 px-16 lg:px-45">
        <div className="grid lg:grid-cols-[1.5fr_588px] gap-20">
          <div className="flex flex-col gap-20">
            <p className="font-button text-stc-200 font-medium uppercase">Support the team</p>
            <div className="grid gap-20 lg:grid-cols-3 lg:gap-10">
              {supportInfo.map((info, index) => (
                <SupportCard key={index} {...info} />
              ))}
            </div>
            <form className="rounded-2xs py-30 px-10 bg-[#181818] flex flex-col gap-20">
              <h1 className="py-10 border-b border-b-grey-300 font-title uppercase text-grey-200 font-satoshi">
                Select donation amount
              </h1>

              <fieldset>
                <legend className="sr-only">Donation amount</legend>
                <div className="grid grid-cols-3 gap-20">
                  {donationOptions.map((option, index) => (
                    <DonationAmountOption key={index} {...option} />
                  ))}
                </div>
              </fieldset>

              <label className="flex flex-col gap-20">
                <span className="uppercase font-label tracking-normal text-grey-25">or enter custom amount</span>
                <input
                  type="text"
                  name="donation-custom"
                  inputMode="numeric"
                  placeholder="₦0"
                  value={customAmount}
                  onChange={handleAmountChange}
                  className="rounded-[5px] border-2 border-grey-300 py-10 font-title font-satoshi text-2xl text-grey-25 text-center"
                />
              </label>

              <fieldset className="grid grid-cols-2 gap-10">
                <legend className="sr-only">Payment method</legend>
                <DonationTransferType value="bank-transfer" title="Bank Transfer" />
                <DonationTransferType value="card" title="Card payment" />
              </fieldset>

              <button
                type="submit"
                className="btn btn-primary bg-stc-200 py-10 rounded-[5px] text-grey-400 hover:text-grey-400/90 uppercase font-title font-satoshi text-xl lg:text-2xl"
              >
                Complete donation
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-20">
            <BankAccountCard />

            <InfoCard
              title=" Important Note"
              description={
                <span className="font-inherit">
                  After making your transfer, please send a screenshot of your payment confirmation to 
                  <a href="mailto:donations@abujablazers.ng" className="text-stc-200">
                    donations@abujablazers.ng
                  </a>
                  so we can acknowledge your contribution and issue a receipt.
                </span>
              }
            />

            <InfoCard
              title="Tax Deductible"
              description="Abuja Blazers is a registered sports organization. All donations are tax-deductible. We'll provide official receipts for all contributions."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const supportInfo = [
  {
    icon: <Image src={Football} alt="" width={24} className="h-auto object-cover" />,
    title: "Equipment",
    description: "Fund jerseys, flags, and training gear for the team",
  },
  {
    icon: <Running className="size-24 text-stc-200" />,
    title: "Youth Program",
    description: "Support free training camps for young athletes in Abuja",
  },
  {
    icon: <Image src={Facilties} alt="" width={24} className="h-auto object-cover" />,
    title: "Facilities",
    description: "Help us secure better training grounds and venues",
  },
];

const donationOptions = [
  { value: "5,000", title: "Supporter" },
  { value: "10,000", title: "Contributor" },
  { value: "25,000", title: "Champion" },
  { value: "50,000", title: "MVP" },
  { value: "100,000", title: "Legend" },
  { value: "250,000", title: "Founder" },
];

const DonationAmountOption = ({ value, title }: { value: string; title: string }) => {
  return (
    <label className="py-20 flex flex-col items-center gap-10 rounded-[5px] border border-grey-300 hover:scale-98 active:scale-98 hover:border-[#532A1A] has-checked:border-stc-200 has-checked:bg-[#532A1A]/10 bg-grey-700 cursor-pointer transition-all duration-200">
      <input type="radio" name="donation-amount" value={value} hidden />
      <span className="font-title text-grey-200 has-checked:text-stc-200 text-2xl uppercase">₦{value}</span>
      <span className="font-caption text-grey-25 uppercase">{title}</span>
    </label>
  );
};

const DonationTransferType = ({ value, title }: { value: string; title: string }) => {
  const [animate, setAnimate] = useState(false);
  const words = title.split(" ");

  const handleSelect = () => {
    setAnimate(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimate(true));
    });
  };

  return (
    <label className="py-40 flex flex-col items-center gap-10 rounded-[5px] border border-grey-300 bg-grey-700 hover:bg-stc-400 hover:border-stc-500 hover:text-grey-200 has-checked:bg-stc-400 has-checked:border-stc-500 has-checked:text-grey-200 text-grey-25 hover:cursor-pointer transition-all duration-300">
      <input type="radio" name="payment-method" value={value} hidden onChange={handleSelect} />
      <span className="font-title-lg tracking-normal font-medium uppercase flex gap-[0.25em]">
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              transition: animate
                ? `transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 60}ms, opacity 200ms ease ${i * 60}ms`
                : "none",
              transform: animate ? "scale(1)" : "scale(0.8)",
              opacity: animate ? 1 : 0,
            }}
          >
            {word}
          </span>
        ))}
      </span>
    </label>
  );
};

const InfoCard = ({ title, description }: { title: string; description: React.ReactNode }) => {
  return (
    <div className="py-29 px-16 lg:px-34 rounded-2xs flex flex-col gap-10 border border-grey-300 bg-grey-400">
      <p className="py-10 font-title font-satoshi text-stc-200 uppercase tracking-normal leading-none">{title}</p>
      <p className="font-label text-grey-25 font-satoshi">{description}</p>
    </div>
  );
};
