use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	News,
};


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
pub fn create_news_account(
	program_id: &Pubkey,
	news: &mut AccountPDA<News>,
	user: &AccountInfo,
	title: String,
	short_description: String,
	feature_image_url: String,
	content_url: String,
	category: String,
) -> ProgramResult {
    // Implement your business logic here...
    // user.data.news += 1;

    // Assign news's data to a variable for easy access
    let data = & mut news.data;
    data.user = * user.key;
    data.title = title;
    data.short_description = short_description;
    data.feature_image_url = feature_image_url;
    data.content_url = content_url;
    data.category = category;
    data.upvotes = 0;
    data.downvotes = 0;

    Ok(())
}