import React from "react";
import { Label } from "./label";
export default function Title({
  titleText,
  colorText,
  children,
  className,
}: {
  titleText: string;
  colorText: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Label className={`text-5xl font-medium font-roboto ${className}`}>
        {titleText} <span className="text-[--secondary3]">{colorText}</span>
        {children}
      </Label>
    </>
  );
}
