export default function BankAccountCard() {
  return (
    <div className="rounded-2xs border-[0.5px] border-stc-200 bg-grey-500 lg:min-w-588">
      <div className="py-13 px-10 lg:py-29 ;g:px-34 flex flex-col gap-10 divide-y divide-grey-300 [&>*:first-child]:border-t-0">
        <h1 className="py-21 font-title font-satoshi uppercase text-grey-200">Bank account details</h1>
        <div className="py-19.5 flex justify-between items-center">
          <p className="font-label tracking-normal uppercase text-grey-25">Bank Name</p>
          <h4 className="text-grey-200 font-title uppercase">OPAY</h4>
        </div>
        <div className="py-19.5 flex justify-between items-center">
          <p className="font-label tracking-normal uppercase text-grey-25">Account name</p>
          <h4 className="text-grey-200 font-title">Abuja Blazers Football Ventures</h4>
        </div>
        <div className="py-19.5 flex justify-between items-center">
          <p className="font-label tracking-normal uppercase text-grey-25">Account Number</p>
          <h4 className="text-grey-200 font-title uppercase">6539241608</h4>
        </div>
      </div>
    </div>
  );
}
