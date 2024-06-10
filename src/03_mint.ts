import { Keypair, Connection } from "@solana/web3.js";

import {
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
} from "@solana/spl-token";

import wallet from "../wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

(async () => {
  try {
    // 01 -> Init mint
    const mint = await createMint(
      connection,
      keypair,
      keypair.publicKey,
      null,
      6
    );
    console.log("Mint Address:", mint.toBase58());
  
    // 02 -> Mint token
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      keypair.publicKey
    );
  
    const ata = tokenAccount.address;
    console.log("Associated Token Account: ", ata.toBase58());
  
    const amount = 10e6;
  
    await mintTo(connection, keypair, mint, ata, keypair.publicKey, amount);
  
    console.log("Minted", amount, "to", ata.toBase58());
  } catch (error) {
    console.error(error);
  }
})();
