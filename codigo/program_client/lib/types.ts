// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import type {Schema} from 'borsh';
import type {Decoded} from "./utils";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from "borsh";

/// This data structure will store user information
/// 
export interface User {
  displayName: string;
  news: number;
}

export const decodeUser = (decoded: Decoded): User => ({
    displayName: decoded["display_name"] as string,
    news: decoded["news"] as number,
});

export const UserSchema: Schema =  {
    struct: {
        display_name: "string",
        news: "u16",
    }
};

/// This data structure will store news
export interface News {
  title: string;
  shortDescription: string;
  featureImageUrl: string;
  contentUrl: string;
  category: string;
  upvotes: number;
  downvotes: number;
  user: PublicKey;
}

export const decodeNews = (decoded: Decoded): News => ({
    title: decoded["title"] as string,
    shortDescription: decoded["short_description"] as string,
    featureImageUrl: decoded["feature_image_url"] as string,
    contentUrl: decoded["content_url"] as string,
    category: decoded["category"] as string,
    upvotes: decoded["upvotes"] as number,
    downvotes: decoded["downvotes"] as number,
    user: new PublicKey(decoded["user"] as Uint8Array),
});

export const NewsSchema: Schema =  {
    struct: {
        title: "string",
        short_description: "string",
        feature_image_url: "string",
        content_url: "string",
        category: "string",
        upvotes: "u32",
        downvotes: "u32",
        user: { array: { type: "u8", len: 32 } },
    }
};

/// This data structure will store votes
export interface Votes {
  user: PublicKey;
  news: PublicKey;
  value: number;
}

export const decodeVotes = (decoded: Decoded): Votes => ({
    user: new PublicKey(decoded["user"] as Uint8Array),
    news: new PublicKey(decoded["news"] as Uint8Array),
    value: decoded["value"] as number,
});

export const VotesSchema: Schema =  {
    struct: {
        user: { array: { type: "u8", len: 32 } },
        news: { array: { type: "u8", len: 32 } },
        value: "u32",
    }
};



