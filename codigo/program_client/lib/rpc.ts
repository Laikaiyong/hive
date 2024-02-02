// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import * as pda from "./pda";
import * as T from "./types";
import {
    Commitment,
    Connection,
    GetAccountInfoConfig,
    Keypair,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction,
    TransactionInstruction,
    TransactionSignature,
} from "@solana/web3.js";
import {deserialize, serialize} from "borsh";


let _programId: PublicKey;
let _connection: Connection;

export const initializeClient = (
    programId: PublicKey,
    connection: Connection
) => {
    _programId = programId;
    _connection = connection;
};

export enum HiveNewsInstruction {
/**
 * Method used to initialize the User account.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` user: {@link User} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - display_name: {@link string} 
 */
    CreateUserAccount = 0,

/**
 * Method used to initialize a News account.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` news: {@link News} 
 * 2. `[writable]` user: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - title: {@link string} 
 * - short_description: {@link string} 
 * - feature_image_url: {@link string} 
 * - content_url: {@link string} 
 * - category: {@link string} 
 * - news_seed_index: {@link number} Auto-generated, from input news of type [News] set the seed named index, required by the type
 */
    CreateNewsAccount = 1,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` vote: {@link Votes} 
 * 2. `[writable]` user: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 3. `[writable]` news: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 4. `[]` newsitem: {@link News} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - value: {@link number} 
 * - newsitem_seed_user: {@link PublicKey} Auto-generated, from input newsitem of type [News] set the seed named user, required by the type
 * - newsitem_seed_index: {@link number} Auto-generated, from input newsitem of type [News] set the seed named index, required by the type
 */
    CreateUpvoteAccount = 2,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` vote: {@link Votes} 
 * 2. `[writable]` user: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 3. `[writable]` news: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 4. `[]` newsitem: {@link News} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - value: {@link number} 
 * - newsitem_seed_user: {@link PublicKey} Auto-generated, from input newsitem of type [News] set the seed named user, required by the type
 * - newsitem_seed_index: {@link number} Auto-generated, from input newsitem of type [News] set the seed named index, required by the type
 */
    CreateDownvoteAccount = 3,
}

export type CreateUserAccountArgs = {
    feePayer: PublicKey;
    displayName: string;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Method used to initialize the User account.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` user: {@link User} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - display_name: {@link string} 
 */
export const createUserAccount = (args: CreateUserAccountArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                display_name: "string",
            },
        },
        {
            id: HiveNewsInstruction.CreateUserAccount,
            display_name: args.displayName,
        }
    );

    const [userPubkey] = pda.deriveUserPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: userPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Method used to initialize the User account.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` user: {@link User} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - display_name: {@link string} 
 */
export const createUserAccountSendAndConfirm = async (
    args: Omit<CreateUserAccountArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(createUserAccount({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type CreateNewsAccountArgs = {
    feePayer: PublicKey;
    user: PublicKey;
    title: string;
    shortDescription: string;
    featureImageUrl: string;
    contentUrl: string;
    category: string;
    newsSeedIndex: number;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Method used to initialize a News account.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` news: {@link News} 
 * 2. `[writable]` user: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - title: {@link string} 
 * - short_description: {@link string} 
 * - feature_image_url: {@link string} 
 * - content_url: {@link string} 
 * - category: {@link string} 
 * - news_seed_index: {@link number} Auto-generated, from input news of type [News] set the seed named index, required by the type
 */
export const createNewsAccount = (args: CreateNewsAccountArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                title: "string",
                short_description: "string",
                feature_image_url: "string",
                content_url: "string",
                category: "string",
                news_seed_index: "u16",
            },
        },
        {
            id: HiveNewsInstruction.CreateNewsAccount,
            title: args.title,
            short_description: args.shortDescription,
            feature_image_url: args.featureImageUrl,
            content_url: args.contentUrl,
            category: args.category,
            news_seed_index: args.newsSeedIndex,
        }
    );

    const [newsPubkey] = pda.deriveNewsPDA({
        user: args.user,
        index: args.newsSeedIndex,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: newsPubkey, isSigner: false, isWritable: true},
            {pubkey: args.user, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Method used to initialize a News account.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` news: {@link News} 
 * 2. `[writable]` user: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - title: {@link string} 
 * - short_description: {@link string} 
 * - feature_image_url: {@link string} 
 * - content_url: {@link string} 
 * - category: {@link string} 
 * - news_seed_index: {@link number} Auto-generated, from input news of type [News] set the seed named index, required by the type
 */
export const createNewsAccountSendAndConfirm = async (
    args: Omit<CreateNewsAccountArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(createNewsAccount({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type CreateUpvoteAccountArgs = {
    feePayer: PublicKey;
    user: PublicKey;
    news: PublicKey;
    value: number;
    newsitemSeedUser: PublicKey;
    newsitemSeedIndex: number;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` vote: {@link Votes} 
 * 2. `[writable]` user: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 3. `[writable]` news: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 4. `[]` newsitem: {@link News} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - value: {@link number} 
 * - newsitem_seed_user: {@link PublicKey} Auto-generated, from input newsitem of type [News] set the seed named user, required by the type
 * - newsitem_seed_index: {@link number} Auto-generated, from input newsitem of type [News] set the seed named index, required by the type
 */
export const createUpvoteAccount = (args: CreateUpvoteAccountArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                value: "u32",
                newsitem_seed_user: { array: { type: "u8", len: 32 } },
                newsitem_seed_index: "u16",
            },
        },
        {
            id: HiveNewsInstruction.CreateUpvoteAccount,
            value: args.value,
            newsitem_seed_user: args.newsitemSeedUser.toBytes(),
            newsitem_seed_index: args.newsitemSeedIndex,
        }
    );

    const [votePubkey] = pda.deriveVotesPDA(_programId);
    const [newsitemPubkey] = pda.deriveNewsPDA({
        user: args.newsitemSeedUser,
        index: args.newsitemSeedIndex,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: votePubkey, isSigner: false, isWritable: true},
            {pubkey: args.user, isSigner: false, isWritable: true},
            {pubkey: args.news, isSigner: false, isWritable: true},
            {pubkey: newsitemPubkey, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` vote: {@link Votes} 
 * 2. `[writable]` user: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 3. `[writable]` news: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 4. `[]` newsitem: {@link News} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - value: {@link number} 
 * - newsitem_seed_user: {@link PublicKey} Auto-generated, from input newsitem of type [News] set the seed named user, required by the type
 * - newsitem_seed_index: {@link number} Auto-generated, from input newsitem of type [News] set the seed named index, required by the type
 */
export const createUpvoteAccountSendAndConfirm = async (
    args: Omit<CreateUpvoteAccountArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(createUpvoteAccount({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type CreateDownvoteAccountArgs = {
    feePayer: PublicKey;
    user: PublicKey;
    news: PublicKey;
    value: number;
    newsitemSeedUser: PublicKey;
    newsitemSeedIndex: number;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` vote: {@link Votes} 
 * 2. `[writable]` user: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 3. `[writable]` news: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 4. `[]` newsitem: {@link News} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - value: {@link number} 
 * - newsitem_seed_user: {@link PublicKey} Auto-generated, from input newsitem of type [News] set the seed named user, required by the type
 * - newsitem_seed_index: {@link number} Auto-generated, from input newsitem of type [News] set the seed named index, required by the type
 */
export const createDownvoteAccount = (args: CreateDownvoteAccountArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                value: "u32",
                newsitem_seed_user: { array: { type: "u8", len: 32 } },
                newsitem_seed_index: "u16",
            },
        },
        {
            id: HiveNewsInstruction.CreateDownvoteAccount,
            value: args.value,
            newsitem_seed_user: args.newsitemSeedUser.toBytes(),
            newsitem_seed_index: args.newsitemSeedIndex,
        }
    );

    const [votePubkey] = pda.deriveVotesPDA(_programId);
    const [newsitemPubkey] = pda.deriveNewsPDA({
        user: args.newsitemSeedUser,
        index: args.newsitemSeedIndex,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: votePubkey, isSigner: false, isWritable: true},
            {pubkey: args.user, isSigner: false, isWritable: true},
            {pubkey: args.news, isSigner: false, isWritable: true},
            {pubkey: newsitemPubkey, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` vote: {@link Votes} 
 * 2. `[writable]` user: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 3. `[writable]` news: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 4. `[]` newsitem: {@link News} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - value: {@link number} 
 * - newsitem_seed_user: {@link PublicKey} Auto-generated, from input newsitem of type [News] set the seed named user, required by the type
 * - newsitem_seed_index: {@link number} Auto-generated, from input newsitem of type [News] set the seed named index, required by the type
 */
export const createDownvoteAccountSendAndConfirm = async (
    args: Omit<CreateDownvoteAccountArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(createDownvoteAccount({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

// Getters

export const getUser = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.User | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeUser(deserialize(T.UserSchema, buffer.data) as Record<string, unknown>);
}

export const getNews = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.News | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeNews(deserialize(T.NewsSchema, buffer.data) as Record<string, unknown>);
}

export const getVotes = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Votes | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeVotes(deserialize(T.VotesSchema, buffer.data) as Record<string, unknown>);
}


// Websocket Events

