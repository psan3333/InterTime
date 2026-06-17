import { RPCCall } from "@/app/shared/types";
import { AvgMaxDto } from "./types";

export async function getAvgMaxBars(rpc: RPCCall): Promise<AvgMaxDto[]> {
  try {
    const rpcResponse = await fetch(process.env.BACKEND_URL!, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rpc),
    });

    const responseData = await rpcResponse.json();
    return responseData.data as AvgMaxDto[];
  } catch (err) {
    console.log(err);
    return [];
  }
}
