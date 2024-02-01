#![allow(unused)]
use anchor_lang::prelude::*;
use crate::*;

pub fn create_upvote_account(ctx: Context<CreateUpvoteAccount>,value:u32) -> Result<()> {
    vote.data.news.upvotes += value;
    vote.data.user = * user.meta.key;
    vote.data.news = * news.meta.key;
    Ok(())
}
