"use client";
import { Spinner } from "@nextui-org/react";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { useRouter } from 'next/navigation';
import { useUser } from "../hooks/useUser";
import { api } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUser } = useUser();

  const router = useRouter();

  const validLogin = async () => {
    const { data } = await api.post("/login", { email, password });
    console.log({ data });
    setLoading(false);
    await setUser(data);
  };

  const login = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      await validLogin();
      router.push('/');
    } catch (err) {
      setLoading(false);
      console.log({ err });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">
          Restaurante PIT2
        </h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Senha
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <button
              onClick={(e) => login(e)}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              {loading ? <Spinner color="warning" /> : "Login"}
            </button>
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          Ainda não tem conta?{" "}
          <Link href="/sign-in" className="font-medium text-blue-600 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
