import { EnumName } from "../config/enums";
import useEnum from "../hooks/useEnum";

export function EnumText({ name, value }: { name: EnumName; value: string }) {
  const { record } = useEnum(name);
  return <>{record?.[value]}</>;
}
