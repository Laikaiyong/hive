import "./src/styles/global.css"
import React from 'react';
import Wallet from './src/components/connect-wallet-context'; // Adjust the path as necessary

export const wrapRootElement = ({ element }) => {
  return <Wallet>{element}</Wallet>;
};
