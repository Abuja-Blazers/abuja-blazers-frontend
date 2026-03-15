export const SupportCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="py-30 px-10 bg-[#181818] hover:bg-grey-400 border-[0.5px] border-grey-300 hover:border-stc-200 rounded scale-99 transition-all duration-300">
      <div className="py-10 flex flex-col items-center gap-5">
        {icon}
        <h2 className="text-[1.188rem] font-bold uppercase text-grey-200">{title}</h2>
        <p className="text-grey-25 font-label tracking-normal text-center">{description}</p>
      </div>
    </div>
  );
};
