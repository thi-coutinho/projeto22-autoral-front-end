"use client";

import Input from "@/components/Input";
import SnackAlert from "@/components/SnackAlert";
import { Button } from "@mui/material";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { signIn } from "@/services/authApi";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const router = useRouter();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const userData = await signIn(email, password);
      setAlertMessage("Login com sucesso");
      router.push("/dashboard");
    } catch (err) {
      setAlertMessage("Não foi possível fazer o login!");
    } finally {
      setAlert(true);
    }
  }

  return (
    // <div className=" flex flex-col w-2/5  justify-center items-center bg-gradient-to-r from-purple-950 from-50% to-slate-900 ">
    <div className=" flex flex-col w-2/5  justify-center items-center bg-background ">
      <SnackAlert
        message={alertMessage}
        setShow={setAlert}
        severity={alertMessage === "Login com sucesso" ? "success" : "warning"}
        show={alert}
        key={alertMessage}
      />
      <form
        onSubmit={submit}
        className="flex flex-col w-full justify-center items-center gap-4 p-8"
      >
        <Input label="email" type="email" value={email} setValue={setEmail} />
        <Input
          label="password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <Button variant="contained" type="submit">
          Sign in
        </Button>
      </form>
      <Link href={"/signup"} className="text-white hover:shadow-lg">
        Don`t have an account? click here
      </Link>
    </div>
  );
}