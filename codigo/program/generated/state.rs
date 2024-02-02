// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::account_info::AccountInfo;
use solana_program::pubkey::Pubkey;

#[derive(Clone, Debug)]
pub struct Account<'a, 'b, T> {
    pub data: T,
    pub info: &'a AccountInfo<'b>,
}

#[derive(Clone, Debug)]
pub struct AccountPDA<'a, 'b, T> {
    pub data: T,
    pub info: &'a AccountInfo<'b>,
    pub bump: u8,
}

impl<'a, 'b, T> Account<'a, 'b, T> {
    pub fn new(info: &'a AccountInfo<'b>, data: T) -> Self {
        Self { data, info }
    }
}

impl<'a, 'b, T> AccountPDA<'a, 'b, T> {
    pub fn new(info: &'a AccountInfo<'b>, data: T, bump: u8) -> Self {
        Self { data, info, bump }
    }
}

/// This data structure will store user information
/// 
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct User {
	pub display_name: String,
	pub news: u16,
}

impl User {
	pub const LEN: usize = 42; 
	}

/// This data structure will store news
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct News {
	pub title: String,
	pub short_description: String,
	pub feature_image_url: String,
	pub content_url: String,
	pub category: String,
	pub upvotes: u32,
	pub downvotes: u32,
	pub user: Pubkey,
}

impl News {
	pub const LEN: usize = 639; 
	}

/// This data structure will store votes
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct Votes {
	pub user: Pubkey,
	pub news: Pubkey,
	pub value: u32,
}

impl Votes {
	pub const LEN: usize = 68; 
	}

