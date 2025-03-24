import React, { forwardRef } from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "flex h-10 rounded-md border-2 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          error ? "border-red-500 focus-visible:ring-red-500" : "border-blue-300",
          className
        )}
        aria-invalid={error || undefined}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;