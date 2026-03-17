import clsx from "clsx";
import { useId } from "react";

type TextareaProps = {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
};

export function Textarea({ label, name, placeholder, value, onChange, error }: TextareaProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-8">
      <label htmlFor={id} className="uppercase font-label tracking-normal font-medium text-grey-250 py-10">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={5}
        className={clsx(
          "w-full bg-[#181818] border font-button rounded px-20 py-10 text-grey-200 placeholder:text-grey-25 outline-none resize-none transition-colors duration-150",
          error ? "border-red-500 focus:border-red-500" : "border-grey-300 focus:border-stc-900"
        )}
      />
      {error && <p className="font-caption text-red-500">{error}</p>}
    </div>
  );
}