import useSWR from "swr";
import { accessUrl } from "../config/access";
import { fetcher } from "./fetcher";

export default function useAccess() {
  const { data, error } = useSWR<{ roles: string[] }>(accessUrl, fetcher);
  return {
    access: data,
    loading: !data && !error,
    error: error,
  };
}
