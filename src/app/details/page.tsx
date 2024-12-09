import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import NavbarSide from '@/app/Assets/Nav Bar Side.png'
import View from '@/app/Assets/View.png'
import View1 from '@/app/Assets/View 1.png'
import View2 from '@/app/Assets/View 2.png'
import View3 from '@/app/Assets/View 3.png'
import DetailCar1 from'@/app/Assets/Detail Car (1).png'
import Reviews from '@/app/Assets/Reviews.png'
import Reviews1 from '@/app/Assets/Reviews (1).png'
import Heart from '@/app/Assets/heart.png'
import Car from '@/app/Assets/car.png'
import Spesification from '@/app/Assets/Spesification.png'
import Heart2 from '@/app/Assets/heart 2.png'
import Car1 from '@/app/Assets/car (1).png'
import Suv from '@/app/Assets/suv.png'
import Suv4 from '@/app/Assets/suv (4).png'

export default function page() {
  return (
    <div className='w-full flex'>
     <div className=" hidden sm:flex w-[25%]">
        <Image src={NavbarSide} alt='NavBar Side' width={360} height={1600}/>
      </div>
      <div className="w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className=' w-full flex flex-col md:flex-row gap-5  items-center justify-around'>
            <div className='first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]'>
                <div>
                    <Image src={View} alt='View' width={492} height={360}/>

                </div>
                <div className=' flex items-center justify-between gap-2 lg:gap-0'>
                <Image src={View1} alt='View 1' width={148} height={124}/>
                <Image src={View2} alt='View 2' width={148} height={124}/>
                <Image src={View3} alt='View 3' width={148} height={124}/>
                </div>
            </div>
            <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
  <Image
    src={DetailCar1}
    alt="Detail Car"
    width={492}
    height={392}
    className="w-full h-auto rounded-t-xl object-cover"
  />

  <div className="p-4 flex  items-center gap-4">
    <div className="flex items-center justify-between w-full">
      <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
        $80.00 / <span className="text-gray-500 text-sm lg:text-base">day $100.00</span>
      </h1>
    </div>
    <Link href={"/payment"}>
      <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
        Rent Now
      </button>
    </Link>
  </div>
</div>
        </section>
        <section className=' w-full flex items-center justify-center'>
            <Image src={Reviews} alt='Reviews' width={1010} height={452} className=' hidden md:flex'/>
            <Image src={Reviews1} alt='Reviews 1' width={492} height={384} className=' md:hidden'/>
        </section>
        <section className=" w-full flex flex-col gap-5">
        <div className=" w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recent Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Koenigsegg <Image src={Heart} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={Car} alt="Car" width={220} height={68} />
              <Image src={Spesification} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

         
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={Heart2} alt="Heart 2" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={Car1} alt="Car 1" width={220} height={68} />
              <Image src={Spesification} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Rolls-Royce <Image src={Heart} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={Suv} alt="Suv" width={220} height={68} />
              <Image src={Spesification} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="w-full flex flex-col gap-5">
        <div className="w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recomendation Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        
        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Rush <Image src={Heart} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={Suv} alt="Suv" width={220} height={68} />
              <Image src={Spesification} alt="Specification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={Heart2} alt="Heart 2" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={Suv} alt="Suv" width={220} height={68} />
              <Image src={Spesification} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Terios <Image src={Heart} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={Suv4} alt="Suv 4" width={220} height={68} />
              <Image src={Spesification} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

        </div>
      </section>
      </div>
    </div>
  )
}