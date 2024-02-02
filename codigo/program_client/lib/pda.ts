// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import {PublicKey} from "@solana/web3.js";

export const deriveUserPDA = (programId: PublicKey): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("user"),
        ],
        programId,
    )
};

export type NewsSeeds = {
    user: PublicKey, 
    index: number, 
};

export const deriveNewsPDA = (
    seeds: NewsSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("news"),
            seeds.user.toBuffer(),
            Buffer.from(Uint16Array.from([seeds.index]).buffer),
        ],
        programId,
    )
};

export const deriveVotesPDA = (programId: PublicKey): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("vote"),
        ],
        programId,
    )
};

