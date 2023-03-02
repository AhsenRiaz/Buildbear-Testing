import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ETH_MAINNET_API_KEY}`,
        blockNumber: 14638929,
      },
    },
    buildbear: {
      url: process.env.API_URL,
      accounts: [process.env.PRIVATE_KEY as any],
    },
  },
};

export default config;
