import React from "react";
import { Message } from "semantic-ui-react";

const NoDataFound = (props) => {
  return (
    <Message warning icon="inbox" header="Oops!!" content={props.message} />
  );
};

export default NoDataFound;
