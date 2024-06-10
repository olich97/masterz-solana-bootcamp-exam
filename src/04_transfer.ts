import {
  Keypair,
  Connection,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
  PublicKey,
} from "@solana/web3.js";

import wallet from "../wallet.json";
const connection = new Connection("https://api.devnet.solana.com", "finalized");
// main local wallet
const from = Keypair.fromSecretKey(new Uint8Array(wallet));
// a random receiver, created with yarn keygen
const to = new PublicKey("7oGA9uBgTH9CWfF1BMVP5u5xF5ndjcz4bcV7iygr6M5U");

(async () => {
  try {
    const transferInstruction = SystemProgram.transfer({
      fromPubkey: from.publicKey,
      toPubkey: to,
      lamports: 0.5 * LAMPORTS_PER_SOL,
    });

    const transaction = new Transaction().add(transferInstruction);
    transaction.feePayer = from.publicKey;
    
    const txHash = await sendAndConfirmTransaction(
      connection,
      transaction,
      [from],
      { commitment: "finalized", skipPreflight: false }
    );

    console.log(
      `Success! Check out your TX here: https://explorer.solana.com/tx/${txHash}?cluster=devnet`
    );
  } catch (error) {
    console.error(error);
  }
})();
