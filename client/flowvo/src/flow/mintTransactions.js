import * as fcl from "@onflow/fcl";

export async function setupAccount() {
  return fcl.mutate({
    cadence: SETUP_ACCOUNT,
    payer: fcl.authz,
    proposer: fcl.authz,
    authorizations: [fcl.authz],
    limit: 1000,
  });
}

const SETUP_ACCOUNT = `

import FungibleToken from 0xFungibleToken
import ExampleToken from 0xExampleToken
import MetadataViews from 0xMetadataViews

transaction () {

    prepare(signer: AuthAccount) {

        // Return early if the account already stores a ExampleToken Vault
        if signer.borrow<&ExampleToken.Vault>(from: ExampleToken.VaultStoragePath) != nil {
            return
        }

        // Create a new ExampleToken Vault and put it in storage
        signer.save(
            <-ExampleToken.createEmptyVault(),
            to: ExampleToken.VaultStoragePath
        )

        // Create a public capability to the Vault that only exposes
        // the deposit function through the Receiver interface
        signer.link<&ExampleToken.Vault{FungibleToken.Receiver}>(
            ExampleToken.ReceiverPublicPath,
            target: ExampleToken.VaultStoragePath
        )

        // Create a public capability to the Vault that exposes the Balance and Resolver interfaces
        signer.link<&ExampleToken.Vault{FungibleToken.Balance, MetadataViews.Resolver}>(
            ExampleToken.VaultPublicPath,
            target: ExampleToken.VaultStoragePath
        )
    }
}
`


export async function mintTokens(recipient, amount) {
  return fcl.mutate({
    cadence: MINT_TOKEN,
    args: (arg, t) => [arg(recipient, t.Address), arg(amount, t.UFix64)],
    payer: fcl.authz,
    proposer: fcl.authz,
    authorizations: [fcl.authz],
    limit: 1000,
  });
}

const MINT_TOKEN = `

import FungibleToken from 0xFungibleToken
import ExampleToken from 0xExampleToken
import MetadataViews from 0xMetadataViews

transaction(recipient: Address, amount: UFix64) {

    let tokenAdmin: &ExampleToken.Administrator

    let tokenReceiver: &{FungibleToken.Receiver}

    let supplyBefore: UFix64

    prepare(signer: AuthAccount) {
        self.supplyBefore = ExampleToken.totalSupply

        self.tokenAdmin = signer.borrow<&ExampleToken.Administrator>(from: ExampleToken.AdminStoragePath)
            ?? panic("Signer is not the token admin")

        self.tokenReceiver = getAccount(recipient)
            .getCapability(ExampleToken.ReceiverPublicPath)
            .borrow<&{FungibleToken.Receiver}>()
            ?? panic("Unable to borrow receiver reference")
    }

    execute {

        let minter <- self.tokenAdmin.createNewMinter(allowedAmount: amount)
        let mintedVault <- minter.mintTokens(amount: amount)

        self.tokenReceiver.deposit(from: <-mintedVault)

        destroy minter
    }

    post {
        ExampleToken.totalSupply == self.supplyBefore + amount: "The total supply must be increased by the amount"
    }
}
`

