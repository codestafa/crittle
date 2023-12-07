import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type HeaderProps = {
  children: ReactNode;
};

export default function Header({ children, ...variantProps }: HeaderProps) {
  return (
    <div className="bg-gradient-to-r from-magenta to-lighter-magenta p-3">
      <header>
        <ul className="gap-5 flex tracking-widest leading-normal">
          <div>
            <li className="mb-2">
              <h1 className="text-white text-5xl font-Mate inline-flex">
                crittle
              </h1>
            </li>
          </div>
          <div className="flex-wrap flex gap-5 items-center text-sm">
            <li>
              <a href="#">
                <h1 className="text-white font-Inter">about</h1>
              </a>
            </li>
            <li>
              <a href="#">
                <h1 className="text-white font-Inter">leaderboards</h1>
              </a>
            </li>
            <li>
              <a href="#">
                <h1 className="text-white font-Inter">explore</h1>
              </a>
            </li>
          </div>
          <div className="ml-auto items-center inline-flex w-50">
            {children}
          </div>
        </ul>
      </header>
    </div>
  );
}
