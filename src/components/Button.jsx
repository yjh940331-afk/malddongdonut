import { cn } from "../utils/cn.js";

const variantClass = {
  primary: "button button--primary",
  secondary: "button button--secondary",
  ghost: "button button--ghost",
};

export default function Button({
  children,
  className,
  href,
  variant = "primary",
  external,
  ...props
}) {
  const isExternal = external ?? /^https?:\/\//.test(href || "");
  const classNames = cn(variantClass[variant] || variantClass.primary, className);

  if (href) {
    return (
      <a
        className={classNames}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} type="button" {...props}>
      {children}
    </button>
  );
}
