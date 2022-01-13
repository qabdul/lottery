import web3 from "./web3";
const address = "0x4698d6667f9cF8994E6bec3d903922bD5BCE2eDE";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x76b437362DfeC06123CF7f19229BE744aCDF48E5"
);

export default instance;
