#![allow(unused)]
use anchor_lang::prelude::*;
use crate::*;

pub fn create_news_account(ctx: Context<CreateNewsAccount>,title:String, short_description:String, feature_image_url:String, content_url:String, category:String, author:Pubkey) -> Result<()> {
    // Implement your business logic here...
    // Increase post count
    author.data.news += 1;

    // Assign post's data to a variable for easy access
    let data = & mut news.data;
    data.author = * author.meta.key;
    data.title = title;
    data.short_description = short_description;
    data.feature_image_url = feature_image_url;
    data.content_url = content_url;
    data.category = category;
    data.upvotes = 0;
    data.downvotes = 0;
    Ok(())
}
