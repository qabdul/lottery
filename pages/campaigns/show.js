import React from "react";
import Layout from "../../component/Layout";
import Campaign from "../../etherium/Campaign";
import { Card, Grid, Button } from "semantic-ui-react";
import web3 from "../../etherium/web3";
import Contribute from "../../component/Contribute";
import { Link } from "../../routes";

const show = (props) => {
  const renderCards = () => {
    const {
      minimumContribution,
      balance,
      requestCount,
      approversCount,
      manager,
    } = props;
    const items = [
      {
        header: manager,
        description:
          "Manager will create requests and withdraw money for expenses.",
        meta: "Address of Manager",
        style: { overflowWrap: "break-word" },
        fluid: "true",
      },
      {
        header: minimumContribution,
        description: "Minimum Contribution for this Campaign.",
        meta: "Minimum Contribution (wei)",
        style: { overflowWrap: "break-word" },
        fluid: "true",
      },
      {
        header: requestCount,
        description:
          "A request tries to withdraw money from the contract to pay money to third party.Request must be approved by approvers (Who donate money to this campaign).",
        meta: "No of Request",
        style: { overflowWrap: "break-word" },
        fluid: "true",
      },
      {
        header: approversCount,
        description: "No of people who have donated money to this Campaign.",
        meta: "No of Approvers",
        style: { overflowWrap: "break-word" },
        fluid: "true",
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        description: "Total Balance, how much money is left in this campign.",
        meta: "Campaign Balance in (ether)",
        style: { overflowWrap: "break-word" },
        fluid: "true",
      },
    ];
    return <Card.Group items={items} />;
  };

  return (
    <Layout>
      <h3>Campagin Details</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column computer={10} mobile={16} tablet={10}>
            <Link to={`/`}>
              <a>
                {" "}
                <Button primary floated="left" style={{ marginTop: "10px" }}>
                  Back
                </Button>
              </a>
            </Link>
            <Link to={`/campaigns/${props.address}/requests`}>
              <a>
                {" "}
                <Button primary floated="right" style={{ marginTop: "10px" }}>
                  View Requests
                </Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={10} computer={10}>
            <> {renderCards()}</>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={6} computer={6}>
            {" "}
            <Contribute
              address={props.address}
              minimumContribution={props.minimumContribution}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

show.getInitialProps = async (props) => {
  const campaign = Campaign(props.query.address);
  const result = await campaign.methods.getSummary().call();
  return {
    minimumContribution: result[0],
    balance: result[1],
    requestCount: result[2],
    approversCount: result[3],
    manager: result[4],
    address: props.query.address,
  };
};

export default show;
