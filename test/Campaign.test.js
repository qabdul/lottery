const assert = require("assert");
const ganche = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganche.provider());
const Campaign = require(".././etherium/build/Campaign.json");
const CampaignFactory = require(".././etherium/build/CampaignFactory.json");

let accounts;
let factory;
let campaign;
let campaignAddress;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(JSON.parse(CampaignFactory.interface))
    .deploy({
      data: CampaignFactory.bytecode,
    })
    // Web3 will create and initialize the transaction object
    .send({ from: accounts[0], gas: 1000000 });
  //Here we are sending the transaction to network for that we are specifying the address and Gas limit

  await factory.methods
    .createCampaign("100")
    .send({ from: accounts[0], gas: 1000000 });
  [campaignAddress] = await factory.methods.getCreatedCampaignList().call();

  //take first element and assign it.

  campaign = await new web3.eth.Contract(
    JSON.parse(Campaign.interface),
    campaignAddress
  );
});

// in the above statment we are now deploying or compaign contract ,here you will notuce that deploy nethod is there.
//because we already created out contract instance and no wwe are refrering to that contacr.
//so that is y we have only campaign adress.

describe("TestCases for Campaign contarct", () => {
  it("Check if contract is deployed or not ? by checking  address properties of lotteryDeployment object", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });
  it("Check who has called Create Campaign", async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(manager, accounts[0]);
    console.log(object);
  });

  it("Checking the values in Mapping", async () => {
    const isContribute = await campaign.methods.approvers(accounts[0]).call();
    assert(isContribute);
  });
});
