import * as fcl from "@onflow/fcl";
fcl.config()
  .put("accessNode.api", "https://rest-testnet.onflow.org")
  .put("flow.network", "testnet")
  .put("0xFlowVo", "0x76287db47a32fbc7")

export async function checkIfAdminIsCreated(addr) {
  return fcl.query({
    cadence: ADMIN_CREATED,
    args: (arg, t) => [arg(addr, t.Address)],
  });
}

const ADMIN_CREATED = `
import FlowVo from 0xFlowVo

pub fun main(account: Address): Bool {
    let capability = getAccount(account).getCapability<&Domains.Collection{NonFungibleToken.CollectionPublic, Domains.CollectionPublic}>(Domains.DomainsPublicPath)
    return capability.check()
}
`;


export async function fetchDAO(name) {
    return fcl.query({
      cadence: FETCH_DAO,
      args: (arg, t) => [arg(name, t.String)]
    });
  }
  
  const FETCH_DAO = `
        import FlowVo from 0xFlowVo

        pub fun main(name: String): &{FlowVo.DAOPublic} {
        
            let DaoOwner = FlowVo.DaoToOwner[name]
                
            let daoRef = getAccount(DaoOwner!).getCapability(/public/DAOPublic).borrow<&{FlowVo.DAOPublic}>() ?? panic("Couldn't borrow reference to the DAO resource")
        
            return daoRef
        
        }
  `;

  export async function fetchProposalCollection(name) {
    return fcl.query({
      cadence: FETCH_PROPOSAL_COLLECTION,
      args: (arg, t) => [arg(name, t.String)]
    });
  }

  const FETCH_PROPOSAL_COLLECTION = `
  import FlowVo from 0xFlowVo


    pub fun main(name: String): [&{FlowVo.ProposalPublic}] {

    let DaoOwner = FlowVo.DaoToOwner[name]
        
    let pcRef = getAccount(DaoOwner!).getCapability(/public/ProposalCollectionPublic).borrow<&{FlowVo.ProposalCollectionPublic}>() ?? panic("Couldn't borrow reference to the DAO resource")

    var count: UInt64 = 0
    var proposalArray: [&{FlowVo.ProposalPublic}] = []
    while count < pcRef.proposalCount {
        count = count + 1
        let proposal = pcRef.borrowProposal(id: count)
        proposalArray.append(proposal)
    }
    return proposalArray

}
  `
