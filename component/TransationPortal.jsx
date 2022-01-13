import React, { useState } from "react";
import { Button, Header, Segment, Transition } from "semantic-ui-react";

const TransationPortal = ({ open }) => {
  return (
    <Transition visible={open} animation="scale" duration={500}>
      <Segment
        style={{ left: "40%", position: "fixed", top: "50%", zIndex: 1000 }}
      >
        <Header>This is an example portal</Header>
        <p>Portals have tons of great callback functions to hook into.</p>
        <p>To close, simply click the close button or click away</p>
      </Segment>
    </Transition>
  );
};

export default TransationPortal;
