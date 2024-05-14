import Image from "next/image";
import Link from "next/link";
import DesktopLogo from '../../public/airbnb-desktop.png'
import MobileLogo from '@/public/airbnb-mobile.webp'
import Homelogo from '@/public/homeiiiiiii.png'
import { UserNav } from "./UserNav";
import { SearchModalComponent } from "./SearchComponent";


export function Navbar() {
    return (
        <nav className="w-full border-b">
            <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
                <Link href='/'>
                    <Image src={Homelogo} className="w-14 hidden lg:block" alt="desktop logo"/>
                    <Image src={Homelogo} alt="mobile logo" className="block lg:hidden w-12"/>
                    <h1 className="font-bold text-md">Rent-Homes-Inc</h1>
                </Link>

                


                <SearchModalComponent/>


                <UserNav/>
            </div>
        </nav>
    )
}