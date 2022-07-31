import useSWR from "swr";
import { EnumName } from "../config/enums";

const fetcher = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  fetch(input, init).then((res) => res.json());

export default function useEnum(name: EnumName) {
  const { data, error } = useSWR(`/api/enums/${name}`, fetcher);
  return {
    record: data,
    loading: !data && !error,
    error: error,
  };
}
