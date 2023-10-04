import * as fcl from "@onflow/fcl";

export async function registerDAO(_name, _about, _website, _twitter) {
  return fcl.mutate({
    cadence: REGISTER_DAO,
    args: (arg, t) => [arg(_name, t.String), arg(_about, t.String), arg(_website, t.String), arg(_twitter, t.String)],
    payer: fcl.authz,
    proposer: fcl.authz,
    authorizations: [fcl.authz],
    limit: 1000,
  });
}

const REGISTER_DAO = `
import FlowVo from 0xFlowVo

transaction(_name: String, _about: String, _website: String, _twitter: String) {
    prepare(user: AuthAccount) {
        
        let DAO <- FlowVo.createDAO(_name: _name, _about: _about, _website: _website, _twitter: _twitter)
        user.save(<-DAO, to: /storage/DAO)
        user.save(<- FlowVo.createProposalCollection(), to: /storage/ProposalCollection)
        FlowVo.mapDAOToOwner(_name: _name, _owner: user.address)

        user.link<&FlowVo.DAO{FlowVo.DAOPublic}>(/public/DAOPublic, target: /storage/DAO)
        user.link<&FlowVo.ProposalCollection{FlowVo.ProposalCollectionPublic}>(/public/ProposalCollectionPublic, target: /storage/ProposalCollection)
        user.link<&FlowVo.ProposalCollection{FlowVo.ProposalCollectionPrivate}>(/public/ProposalCollectionPrivate, target: /storage/ProposalCollection)
        
        

        log("DAO Created")

    }
}
`


export async function createProposal(_title, _description, _options, _expirationTime, _publicCapabilityPath, _votingStrategy) {
  return fcl.mutate({
    cadence: CREATE_PROPOSAL,
    args: (arg, t) => [arg(_title, t.String), arg(_description, t.String), arg(_options, t.Array(t.String)), arg(_expirationTime, t.UFix64), arg(_publicCapabilityPath, t.Path), arg(_votingStrategy, t.UInt8)],
    payer: fcl.authz,
    proposer: fcl.authz,
    authorizations: [fcl.authz],
    limit: 1000,
  });
}

const CREATE_PROPOSAL = `
import FlowVo from 0xFlowVo


transaction(_title:String, _description:String, _options:[String], _expirationTime:UFix64, _publicCapabilityPath: PublicPath, _votingStrategy:UInt8) {
    prepare(user: AuthAccount) {
        let collectionCapability = user.borrow<&FlowVo.ProposalCollection{FlowVo.ProposalCollectionPrivate}>(from: /storage/ProposalCollection)!
        collectionCapability.CreateProposal(_title: _title, _description: _description, _options: _options, _expirationTime: _expirationTime, _publicCapabilityPath: _publicCapabilityPath, _votingStrategy: _votingStrategy)    
    }
}
`

export async function voteOnProposal(_daoName, _proposalId, _choice) {
  return fcl.mutate({
    cadence: VOTE_ON_PROPOSAL,
    args: (arg, t) => [arg(_daoName, t.String), arg(_proposalId, t.UInt64), arg(_choice, t.Int)],
    payer: fcl.authz,
    proposer: fcl.authz,
    authorizations: [fcl.authz],
    limit: 1000,
  });
}

const VOTE_ON_PROPOSAL = `
import FlowVo from 0xFlowVo
import FungibleToken from 0xFungibleToken

transaction (_daoName:String, _proposalId:UInt64, _choice:Int) {
  prepare(voter: AuthAccount) { 
          let DaoOwner = FlowVo.DaoToOwner[_daoName]!
          let proposalCollection = getAccount(DaoOwner).getCapability(/public/ProposalCollectionPublic).borrow<&{FlowVo.ProposalCollectionPublic}>() ?? panic("Couldn't borrow reference to the DAO resource")
          
          let proposal = proposalCollection.borrowProposal(id: _proposalId)
          
  
          var _weight=  0.0
  
          if proposal.votingStrategy == 1 {
              let vaultRef = voter.getCapability(proposal.publicCapabilityPath).borrow<&AnyResource{FungibleToken.Balance}>() ?? panic("Could not borrow Balance reference to the Vault")
              _weight = vaultRef.balance    
          }
  
          if proposal.votingStrategy == 0{
              _weight = 1.0
          }
  
          
  
          proposal.vote(_proposalId: _proposalId, _voter: voter.address, _choice: _choice, _weight: _weight)
      }
  }
`