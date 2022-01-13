import React, { useState } from "react";
import {
  Header,
  Button,
  Form,
  Input,
  Message,
  Icon,
  Grid,
} from "semantic-ui-react";
import Campaign from "../etherium/Campaign";
import web3 from "../etherium/web3";
import { Router } from "../routes";
import MessageLoader from "./MessageLoader";

const Contribute = (props) => {
  const [formData, setFormData] = useState("");
  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);
  const campaign = Campaign(props.address);
  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const onSubmit = async () => {
    if (formData === " " || formData === null) {
      console.log(formData);
      setData("Enter minimum value");
    } else if (Number(props.minimumContribution) > Number(formData)) {
      console.log(formData);
      setData("Enter minimum value");
    } else if (Number(formData) > Number(props.minimumContribution)) {
      console.log(formData);
      try {
        setLoad(true);
        setData("");
        const accounts = await web3.eth.getAccounts();
        const result = await campaign.methods.contribute().send({
          from: accounts[0],
          value: formData,
        });
        Router.replaceRoute(`/campaigns/${props.address}`);
        setLoad(false);
      } catch (error) {
        setLoad(false);
        setData(error.message);
      }
    }
  };
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Form error={!!data}>
              <Form.Field>
                <label>Contribute to this Campaign</label>
                <Input
                  label="wei"
                  labelPosition="right"
                  onChange={(e) => handleChange(e)}
                  value={formData}
                  type="number"
                />
              </Form.Field>
              <Message error content={data} header="OOPS!" />

              <Button floated="right" loading={load} onClick={onSubmit} primary>
                Contribute!
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>{load && <MessageLoader />}</Grid.Row>
      </Grid>
    </>
  );
};

export default Contribute;
