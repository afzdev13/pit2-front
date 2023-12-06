"use client";
import Link from "next/link";
import { Button } from "../Button";
import { useUser } from "@/app/hooks/useUser";

export const AdminMenu = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-row gap-20">
      {user?.userRole?.Role?.name === "ADMIN" && (
        <Button text={<Link href={"/users"}>Usuarios</Link>} />
      )}

      <Button text={<Link href={"/items"}>Items</Link>} />
      <Button text={<Link href={"/orders"}>Pedidos</Link>} />
    </div>
  );
};
