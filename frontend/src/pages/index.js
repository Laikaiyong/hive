import * as React from "react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

import { Accordion, Carousel, Card, Sidebar, Badge, Timeline } from "flowbite-react";
import CustomSidebar from "../components/custom-sidebar";

import ContractInteraction from '../components/contract-interaction';
import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
  Keypair,
  clusterApiUrl
} from '@solana/web3.js';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import Wallet from "../../gatsby-browser";


const IndexPage = () => {
 const { publicKey, sendTransaction, connected } = useWallet();
  const { connection } = useConnection();

  const [upVoteCount, setUpVoteCount] = React.useState(0);
  const [downVoteCount, setDownVoteCount] = React.useState(0);

  const RECIPIENT_PUBLIC_KEY = new PublicKey("6DvfoE1pA8C4jKhgAA28WbDpNGQiSQewua16TvTiradz");
  const SOL_AMOUNT = 0.01; // Sending 0.01 SOL for demonstration

  const sendSol = async () => {
    if (!connected || !publicKey) {
      alert('Wallet not connected');
      return;
    }

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: RECIPIENT_PUBLIC_KEY,
        lamports: SOL_AMOUNT * LAMPORTS_PER_SOL,
      }),
    );

    try {
      const signature = await sendTransaction(transaction, connection, {
        timeout: 30000,
      });
      await connection.confirmTransaction(signature, 'confirmed');
      console.log('Transaction successful with signature:', signature);
      alert('Transaction successful!');
    } catch (error) {
      console.error('Error sending SOL:', error);
      alert('Transaction successful:', error.message);
    }
  };

  const handleUpVoteCount = () => {
    setUpVoteCount(upVoteCount + 1);
    sendSol(); // Trigger SOL send on upvote
  };

  const handleDownVoteCount = () => {
    setDownVoteCount(downVoteCount + 1);
    sendSol(); // Trigger SOL send on downvote
  };
    
  return (
    <main>
    <CustomSidebar />
    <div className="pl-60 ml-10 items-center">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="..."
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1679496830187-5b7a3def833e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="..."
          />
          <img
            src="https://apicms.thestar.com.my/uploads/images/2023/04/22/2038469.jpg"
            alt="..."
          />
          <img
            src="https://bfmcms.s3.ap-southeast-1.amazonaws.com/websiteimages/beyond-the-ballot-box/2023-03-07_100-days-pmx-how-did-reformist-perform/og_7efcfc89-86dc-4314-8f79-fac5174e7dd2.png"
            alt="..."
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1664197368374-605ce8ec8f54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="..."
          />
        </Carousel>
      </div>
      <div className="grid grid-cols-2">
      <Timeline className="mx-10 my-4">
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
          <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021 
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            onClick={handleUpVoteCount}
            href="#"
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            UpVote {upVoteCount}
          </a>
          <a
            onClick={handleDownVoteCount}
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            DownVote {downVoteCount}
          </a>
        </div>
      </Card>
      </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    <Accordion className="mx-10 my-4">
      <Accordion.Panel>
        <Accordion.Title>What is Hive News?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The purpose of this Hive News is to track the upvote and downvote action in the news decentralized authenticable application. It will manage user, news and votes for the solution.
          </p>

        
        </Accordion.Content>
      </Accordion.Panel>
     
    </Accordion>
    </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
