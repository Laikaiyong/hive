#![allow(unused)]
use anchor_lang::prelude::*;
use std::str::FromStr;
pub mod stubs;
pub use stubs::*;
pub mod state;
pub use state::*;



declare_id!("4yP69ZQwzoiuiV3krykZnqDTX6UoSXYsd3j1xzfCNnB2");

#[program]
pub mod hive_news {
    use super::*;
    
    pub fn create_user_account(ctx: Context<CreateUserAccount>,display_name:String) -> Result<()> {
        stubs::create_user_account::create_user_account(ctx,display_name)}

    #[derive(Accounts)]
    #[instruction(display_name:String)]
    pub struct CreateUserAccount<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(signer, init, space=50, payer=fee_payer)]
	pub user: Account<'info,User>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

    
    pub fn create_news_account(ctx: Context<CreateNewsAccount>,title:String, short_description:String, feature_image_url:String, content_url:String, category:String, author:Pubkey) -> Result<()> {
        stubs::create_news_account::create_news_account(ctx,title, short_description, feature_image_url, content_url, category, author)}

    #[derive(Accounts)]
    #[instruction(title:String, short_description:String, feature_image_url:String, content_url:String, category:String, author:Pubkey)]
    pub struct CreateNewsAccount<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(signer, init, space=647, payer=fee_payer)]
	pub news: Account<'info,News>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

    
    pub fn create_upvote_account(ctx: Context<CreateUpvoteAccount>,value:u32) -> Result<()> {
        stubs::create_upvote_account::create_upvote_account(ctx,value)}

    #[derive(Accounts)]
    #[instruction(value:u32)]
    pub struct CreateUpvoteAccount<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(signer, init, space=76, payer=fee_payer)]
	pub vote: Account<'info,Votes>,
        
	pub user: Account<'info,User>,
        
	pub news: Account<'info,News>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

    
    pub fn create_downvote_account(ctx: Context<CreateDownvoteAccount>,value:u32) -> Result<()> {
        stubs::create_downvote_account::create_downvote_account(ctx,value)}

    #[derive(Accounts)]
    #[instruction(value:u32)]
    pub struct CreateDownvoteAccount<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(signer, init, space=76, payer=fee_payer)]
	pub vote: Account<'info,Votes>,
        
	pub user: Account<'info,User>,
        
	pub news: Account<'info,News>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

}
