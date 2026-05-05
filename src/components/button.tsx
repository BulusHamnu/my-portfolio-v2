import { type LucideIcon } from "lucide-react";

/* Button */
function Button({
  text,
  Icon,
  style,
}: {
  text: string;
  Icon: LucideIcon;
  style: string;
}) {
  return (
    <button
      className={`${style} flex flex-row no-wrap gap-2  border rounded-sm px-5 lg:px-4 py-2  w-35 lg:w-30 cursor-pointer items-center justify-between`}
    >
      <span>{text}</span>
      <Icon size={22} />
    </button>
  );
}

export default Button;
