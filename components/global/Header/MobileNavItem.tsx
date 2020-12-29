import React, { useState } from "react";
import Link from "next/link";

export default function MobileNavItem({
  name,
  href,
  active,
  dropRoutes,
}: MobileNavItemProps) {
  const activeStyles = "bg-indigo-50 border-yei-primary-main text-green-900";
  const defaultStyles =
    "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700";
  const [navItemStyle, _] = useState(
    `block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6 ${
      active ? activeStyles : defaultStyles
    }`
  );
  return (
    <Link href={href}>
      <a className={navItemStyle}>{name}</a>
    </Link>
  );
}

type MobileNavItemProps = {
  name: string;
  href: string;
  active: boolean;
  dropRoutes?: any;
};
