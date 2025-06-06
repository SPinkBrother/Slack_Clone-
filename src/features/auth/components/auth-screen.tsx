"use client";

import { useState } from "react";

import { SignInFlow } from "../types";
import { SignInCard } from "@/features/auth/components/sign-in-card";
import { SignUpCard } from "@/features/auth/components/sign-up-card";




export const AuthSCreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn");

    return(
        <div className="h-full flex items-center justify-center bg-[#5C3B58]">
            <div className="md:h-auto md:w-420px">
                    {state === "signIn" ? <SignInCard setState={setState}/> : <SignUpCard setState={setState}/>}
            </div>
        </div>
    );
};