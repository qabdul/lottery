const routes = require("next-routes")();
routes
  .add("/campaigns/newcampaign", "/campaigns/newcampaign")
  .add("/campaigns/:address", "/campaigns/show")
  .add("/campaigns/:address/requests/new", "/campaigns/requests/newrequests")
  .add("/campaigns/:address/requests", "/campaigns/requests/index");
module.exports = routes;
