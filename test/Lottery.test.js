const assert = require("assert");
const ganche = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganche.provider());
const { interface, bytecode } = require("../compile");

let accounts;
let lotteryDeployment;
const array = [];

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  lotteryDeployment = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
    })
    // Web3 will create and initialize the transaction object
    .send({ from: accounts[0], gas: 1000000 });
  //Here we are sending the transaction to network for that we are specifying the address and Gas limit
});

describe("TestCase for lottery contarct", () => {
  it("Check if contract is deployed or not ? by checking  address properties of lotteryDeployment object", () => {
    assert.ok(lotteryDeployment.options.address);
  });

  it("Assign Value to manager", async () => {
    const manager = await lotteryDeployment.methods.manager().call();
    assert.equal(manager, accounts[0]);
  });
  it("Added Player to league", async () => {
    await lotteryDeployment.methods
      .enter()
      .send({ from: accounts[0], value: web3.utils.toWei("1", "ether") });
    const player = await lotteryDeployment.methods
      .getAllPlayers()
      .call({ from: accounts[0] });
    assert.equal(accounts[0], player[0]);
  });
});
