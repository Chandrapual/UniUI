import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@uniui/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  ghost: "uniui-button--ghost",
  outline: "uniui-button--outline",
  primary: "uniui-button--primary",
  secondary: "uniui-button--secondary"
};

const sizeClasses: Record<ButtonSize, string> = {
  lg: "uniui-button--lg",
  md: "uniui-button--md",
  sm: "uniui-button--sm"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    className,
    disabled = false,
    loading = false,
    size = "md",
    type = "button",
    variant = "primary",
    ...props
  },
  ref
) {
  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      aria-busy={loading || undefined}
      className={cn(
        "uniui-button",
        variantClasses[variant],
        sizeClasses[size],
        loading && "uniui-button--loading",
        className
      )}
      data-loading={loading ? "" : undefined}
      data-size={size}
      data-variant={variant}
      disabled={isDisabled}
      type={type}
      {...props}
    >
      {loading ? <span aria-hidden="true" className="uniui-button__spinner" /> : null}
      {children !== undefined && children !== null ? (
        <span className="uniui-button__label">{children}</span>
      ) : null}
    </button>
  );
});
