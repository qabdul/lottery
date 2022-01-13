import Layout from "../../../component/Layout";
import React, { useState } from "react";
import { Header, Button, Form, Input, Message } from "semantic-ui-react";
import web3 from "../../../etherium/web3";
import { Router, Link } from "../../../routes";
import Campaign from "../../../etherium/Campaign";
import MessageLoader from "../../../component/MessageLoader";

const newrequests = (props) => {
  const [formData, setFormData] = useState({
    description: "",
    value: "",
    address: "",
  });
  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);
  const handleChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "description":
        setFormData({ ...formData, description: value });
        break;
      case "value":
        setFormData({ ...formData, value: value });
        break;
      case "address":
        setFormData({ ...formData, address: value });
        break;
      default:
        break;
    }
  };

  const onSubmit = async () => {
    const campaign = Campaign(props.address);

    try {
      setLoad(true);
      setData("");
      const accounts = await web3.eth.getAccounts();
      const result = await campaign.methods
        .createRequests(formData.description, formData.value, formData.address)
        .send({
          from: accounts[0],
        });

      Router.pushRoute(`/campaigns/${props.address}/requests`);

      setLoad(false);
    } catch (error) {
      setLoad(false);
      setData(error.message);
      console.log(error);
    }
  };
  return (
    <Layout>
      <Header as="h3">Create a Request</Header>
      <Link to={`/campaigns/${props.address}/requests`}>
        <a>
          {" "}
          <Button primary={true}>Back</Button>
        </a>
      </Link>
      <Form error={!!data}>
        <Form.Field>
          <label>Description</label>
          <Input
            label="Wei"
            labelPosition="right"
            onChange={(e) => handleChange(e)}
            value={formData.description}
            name="description"
          />
        </Form.Field>
        <Form.Field>
          <label>Value </label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formData.value}
            name="value"
          />
        </Form.Field>
        <Form.Field>
          <label>Recipeint </label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formData.address}
            name="address"
          />
        </Form.Field>
        <Message error content={data} header="OOPS!" />

        <Button loading={load} onClick={onSubmit} primary>
          Create
        </Button>
      </Form>
      {load && <MessageLoader />}
    </Layout>
  );
};

newrequests.getInitialProps = async (props) => {
  const address = props.query.address;

  return {
    address,
  };
};

export default newrequests;
