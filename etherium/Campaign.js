import web3 from "./web3";
import Campaign from "./build/Campaign.json";

// Instance of creating the intance, we are creating the function that will take the address annd do the rest.

export default (address) => {
  return new web3.eth.Contract(JSON.parse(Campaign.interface), address);
};
