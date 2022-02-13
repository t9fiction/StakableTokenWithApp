// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const DevToken = await hre.ethers.getContractFactory("DevToken");
  // const baseTokenURI = "ipfs://QmPvv6kKVN6u5svbA36hyWuW2qt9tkWukyfZ4vAaSqiEvn/";
  // const devToken = await DevToken.deploy(baseTokenURI);
  const devToken = await DevToken.deploy("DevToken", "DVTK", 18, "50000000000000000000000");

  await devToken.deployed();

  console.log("DevToken is flying at ", devToken.address);

  // Reserve NFTs function
  // let txn = await devToken.reserveNFT("0x5cB8D34C14d23086000526115af22429aa01C21f", 7);
  // await txn.wait();
  // console.log("7 NFTs have been reserved");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
