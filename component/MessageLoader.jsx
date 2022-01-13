import React from "react";
import { Message, Icon } from "semantic-ui-react";

const MessageLoader = () => {
  return (
    <Message icon success>
      <Icon name="spinner" loading />
      <Message.Content>
        <Message.Header>
          It might take 40 secs to processed your request
        </Message.Header>
        Your transaction is being processed, please wait...
      </Message.Content>
    </Message>
  );
};

export default MessageLoader;
