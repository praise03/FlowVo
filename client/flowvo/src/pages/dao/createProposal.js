import * as fcl from "@onflow/fcl";
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { createProposal } from "../../flow/transactions"


export default function Home() {
    const [daoName, setDaoName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [expirationTime, setExpirationTime] = useState("");
    const [options, setOptions] = useState("");
    const [path, setPublicCapabilityPath] = useState("")
    const [votingStrategy, setVotingStrategy] = useState(0)

    const router = useRouter()

    async function create() {
        const optionsArray = options.split(",")
        const parsedExpirationTime = (expirationTime * 24 * 60 * 60).toFixed(1).toString();
        let publicCapabilityPath = {}
        if (path == "") {
            publicCapabilityPath = {
                domain: "public",
                identifier: "placeHolderPath"
              };
        }else{
            const strings = path.split("/")
            publicCapabilityPath = {
                domain: strings[1],
                identifier: strings[2]
              };
        }
        try {
            const createProposalTx = await createProposal(title, description, optionsArray, parsedExpirationTime, publicCapabilityPath, votingStrategy)
            await fcl.tx(createProposalTx).onceSealed()
            alert("Proposal Created Successfully 🥂")
            router.push("/dao/"+ daoName)
        } catch (error) {
            console.log(error)   
        }

    }
  
    return (
    <div>
        <main className="flex flex-col items-center justify-between p-2">
        <Navbar />
        </main>       

        <section>
                <div class="container w-full flex flex-wrap mx-auto px-2 pt-2 h-screen ">
                    <div class="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
                        <p class="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>
                        <div class="block lg:hidden sticky inset-0">
                            <button id="menu-toggle" class="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-yellow-600 appearance-none focus:outline-none">
                                <svg class="fill-current h-3 float-right" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </button>
                        </div>
                        <div class="w-full sticky inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" id="menu-content">
                            <ul class="list-reset py-2 md:py-0">
                                <li class="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent font-bold border-yellow-600">
                                    <a href='#section1' class="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                                        <span class="pb-1 md:pb-0 text-sm">Create</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <section class="w-full lg:w-4/5">

                        <div id='section2' class="p-8 mt-6 lg:mt-0 rounded shadow backdrop-blur-md bg-white/30">
                            <h1 className="font-bold text-2xl underline text-center mb-4">Create Proposal</h1>

                            <form>
                            <div class="md:flex mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                            DAO Name
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <input class="form-input rounded-md block w-full bg-gray-200 p-2 focus:bg-white" id="daoName" onChange={(e) => setDaoName(e.target.value)} type="text" value={daoName}  />
                                    </div>
                                </div>

                                <div class="md:flex mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                            Title
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <input class="form-input rounded-md block w-full bg-gray-200 p-2 focus:bg-white" id="title" onChange={(e) => setTitle(e.target.value)} type="text" value={title}  />
                                    </div>
                                </div>

                                <div class="md:flex mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                            Options
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <input placeholder="Separated by commas i.e Yes,No,Maybe<" class="form-input rounded-md block w-full bg-gray-200 p-2 focus:bg-white" id="options" onChange={(e) => setOptions(e.target.value)} type="text" value={options}  />
                                        
                                    </div>
                                </div>

                                <div class="md:flex mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                            Expiration Time
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <select name="" class="form-select block w-full bg-gray-200 p-3 rounded-md focus:bg-gray-100" id="expiration" onChange={(e) => setExpirationTime(e.target.value)} value={expirationTime}>
                                            <option value="1">1 Day</option>
                                            <option value="3">3 Days</option>
                                            <option value="5">5 Days</option>
                                        </select>

                                    </div>
                                </div>

                                <div class="md:flex mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                            PublicCapabilityPath
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <input placeholder="i.e /public/capabilityPath" class="form-input rounded-md block w-full bg-gray-200 p-2 focus:bg-white" id="capabilitypath" onChange={(e) => setPublicCapabilityPath(e.target.value)} type="text" value={path}  />
                                        <i className="font-thin text-xs">Leave blank if proposal is not token weighted</i>
                                    </div>
                                </div>


                                <div class="md:flex mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                            Voting Strategy
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <select name="" class="form-select block w-full bg-gray-200 p-3 rounded-md focus:bg-gray-100" id="strategy" onChange={(e) => setVotingStrategy(e.target.value)} value={votingStrategy}>

                                            <option value="0">One User One Vote</option>
                                            <option value="1">Token Weighted</option>
                                            <option disabled="true">NFT Ownership (coming soon)</option>
                                        </select>

                                    </div>
                                </div>


                                <div class="md:flex mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                            Description 
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <textarea class="form-textarea block w-full bg-gray-300 p-2 rounded-md focus:bg-white" id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="8"></textarea>
                                    </div>
                                </div>

                                <div class="md:flex md:items-center">
                                    <div class="md:w-1/3"></div>
                                    <div class="md:w-2/3">
                                        <button onClick={create} class="shadow bg-teal-400 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>


                    </section>


                </div>
            </section>  

    </div>
  )
}