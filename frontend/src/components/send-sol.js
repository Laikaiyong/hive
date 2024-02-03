import React from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, SystemProgram, Transaction, PublicKey } from '@solana/web3.js';

const SendSolButton = ({ recipient }) => {
  const { publicKey, sendTransaction, connected } = useWallet();

  const sendSol = async () => {
    if (!connected || !publicKey) {
      console.log('Wallet not connected');
      return;
    }

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(recipient),
        lamports: 0.1 * LAMPORTS_PER_SOL,
      })
    );

    // Use the connection from the context
    const { connection } = useConnection();

    try {
      const signature = await sendTransaction(transaction, connection);
      const confirmation = await connection.confirmTransaction(signature, 'confirmed');
      console.log('Transaction confirmed', confirmation);
    } catch (error) {
      console.error('Transaction failed', error);
    }
  };

  return <button onClick={sendSol} disabled={!connected}>Send 0.1 SOL</button>;
};

export default SendSolButton;
