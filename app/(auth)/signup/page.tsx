"use client";

import Input from "@/components/Input";
import { Button } from "@mui/material";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { signUp } from "@/services/userApi";
import SnackAlert from "@/components/SnackAlert";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const router = useRouter();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password !== confirmPassword) {
      setAlertMessage(
        "Não foi possível fazer o cadastro. Senhas não são iguais"
      );
      setAlert(true);
      return;
    }

    try {
      const userData = await signUp(email, password);
      setAlertMessage("Cadastro feito com sucesso");
      router.push("/signin");
    } catch (err) {
      setAlertMessage("Não foi possível fazer o cadastro");
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
        severity={
          alertMessage === "Cadastro feito com sucesso" ? "success" : "warning"
        }
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
          color={password?.length > 3 ? "success" : "warning"}
          value={password}
          setValue={setPassword}
        />
        <Input
          label="Confirm password"
          type="password"
          value={confirmPassword}
          color={confirmPassword === password ? "success" : "warning"}
          setValue={setConfirmPassword}
        />
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </form>
      <Link href={"/signin"} className="text-white hover:shadow-lg">
        Have an account? click here
      </Link>
    </div>
  );
}
