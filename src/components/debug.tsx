import clsx from "clsx";
import { HTMLAttributes } from "react";

interface DebugProps extends HTMLAttributes<HTMLDivElement> {
  data: any;
}
export const Debug = ({ data, className }: DebugProps) => {
  return (
    <pre
      className={clsx(
        className,
        "p-2 text-xs bg-gray-900 text-gray-200 font-mono",
        "overflow-x-scroll",
        "rounded-md"
      )}
    >
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};
