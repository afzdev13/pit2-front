"use client";
import { useUser } from "@/app/hooks/useUser";
import { Button } from "../Button";
import Link from "next/link";
import { AdminMenu } from "../AdminMenu";

export const UserIcon = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-row gap-20">
      {["ADMIN", "EMPLOYE"].includes(user?.userRole?.Role?.name || '') && <AdminMenu />}
      {}
      <div>
        {user ? <h1 className="text-white">Bem vindo {user.name}</h1> : null}
        <Button
          text={<Link href={"/login"}>{user ? "Sair" : "Entrar"}</Link>}
        />
      </div>
    </div>
  );
};
