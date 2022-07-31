import { localEnums, RemoteEnumName } from "../config/enums";

export type LocalEnumName = keyof typeof localEnums;

export type EnumName = LocalEnumName | RemoteEnumName;
