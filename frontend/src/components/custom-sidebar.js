import * as React from "react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import { Sidebar, Badge } from "flowbite-react";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import {
  clusterApiUrl,
  Transaction,
  SystemProgram,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";

const CustomSidebar = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();


  return (
    <Sidebar id="sidebar" className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full font-normal duration-75 lg:flex transition-width" aria-label="Sidebar">
    <Sidebar.Logo href="/">Hive
      </Sidebar.Logo>
      <WalletMultiButton />
      <div className="my-6"></div>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/leaderboard" icon={HiInbox}>
            Leaderboard
          </Sidebar.Item>
          <Sidebar.Item href="/profile" icon={HiUser}>
            Profile
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.CTA>
        <div className="mb-3 flex items-center">
          <Badge color="warning">Beta</Badge>
          <button
            aria-label="Close"
            className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
            type="button"
          >
            <svg
              aria-hidden
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
          hive News Beta version, development in progress!
        </div>
      </Sidebar.CTA>
    </Sidebar>

  )
}

export default CustomSidebar
