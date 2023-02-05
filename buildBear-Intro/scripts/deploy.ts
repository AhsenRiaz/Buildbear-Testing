import { ethers } from "hardhat";

async function main() {
  // helloWorld is a factory for instances of our hello world contract
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  // deploy() will strat the deployment and will return a Promise that resolves to a Contract object
  const helloWorld = await HelloWorld.deploy("Hello World!");
  console.log("Contract deployed to address:", helloWorld.address);
}

// ensures the code is clean
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
