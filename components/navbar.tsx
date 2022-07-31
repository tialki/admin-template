import classnames from "classnames";
import Link from "next/link";
import { ReactNode, useMemo, useState } from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-col w-64 h-screen float-left bg-gray-800 text-gray-100">
      <MenuItem href="/users" name="users"></MenuItem>
      <MenuItem href="/orders" name="orders"></MenuItem>
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

function MenuItem({ href, name }: { href: string; name: string }) {
  return (
    <Link href={href}>
      <a className="h-12 leading-[3rem] text-lg px-2 hover:bg-gray-900">
        {name}
      </a>
    </Link>
  );
}
