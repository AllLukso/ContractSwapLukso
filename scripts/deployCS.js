 
const hre = require("hardhat");
const fs = require('fs');
const { count } = require('console');
const { umask } = require('process');
require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-ethers');
const { ethers, upgrades, waffle } = require("hardhat");
async function main() {
  // Start testing Contracts
  const [owner, dev1] = await ethers.getSigners()
  const provider = waffle.provider;

  const ContractSwap = await hre.ethers.getContractFactory("ContractSwap")
  const contractSwap = await ContractSwap.deploy()
  console.log(contractSwap.address)
 
  fs.writeFileSync('./src/config.js', `
  export const contractSwapAddress = "${contractSwap.address}"
  `)

}

main()
  .then(() => process.exit(0))

  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
