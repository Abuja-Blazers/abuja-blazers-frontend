const statusMap = {
  available: {
    bg: "#1E3021",
    color: "#00C84F",
  },
  negotiating: {
    bg: "#37221B",
    color: "#FF5C00",
  },
  signed: {
    bg: "#1F1F1F",
    color: "#888888",
  },
};
export const StatusBadge = ({ text }: { text: string }) => {
  const { bg, color } = statusMap[text as "available" | "negotiating" | "signed"];
  return (
    <span
      className="rounded-[6.875rem] p-10 font-label tracking-[.01em] capitalize"
      style={{ backgroundColor: bg, color }}
    >
      {text}
    </span>
  );
};
