import { Environment, Network, RecordSource, Store } from "relay-runtime";
import axios from "axios";

async function fetchQuery(operation, variables) {
  const CI = process.env.REACT_APP_CI;

  const response = await axios({
    url: `${
      CI === "1" ? "http://backend:8080" : "http://localhost:8080"
    }/v1/graphql`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      query: operation.text,
      variables,
    },
    responseType: "json",
  });
  return response.data;
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
