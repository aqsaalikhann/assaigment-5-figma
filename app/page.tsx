import Header from '@/components/Header';
import React from 'react';
import Image from "next/image";

function Home() {
  return (
    <div>
      <Header/>
      <div className='flex h-[189%] mt-7'>
    <div className="flex flex-col items-start w-full- lg:w-[496px] m-16 space-y-3">
      <div className="flyIn-main font-bold font-libreBodoni text-2xl">
      
     <p>IMPECCABLE</p>
     <p>CRAFTSMANSHIP AND</p>
     <p>FINESSE</p>
      </div>
      <div className=' w-full h-auto'>
        <div className='slideIn-pic text-headerBackground font-medium text-1xl'>
        <p>An example of intricate workmanship and detail, elegant</p>
        <p>necklaces and long and short chains</p>
        <p>form a part of our desirable collection.</p>
      </div>
        <button className="mt-8 lg:mt-10 text-white bg-[#A29875] W-[200px] h-[50px] md:w[250px] lg:w-[288px]rounded-lg hover:bg-[#b8aa75]">
        Explore Now</button>
        </div>

      
        <div className="flex justify-center items-center w-full lg:w-[462px] mt-10 lg:mt-0">

        <Image
          src="/images/slider-1.jpg"
          alt="image"
          width={300}
          height={400}
          className="slideIn-pic"
          />
        
        </div>
          </div> 
    </div>
    </div>
  )
    };
  
export default Home;