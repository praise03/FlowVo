import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  const move = () => {
    router.push("/dao")
  }

  return (
    <main className="flex flex-col items-center justify-between p-2 ">
        
      <Navbar />

      <div className='text-center items-center lg:mt-8 self-center'>
        <h1 className='text-5xl lg:text-9xl font-extrabold text-teal-400'>FlowVo </h1>
        <h3 className='text-sm lg:text-xl  font-bold text-gray-600'>A platform for decentralized decision making within DAOs and Token Gated Communities</h3>

        <div className='p-2 mt-6 '>
          <span className=' font-thin text-md mb-4'>Want to get started? Click the button below to register your community on our plaform</span><br /><br />
          <button onClick={move} className='s bg-teal-400 p-4 hover:bg-teal-300 font-bold text-md text-gray-100 rounded-md'>Create DAO</button>
        </div>
      </div>  

      <p className='c mt-96 lg:mt-72'>&reg; 2023</p>

    </main>
  )
}