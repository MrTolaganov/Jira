import { Account, Client, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65c26c06124516a09ad9");

export const ACCOUNT = new Account(client);
export const UNIQUE_ID = ID.unique()
