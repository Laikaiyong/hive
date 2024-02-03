// src/components/ContractInteraction.js
import React, { useState } from 'react';
import * as solanaService from '../services/solanaService';

const ContractInteraction = () => {
  const [transactionSignature, setTransactionSignature] = useState('');

  const handleButtonClick = async () => {
    const programId = 'YourProgramIdHere';
    const instructionData = Buffer.from([]); // Your instruction data here

    try {
      const signature = await solanaService.interactWithContract(programId, instructionData);
      setTransactionSignature(signature);
      alert(`Transaction successful with signature: ${signature}`);
    } catch (error) {
      console.error("Transaction failed", error);
      alert("Transaction failed: " + error.message);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Interact with Contract</button>
      {transactionSignature && <p>Transaction Signature: {transactionSignature}</p>}
    </div>
  );
};

export default ContractInteraction;
