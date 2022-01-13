import Web3 from "web3";
//constructor function.

let web3;

//Since our code now running on next js server instead of browser directly.

// because we are getting window global variables as undefined.

//Now we will check whether the request is running on browser or on next js server.

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //we are running on browser and runnning metamask for user.(already injected web3)
  web3 = new Web3(window.web3.currentProvider);
} else {
  //creating our own provider.
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/0e1a01ebabad439dbbc449e9d2403c58"
  );
  web3 = new Web3(provider);
}

// const web3 = new Web3(window.web3.currentProvider);

//We are going to extract from metamask.
//It is preconfigure by metamask,also having details of ublic and private key.

export default web3;
