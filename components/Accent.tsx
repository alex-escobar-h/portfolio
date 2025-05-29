"use client";
import { useEffect } from "react";
import { useHueStore } from "@/stores/useHueStore";

type AccentProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  variant?: "color" | "background";
} & React.ComponentPropsWithoutRef<C>;

export function Accent<C extends React.ElementType = "span">({
  as,
  className = "",
  style,
  children,
  variant = "color",
  ...restProps
}: AccentProps<C>) {
  const Component = as || "span";
  const { hue, generateHue } = useHueStore();

  const appliedStyle =
    variant === "background"
      ? { backgroundColor: `hsl(${hue}, 27%, 35%)` }
      : { color: `hsl(${hue}, 100%, 75%)` };

  useEffect(() => {
    if (hue === null) {
      generateHue();
    }
  }, [hue, generateHue]);
  return (
    <Component
      className={className}
      style={{ ...appliedStyle, ...style }}
      {...restProps}
    >
      {children}
    </Component>
  );
}
