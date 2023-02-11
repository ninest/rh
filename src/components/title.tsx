import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const titleStyles = cva(["font-bold tabular-nums"], {
  variants: {
    intent: {
      h1: ["text-2xl"],
      h2: ["text-xl"],
      h3: [""],
    },
  },
  defaultVariants: {
    intent: "h1",
  },
});

type TitleProps = VariantProps<typeof titleStyles> & ComponentProps<"h1">;

export const Title = ({
  intent,
  className,
  children,
  ...props
}: TitleProps) => {
  const classes = `${className} ${titleStyles({ intent })}`;
  const HeadingTag = intent as keyof JSX.IntrinsicElements; // intent is h1/h2/h3
  return <HeadingTag className={classes}>{children}</HeadingTag>;
};
