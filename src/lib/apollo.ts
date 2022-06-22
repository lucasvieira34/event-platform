import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oxup421eqw01xke9c19r7t/master",
  cache: new InMemoryCache(),
});
