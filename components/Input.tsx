import clsx from "clsx";
import { useId } from "react";

type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export function Input({ label, name, placeholder, type = "text", value, onChange, error }: InputProps) {
  const id = useId();

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="uppercase font-label tracking-normal font-medium text-grey-250 py-10">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx(
          "w-full bg-[#181818] border font-button rounded px-16 py-10 text-grey-200 placeholder:text-grey-25 outline-none transition-colors duration-150",
          error ? "border-red-500 focus:border-red-500" : "border-grey-300 focus:border-stc-900",
        )}
      />
      {error && <p className="font-caption text-red-500">{error}</p>}
    </div>
  );
}
