import {
	ActionPostResponse,
	createActionHeaders,
	createPostResponse,
	ActionGetResponse,
	ActionPostRequest,
	ACTIONS_CORS_HEADERS,
} from "@solana/actions";

import {
	Connection,
	PublicKey,
	Transaction,
	SystemProgram,
	LAMPORTS_PER_SOL,
	sendAndConfirmTransaction,
	Keypair,
	clusterApiUrl,
} from "@solana/web3.js";

const headers = createActionHeaders({
	chainId: "devnet", // or chainId: "devnet"
	actionVersion: "2.2.1", // the desired spec version
});

export default async function handler(req, res) {
	if (req.method === `POST`) {
		const body = await req.json();
		const url = new URL(req.url);

		const amount = Number(url.searchParams.get("amount")) || 0.1;

		let sender;

		try {
			sender = new PublicKey(body.account);
		} catch (error) {
			return new Response(
				JSON.stringify({
					error: {
						message: "Invalid account",
					},
				}),
				{
					status: 400,
					headers: ACTIONS_CORS_HEADERS,
				}
			);
		}

		const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

		const transaction = new Transaction().add(
			SystemProgram.transfer({
				fromPubkey: sender, // Sender public key
				toPubkey: new PublicKey("6DvfoE1pA8C4jKhgAA28WbDpNGQiSQewua16TvTiradz"), // Replace with your recipient public key
				lamports: amount * LAMPORTS_PER_SOL,
			})
		);
		transaction.feePayer = sender;
		transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
		transaction.lastValidBlockHeight = (
			await connection.getLatestBlockhash()
		).lastValidBlockHeight;

		const payload = await createPostResponse({
			fields: {
				transaction,
				message: "Transaction created",
			},
		});
		return new Response(JSON.stringify(payload), {
			headers: ACTIONS_CORS_HEADERS,
		});
	} else if (req.method === `GET`) {
		const url = new URL(req.url);

		const payload = {
			title: "UpVote on Hive",
			icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlgH2gzcD7B02F0lATd_3ialO_ykF41wwJhQ&s",
			description: "UpVote a news on-chain with Hive",
			label: "UpVote",
			links: {
				actions: [
					{
						label: "UpVote with 0.1 SOL",
						href: `${url.href}?amount=0.1`,
					},
				],
			},
		};

		return res.json(JSON.stringify(payload), { headers: ACTIONS_CORS_HEADERS });
	}
}
