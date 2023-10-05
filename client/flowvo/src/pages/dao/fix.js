import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import * as fcl from "@onflow/fcl";
import { fetchDAO, fetchProposalCollection } from "../../flow/scripts";
import { voteOnProposal } from "../../flow/transactions";
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function ViewDAO() {

    return (

        <main className="flex flex-col items-center justify-between p-2">
        
        <Navbar />
  
        <section className='mt-8 min-w-full lg:mt-0'>
          <div id="content" class="pb-6 pt-4">
            <div class="px-0 md:px-4 mx-auto max-w-[1012px]">
              <div id="sidebar-left" class="float-left w-full lg:w-1/4">
                <div class="-mt-[4px] mb-[20px] md:mt-0 lg:fixed lg:mb-0 lg:w-[240px]">
                  <div
                    class="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border !border-t-0 md:!border-t">
                    <div class="leading-5 sm:leading-6">
                      <div class="relative lg:max-h-[calc(100vh-120px)]">
                        <div
                          class="relative block px-[20px] text-center md:flex md:px-3 md:pt-3 lg:block lg:pb-[24px]">
                          <div>
                            <div symbol-index="space" class="mr-3">
                              <Image
                                src="/vercel.svg"
                                alt="Vercel Logo"
                                className="dark:invert  bg-skin-border object-cover"
                                width={50}
                                height={24}
                                priority
                              />
                            </div>
                            <div class="mt-2 truncate text-left">
                              <h3 class="my-0 flex items-center text-2xl leading-[44px] lg:text-lg">
                                <div class="mr-1 mt-2 truncate"></div>
                              </h3>
                              <div class=" flex space-x-5 mt-2 mb-5">
                                <a target="_blank">
                                    <Image
                                        src="https://visualpharm.com/assets/941/Twitter-595b40b85ba036ed117dbcd1.svg"
                                        alt="Vercel Logo"
                                        className="dark:invert rounded-full bg-skin-border object-cover"
                                        width={20}
                                        height={8}
                                        priority
                                        
                                    />
                                </a>

                                <a href="currentDAO.website" target="_blank">
                                    <Image
                                        src="https://visualpharm.com/assets/78/Website-595b40b75ba036ed117d5c7f.svg"
                                        alt="Vercel Logo"
                                        className="dark:invert rounded-full bg-skin-border object-cover"
                                        width={20}
                                        height={8}
                                        priority
                                    />
                                </a>
                                </div>
                            </div>
                          </div>
  
                        </div>
  
                        <div class="no-scrollbar mt-4 flex lg:my-3 lg:block lg:mt-0"><a
                          aria-current="page" href="#"
                          class="router-link-active router-link-exact-active">
                          <div
                            class="group truncate hover:whitespace-break-spaces relative block cursor-pointer whitespace-nowrap px-[20px] py-2 text-skin-text  hover:bg-skin-bg lg:px-3 !text-skin-heading">
                            <p className="font-semibold">About:</p> <br/> <h5 className="font-bold -mt-3">currentDAO.about</h5><div
                              class="absolute left-0 top-0 flex h-full w-full justify-center">
                                
                              <div
                                class="lg:nav-left-border max-lg:nav-bottom-border lg:group-hover:nav-left-border-hovered selected">
                                    
                              </div>
                            </div>
                          </div>
                        </a>
  
  
                        </div>
                        <div class="mb-3 mt-4 flex items-center space-x-2 px-3 lg:flex"><a
                          href="#" target="_blank"
                          class="whitespace-nowrap text-sm text-skin-text hover:text-skin-link"
                          rel="noopener noreferrer"></a>
                          <a href="#" target="_blank"
                            class="whitespace-nowrap text-sm text-skin-text hover:text-skin-link"
                            rel="noopener noreferrer"></a>
                        </div>
                        <div class="absolute -top-1 right-[16px] md:right-[12px] md:top-[10px] lg:right-[10px]">
                          <div class="hidden lg:block">
                            <div data-headlessui-state="" class="inline-block h-full text-left">
                              <div disabled="false" id="headlessui-menu-button-8" aria-haspopup="menu"
                                aria-expanded="false" class="h-full"><button type="button"
                                  class="flex items-center rounded-full p-[6px] text-md text-skin-text transition-colors duration-200 hover:text-skin-link"><svg
                                    viewBox="0 0 24 24" width="1.2em" height="1.2em"
                                    class="text-[17px]">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                      stroke-linejoin="round" stroke-width="2"
                                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z">
                                    </path>
                                  </svg></button></div>
  
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                        <div class="relative float-right w-full pl-0 lg:w-3/4 lg:pl-5">
                    <div class="relative"> </div>
                    <h1 class="hidden lg:mb-3 font-extrabold underline text-2xl lg:block">Proposals</h1>
                    <div class="mb-4 flex flex-col justify-between gap-x-3 gap-y-[10px] px-[20px] sm:flex-row md:px-0">
                    <div
                        class="w-full rounded-full border border-skin-border pl-3 pr-0 focus-within:!border-skin-text md:max-w-[340px]">
    
                    </div>
                    <a href="#" class="whitespace-nowrap"
                    >
                        <button type="button"
                        class="button px-[22px] w-full sm:w-auto"> </button></a>
                    </div>
                    <div class="mb-3 space-y-3">
                    <div
                        class="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border-4 transition-colors">
                        <div class="leading-5 sm:leading-6">
                        <div>
                            <div class="block p-3 text-skin-text sm:p-4">
                            <div>
                                <div class="flex h-[26px] items-start justify-between">
                                <div class="flex items-center gap-1">
                                    <div >
                                    <button 
                                    type="button" aria-expanded="false" ><a
                                        href="#/"
                                        class="whitespace-nowrap" tabindex="-1">
                                        <div class="flex flex-nowrap items-center space-x-1">
                                        <div>
                                        <Image
                                                src="/vercel.svg"
                                                alt="Vercel Logo"
                                                className="dark:invert rounded-full bg-skin-border object-cover"
                                                width={50}
                                                height={24}
                                                priority
                                            />
                                        </div><span
                                            class="w-full cursor-pointer truncate font-semibold text-skin-link">name</span>
                                        </div>
                                    </a></button>
                                    </div>
                                </div>
                                </div><a
                                href="#"
                                class="cursor-pointer">
                                <div class="relative mb-1 mt-3 break-words pr-[80px] leading-[32px]">
                                    <h3 class=" inline font-bold underline  pr-2">proposal.title</h3>
                                </div>
                                
                                </a>
                                <p class="line-clamp-2 break-words text-md font-semibold">Description- <br/>
                                    proposal.description
    
    
                                </p>
                                <div class="">
                                        <button class="hover:bg-gray-300 cursor-pointer rounded-md relative mt-1 border-b-2 w-full" type="button">
                                        <div
                                            class="absolute ml-3 flex items-center leading-[43px] text-skin-link">
                                            <svg viewBox="0 0 24 24" width="1.2em" height="1.2em"
                                            class="-ml-1 mr-2 text-sm">
                                            <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2" d="m5 13l4 4L19 7">
                                            </path>
                                            </svg> option
                                            {/* <span class="ml-4 text-skin-text"></span> */}
                                        </div>
                                        <div class="absolute right-0 mr-3 leading-[40px] text-skin-link">9 Votes
                                        </div>
                                        <div class="h-[40px] rounded-md bg-skin-border"
                                        ></div>
                                        </button>
                                 
                                </div>
                                <div class="mt-3"><span class="cursor-help text-sm">Ends at 
                                
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
         
  
  
              <div class="lg:flex"></div>
            </div>
          </div>
  
  
        </section>
  
        {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div> */}
  
      </main>

    )

}