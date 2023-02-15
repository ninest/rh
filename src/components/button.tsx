import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { ComponentProps } from "react";
import { Link } from "react-router-dom";

const buttonStyles = cva(
  ["inline-block font-medium tracking-wide", "rounded-lg", "border-4"],
  {
    variants: {
      intent: {
        primary: ["bg-indigo-600 text-gray-200 hover:bg-indigo-500"],
        secondary: ["bg-gray-200 text-gray-800 hover:bg-gray-300"],
      },
      outline: {
        true: "",
        false: "border-transparent",
      },
      size: {
        sm: ["text-sm py-0.5 px-1"],
        default: ["text-base py-1 px-3"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        outline: true,
        class: [
          "bg-transparent text-indigo-600 border-indigo-600 hover:bg-gray-100",
        ],
      },
    ],
    defaultVariants: {
      intent: "secondary",
      size: "default",
      outline: false,
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> &
  ComponentProps<"button"> & { href?: string };
export const Button = ({
  intent,
  outline,
  size,
  href,
  children,
  className,
  ...props
}: ButtonProps) => {
  const classes = clsx(className, buttonStyles({ intent, outline, size }));
  if (href)
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
