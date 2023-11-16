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
      chainId: 31337,
      accounts,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      accounts,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts,
    },
    gnosis: {
      url: "https://rpc.gnosischain.com",
      accounts,
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      gasPrice: 1000000000,
      accounts,
    },
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io",
      accounts,
    },
    mantleTestnet: {
      url: "https://rpc.testnet.mantle.xyz",
      accounts,
    },
  },
  etherscan: {
    customChains: [
      {
        network: "chiado",
        chainId: 10200,
        urls: {
          //Blockscout
          apiURL: "https://blockscout.com/gnosis/chiado/api",
          browserURL: "https://blockscout.com/gnosis/chiado",
        },
      },
      {
        network: "gnosis",
        chainId: 100,
        urls: {
          // 3) Select to what explorer verify the contracts
          // Gnosisscan
          apiURL: "https://api.gnosisscan.io/api",
          browserURL: "https://gnosisscan.io/",
          // Blockscout
          //apiURL: "https://blockscout.com/xdai/mainnet/api",
          //browserURL: "https://blockscout.com/xdai/mainnet",
        },
      },
      {
        network: "scrollSepolia",
        chainId: 534351,
        urls: {
          apiURL: "https://sepolia-blockscout.scroll.io/api",
          browserURL: "https://sepolia-blockscout.scroll.io/",
        },
      },
      {
        network: "mantleTestnet",
        chainId: 5001,
        urls: {
          apiURL: "https://explorer.testnet.mantle.xyz/api",
          browserURL: "https://explorer.testnet.mantle.xyz",
        },
      },
    ],
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",
      chiado: process.env.GNOSISSCAN_API_KEY || "",
      gnosis: process.env.GNOSISSCAN_API_KEY || "",
      scrollSepolia: "abc",
      mantleTestnet: process.env.ETHERSCAN_API_KEY || "",
    },
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
