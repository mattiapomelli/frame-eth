import { Abi } from "viem";

interface Artifact {
  [key: string]: {
    address: `0x${string}`;
    abi: Abi;
  };
}

export const Contracts: Artifact = {
  1: {
    address: "0x231",
    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_unlockTime",
            type: "uint256",
          },
        ],
        stateMutability: "payable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "when",
            type: "uint256",
          },
        ],
        name: "Withdrawal",
        type: "event",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address payable",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "unlockTime",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
};