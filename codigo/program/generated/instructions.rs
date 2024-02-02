// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::program_error::ProgramError;
use solana_program::pubkey::Pubkey;
use crate::generated::errors::HiveNewsError;

#[derive(BorshSerialize, Debug)]
pub enum HiveNewsInstruction {
/// Method used to initialize the User account.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` user: [User] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - display_name: [String] 
	CreateUserAccount(CreateUserAccountArgs),

/// Method used to initialize a News account.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` news: [News] 
/// 2. `[writable]` user: [AccountInfo] This will be the account that has permission to update the broker and approved request.
/// 3. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - title: [String] 
/// - short_description: [String] 
/// - feature_image_url: [String] 
/// - content_url: [String] 
/// - category: [String] 
/// - news_seed_index: [u16] Auto-generated, from input news of type [News] set the seed named index, required by the type
	CreateNewsAccount(CreateNewsAccountArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` vote: [Votes] 
/// 2. `[writable]` user: [AccountInfo] This will be the account that has permission to update the broker and approved request.
/// 3. `[writable]` news: [AccountInfo] This will be the account that has permission to update the broker and approved request.
/// 4. `[]` newsitem: [News] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - value: [u32] 
/// - newsitem_seed_user: [Pubkey] Auto-generated, from input newsitem of type [News] set the seed named user, required by the type
/// - newsitem_seed_index: [u16] Auto-generated, from input newsitem of type [News] set the seed named index, required by the type
	CreateUpvoteAccount(CreateUpvoteAccountArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` vote: [Votes] 
/// 2. `[writable]` user: [AccountInfo] This will be the account that has permission to update the broker and approved request.
/// 3. `[writable]` news: [AccountInfo] This will be the account that has permission to update the broker and approved request.
/// 4. `[]` newsitem: [News] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - value: [u32] 
/// - newsitem_seed_user: [Pubkey] Auto-generated, from input newsitem of type [News] set the seed named user, required by the type
/// - newsitem_seed_index: [u16] Auto-generated, from input newsitem of type [News] set the seed named index, required by the type
	CreateDownvoteAccount(CreateDownvoteAccountArgs),

}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateUserAccountArgs {
	pub display_name: String,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateNewsAccountArgs {
	pub title: String,
	pub short_description: String,
	pub feature_image_url: String,
	pub content_url: String,
	pub category: String,
	pub news_seed_index: u16,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateUpvoteAccountArgs {
	pub value: u32,
	pub newsitem_seed_user: Pubkey,
	pub newsitem_seed_index: u16,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateDownvoteAccountArgs {
	pub value: u32,
	pub newsitem_seed_user: Pubkey,
	pub newsitem_seed_index: u16,
}

impl HiveNewsInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&variant, rest) = input.split_first().ok_or(HiveNewsError::InvalidInstruction)?;

        Ok(match variant {
			0 => Self::CreateUserAccount(CreateUserAccountArgs::try_from_slice(rest).unwrap()),
			1 => Self::CreateNewsAccount(CreateNewsAccountArgs::try_from_slice(rest).unwrap()),
			2 => Self::CreateUpvoteAccount(CreateUpvoteAccountArgs::try_from_slice(rest).unwrap()),
			3 => Self::CreateDownvoteAccount(CreateDownvoteAccountArgs::try_from_slice(rest).unwrap()),
			_ => return Err(HiveNewsError::InvalidInstruction.into())
        })
    }
}