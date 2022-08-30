
import Web3 from 'web3';
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';
import ContractSwap from "../src/artifacts/contracts/ContractSwap.sol/ContractSwap.json"
console.log("it's running!")
const web3 = new Web3('https://rpc.l16.lukso.network');

const PRIVATE_KEY = ''; // your EOA private key (main controller address)
const myEOA = web3.eth.accounts.wallet.add(PRIVATE_KEY); // amount of LYX we want to transfer

// 1. instantiate your contracts
const myUPAddress = "0x77b28431dA70802738C4a24823595BDC259Cc5aC"
const myUP = new web3.eth.Contract(UniversalProfile.abi, myUPAddress);

// the KeyManager is the owner of the Universal Profile
// so we can call the owner() function to obtain the KeyManager's address
const owner = await myUP.methods.owner().call();
const myKM = new web3.eth.Contract(KeyManager.abi, owner);
console.log("Are we here now")
const OPERATION_CALL = 0;

const contractSwap = new web3.eth.Contract(ContractSwap.abi)

// 1. encode the payload to be run at the targetContract
// assuming targetContract is a Contract instance

const targetPayload = contractSwap
  .deploy(payload)
  .encodeABI();

console.log("asdfjkasjkdhf")
// 2. encode the payload to be run on the UP,
// passing the payload to be run at the targetContract as 4th parameter
let abiPayload = await myUP.methods
  .execute(OPERATION_CALL, myUPAddress, 0, targetPayload)
  .encodeABI();

// 3. execute via the KeyManager, passing the UP payload
await myKM.methods.execute(abiPayload).send({
  from: owner,
  gasLimit: 300_000,
});

contractSwap.deploy(payload).send(parmater)
console.log("we have contract swap")
const amount = web3.utils.toWei('3');
// payload executed at the target (here nothing, just a plain LYX transfer)
const data = '0x';

// 2. encode the payload to transfer 3 LYX from the UP
const transferLYXPayload = await myUP.methods
  .execute(OPERATION_CALL, recipient, amount, data)
  .encodeABI();

// 3. execute the LYX transfer via the Key Manager
await myKM.methods.execute(transferLYXPayload).send({
  from: myEOA.address,
  gasLimit: 300_000,
});