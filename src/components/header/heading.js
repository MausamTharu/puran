"use client"
import { BiSearchAlt2 } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";
import Button from "./botton";


export default function Header(){
    return (
        <div className="bg-gradient-to-r from-[#222] via-[#2d2d2d] to-[#222] py-4 sm:py-6 sm:px-6 px-2 flex flex-col gap-y-3 shadow-lg rounded-b-xl">
            <div className="border border-amber-100/40 bg-[#232323]/80 py-3 px-4 flex flex-row justify-between items-center text-2xl rounded-xl shadow-md">
                <div className="font-bold text-amber-300 tracking-wide drop-shadow-sm select-none">
                    Sonaha
                </div>
                <div className="flex flex-row items-center bg-amber-100/90 rounded-lg h-11 px-2 shadow-inner transition-all focus-within:ring-2 ring-amber-400">
                    <input
                        type="search"
                        className="rounded-lg w-36 sm:w-56 px-3 py-1 appearance-none text-black bg-transparent outline-none placeholder:text-gray-500"
                        placeholder="Search..."
                    />
                    <button className="ml-2 p-1 rounded-full hover:bg-amber-200 transition-colors">
                        <BiSearchAlt2 color="#222" size={24} />
                    </button>
                </div>
                <div className="h-full flex items-center">
                    <button className="hover:scale-105 transition-transform">
                        <BiSolidUserCircle size={34} color="#fbbf24" />
                    </button>
                </div>
            </div>
            <div className=" rounded-lg px-4 py-2 text-white font-medium shadow">
            <Button />
            </div>
        </div>
    )
}