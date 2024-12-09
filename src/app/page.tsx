import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import Ads1 from '@/app/Assets/Ads 1.png'
import Ads2 from '@/app/Assets/Ads 2.png'
import PickUp from '@/app/Assets/Pick - Up.png'
import Switch from '@/app/Assets/Switch.png'
import DropOff from '@/app/Assets/Drop - Off.png'
import Heart from '@/app/Assets/heart.png'
import Car from '@/app/Assets/car.png'
import Spesification from '@/app/Assets/Spesification.png'
import Heart2 from '@/app/Assets/heart 2.png'
import Car1 from '@/app/Assets/car (1).png'
import Suv from '@/app/Assets/suv.png'
import Suv4 from '@/app/Assets/suv (4).png'

export default function Home() {
  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
     
      <section className="w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center">
        <Image src={Ads1} alt="Ads 1" width={640} height={360} className="max-w-full" priority />
        <Image src={Ads2} alt="Ads 2" width={640} height={360} className="max-w-full" />
      </section>

    
      <section className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
        <Image src={PickUp} alt="Pick-Up" width={582} height={132} className="max-w-full" />
        <Image src={Switch} alt="Switch" width={60} height={60} className="max-w-full" />
        <Image src={DropOff} alt="Drop-Off" width={582} height={132} className="max-w-full" />
      </section>

      
      <section className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Koenigsegg <Image src={Heart} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={Car} alt="" width={220} height={68} />
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
                NissanGT - R <Image src={Heart2} alt="Heart 2" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={Car1} alt="Car1" width={220} height={68} />
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
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>
        </div>
      </section>


      <section className="w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Rush <Image src={Heart} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
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

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={Heart2} alt="Heart 2" width={20} height={20} />
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

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={Heart2} alt="Heart 2" width={20} height={20} />
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
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Exclusive <Image src={Heart} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
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

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NEW MG ZS <Image src={Heart2} alt="Heart" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
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

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Excite <Image src={Heart} alt="Heart" width={20} height={20} />
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

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                New MG ZS<Image src={Heart2} alt="Heart 2" width={20} height={20} />
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

      <section className="w-full text-center">
        <Link href={"/categories"}>
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}