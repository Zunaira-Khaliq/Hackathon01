'use client'
import React, { useState } from 'react';
import Image from 'next/image';
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
import PickUp from '@/app/Assets/Pick - Up.png'
import Switch from '@/app/Assets/Switch.png'
import DropOff from '@/app/Assets/Drop - Off.png'
import Car from '@/app/Assets/car.png'
import Car1 from '@/app/Assets/car (1).png'
import Suv from '@/app/Assets/suv.png'
import Suv4 from '@/app/Assets/suv (4).png'
import Heart from '@/app/Assets/heart.png'
import Spesification from '@/app/Assets/Spesification.png'
import Spesification1 from '@/app/Assets/Spesification (1).png'

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='w-full flex'>
      <div className="hidden sm:flex w-[20%]">
        <Image src={NavbarSide} alt='NavBar Side' width={360} height={1600}/>
      </div>
      <div className="w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
          <Image src={PickUp} alt="Pick-Up" width={582} height={132} className="w-[200px] md:w-[270px] lg:w-[582px]" />
          <Image src={Switch} alt="Switch" width={60} height={60} className="w-[80px]" />
          <Image src={DropOff} alt="Drop-Off" width={582} height={132} className=' w-[200px] md:w-[270px] lg:w-[582px]' />
        </section>
        <section className="w-full flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Koenigsegg', image: Car, desc: 'Sport' },
              { title: 'Nissan GT - R', image: Car1, desc: 'Luxury' },
              { title: 'Rolls-Royce', image: Suv, desc: 'Sport' },
              { title: 'All New Rush', image: Suv4, desc: 'Luxury' },
              { title: 'CR - V', image: Suv4, desc: 'Luxury' },
              { title: 'ALLNEW TERIOS', image: Suv, desc: 'SUV' },
              { title: 'MGZX Exclusive', image: Suv4, desc: 'Luxury' },
              { title: 'NEW MGZS', image: Suv, desc: 'SUV' },
            ].map((car, index) => (
              <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    {car.title} <Image src={Heart} alt="Heart" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{car.desc}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                  <Image src={car.image} alt="Car Image" width={220} height={68} />
                  <Image src={Spesification} alt="Spesification" width={256} height={24} className='hidden md:flex' />
                  <Image src={Spesification1} alt="Spesification 1" width={256} height={24} className='md:hidden' />
                </CardContent>
                <CardFooter className="w-full flex items-center justify-between">
                  <p>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={'/details'}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          {showMore && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'MG ZX Exclusive', image: Suv, desc: 'SUV' },
                { title: 'NEW MG ZS', image: Suv4, desc: 'Sedan' },
                { title: 'New MG ZX Excite', image: Suv, desc: 'Sport' },
                { title: 'NEW MG ZS', image: Suv4, desc: 'Sedan' },
              ].map((car, index) => (
                <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="w-full flex items-center justify-between">
                      {car.title} <Image src={Heart} alt="Heart" width={20} height={20} />
                    </CardTitle>
                    <CardDescription>{car.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                    <Image src={car.image} alt="Car Image" width={220} height={68} />
                    <Image src={Spesification} alt="Spesification" width={256} height={24} className='hidden md:flex' />
                    <Image src={Spesification1} alt="Spesification 1" width={256} height={24} className='md:hidden' />
                  </CardContent>
                  <CardFooter className="w-full flex items-center justify-between">
                    <p>
                      $99.00/<span className="text-gray-500">day</span>
                    </p>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        <section className="w-full text-center">
          <button 
            onClick={toggleShowMore} 
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}