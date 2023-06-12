"use client";

import Input from "@/components/Input";
import { Button } from "@mui/material";
import Link from "next/link";
import { FormEvent } from "react";

export default function Signin() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event.target);
    // try {
    //   const userData = await signIn(, password);
    //   setUserData(userData);
    //   toast("Login realizado com sucesso!");
    //   navigate("/dashboard");
    // } catch (err) {
    //   toast("Não foi possível fazer o login!");
    // }
  }

  return (
    <div className=" flex flex-col w-2/5  justify-center items-center bg-gradient-to-r from-purple-950 from-50% to-slate-900 ">
      <form
        onSubmit={(e) => submit(e)}
        className="flex flex-col w-full justify-center items-center gap-4 p-8"
      >
        <Input label="email" type="email" />
        <Input label="password" type="password" />
        <Button type="submit">Sign in</Button>
      </form>
      <Link href={"/signup"} className="text-white hover:shadow-lg">
        Don`t have an account? click here
      </Link>
    </div>
  );
}
