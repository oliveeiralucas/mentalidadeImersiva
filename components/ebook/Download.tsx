"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Download() {
  return (
    <section
      id="download"
      className="relative w-full h-screen flex flex-col items-center justify-center bg-black"
    >
      {/* 🔥 Imagem de Fundo */}
      <div className="absolute inset-0">
        <Image
          src="/download-bg.jfif" // Atualize para a imagem correta
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* 🔥 Conteúdo Central */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-white text-4xl md:text-5xl font-bold uppercase">
          Baixe Agora o eBook
        </h2>
        <p className="text-gray-300 mt-4 text-lg max-w-lg mx-auto">
          Você está a um <span className="text-[#ff3437]">clique</span> de
          transformar sua mentalidade e alcançar seus objetivos. Baixe o eBook
          gratuitamente e inicie sua jornada agora!
        </p>

        {/* 🔥 Botão de Download */}
        <a
          href="/ebook.pdf" // Atualize com o caminho correto do arquivo
          download="Mentalidade_Imersiva.pdf"
          className="inline-block mt-6"
        >
          <Button className="bg-[#ff3437] hover:bg-[#e02a2c] px-6 py-3 text-white uppercase font-bold text-lg">
            Baixar eBook
          </Button>
        </a>
      </div>
    </section>
  );
}
