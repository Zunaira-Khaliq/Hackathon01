import React from "react";
import Image from "next/image";
import Navbar from '@/app/Assets/Nav Bar.png'
import DetailsRental from '@/app/Assets/Details Rental.png'
import DetailRental from '@/app/Assets/Detail Rental.png'
import Top5 from '@/app/Assets/Top 5.png'
import RecentTransaction from '@/app/Assets/Recent Transaction.png'

export default function Page() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="hidden md:flex w-[25%] lg:w-[20%]">
        <Image src={Navbar} alt="Nav Bar" width={360} height={1600} />
      </div>
      <div className="hidden md:flex w-full md:w-[75%] lg:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 gap-7 flex-nowrap justify-center">
        <Image
          src={DetailsRental}
          alt="Details Rental"
          width={534}
          height={836}
          className="ml-1 w-full md:w-[45%] lg:w-[534px]"
        />
        <Image
          src={DetailsRental}
          alt="Details Rental"
          width={534}
          height={836}
          className="w-full md:w-[45%] lg:w-[534px]"
        />
      </div>
      <div className="small-screens md:hidden bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-6">
        <Image
          src={DetailRental}
          alt="Detail Rental"
          width={327}
          height={1272}
          className="w-full"
        />
        <Image
          src={Top5}
          alt="Top 5"
          width={327}
          height={508}
          className="w-full"
        />
        <Image
          src={RecentTransaction}
          alt="Recent Transaction"
          width={327}
          height={352}
          className="w-full"
        />
      </div>
    </div>
  );
}