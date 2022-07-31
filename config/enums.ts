import type { EnumName } from "../types/enums";

export const localEnums = {
  Test0: { 0: "No", 1: "Yes" },
};

export type RemoteEnumName = "Test1" | "Test2";

export function buildEnumUrl(name: EnumName) {
  return `/api/enums/${name}`;
}
