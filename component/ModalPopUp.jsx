import React from "react";
import { Button, Header, Icon, Modal, Message } from "semantic-ui-react";

const ModalPopUp = (props) => {
  return (
    <Modal basic open={props.open} size="small" dimmer="inverted">
      <Header icon>
        <Icon name="recycle" loading color="green" />
        Your transaction is being processed, please wait... It might take 40
        secs to processed your request
      </Header>
    </Modal>
  );
};

export default ModalPopUp;
