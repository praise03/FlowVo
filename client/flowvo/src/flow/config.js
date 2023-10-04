import { config } from "@onflow/fcl";

config({
  // The name of our dApp to show when connecting to a wallet
  "app.detail.title": "FlowVo",
  // An image to use as the icon for our dApp when connecting to a wallet
  "app.detail.icon": "https://img.freepik.com/free-vector/lightning-thunder-sign-cartoon-symbol-isolated_138676-3196.jpg?w=740&t=st=1696356844~exp=1696357444~hmac=7b9c1b36b1d4585dad81c8092cfaf14ee331955b34909b3d566f2ade131e1f4d",
  // RPC URL for the Flow Testnet
  "accessNode.api": "https://rest-testnet.onflow.org",
  // A URL to discover the various wallets compatible with this network
  // FCL automatically adds support for all wallets which support Testnet
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
  // Alias for the Domains Contract
  // UPDATE THIS to be the address of YOUR contract account address
  "0xFlowVo": "0x4aedbefd130516c4",
  // Testnet aliases for NonFungibleToken and FungibleToken contracts
  "0xFungibleToken": "0x9a0766d93b6608b7",
  "0xFungibleTokenMetadataViews": "0x4aedbefd130516c4",
  "0xExampleToken": "0x4aedbefd130516c4",
  "0xMetadataViews": "0x631e88ae7f1d7c20"
});