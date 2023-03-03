import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { ZebecStake } from "../target/types/zebec_stake";

describe("zebec-stake", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ZebecStake as Program<ZebecStake>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
