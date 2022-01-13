import React from "react";
import { Message, Icon } from "semantic-ui-react";

const ErrorMessage = ({ data }) => {
  return (
    <Message
      error
      icon="exclamation"
      header="Oops!!"
      content={data}
      style={{ overflowWrap: "break-word" }}
    />
  );
};

export default ErrorMessage;
