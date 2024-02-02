use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	User,
};


/// Method used to initialize the User account.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` user: [User] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - display_name: [String] 
pub fn create_user_account(
	program_id: &Pubkey,
	user: &mut AccountPDA<User>,
	display_name: String,
) -> ProgramResult {
    // Implement your business logic here...
    user.data.display_name = display_name;
    user.data.news = 0;

    Ok(())
}