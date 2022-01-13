import React, { useState } from "react";
import Layout from "../../../component/Layout";
import NoDataFound from "../../../component/NoDataFound";
import { Button, Table, Grid, Message } from "semantic-ui-react";
import { Link } from "../../../routes";
import web3 from "../../../etherium/web3";
import Campaign from "../../../etherium/Campaign";
import RequestRow from "../../../component/RequestRow";
import ErrorMessage from "../../../component/ErrorMessage";

const index = (props) => {
  const { Header, Body, HeaderCell, Cell, Row } = Table;
  const [data, setData] = useState("");

  const setError = (error) => {
    setData(error);
  };

  const renderRows = () => {
    return props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          request={request}
          address={props.address}
          id={index}
          total={props.totalApprovers}
          setError={setError}
        />
      );
    });
  };

  return (
    <Layout>
      <h3>All the Request Created for this Campaign</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Link to={`/campaigns/${props.address}`}>
              <a>
                {" "}
                <Button primary={true} floated="left">
                  Back
                </Button>
              </a>
            </Link>{" "}
            <Link to={`/campaigns/${props.address}/requests/new`}>
              <a>
                {" "}
                <Button primary={true} floated="right">
                  Create Request
                </Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Table>
              <Header>
                <Row>
                  <HeaderCell>ID</HeaderCell>
                  <HeaderCell>Description</HeaderCell>
                  <HeaderCell>Amount</HeaderCell>
                  <HeaderCell>Recepient</HeaderCell>
                  <HeaderCell>Approval Count</HeaderCell>
                  <HeaderCell>Approve</HeaderCell>
                  <HeaderCell>Finalize</HeaderCell>
                </Row>
              </Header>
              <Table.Body>{renderRows()}</Table.Body>
            </Table>
            {props.requests.length === 0 ? (
              <NoDataFound message="Not Data Found, Please click on create Request button to create new one" />
            ) : (
              ""
            )}
            {data === "" ? "" : <ErrorMessage data={data} />}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

index.getInitialProps = async (props) => {
  const address = props.query.address;
  const campaign = Campaign(props.query.address);
  const requestsCount = await campaign.methods.getRequestsCount().call();
  const totalApprovers = await campaign.methods.approversCount().call();

  const requests = await Promise.all(
    Array(parseInt(requestsCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
  );
  console.log(requests);

  return {
    address,
    requests,
    requestsCount,
    totalApprovers,
  };
};

export default index;
