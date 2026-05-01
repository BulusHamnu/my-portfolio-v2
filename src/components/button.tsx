import { type LucideIcon } from "lucide-react";

/* Button */
function Button({ text, Icon }: { text: string; Icon: LucideIcon }) {
  return (
    <button className="flex flex-row no-wrap gap-2 button-primary border rounded-sm px-4 py-2 w-30 cursor-pointer items-center justify-between">
      <span>{text}</span>
      <Icon size={22} />
    </button>
  );
}

export default Button;
