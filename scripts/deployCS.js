 
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

  // Treasury deployment--
  // const Treasury = await hre.ethers.getContractFactory("MaskedDAOMembership")
  // const treasury = await Treasury.deploy()
  // console.log(treasury.address)
  // console.log(await treasury.mint())
  // console.log(owner.address)
  // const price2 = ethers.utils.parseUnits('1', 'ether')
  const ContractSwap = await hre.ethers.getContractFactory("ContractSwap")
  // const contractSwap = await ContractSwap.deploy()
  // console.log(contractSwap.address)
  
  // DEPLOYMENT PROXY ---
  // const instance = await upgrades.deployProxy(ContractSwap);
  // const contractSwap = await instance.deployed();
  // console.log(contractSwap.address);
  // console.log(instance.address)
  
  // UPGRADE--
  // await upgrades.upgradeProxy('0x20054a1376eE6864783e2f7601E53d1F93d29FC1', ContractSwap);
  // console.log('Box upgraded');

  // TEST---
  const contractSwap = ContractSwap.attach("0x23Cbff3674Df990aD1c62C5F11dD3745d018Db66")
  // const contractSwap = ContractSwap.attach("0x504b3beB2dAA1F6AF4228e32677Ae3f521B656f8")
  // console.log(await contractSwap.allowance("0xEA4d3baBb3e26855989E3a6F4B4106f6727880B1","0x20054a1376eE6864783e2f7601E53d1F93d29FC1"))
  console.log("heree", await contractSwap.owner())
  // // const balance = await provider.getBalance(contractSwap.address);
  // console.log("balance", balance)
  // await contractSwap.setUSDCAddress("0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747")
  
  
  //FRESH TEST--
  // const contractSolds = await contractSwap.createContractSwap("0x5A5CC1Cd5cFFE534400b8981C027beF96dCc48F9", "0xEA4d3baBb3e26855989E3a6F4B4106f6727880B1", price2, 1)
  // console.log(await contractSwap.owner())
  // console.log("user contracts", await contractSwap.getUserListedContracts())
  // console.log("balance", await provider.getBalance(contractSwap.address))
  // await  ContractSwap.attach("0x5A5CC1Cd5cFFE534400b8981C027beF96dCc48F9").transferOwnership("0x20054a1376eE6864783e2f7601E53d1F93d29FC1")
  // await contractSwap.purchaseContract("0x5A5CC1Cd5cFFE534400b8981C027beF96dCc48F9", { value: price2 })
  // console.log("balance", await provider.getBalance(contractSwap.address))
  // console.log(await contractSwap.returnUSDCAddress())
  // console.log(contractSolds)
  // console.log("solds", contractSolds)
  return
  // check balance before minting
  // console.log("---------------------Contract-Swap--------------------------------")
  // console.log(await trea sury.owner())
  // //create contract swap
  // // carefull here on what is used as the price
  // let price = ethers.utils.parseUnits('100', 'ether')
  // await contractSwap.createContractSwap(treasury.address, dev1.address, price)
  // // console.log("contract solds", await contractSwap.returnTotalContractsSold())

  // //now send the contract to ContractSwap
  // await treasury.transferOwnership(contractSwap.address)
  // mss = await treasury.owner()
  // console.log(mss, contractSwap.address);

  // // someone buys the contract
  // await contractSwap.connect(dev1).purchaseContract(treasury.address, {value: price})
  // mss = await treasury.owner()
  // mss = await treasury.owner()
  // console.log(mss, dev1.address);
  
  // //we want to return a contract
  // await contractSwap.connect(dev1).createContractSwap(treasury.address, owner.address, price)
  // mss = await treasury.owner()
  // console.log(mss, dev1.address);
  // await treasury.connect(dev1).transferOwnership(contractSwap.address)
  // mss = await treasury.owner()
  // console.log(mss,contractSwap.address);
  // // here the contract is returned
  // await contractSwap.connect(dev1).returnContract(treasury.address);
  // mss = await treasury.owner()
  // console.log(mss, dev1.address);

  // // upgrade contract
  // const ContractSwapV2 = await hre.ethers.getContractFactory("ContractSwapV1")
  // let test = await upgrades.upgradeProxy(contractSwap.address, ContractSwapV2)
  // console.log("contract solds", await test.returnTotalContractsSold())


  
  // console.log(await contractSwap.connect(dev1).userContracts())
  // fs.writeFileSync('./src/config.js', `
  // export const contractSwapAddress = "${contractSwap.address}"
  // export const treasuryAddress = "${treasury.address}"
  // export const marketplaceAddress = "${treasury.address}"
  // export const membershipAddress = "${contractSwap.address}"
  // export const unmaskAddress = "${contractSwap.address}"
  // export const devAddress = "${dev1.address}"
  // `)

}

main()
  .then(() => process.exit(0))

  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
