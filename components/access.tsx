import { createContext, ReactNode, useContext, useMemo } from "react";
import useAccess from "../hooks/useAccess";

const accessContext = createContext<{ roles: string[] }>({ roles: [] });

export function AccessProvider({ children }: { children: ReactNode }) {
  const { access } = useAccess();
  return (
    <accessContext.Provider value={{ roles: access?.roles ?? [] }}>
      {children}
    </accessContext.Provider>
  );
}

export function AccessControl({
  roles,
  children,
  fallback,
}: {
  roles?: string[];
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const access = useContext(accessContext);
  const accessed = useMemo(
    () => !roles || access.roles.some((r) => roles.includes(r)),
    [access, roles]
  );
  return <>{accessed ? children : fallback ?? "no access"}</>;
}
