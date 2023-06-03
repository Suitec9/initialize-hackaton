
   require("dotenv").config({ path: ".env" });
   const { ethers } = require("hardhat");
   
   async function main() {
     /*
     A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
     so  PragueopContract here is a factory for instances of our Pragueop contract.
     */
     const  PragueopContract = await ethers.getContractFactory("Pragueop");
   
     // deploy the contract
     const deployedPragueopContract = await PragueopContract.deploy();

       
       // Wait for it to finish deploying
       await deployedPragueopContract.deployed();
   
     // print the address of the deployed contract
     console.log("Pragueop Contract Address",
      deployedPragueopContract.address);
   }
   
   // Call the main function and catch if there is any error
   main()
     .then(() => process.exit(0))
     .catch((error) => {
       console.error(error);
       process.exit(1);
     });