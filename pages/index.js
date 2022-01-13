import React, { useEffect, useState } from "react";
import web3 from "../etherium/web3";
import CampaignFactory from "../etherium/CampaignFactory";
<Header as="h1">First Header</Header>;
import {
  Card,
  Button,
  Header,
  Grid,
  TransitionablePortal,
} from "semantic-ui-react";
import Layout from "../component/Layout";
import { Link } from "../routes";
import NoDataFound from "../component/NoDataFound";
import TransationPortal from "../component/TransationPortal";

const index = (props) => {
  useState;
  console.log(props.result.length);

  const renderCampaign = () => {
    const items = props.result.map((address) => {
      return {
        header: address,
        description: (
          <Link to={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
        style: { overflowWrap: "break-word" },
      };
    });
    return <Card.Group centered items={items} />;
  };

  return (
    <>
      <Layout>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              {" "}
              <Header as="h1">Open Campaigns</Header>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Link to="/campaigns/newcampaign">
                <Button content="Create Campaign" floated="right" primary />
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {props.result.length === 0 ? (
                <NoDataFound message=" No Campaign Found, click on create button to start new campaign 👍 " />
              ) : (
                renderCampaign()
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    </>
  );
};

index.getInitialProps = async (props) => {
  const result = await CampaignFactory.methods.getCreatedCampaignList().call();

  return { result };
};

export default index;
