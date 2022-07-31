import useSWR from "swr";
import { buildEnumUrl } from "../config/enums";
import type { EnumName } from "../types/enums";

const fetcher = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  fetch(input, init).then((res) => res.json());

export default function useEnum(name: EnumName) {
  const { data, error } = useSWR(buildEnumUrl(name), fetcher);
  return {
    record: data,
    loading: !data && !error,
    error: error,
  };
}
