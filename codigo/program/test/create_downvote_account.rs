#![cfg(feature = "test-sbf")]
mod create_downvote_account {
    use assert_matches::assert_matches;
    use solana_program::instruction::{AccountMeta, Instruction};
    use solana_program::pubkey::Pubkey;
    use solana_program::{system_instruction, system_program};
    use solana_rpc_client::rpc_client::RpcClient;
    use solana_sdk::signer::keypair::Keypair;
    use solana_sdk::signer::Signer;
    use solana_sdk::transaction::Transaction;
    use solana_validator::test_validator::*;
    use std::str::FromStr;

    use crate::generated::entrypoint::process_instruction;
    use crate::generated::instructions::{ HiveNewsInstruction };
    use crate::test::create_account;

    #[test]
	fn test_transaction_is_ok() {
	    solana_logger::setup_with_default("solana_program_runtime=debug");
        let program_id = Pubkey::new_unique();

		let (test_validator, fee_payer_info) = TestValidatorGenesis::default()
			.add_program("hive_news", program_id)
			.start();
		let rpc_client = test_validator.get_rpc_client();

		let value: u32 = Default::default();

		let vote_info = Keypair::new();
		let user_info = Keypair::new();
		let news_info = Keypair::new();
		let accounts = vec![
			AccountMeta::new(fee_payer_info.pubkey(), true),
			AccountMeta::new(vote_info.pubkey(), true),
			AccountMeta::new_readonly(user_info.pubkey(), false),
			AccountMeta::new_readonly(news_info.pubkey(), false),
			AccountMeta::new_readonly(system_program::id(), false),
		];
		let data = HiveNewsInstruction::CreateDownvoteAccount(crate::generated::instructions::CreateDownvoteAccountArgs{
			value,
		});
		let signers = vec![
			&fee_payer_info,
			&vote_info,
        ];

		create_account(&rpc_client, &fee_payer_info, &user_info, &program_id, 42);
		create_account(&rpc_client, &fee_payer_info, &news_info, &program_id, 639);

        let instruction = Instruction::new_with_borsh(program_id, &data, accounts.to_vec());
		let recent_blockhash = rpc_client.get_latest_blockhash().unwrap();
        let mut transaction = Transaction::new_with_payer(
            &[instruction],
            Some(&fee_payer_info.pubkey()),
        );
        transaction.sign(&signers, recent_blockhash);

	    assert_matches!(rpc_client.send_and_confirm_transaction(&transaction), Ok(_));
    }
}