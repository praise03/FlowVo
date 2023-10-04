import * as fcl from "@onflow/fcl";
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { registerDAO } from "../../flow/transactions"


export default function Home() {

    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [website, setWebsite] = useState("");
    const [twitter, setTwitter] = useState("");

    const router = useRouter()

    async function create() {
        try {
            const registerDAOTx = await registerDAO(name, about, website, twitter)
            await fcl.tx(registerDAOTx).onceSealed()
            alert("DAO Created Successfully!! 💎")
            router.push("/dao/"+ name)

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
                        
                        <div class="w-full sticky inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" id="menu-content">
                            <ul class="list-reset py-2 md:py-0">
                                <li class="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent font-bold border-yellow-600">
                                    <a href='#section1' class="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                                        <span class="pb-1 md:pb-0 text-sm">Section 1</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <section class="w-full lg:w-4/5">

                        <div id='section2' class="p-8 mt-6 lg:mt-0 rounded shadow backdrop-blur-md bg-white/30">
                            <div className="w-full border-b-4 border-black mb-4">                            
                                <h1 className="font-bold text-3xl text-center -mt-2 ">Create DAO</h1>
                            </div>
                            <form>

                                <div class="md:flex mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                            DAO Name
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <input class="form-input rounded-md block w-full bg-gray-200 p-2 focus:bg-white" id="daoname" onChange={(e) => setName(e.target.value)} type="text" value={name}  />
                                    </div>
                                </div>

                                <div class="md:flex mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                            Twitter/X URL
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <input placeholder="starting with https://" class="form-input rounded-md block w-full bg-gray-200 p-2 focus:bg-white" id="daoxlink" type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
                                    </div>
                                </div>

                                <div class="md:flex mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                            Website URL
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <input placeholder="starting with https://" class="form-input rounded-md block w-full bg-gray-200 p-2 focus:bg-white" id="daowebsite" type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
                                    </div>
                                </div>


                                <div class="md:flex mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                            About 
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <textarea class="form-textarea block w-full bg-gray-300 p-2 rounded-md focus:bg-white" id="daoabout" value={about} onChange={(e) => setAbout(e.target.value)} rows="8"></textarea>
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