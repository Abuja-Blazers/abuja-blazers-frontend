import { HeroSection } from "@/components/HeroSection";
import { formatCurrency } from "@/utils/data";

export default function TicketsPage() {
  return (
    <div className="bg-grey-800">
      <HeroSection
        eyebrow="Season 26"
        mainText="Get Your"
        subText="Tickets"
        description="Book your seats for every Abuja Blazers game. Choose your"
        descriptionSubText="tier and secure your spot before they sell out."
      />
      <section className="py-20 px-45">
        <div className="grid grid-cols-[1.5fr_588px] gap-20">
          <div className="flex flex-col"></div>

          <div className="rounded-2xs border-[0.5px] border-stc-200 bg-grey-500">
            <div className="px-34 py-29 flex flex-col gap-20">
              <div className="border-b-[.6px] border-b-grey-300">
                <h1 className="font-title font-satoshi uppercase text-grey-200">Your Tickets</h1>
              </div>
              <div className="border-b-[.6px] border-b-grey-300 flex flex-col gap-10">
                <h1 className="font-title font-satoshi text-grey-200">Vikings vs Abuja Blazers</h1>
                <p className="font-label tracking-normal text-grey-25">Qty: 1</p>
                <div className="flex justify-between items-center">
                  <p className="font-title-lg font-bold tracking-normal text-stc-200">{formatCurrency(3000)}</p>
                  <div className="flex gap-10 items-center">
                    <button>-</button>
                    <p></p>
                    <button>+</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-label tracking-normal uppercase text-grey-25">Total</p>
                <p>{formatCurrency(3000)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
