import clsx from "clsx";
import { ComponentProps } from "react";

export function Table({ ...props }: ComponentProps<"table">) {
  return (
    <div className="w-full overflow-x-auto rounded-lg">
      <table {...props} className="w-full border-separate border-spacing-0 border border-grey-600 bg-grey-400" />
    </div>
  );
}

export function TableHeader({ ...props }: ComponentProps<"thead">) {
  return <thead className="rounded-lg bg-grey-600" {...props} />;
}

export function TableHead({ className, ...props }: ComponentProps<"th">) {
  return <th className={clsx("py-20 px-30 text-left uppercase text-grey-25 font-medium", className)} {...props} />;
}

export function TableBody({ className, children }: ComponentProps<"tbody">) {
  return (
    <tbody
      className={clsx(
        "bg-grey-400 [&>tr:first-child>td:first-child]:rounded-tl-lg [&>tr:first-child>td:last-child]:rounded-tr-lg [&>tr:last-child>td:first-child]:rounded-bl-lg [&>tr:last-child>td:last-child]:rounded-br-lg",
        className,
      )}
    >
      {children}
    </tbody>
  );
}

export function TableRow({ className, ...props }: ComponentProps<"tr">) {
  return <tr className={className} {...props} />;
}

export function TableCell({ className, children, ...props }: ComponentProps<"td">) {
  return (
    <td className={clsx("px-30 py-24", className)} {...props}>
      {children}
    </td>
  );
}
