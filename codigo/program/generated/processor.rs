// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use std::str::FromStr;
use borsh::BorshSerialize;
use solana_program::account_info::{AccountInfo, next_account_info, next_account_infos};
use solana_program::borsh0_10::try_from_slice_unchecked;
use solana_program::entrypoint::ProgramResult;
use solana_program::program::{invoke, invoke_signed};
use solana_program::pubkey::Pubkey;
use solana_program::rent::Rent;
use solana_program::system_instruction::create_account;
use solana_program::{msg, system_program};
use solana_program::sysvar::Sysvar;
use solana_program::program_pack::Pack;
use crate::generated::errors::HiveNewsError;
use crate::generated::instructions::HiveNewsInstruction;

use crate::generated::state::{
	Account,
	AccountPDA,
	User,
	News,
	Votes,
};
use crate::src::*;

pub struct Processor;

impl Processor {
    pub fn process(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        data: &[u8],
    ) -> ProgramResult {
        let instruction = HiveNewsInstruction::unpack(data)?;

        match instruction {
			HiveNewsInstruction::CreateUserAccount(args) => {
				msg!("Instruction: CreateUserAccount");
				Self::process_create_user_account(
					program_id,
					accounts, 
					args.display_name,
				)
			}
			HiveNewsInstruction::CreateNewsAccount(args) => {
				msg!("Instruction: CreateNewsAccount");
				Self::process_create_news_account(
					program_id,
					accounts, 
					args.title,
					args.short_description,
					args.feature_image_url,
					args.content_url,
					args.category,
					args.author,
				)
			}
			HiveNewsInstruction::CreateUpvoteAccount(args) => {
				msg!("Instruction: CreateUpvoteAccount");
				Self::process_create_upvote_account(
					program_id,
					accounts, 
					args.value,
				)
			}
			HiveNewsInstruction::CreateDownvoteAccount(args) => {
				msg!("Instruction: CreateDownvoteAccount");
				Self::process_create_downvote_account(
					program_id,
					accounts, 
					args.value,
				)
			}
        }
    }

/// Method used to initialize the User account.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` user: [User] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - display_name: [String] 
	pub fn process_create_user_account(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		display_name: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let user_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(HiveNewsError::InvalidSignerPermission.into());
		}

		if user_info.is_signer != true {
			return Err(HiveNewsError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(HiveNewsError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space = User::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke(
			&create_account(
				&fee_payer_info.key,
				&user_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), user_info.clone()],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(HiveNewsError::WrongAccountOwner.into());
		}

		if *user_info.owner != *program_id {
			return Err(HiveNewsError::WrongAccountOwner.into());
		}

		if user_info.data_len() != User::LEN {
			return Err(HiveNewsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let user = &mut Account::new(
			&user_info,
			try_from_slice_unchecked::<User>(&user_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		create_user_account::create_user_account(
			program_id,
			user,
			display_name,
		)?;

		// Accounts Serialization
		user.data.serialize(&mut &mut user_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Method used to initialize a News account.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` news: [News] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - title: [String] 
/// - short_description: [String] 
/// - feature_image_url: [String] 
/// - content_url: [String] 
/// - category: [String] 
/// - author: [Pubkey] 
	pub fn process_create_news_account(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		title: String,
		short_description: String,
		feature_image_url: String,
		content_url: String,
		category: String,
		author: Pubkey,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let news_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(HiveNewsError::InvalidSignerPermission.into());
		}

		if news_info.is_signer != true {
			return Err(HiveNewsError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(HiveNewsError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space = News::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke(
			&create_account(
				&fee_payer_info.key,
				&news_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), news_info.clone()],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(HiveNewsError::WrongAccountOwner.into());
		}

		if *news_info.owner != *program_id {
			return Err(HiveNewsError::WrongAccountOwner.into());
		}

		if news_info.data_len() != News::LEN {
			return Err(HiveNewsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let news = &mut Account::new(
			&news_info,
			try_from_slice_unchecked::<News>(&news_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		create_news_account::create_news_account(
			program_id,
			news,
			title,
			short_description,
			feature_image_url,
			content_url,
			category,
			author,
		)?;

		// Accounts Serialization
		news.data.serialize(&mut &mut news_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` vote: [Votes] 
/// 2. `[]` user: [User] 
/// 3. `[]` news: [News] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - value: [u32] 
	pub fn process_create_upvote_account(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		value: u32,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let vote_info = next_account_info(account_info_iter)?;
		let user_info = next_account_info(account_info_iter)?;
		let news_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(HiveNewsError::InvalidSignerPermission.into());
		}

		if vote_info.is_signer != true {
			return Err(HiveNewsError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(HiveNewsError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space = Votes::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke(
			&create_account(
				&fee_payer_info.key,
				&vote_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), vote_info.clone()],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(HiveNewsError::WrongAccountOwner.into());
		}

		if *vote_info.owner != *program_id {
			return Err(HiveNewsError::WrongAccountOwner.into());
		}

		if *user_info.owner != *program_id {
			return Err(HiveNewsError::WrongAccountOwner.into());
		}

		if *news_info.owner != *program_id {
			return Err(HiveNewsError::WrongAccountOwner.into());
		}

		if vote_info.data_len() != Votes::LEN {
			return Err(HiveNewsError::InvalidAccountLen.into());
		}

		if user_info.data_len() != User::LEN {
			return Err(HiveNewsError::InvalidAccountLen.into());
		}

		if news_info.data_len() != News::LEN {
			return Err(HiveNewsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let vote = &mut Account::new(
			&vote_info,
			try_from_slice_unchecked::<Votes>(&vote_info.data.borrow()).unwrap(),
		);
		let user = Account::new(
			&user_info,
			try_from_slice_unchecked::<User>(&user_info.data.borrow()).unwrap(),
		);
		let news = Account::new(
			&news_info,
			try_from_slice_unchecked::<News>(&news_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		create_upvote_account::create_upvote_account(
			program_id,
			vote,
			&user,
			&news,
			value,
		)?;

		// Accounts Serialization
		vote.data.serialize(&mut &mut vote_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` vote: [Votes] 
/// 2. `[]` user: [User] 
/// 3. `[]` news: [News] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - value: [u32] 
	pub fn process_create_downvote_account(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		value: u32,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let vote_info = next_account_info(account_info_iter)?;
		let user_info = next_account_info(account_info_iter)?;
		let news_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(HiveNewsError::InvalidSignerPermission.into());
		}

		if vote_info.is_signer != true {
			return Err(HiveNewsError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(HiveNewsError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space = Votes::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke(
			&create_account(
				&fee_payer_info.key,
				&vote_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), vote_info.clone()],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(HiveNewsError::WrongAccountOwner.into());
		}

		if *vote_info.owner != *program_id {
			return Err(HiveNewsError::WrongAccountOwner.into());
		}

		if *user_info.owner != *program_id {
			return Err(HiveNewsError::WrongAccountOwner.into());
		}

		if *news_info.owner != *program_id {
			return Err(HiveNewsError::WrongAccountOwner.into());
		}

		if vote_info.data_len() != Votes::LEN {
			return Err(HiveNewsError::InvalidAccountLen.into());
		}

		if user_info.data_len() != User::LEN {
			return Err(HiveNewsError::InvalidAccountLen.into());
		}

		if news_info.data_len() != News::LEN {
			return Err(HiveNewsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let vote = &mut Account::new(
			&vote_info,
			try_from_slice_unchecked::<Votes>(&vote_info.data.borrow()).unwrap(),
		);
		let user = Account::new(
			&user_info,
			try_from_slice_unchecked::<User>(&user_info.data.borrow()).unwrap(),
		);
		let news = Account::new(
			&news_info,
			try_from_slice_unchecked::<News>(&news_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		create_downvote_account::create_downvote_account(
			program_id,
			vote,
			&user,
			&news,
			value,
		)?;

		// Accounts Serialization
		vote.data.serialize(&mut &mut vote_info.data.borrow_mut()[..])?;
		
		Ok(())
	}
}