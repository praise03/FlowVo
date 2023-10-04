// @title: FlowVo
// @author: Praise 
// A platform for decentralized decision making within DAOs and Token Gated Communities

pub contract FlowVo {
    pub var registeredDAOs: Int
    pub var DAOCollection : {Int: String}
    pub var DaoToOwner: {String: Address}
    pub var RegisteredOwners: [Address]

    pub resource interface DAOPublic {
        pub var name: String
        pub var about: String
        pub var website: String
        pub var twitter: String   
    }

    //The DAO Resource: Represents and stores information about a particular DAO/Community
    pub resource DAO: DAOPublic {
        pub var name: String
        pub var about: String
        pub var website: String
        pub var twitter: String

        init(_name: String, _about: String, _website: String, _twitter: String) {
            pre {
                FlowVo.DaoToOwner[_name] == nil : "Name already exists"
            }
            self.name = _name
            self.about = _about
            self.website = _website
            self.twitter = _twitter
        }
    }

    pub fun createDAO(_name: String, _about: String, _website: String, _twitter: String) : @DAO {
        FlowVo.registeredDAOs = FlowVo.registeredDAOs + 1
        FlowVo.DAOCollection[FlowVo.registeredDAOs] = _name
        return <- create DAO(_name: _name, _about: _about, _website: _website, _twitter: _twitter)
    }
 
    pub fun createProposalCollection(): @ProposalCollection {
        return <- create ProposalCollection()
    }

    //dev: maps a community to its creators address
    pub fun mapDAOToOwner(_name: String, _owner: Address) {
        FlowVo.DaoToOwner[_name] = _owner
    }

    

    init() {
        self.DAOCollection = {}
        self.RegisteredOwners = []
        self.registeredDAOs = 0
        self.DaoToOwner = {}

        self.account.save<@Admin>(<-create Admin(), to: /storage/FlowVoAdmin)
    }

    //Public interface for a |ProposalCollection| resource: Defines the parts of the |ProposalCollection| resource that can be accessed by borrowing a capability
    //From the public storage path linked to the resource
    pub resource interface ProposalCollectionPublic {
        pub var proposalCount: UInt64
        pub fun borrowProposal(id: UInt64): &{FlowVo.ProposalPublic}
    } 

    //Private interface for the |ProposalCollection| resource
    pub resource interface ProposalCollectionPrivate {
        pub fun CreateProposal(_title: String, _description: String, _options: [String], _expirationTime: UFix64, _publicCapabilityPath: PublicPath, _votingStrategy: UInt8)
        
        pub fun borrowProposalPrivate(id: UInt64): &FlowVo.Proposal
    }

    //The resource that holds proposals created by a DAO
    pub resource ProposalCollection: ProposalCollectionPublic, ProposalCollectionPrivate {
        //dictionary that maps a proposal's unique ID to the Proposal
        pub var adminProposals: @{UInt64: Proposal}

        //Number of proposals created by a DAO
        pub var proposalCount: UInt64

        init() {
          self.adminProposals <- {}
          self.proposalCount = 0
        }

        //Stores a proposal in the |proposalCollection| dictionary
        pub fun storeProposal(proposal: @Proposal) {
            self.adminProposals[proposal.id] <-! proposal
        }

        //Moves a proposal out of the collection 
        pub fun getProposal(withID id: UInt64): @Proposal {
            return <-self.adminProposals.remove(key: id)!
        }

        //returns all the proposal IDs in a proposal collection (for looping if needed)
        pub fun getProposalKeys() : [UInt64] {
            return self.adminProposals.keys
        }

        //Function to create a proposal and store it in the |ProposalCollection| resource
        pub fun CreateProposal(_title: String, _description: String, _options: [String], _expirationTime: UFix64, _publicCapabilityPath: PublicPath, _votingStrategy: UInt8) {
            let _initID = self.proposalCount + 1
            let newProposal <- create Proposal(initID: _initID,_title: _title, _description: _description, _options: _options, _expirationTime: _expirationTime, _publicCapabilityPath: _publicCapabilityPath, _votingStrategy: _votingStrategy)
            self.proposalCount = self.proposalCount + 1
            self.storeProposal(proposal: <- newProposal)
        }


        //Returns a reference to a proposal with a given ID. Returns aspects in the public interface. Doesnt move the proposal out!
        pub fun borrowProposal(id: UInt64): &{FlowVo.ProposalPublic} {
            pre {
                self.adminProposals[id] != nil : "Proposal does not exist"
            }
            return (&self.adminProposals[id] as &FlowVo.Proposal?)!
        }

        //Returns a reference to a proposal with a given ID. Returns aspects in the private interface
        pub fun borrowProposalPrivate(id: UInt64): &FlowVo.Proposal {
            pre {
                self.adminProposals[id] != nil : "Proposal does not exist"
            }
            return (&self.adminProposals[id] as &FlowVo.Proposal?)!  
        }

        //destroyes all proposals if the proposal collection is destroyed
        destroy() {
            destroy self.adminProposals
        }
    }


    //Proposal Resource
    pub resource Proposal: ProposalPublic, ProposalPrivate {
        pub let id: UInt64
        pub var title: String
        pub var description: String
        pub let createdAt: UFix64
        pub let expirationTime: UFix64
        pub let options: [String]

        //Determines the strategy employed in voting
        // 0 - One person One Vote System
        // 1 - Token Weighted System
        // 2 - NFT ownership System (Next Version)
        pub let votingStrategy : UInt8

        
        //If a Token Weighted Voting system is employed. Represents the path to the token balance in a user's account
        pub let publicCapabilityPath : PublicPath

        //dictionary mapping an option to its vote count
        access(self) var votes: {Int: UFix64}

        //array containing the addresses that have voted
        access(self) var voters: [Address]

        init(initID: UInt64, _title: String, _description: String, _options: [String], _expirationTime: UFix64, _publicCapabilityPath: PublicPath, _votingStrategy: UInt8) {
            self.id = initID
            self.title = _title
            self.description = _description
            self.createdAt = getCurrentBlock().timestamp
            self.expirationTime = getCurrentBlock().timestamp + _expirationTime
            self.options = _options;
            self.votes = {}
            self.voters = []
            self.votingStrategy = _votingStrategy

            
            self.publicCapabilityPath = _publicCapabilityPath
            
            //Initializes the |votes| dictionary setting each options votes to 0.0
            var optionIndex = 0
            while optionIndex < _options.length {
                self.votes[optionIndex] = 0.0  
                optionIndex = optionIndex + 1
            }
        }

        pub fun getVoters() : [Address] {
            return self.voters
        }

        pub fun getVotes() : {Int: UFix64} {
            return self.votes
        }

        pub fun getVotesForOption(optionKey: Int) : UFix64 {
            return self.votes[optionKey]!
        } 

        //Function called by voters to vote on a proposal
        //_choice: Option chosen by the voter
        //_weight: For a token weighted proposal the weight is the token balance of the voter
        //_weight: For a One person one vote proposal the weight is set to 1 per voter
        pub fun vote(_proposalId: UInt64, _voter: Address, _choice: Int, _weight: UFix64) {
            pre{
                self.proposalEnded() == false : "Proposal has ended"
                self.voters.contains(_voter) == false :  "You have voted on this proposal already"
            }
            //should i allow reusable ballots?
            if self.votingStrategy == 0 {
                // One vote per person
                let ballot <-create Ballot(_proposalId: _proposalId, _voter: _voter, weight: _weight)
                ballot.vote(_choice: _choice)
                self.votes[ballot.choice] = self.votes[ballot.choice]! + ballot.weight
                self.voters.append(ballot.voter)
                destroy ballot
            }
            if self.votingStrategy == 1 {
                // Fungible Token Balance == weight: Token Weighted
                let ballot <-create Ballot(_proposalId: _proposalId, _voter: _voter, weight: _weight)
                ballot.vote(_choice: _choice)
                self.votes[ballot.choice] = self.votes[ballot.choice]! + ballot.weight
                self.voters.append(ballot.voter)
                destroy ballot
            }
        }

        //returns true if a proposal has ended
        pub fun proposalEnded() : Bool {
            let currentTime = getCurrentBlock().timestamp
            let endTime = self.expirationTime

            if endTime != nil {
                return currentTime >= endTime
            }
            return false
        }

        //helper function to determine option with most votes
        pub fun tallyResult() : Int {
            var index = 0
            var highestVoteIndex = 0
            while index < self.options.length {
                if(self.votes[index]! > self.votes[highestVoteIndex]!) {
                    highestVoteIndex = index
                }
                index = index + 1
                
            }
            return highestVoteIndex
        }

        //Forcefully conclude a proposal
        //V2
        pub fun forceEnd () { }
    }


    //Public interface for proposal resource
     pub resource interface ProposalPublic {
        pub let id: UInt64
        pub var title: String
        pub var description: String
        pub let createdAt: UFix64
        pub let expirationTime: UFix64
        pub let options: [String]

        pub let publicCapabilityPath : PublicPath
        pub let votingStrategy : UInt8

        pub fun getVoters() : [Address]
        pub fun getVotesForOption(optionKey: Int) : UFix64
        pub fun getVotes() : {Int: UFix64}
        pub fun vote(_proposalId: UInt64, _voter: Address, _choice: Int, _weight: UFix64)
        pub fun tallyResult() : Int
    }

    //private interface for proposal resource
    pub resource interface ProposalPrivate {
        pub fun forceEnd()
    }


    //Resource created for a voter to be able to vote on a proposal
    //contains weight, choice and address for each vote
    pub resource Ballot {
        pub var choice: Int
        pub let voter: Address
        pub let weight: UFix64

        pub let proposalId: UInt64


        init(_proposalId: UInt64, _voter: Address, weight: UFix64){
            self.proposalId = _proposalId;
            self.voter = _voter
            self.choice = 0
            self.weight = weight
        }

        pub fun vote(_choice: Int) {
            self.choice = _choice
        }
    }

    //Admin Resource. Stored in the Contract deployers address
    //Will allow Administrative Functions in V2
    //V2: Version2, The next platform upgrade
    pub resource Admin {
        //v2
        pub fun destroyDAO() { } 
        pub fun setDAOCreationFee() { }
    }

}