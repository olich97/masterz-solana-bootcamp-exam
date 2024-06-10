# Materz x Solana Bootcamp Esame Tech

Esame svolto Lun 10 giurno ore 18:00.

# Traccia

Obiettivo:
Crea un token nativo su Solana utilizzando gli strumenti e le modalità trattati nel Bootcamp.
 
Gli step da completare per svolgere la prova:
 

1️⃣ Parti con la creazione di un nuovo wallet da usare: [keygen.ts](https://github.com/SolanaMaterzBootcamp/Bootcamp-Example/blob/main/Lezione4/keygen.ts)

2️⃣ Fai un airdrop per poter interagire con solana: [airdrop.ts](https://github.com/SolanaMaterzBootcamp/Bootcamp-Example/blob/main/Lezione4/airdrop.ts)

3️⃣ Crea un mint e minta dei token fungibili: [spl_init.ts](https://github.com/SolanaMaterzBootcamp/Bootcamp-Example/blob/main/Lezione5/spl_init.ts) & [spl_mint.ts](https://github.com/SolanaMaterzBootcamp/Bootcamp-Example/blob/main/Lezione5/spl_mint.ts)

4️⃣ Per concludere tutto trasferisci questi token ad un nuovo wallet: [spl_transfer.ts](https://github.com/SolanaMaterzBootcamp/Bootcamp-Example/blob/main/Lezione5/spl_transfer.ts)

# Getting Started

- Install dependencies:
```shell
yarn
```

- Execute step 1:
```shell
yarn keygen
```

- Execute step 2:
```shell
yarn airdrop
```

- Execute step 3:
```shell
yarn mint
```

- Execute step 4:
```shell
yarn transfer
```

Outputs:
```shell
# Step 01 (Keygen):
> Heres your new wallet: EcPTowrdrrLNhBrgJKogTmDaDiCT6e1pB9RNv2wrNXBX 
  To save your wallet, copy and paste the following output into a JSON file: ******

# Step 02 (Airdrop):
> Success! Check out your TX here: https://explorer.solana.com/tx/4kaEzch869taK38ib1DmXZHgDd6gpcc5bsVWLorByf4PmFuamVxwQTLbvzkVFpqL8py1scSjqeraR9Cicox4PjEp?cluster=devnet

# Step 03 (Mint):
> Mint Address: BSPNuD9vKxYeacxTdx2LxJ4MDcyrtp1da7DMorwdsChn
  Associated Token Account:  7KuFLHdf6pjzBi5zwUnuaDWLchDmUPF2n34drv41S1XD
  Minted 10000000 to 7KuFLHdf6pjzBi5zwUnuaDWLchDmUPF2n34drv41S1XD

# Step 04 (Transfer):
> Success! Check out your TX here: https://explorer.solana.com/tx/xxnvhymoLN6ynKofTcEC4y1EhQaUnKkwgCSWkLwQCEEfLSJCHZiABhLfNq92f365RzVGTPW42mUR1NvqfVwkwQb?cluster=devnet
```
