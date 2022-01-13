const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}

// const path = require("path");
// const solc = require("solc");
// const fs = require("fs-extra");
// const output = require("fs-extra/lib/output");

// //fs means that we are 3rd part file system with extra functionality.

// const buildPath = path.resolve(__dirname, "build");

// fs.removeSync(buildPath);
// // First delete everything inside this folder recusivley.

// const sourceCodePath = path.resolve(__dirname, "contracts", "Campaign.sol");

// //get the source code path.
// const code = fs.readFileSync(sourceCodePath, "utf8");
// // read the file
// const output = solc.compile(code, 1).contracts;

// // const compiledSourceCode = solc.compile(code, 1).contracts;

// //compiled file , that we will iterate across it for our contracts.

// fs.emptyDirSync(buildPath);

// //created the directory that we have deleted earlier.

// for (let contract in output) {
//   fs.outputJsonSync(
//     path.resolve(buildPath, contract.replace(":", "") + ".json"),
//     output[contract]
//   );
// }
