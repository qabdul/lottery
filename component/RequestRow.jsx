import React, { useState } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import Campaign from "../etherium/Campaign";
import web3 from "../etherium/web3";
import { Router } from "../routes";
import ModalPopUp from "./ModalPopUp";

const RequestRow = (props) => {
  const [desible, setDesible] = useState(true);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState(false);
  const [open, setOpen] = useState(false);
  const [compelete, setComplete] = useState({
    approve: false,
    finalize: false,
  });

  const approveRequest = async () => {
    try {
      setOpen(true);
      setLoad(true);
      setData("");
      props.setError("");
      const campaign = Campaign(props.address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.approveRequests(props.id).send({
        from: accounts[0],
      });
      Router.replaceRoute(`/campaigns/${props.address}/requests`);
      setLoad(false);
      setOpen(false);
      setComplete({ ...compelete, approve: true });
    } catch (error) {
      setOpen(false);
      setLoad(false);
      props.setError(error.message);
      setData(error.message);
    }
  };

  const finalizeRequest = async () => {
    try {
      setOpen(true);

      props.setError("");
      const campaign = Campaign(props.address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.finalizeRequest(props.id).send({
        from: accounts[0],
      });
      Router.replaceRoute(`/campaigns/${props.address}/requests`);

      setOpen(false);
      setComplete({ ...compelete, finalize: true });
    } catch (error) {
      setOpen(false);
      props.setError(error.message);
      setData(error.message);
    }
  };

  const { Row, Cell } = Table;

  return (
    <Row>
      <ModalPopUp open={open} />
      <Cell>{props.id + 1}</Cell>
      <Cell>{props.request.description}</Cell>
      <Cell>{props.request.value}</Cell>
      <Cell>{props.request.recipient}</Cell>
      <Cell>{`${props.request.approvalCount}/${props.total}`}</Cell>
      <Cell>
        <Button color="green" loading={load} onClick={approveRequest}>
          Approve
        </Button>
      </Cell>
      <Cell>
        {compelete.finalize ? (
          <Icon name="check" color="green" size="large" />
        ) : (
          <Button color="teal" onClick={finalizeRequest}>
            Finalize
          </Button>
        )}
      </Cell>
    </Row>
  );
};

export default RequestRow;
