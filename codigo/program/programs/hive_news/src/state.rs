use anchor_lang::prelude::*;
#[account]
pub struct User {
    pub display_name: String,
    pub news: u16,
}

#[account]
pub struct News {
    pub title: String,
    pub short_description: String,
    pub feature_image_url: String,
    pub content_url: String,
    pub category: String,
    pub upvotes: u32,
    pub downvotes: u32,
    pub author: Pubkey,
}

#[account]
pub struct Votes {
    pub user: Pubkey,
    pub news: Pubkey,
    pub value: u32,
}
