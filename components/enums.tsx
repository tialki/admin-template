import { EnumName } from "../types/enums";
import useEnum from "../hooks/useEnum";

export function EnumText({ name, value }: { name: EnumName; value: string }) {
  const { record } = useEnum(name);
  return <>{record?.[value]}</>;
}

export function EnumSelect({ name }: { name: EnumName }) {
  const { record } = useEnum(name);
  return (
    <select>
      {record &&
        Object.entries<string>(record).map(([value, text]) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
    </select>
  );
}
