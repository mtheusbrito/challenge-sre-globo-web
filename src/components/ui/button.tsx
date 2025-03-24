import React, { forwardRef } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, disabled, asChild, ...props }, ref) => {

    const Component: any = asChild ? "span" : "button";
    return (
      <Component
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        className={clsx(
          "cursor-pointer inline-flex items-center justify-center rounded-md h-10 px-4 py-2 text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-blue-500 text-white hover:bg-blue-500/90": variant === "primary",
            "bg-gray-200 text-black hover:bg-gray-300": variant === "secondary",
            "border border-gray-400 text-gray-700 hover:bg-gray-100": variant === "outline",
            "bg-red-500 text-white hover:bg-red-600": variant === "danger",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;