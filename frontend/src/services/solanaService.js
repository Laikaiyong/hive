// src/services/solanaService.js
import * as solanaWeb3 from '@solana/web3.js';

// Setup connection
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');


// Adjust your interactWithContract function to accept a signer directly
export const interactWithContract = async (signer, programIdString, instructionData) => {
  const programId = new solanaWeb3.PublicKey(programIdString);

  let transaction = new solanaWeb3.Transaction();
  let instruction = new solanaWeb3.TransactionInstruction({
    keys: [{ pubkey: signer.publicKey, isSigner: true, isWritable: true }],
    programId,
    data: instructionData, // This should be a Buffer
  });

  transaction.add(instruction);

  try {
    let signature = await solanaWeb3.sendAndConfirmTransaction(
      connection,
      transaction,
      [signer]
    );
    return signature;
  } catch (error) {
    console.error("Error sending transaction:", error);
    throw error;
  }
};
