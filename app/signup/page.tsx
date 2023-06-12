"use client";

import Input from "@/components/Input";
import Link from "next/link";

export default function Signup() {
  return (
    <div className=" flex flex-col w-2/5 justify-center items-center bg-gradient-to-r from-purple-950 from-50% to-slate-900 ">
      <form className="flex flex-col w-full justify-center items-center gap-4 p-8">
        <Input label="email" type="email" />
        <Input label="password" type="password" />
        <Input label="Confirm password" type="password" />
      </form>
      <Link
        href={"/signin"}
        className="text-transparent bg-clip-text bg-white hover:shadow-2xl hover:shadow-white"
      >
        Already have an account? click here!
      </Link>
    </div>
  );
}
