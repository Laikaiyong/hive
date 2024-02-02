use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	News,
	Votes,
};


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
pub fn create_upvote_account(
	program_id: &Pubkey,
	vote: &mut AccountPDA<Votes>,
	user: &AccountInfo,
	news: &AccountInfo,
	newsitem: &AccountPDA<News>,
	value: u32,
) -> ProgramResult {
    // Implement your business logic here...
    vote.data.user = * user.key;
    vote.data.news = * news.key;
	vote.data.value = value;
    // vote.data.newsitem.data.upvotes += value;


    Ok(())
}