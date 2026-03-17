interface Stat {
  title: string;
  value: string | number;
  description: string;
}

export default function StatCard({ stat }: { stat: Stat }) {
  const { title, value, description } = stat;

  return (
    <div className="border border-grey-300 rounded-[6px] p-16 flex flex-col gap-8 bg-grey-400">
      <p className="font-caption font-medium text-grey-25 uppercase">{title}</p>
      <h1 className="text-stc-200 leading-48 font-bold text-[2.5rem] font-inter">{value}</h1>
      <p className="font-caption font-medium text-grey-25 uppercase">{description}</p>
    </div>
  );
}
