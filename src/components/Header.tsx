"use client"

import Image from 'next/image'
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
import { AiOutlineMenu } from "react-icons/ai"

const Header = () => {

    const [menuIsOpen, setMenuIsOpen] = React.useState(false)

    const { status, data } = useSession()

    const handleLoginClick = () => signIn()
    const handleLogOutClick = () => {
        setMenuIsOpen(false)
        signOut()
    } 
    const handleMenuClick = () => setMenuIsOpen(!menuIsOpen)

    return (
        <div className="container mx-auto flex p-5 py-0 h-[88px] items-center justify-between">
            <div className="relative w-[180px] h-[30px]">
                <Image src="/easy-trip-logo.png" alt='Easy Trip' fill />
            </div>
            {
                status === "unauthenticated" && (
                    <button className='text-primaryLighter font-semibold' onClick={handleLoginClick}>
                        LOGIN
                    </button>
                )
            }
            {
                status === "authenticated" && data.user && (
                    <div className="flex items-center border-primaryLighte border border-solid p-2 px-3 gap-2 rounded-full relative">
                        <AiOutlineMenu size={16} color='white' className=" cursor-pointer" onClick={handleMenuClick}/>
                        <Image width={30} height={30} src={data.user.image!} alt={data.user.name!} className="rounded-full" />
                        {
                            menuIsOpen && (
                                <div className="absolute top-14 left-0 w-full h-full bg-primaryDarker border-primaryLighte border border-solid rounded-md shadow-md flex fle justify-center items-center">
                                    <button className="text-primaryLighter text-sm font-semibold" onClick={handleLogOutClick} >
                                        LOGOUT
                                    </button>
                                </div>
                            )
                        }
                    
                    </div>
                )
            }
        </div>
    )
}

export default Header