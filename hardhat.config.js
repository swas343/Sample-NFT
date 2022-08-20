/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, METAMASK_PRIVATE_KEY, GAS_LIMIT } = process.env;
module.exports = {
  solidity: "0.8.16",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
      blockGasLimit: GAS_LIMIT,
    },
    goerli: {
      url: API_URL,
      accounts: [`0x${METAMASK_PRIVATE_KEY}`],
    },
  },
};
