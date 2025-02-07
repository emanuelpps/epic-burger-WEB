import Link from "next/link";
import React from "react";

interface Props {
  label: string;
  link: string;
}

export const DropDownButton: React.FC<Props> = ({ label, link }) => {
  return <Link href={link} className="border-b-[1px] shadow-black-[1px] hover:opacity-35">{label}</Link>;
};
