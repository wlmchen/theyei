import React, { useState } from "react";
import Link from "next/link";
import NavItemDrop from "./NavItemDrop";

export default function NavItem({
  name,
  href,
  active,
  dropRoutes,
}: NavItemProps) {
  const activeStyles = "border-yei-primary-main text-gray-900";
  const defaultStyles =
    "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700";
  const [navItemStyle, setNavItemStyle] = useState(
    `inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium ${
      active ? activeStyles : defaultStyles
    }`
  );

  if (dropRoutes)
    return (
      <NavItemDrop
        itemStyle={navItemStyle}
        name={name}
        dropRoutes={dropRoutes}
      />
    );

  return (
    <Link href={href}>
      <a className={navItemStyle}>{name}</a>
    </Link>
  );
}

type NavItemProps = {
  name: string;
  href: string;
  active: boolean;
  dropRoutes?: any;
};
