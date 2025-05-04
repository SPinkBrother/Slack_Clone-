import { useState } from "react";
import {FcGoogle} from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Separator } from "@radix-ui/react-separator";
import { SignInFlow } from "@/features/auth/types";


interface SignUpCardProps{
    setState: (state: SignInFlow) => void;
}


export const SignUpCard = ({setState} : SignUpCardProps)  => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 

    return(
        <Card className="w-full h-full p-8">
            {/* Header */}
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                    Sign up to continue
                </CardTitle>
                <CardDescription>
                    Use your email or another service to continue
                </CardDescription>
            </CardHeader>
            {/* Content */}
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5" >
                    <Input
                        disabled={false}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <Input
                        disabled={false}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                        required
                    />
                    <Input
                        disabled={false}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password"
                        type="password"
                        required
                    />
                    <Button type="submit" className="w-full" size="lg" disabled={false}>
                        Continue
                    </Button>
                </form>

            <Separator>

            </Separator>
            <div className="flex flex-col gap-y-2.5">
                <Button 
                    disabled={false}
                    onClick={() => {}}
                    variant="outline"
                    size="lg"
                    className="w-full relative"
                >
                    <FcGoogle className="top-2.5 left-2.5 size-5 absolute"/>
                    Continue with Google
                </Button>
                <Button 
                    disabled={false}
                    onClick={() => {}}
                    variant="outline"
                    size="lg"
                    className="w-full relative"
                >
                    <FaGithub className="top-2.5 left-2.5 size-5 absolute"/>
                    Continue with Github
                </Button>
            </div>
            {/* Question */}
            <p className="text-xs text-muted-foreground">
                Already have an account? <span onClick={() => setState("signIn")} className="text-sky-700 hover:underline cursor-pointer">Sign in</span>
            </p>
            </CardContent>
        </Card>
    );
};