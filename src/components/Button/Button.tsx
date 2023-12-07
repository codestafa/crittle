import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export default function Header({ children, className }: ButtonProps) {
  return (
    <div className={className ? className : undefined}>
      <button className="border-2 p-2 border-customPink text-customPink text-Mate text-xl font-bold">
        {children}
      </button>
    </div>
  );
}
