"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { PrimaryButton } from "./ui/Button";

export const Appbar = () => {
    const session = useSession();
    return (
        <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
              <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
       <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
            <div className="text-center item-center p-2">
                DCEX
            </div>
            <div>
                {session.data?.user ? <PrimaryButton onClick={() => { signOut() }}>Logout</PrimaryButton> : <PrimaryButton onClick={() => {
                    signIn()
                }}>Signin</PrimaryButton>}
            </div>
        </div>
        </header>
    )
}