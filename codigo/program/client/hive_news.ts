import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import IDL from "../target/idl/hive_news.json";
import { HiveNews } from "../target/types/hive_news";
const provider = anchor.AnchorProvider.env()
export const PROGRAM_PUBKEY = new anchor.web3.PublicKey("4yP69ZQwzoiuiV3krykZnqDTX6UoSXYsd3j1xzfCNnB2");


const getProgram = (anchorProvider: anchor.AnchorProvider = provider) => {
	return new anchor.Program<HiveNews>(IDL as any, PROGRAM_PUBKEY, provider);
};

const toPubkey = (publicKeyOrKeypair: anchor.web3.PublicKey | anchor.web3.Keypair) : anchor.web3.PublicKey => {
	return publicKeyOrKeypair instanceof anchor.web3.Keypair ? publicKeyOrKeypair.publicKey : publicKeyOrKeypair;
}


export const program = getProgram();



export const fetchUser = (
	address: anchor.web3.PublicKey,
) => {
	return program.account.user.fetch(address)
};
export const fetchNews = (
	address: anchor.web3.PublicKey,
) => {
	return program.account.news.fetch(address)
};
export const fetchVotes = (
	address: anchor.web3.PublicKey,
) => {
	return program.account.votes.fetch(address)
};

export async function CreateUserAccountSendAndConfirm(
	display_name : string,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	user : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const createUserAccountSigners = [
		fee_payer,
		user
	];

	const createUserAccountAccountInputs = {
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		user: toPubkey(user),
	};

	const createUserAccountsignerKeypairs = createUserAccountSigners.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const createUserAccountBuilder = program.methods
	.createUserAccount(display_name)
	.accounts(createUserAccountAccountInputs);
	if (createUserAccountsignerKeypairs.length > 0) {
		createUserAccountBuilder.signers(createUserAccountsignerKeypairs);
	}
	return createUserAccountBuilder.rpc();
}

export function CreateUserAccount(
	display_name : string,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	user : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const createUserAccountAccountInputs = {
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		user: toPubkey(user),
	};

	return program.methods
	.createUserAccount(display_name)
	.accounts(createUserAccountAccountInputs)
	.instruction();
}


export async function CreateNewsAccountSendAndConfirm(
	title : string,
	
	short_description : string,
	
	feature_image_url : string,
	
	content_url : string,
	
	category : string,
	
	author : anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	news : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const createNewsAccountSigners = [
		fee_payer,
		news
	];

	const createNewsAccountAccountInputs = {
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		news: toPubkey(news),
	};

	const createNewsAccountsignerKeypairs = createNewsAccountSigners.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const createNewsAccountBuilder = program.methods
	.createNewsAccount(title,short_description,feature_image_url,content_url,category,author)
	.accounts(createNewsAccountAccountInputs);
	if (createNewsAccountsignerKeypairs.length > 0) {
		createNewsAccountBuilder.signers(createNewsAccountsignerKeypairs);
	}
	return createNewsAccountBuilder.rpc();
}

export function CreateNewsAccount(
	title : string,
	
	short_description : string,
	
	feature_image_url : string,
	
	content_url : string,
	
	category : string,
	
	author : anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	news : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const createNewsAccountAccountInputs = {
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		news: toPubkey(news),
	};

	return program.methods
	.createNewsAccount(title,short_description,feature_image_url,content_url,category,author)
	.accounts(createNewsAccountAccountInputs)
	.instruction();
}


export async function CreateUpvoteAccountSendAndConfirm(
	value : number,
	user: anchor.web3.PublicKey,
	news: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	vote : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const createUpvoteAccountSigners = [
		fee_payer,
		vote
	];

	const createUpvoteAccountAccountInputs = {
		user: user,
		news: news,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		vote: toPubkey(vote),
	};

	const createUpvoteAccountsignerKeypairs = createUpvoteAccountSigners.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const createUpvoteAccountBuilder = program.methods
	.createUpvoteAccount(value)
	.accounts(createUpvoteAccountAccountInputs);
	if (createUpvoteAccountsignerKeypairs.length > 0) {
		createUpvoteAccountBuilder.signers(createUpvoteAccountsignerKeypairs);
	}
	return createUpvoteAccountBuilder.rpc();
}

export function CreateUpvoteAccount(
	value : number,
	user: anchor.web3.PublicKey,
	news: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	vote : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const createUpvoteAccountAccountInputs = {
		user: user,
		news: news,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		vote: toPubkey(vote),
	};

	return program.methods
	.createUpvoteAccount(value)
	.accounts(createUpvoteAccountAccountInputs)
	.instruction();
}


export async function CreateDownvoteAccountSendAndConfirm(
	value : number,
	user: anchor.web3.PublicKey,
	news: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	vote : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const createDownvoteAccountSigners = [
		fee_payer,
		vote
	];

	const createDownvoteAccountAccountInputs = {
		user: user,
		news: news,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		vote: toPubkey(vote),
	};

	const createDownvoteAccountsignerKeypairs = createDownvoteAccountSigners.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const createDownvoteAccountBuilder = program.methods
	.createDownvoteAccount(value)
	.accounts(createDownvoteAccountAccountInputs);
	if (createDownvoteAccountsignerKeypairs.length > 0) {
		createDownvoteAccountBuilder.signers(createDownvoteAccountsignerKeypairs);
	}
	return createDownvoteAccountBuilder.rpc();
}

export function CreateDownvoteAccount(
	value : number,
	user: anchor.web3.PublicKey,
	news: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	vote : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const createDownvoteAccountAccountInputs = {
		user: user,
		news: news,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		vote: toPubkey(vote),
	};

	return program.methods
	.createDownvoteAccount(value)
	.accounts(createDownvoteAccountAccountInputs)
	.instruction();
}

