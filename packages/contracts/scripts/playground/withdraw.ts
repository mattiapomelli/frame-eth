import hre, { viem } from "hardhat";
import { getDeploymentAddress } from "../../deployment/deployment-manager";
import { uploadToIPFS } from "../../utils/ipfs";

async function main() {
  const network = hre.network.name;
  console.log("Network:", network);

  // Get contract
  const lock = await viem.getContractAt(
    "Lock",
    getDeploymentAddress(network, "Lock")
  );

  // Upload to IPFS
  const data = {
    title: "Title",
  };
  const dataUri = await uploadToIPFS(data);
  if (!dataUri) throw new Error("Failed to upload to IPFS");

  console.log("Data Uri: ", dataUri);

  // Set data
  const tx = await lock.write.withdraw();
  console.log("Tx hash: ", tx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
