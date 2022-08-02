import useSWR from "swr";
import { buildEnumUrl } from "../config/enums";
import type { EnumName } from "../types/enums";
import { fetcher } from "./fetcher";

export default function useEnum(name: EnumName) {
  const { data, error } = useSWR(buildEnumUrl(name), fetcher);
  return {
    record: data,
    loading: !data && !error,
    error: error,
  };
}
