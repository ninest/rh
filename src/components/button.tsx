import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(["font-medium tracking-wide", "rounded-lg", "border-4"], {
  variants: {
    intent: {
      primary: ["bg-indigo-600 text-gray-200 hover:bg-indigo-500",],
    },
    outline: {
      true: "",
      false: "border-transparent",
    },
    size: {
      default: ["text-base py-1 px-3"],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      outline: true,
      class: ["bg-transparent text-indigo-600 border-indigo-600 hover:bg-gray-100"],
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "default",
    outline: false,
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;
export const Button = ({ intent, outline, size, children }: ButtonProps) => {
  return (
    <button className={buttonStyles({ intent, outline, size })}>
      {children}
    </button>
  );
};
