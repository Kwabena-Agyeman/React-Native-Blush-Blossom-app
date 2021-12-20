/** @format */

import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "kare-hot-deals.myshopify.com",
  storefrontAccessToken: "6aac08387d87159e064b6370457ddf42",
});

export { client };
