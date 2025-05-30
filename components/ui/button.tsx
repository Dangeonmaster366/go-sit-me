import { ReactNode } from "react";

export function Button({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <button className={`rounded-md font-semibold ${className}`}>
      {children}
    </button>
  );
}
