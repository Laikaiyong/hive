import React from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Transaction, SystemProgram, PublicKey } from '@solana/web3.js';

const ContractInteraction = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction, connected } = useWallet();

  const handleButtonClick = async () => {
    if (!connected || !publicKey) {
      console.log('Wallet not connected');
      return;
    }

    const programIdString = '2qfPUYAC6TNtMfuJJp5RyRtCbb4efirDzSLGHxBaDERZ';
    const programId = new PublicKey(programIdString);

    // Assuming the instruction does not require any specific data
    // For real use, you would serialize your instruction data according to the program's API
    const instructionData = Buffer.from([]);

    // Create a transaction instruction for the contract
    const instruction = new Transaction().add({
      keys: [{ pubkey: publicKey, isSigner: true, isWritable: true }],
      programId,
      data: instructionData, // The instruction data should be a Buffer
    });

    try {
      // Note: sendTransaction expects an array of transactions and a connection
      const signature = await sendTransaction(instruction, connection);
      console.log(`Transaction successful with signature: ${signature}`);
    } catch (error) {
      console.error("Transaction failed", error);
    }
  };

  return (
      <button onClick={handleButtonClick} disabled={!connected}>
        Interact with Contract
      </button>
  );
};

export default ContractInteraction;
