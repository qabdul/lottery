import React from "react";
import { Menu, Button, Icon } from "semantic-ui-react";
import { Link, Router } from "../routes";

const Header = () => {
  return (
    <Menu style={{ marginTop: "16px" }}>
      {" "}
      <Link route="/">
        <a className="item">
          <Icon name="bullseye" size="big" color="blue" />
        </a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Campaigns</a>
        </Link>
        <Link route="/campaigns/newcampaign">
          <a className="item">
            {" "}
            <Button animated>
              <Button.Content hidden>Create</Button.Content>
              <Button.Content visible>
                <Icon name="plus circle" />
              </Button.Content>
            </Button>
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
