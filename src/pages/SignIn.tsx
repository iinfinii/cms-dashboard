import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FaGoogle, FaGithub, FaLink } from "react-icons/fa"

function SignIn() {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="bg-card w-2/9 p-12 pb-20 rounded-lg shadow-xl border border-border">
                <h1 className="text-2xl font-bold">Sign In</h1>

                <form className="my-8">
                    <div className="flex flex-col gap-4 my-10">
                        <Input type="email" id="email" placeholder="Email"/>
                        <Input type="password" id="password" placeholder="Password"/>
                    </div>
                    <Button type="submit" className="w-full">Sign In</Button>
                </form>

                <div className="flex items-center my-4 px-10">
                    <div className="flex-grow h-px bg-slate-200"></div>
                    <span className="px-2 text-gray-500 font-medium">OR</span>
                    <div className="flex-grow h-px bg-slate-200"></div>
                </div>

                <div className="grid grid-flow-col gap-4 items-center justify-center">
                    <Button variant="outline" className="w-12 h-12 p-3" >
                        <FaGoogle/>
                    </Button>
                    <Button variant="outline" className="w-12 h-12 p-3">
                        <FaLink />
                    </Button>
                    <Button variant="outline" className="w-12 h-12 p-3" >
                        <FaGithub />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn