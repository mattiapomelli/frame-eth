import fs from "fs";
import path from "path";
import prettier from "prettier";
import { Abi } from "viem";

import slugify from "slugify";

function getSlug(str: string) {
  return slugify(str.replace(/[A-Z]/g, "-$&"), { lower: true });
}

export const save = async (
  chainId: number,
  contractName: string,
  address: string,
  abi: Abi
) => {
  // Update ABI
  const abiFile = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "web",
    "src",
    "config",
    "abis",
    `${getSlug(contractName)}.ts`
  );

  if (!fs.existsSync(abiFile)) {
    fs.writeFileSync(abiFile, "");
  }

  fs.writeFileSync(
    path.join(abiFile),
    await prettier.format(
      `export const ${contractName}Abi = ${JSON.stringify(
        abi,
        null,
        2
      )} as const;`,
      {
        parser: "typescript",
      }
    )
  );

  console.log(`💾 Contract abi has been saved to ${abiFile}`);

  // Update address
  const addressesFile = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "web",
    "src",
    "config",
    "addresses.json"
  );

  const file = fs.readFileSync(addressesFile).toString();
  const contractAddresses = JSON.parse(file);

  if (!contractAddresses[contractName]) {
    contractAddresses[contractName] = {};
  }
  contractAddresses[contractName][chainId] = address;

  fs.writeFileSync(
    path.join(addressesFile),
    JSON.stringify(contractAddresses, null, 2)
  );
};
