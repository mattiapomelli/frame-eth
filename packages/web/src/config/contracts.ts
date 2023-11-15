import contractAddressesJson from "./addresses.json";

import { LockAbi } from "@/config/abis/lock";

const contractAddresses = contractAddressesJson as Record<string, Record<number, `0x${string}`>>;

export const getLockConfig = (chainId: number) => ({
  address: contractAddresses["Lock"][chainId],
  abi: LockAbi,
});
