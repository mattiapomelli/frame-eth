import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "./scripts/deploy";
import "./scripts/generate";

const mnemonic = process.env.MNEMONIC;
if (!mnemonic) {
  throw new Error("Please set your MNEMONIC in a .env file");
}

const accounts = {
  mnemonic,
  count: 100,
};

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  networks: {
    hardhat: {
      chainId: 1337,
      accounts,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts,
    },
    mumbai: {
      url:
        process.env.POLYGON_MUMBAI_RPC_URL ||
        "https://rpc-mumbai.maticvigil.com",
      accounts,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
  sourcify: {
    enabled: true,
  },
};

export default config;
