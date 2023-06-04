require("dotenv").config({ path: ".env" });
const { ethers } = require("hardhat");


async function main() {
  // Deploy the FakeTokenMarketplace contract first
  const FakeTokenMarketplace = await ethers.getContractFactory(
    "FakeTokenMarketplace"
  );
  
  
  await FakeTokenMarketplace.deployed();

  console.log("FakeTokenMarketplace deployed to: ", FakeTokenMarketplace.address);

  // Now deploy the pragueop contract
  const pragueop = await ethers.getContractFactory("Pragueop");
  

    FakeTokenMarketplace.address,
          
          // This assumes your metamask account has at least 1 ETH in its account
          // Change this value as you want
    {
      value: ethers.utils.parseEther("0.1"),
    }
  
  await pragueop.deployed();

  console.log("pragueop deployed to: ", pragueop.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });