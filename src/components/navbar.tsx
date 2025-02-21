import Link from "next/link";
import {Search, ShoppingCartIcon, UserCircle} from "lucide-react";

export const Navbar = () => {
    return (
        <nav className="flex items-center p-4 px-8 bg-[#1e120a] w-full">
            <div className='flex-1'>
                <Link href="/">
                    <span className="text-xl font-bold cursor-pointer text-white">Heavenly</span>
                </Link>
            </div>

            <div className="flex items-center gap-6">
                <Link href="/shop" className="text-[#ffe6d6] text-sm border border-white rounded-full py-2 px-5">Shop</Link>
                <Link href="/about-us" className="text-[#ffe6d6] text-sm border border-white rounded-full py-2 px-5">About</Link>
            </div>

            <div className="flex-1 flex justify-end gap-10">
                <Link href="/search" className="text-[#ffe6d6] text-sm">
                    <Search className="w-6 h-6 cursor-pointer" />
                </Link>
                <Link href="/sign-up" className="text-[#ffe6d6] text-sm">
                    <UserCircle className="w-6 h-6 cursor-pointer" />
                </Link>
                <Link href="/cart" className="text-[#ffe6d6] text-sm">
                    <ShoppingCartIcon className="w-6 h-6 cursor-pointer" />
                </Link>
            </div>
        </nav>
    )
}