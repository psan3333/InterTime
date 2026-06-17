import { RPCCall } from "@/app/shared/types";
import { AvgMaxDto } from "./types";
import { useQuery } from "@tanstack/react-query";
import getAvgMaxBars from "./rpc";

// it's purpose is to make requests
export function useAvgMaxBars(period: string): AvgMaxDto[] {
  const rpcArgs: RPCCall = {
    procedure: "getAvgMaxBars",
    rpcArgsJSON: JSON.stringify({ period }),
  };

  const { data, isLoading, error } = useQuery({
    queryKey: [rpcArgs.procedure, rpcArgs.rpcArgsJSON],
    queryFn: async () => getAvgMaxBars(rpcArgs),
  });

  if (isLoading || error) return [];

  return data || [];
}
