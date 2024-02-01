#![allow(unused)]
use anchor_lang::prelude::*;
use crate::*;

pub fn create_downvote_account(ctx: Context<CreateDownvoteAccount>,value:u32) -> Result<()> {
    vote.data.news.downvotes += value;
    vote.data.user = * user.meta.key;
    vote.data.news = * news.meta.key;
    Ok(())
}
