"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-black">
      {/* 🔥 Banner de alerta no topo (agora sobre o menu) */}
      <div className="absolute top-0 left-0 w-full bg-black text-center py-2 text-sm text-white z-20">
        ⚠️ <span className="text-red-500 font-bold">Oferta limitada:</span>{" "}
        Baixe o eBook gratuitamente antes que saia do ar!
      </div>

      {/* 🔥 Imagem de fundo escura */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg" // Atualize para a imagem de fundo real
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* 🔥 Menu de navegação */}
      <nav className="absolute top-8 left-0 w-full flex justify-between items-center px-10 py-4 z-50">
        <div className="flex items-center space-x-3">
          <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
          <span className="text-white font-bold text-lg">
            Mentalidade Imersiva
          </span>
        </div>
        <ul className="hidden md:flex space-x-6 text-white uppercase text-sm font-medium">
          <li>
            <Link href="#sobre" className="hover:text-red-500">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#conteudo" className="hover:text-red-500">
              Conteúdo
            </Link>
          </li>
          <li>
            <Link href="#capitulos" className="hover:text-red-500">
              Capítulos
            </Link>
          </li>
          <li>
            <Link href="#oferta" className="hover:text-red-500">
              Oferta
            </Link>
          </li>
          <li>
            <Link href="#faq" className="hover:text-red-500">
              FAQ
            </Link>
          </li>
        </ul>
        <Button className="bg-[#ff3437] hover:bg-[#e02a2c] px-6 py-2 text-white uppercase font-bold">
          Baixar eBook
        </Button>
      </nav>

      {/* 🔥 Conteúdo Central */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <Image src="/logo.jpg" alt="Ebook Logo" width={150} height={150} />
        <h1 className="text-white text-5xl font-bold mt-4">
          EBOOK MENTALIDADE IMERSIVA
        </h1>
        <div className="w-32 h-1 bg-red-500 mt-2"></div>
        <p className="text-gray-300 mt-4 text-lg max-w-lg">
          <strong className="text-white">Mentalidade Imersiva</strong> é a chave
          para quebrar padrões e transformar sua vida.{" "}
          <span className="text-[#ff476a]">Baixe o eBook gratuito agora! </span>
        </p>
        <Button className="mt-6 bg-[#ff3437] hover:bg-[#e02a2c] px-6 py-3 text-white uppercase font-bold">
          Baixar Agora
        </Button>
      </div>
    </section>
  );
}