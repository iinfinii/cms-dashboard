import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/schemas";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FaGoogle, FaGithub, FaLink } from "react-icons/fa"
import type z from "zod";
import { Label } from "@/components/ui/label";


export function SignIn() {
    const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: { username: "", email: "", password: "" },
  });

  const onSubmit = (values: z.infer<typeof signUpSchema>) => {    
    console.log("Form is valid and ready to send:", values);
  };

    {
        return (
            <div className="h-full w-full flex items-center justify-center">
                <div className="bg-card w-108 p-12 rounded-lg shadow-xl border border-border">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-bold"><span >Sign up</span><span className="text-green-400">.</span></h1>
                        <a href="/" className="text-sm text-muted-foreground p-1 font-bold
                        hover:text-foreground transition-colors">Main page</a>
                    </div>
                    <form className="px-2 mb-6" onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex flex-col mt-12 mb-6">
                            <Label className="p-0">Username:</Label>
                            <Input {...form.register("username")} type="text" id="username" placeholder="infini" className=""/>
                            <div className="pt-2 flex items-center">
                                {form.formState.errors.username && (
                                    <p className="text-red-500 text-xs animate-in fade-in slide-in-from-top-1 duration-500">
                                        {form.formState.errors.username.message}
                                    </p>
                                )}
                            </div>
                            <Label className="p-0">E-mail:</Label>
                            <Input {...form.register("email")} type="email" id="email" placeholder="email@example.com" className=""/>
                            <div className="pt-2 flex items-center">
                                {form.formState.errors.email && (
                                    <p className="text-red-500 text-xs animate-in fade-in slide-in-from-top-1 duration-500">
                                        {form.formState.errors.email.message}
                                    </p>
                                )}
                            </div>
                            <Label>Password:</Label>
                            <Input {...form.register("password")} type="password" id="password" placeholder="•••••••••••"/>
                            <div className="min-h-4 pt-2 flex items-center">
                                {form.formState.errors.password && (
                                    <p className="text-red-500 text-xs animate-in fade-in slide-in-from-top-1 duration-300">
                                        {form.formState.errors.password.message}
                                    </p>
                                )}
                            </div>
                            <Label className="p-0">Confirm Password:</Label>
                            <Input {...form.register("confirmPassword")} type="password" id="confirmPassword" placeholder="•••••••••••"/>
                            <div className="min-h-6 pt-2 flex items-center">
                                {form.formState.errors.confirmPassword && (
                                    <p className="text-red-500 text-xs animate-in fade-in slide-in-from-top-1 duration-300">
                                        {form.formState.errors.confirmPassword.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <Button type="submit" className="w-full bg-green-400 duration-300 hover:bg-green-300">Sign up</Button>
                    </form>

                    <div className="flex items-center mt-4 mb-2 px-10">
                        <div className="flex-grow h-px bg-slate-200"></div>
                        <span className="px-2 text-gray-500 font-medium">OR</span>
                        <div className="flex-grow h-px bg-slate-200"></div>
                    </div>

                    <div className="flex justify-center mb-2">
                        <Label className="text-zinc-400 font-bold"> Sign up with:</Label>
                    </div>
                    <div className="grid grid-flow-col gap-4 items-center justify-center">
                        <Button variant="outline" className="w-12 h-12 p-3 hover:brightness-150" >
                            <FaGoogle/>
                        </Button>
                        <Button variant="outline" className="w-12 h-12 p-3 hover:brightness-150">
                            <FaLink />
                        </Button>
                        <Button variant="outline" className="w-12 h-12 p-3 hover:brightness-150" >
                            <FaGithub />
                        </Button>
                    </div>

                    <div className="text-center mt-12 flex flex-col">
                        <p className="text-zinc-400 font-bold"> Already have an account?</p>
                        <a href="/sign-up" className="hover:underline"> <span className="text-green-400 font-bold">Sign in</span><span>.</span> </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
