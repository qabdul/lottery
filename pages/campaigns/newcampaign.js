import { on } from "mocha/lib/runner";
import React, { useState } from "react";
import {
  Header,
  Button,
  Form,
  Input,
  Message,
  Segment,
  Progress,
  Icon,
} from "semantic-ui-react";
import Layout from "../../component/Layout";
import MessageLoader from "../../component/MessageLoader";
import CampaignFactory from "../../etherium/CampaignFactory";
import web3 from "../../etherium/web3";
import { Link, Router } from "../../routes";

const newcampaign = () => {
  const [value, setValue] = useState();
  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);
  const handleChange = (e) => {
    const { value } = e.target;
    if (!isNaN(value)) {
      console.log(value);
      setValue(value);
    }
  };

  const onSubmit = async () => {
    try {
      setLoad(true);
      setData("");
      const accounts = await web3.eth.getAccounts();
      const result = await CampaignFactory.methods.createCampaign(value).send({
        from: accounts[0],
      });

      Router.pushRoute("/");

      setLoad(false);
    } catch (error) {
      setLoad(false);
      setData(error.message);
      console.log(error);
    }
  };
  return (
    <Layout>
      <Header as="h3">Create a Campaign</Header>
      <Form error={!!data}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            type="number"
            label="Wei"
            labelPosition="right"
            onChange={(e) => handleChange(e)}
            value={value}
          />
        </Form.Field>
        <Message error content={data} icon header="OOPS!">
          <Icon name="exclamation triangle" />
          <Message.Content>
            <Message.Header>OOPS!!</Message.Header>
            {data}
          </Message.Content>
        </Message>

        <Button loading={load} onClick={onSubmit} primary>
          Create
        </Button>
      </Form>
      {load && <MessageLoader />}
    </Layout>
  );
};

export default newcampaign;
