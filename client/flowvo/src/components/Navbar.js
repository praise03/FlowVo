import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
import "../flow/config";
import Image from 'next/image'

export default function Navbar() {
  // Use the AuthContext to get values for the currentUser
  // and helper functions for logIn and logOut
  const { currentUser, logOut, logIn } = useAuth();

  return (
            <div className="sticky top-1  mb-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 w-full justify-center lg:justify-normal top-0 flex border-b border-gray-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 p-3 lg:dark:bg-zinc-800/30">
                    FlowVo&nbsp;
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={10}
                        height={24}
                        priority
                    />
                </p>
                <br /><br />
                <div className="relative justify-end mt-1 sm:mt-0 flex lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <button onClick={currentUser.addr ? logOut : logIn} className=" flex place-items-center gap-2 p-3 rounded-md hover:bg-teal-500 bg-teal-400">
                        {currentUser.addr ? "Log Out" : "Connect Wallet"}
                    </button>
                </div>
            </div>
  );
}