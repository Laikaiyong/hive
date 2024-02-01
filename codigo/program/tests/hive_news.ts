import * as anchor from "@coral-xyz/anchor";
import * as hiveNewsClient from "../client/hive_news";
import chai from "chai";
import { assert, expect } from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

describe("workspace", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());
  
});
