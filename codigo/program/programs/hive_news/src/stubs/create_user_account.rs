#![allow(unused)]
use anchor_lang::prelude::*;
use crate::*;

pub fn create_user_account(ctx: Context<CreateUserAccount>,display_name:String) -> Result<()> {
    user.data.display_name = display_name;
    user.data.news = 0;
    Ok(())
}
