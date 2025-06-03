import { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils"; // shadcn helper

export function NeutralLabel(
  props: LabelHTMLAttributes<HTMLLabelElement>
) {
  return (
    <label
      {...props}
      className={cn("font-medium", props.className)} // drop peer-invalid
    />
  );
}
