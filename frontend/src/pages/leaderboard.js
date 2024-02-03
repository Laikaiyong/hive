import * as React from "react";
import { useState } from "react";
import { Accordion, Carousel, Card, Badge, Timeline, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

import CustomSidebar from "../components/custom-sidebar";
import UserLeaderboard from "../components/user-leaderboard";
import NewsLeaderboard from "../components/news-leaderboard";

const pageStyles = {
  color: "#232129",
  padding: "",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  flexDirection: "column",
};

const pageStyles2 = {
  color: "#232129",
  padding: "",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "grid",
  gridTemplateColumns: "1fr 1fr", // Two columns
  gap: "16px", // Adjust the gap as needed
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const IndexPage = () => {

  return (
    <main>
      <CustomSidebar />
      <div className="ml-80">
      <Tabs aria-label="Default tabs" style="underline">
        <Tabs.Item active title="User" icon={HiUserCircle}>
            <UserLeaderboard />
        </Tabs.Item>
        <Tabs.Item title="News" icon={HiClipboardList}>
            <NewsLeaderboard />
        </Tabs.Item>
        </Tabs>

      </div>

    </main>
  );
};

export default IndexPage;
