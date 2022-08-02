import classnames from "classnames";
import Link from "next/link";
import { ReactNode, useMemo, useState } from "react";
import { AccessControl } from "./access";

export default function Navbar() {
  return (
    <nav className="flex flex-col w-64 h-screen float-left bg-gray-800 text-gray-100">
      <MenuItem href="/users" name="users"></MenuItem>
      <MenuItem
        href="/no-access"
        name="no-access"
        roles={["NoAccessRole"]}
      ></MenuItem>
      <MenuItem
        href="/has-access"
        name="has-access"
        roles={["HasAccessRole"]}
      ></MenuItem>
    </nav>
  );
}

function MenuGroup({
  defaultExpanded = false,
  children,
}: {
  defaultExpanded: boolean;
  children: ReactNode;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const className = useMemo(
    () => classnames({ "h-12": !expanded }, "overflow-hidden"),
    [expanded]
  );
  return (
    <div className={className} onClick={() => setExpanded((state) => !state)}>
      {children}
    </div>
  );
}

function MenuItem({
  href,
  name,
  roles,
}: {
  href: string;
  name: string;
  roles?: string[];
}) {
  return (
    <AccessControl roles={roles} fallback="">
      <Link href={href}>
        <a className="h-12 leading-[3rem] text-lg px-2 hover:bg-gray-900">
          {name}
        </a>
      </Link>
    </AccessControl>
  );
}
