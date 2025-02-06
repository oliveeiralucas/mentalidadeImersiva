"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Download() {
  return (
    <section
      id="download"
      className="relative w-full py-24 flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* 🔥 Imagem de Fundo */}
      <div className="absolute inset-0">
        <Image
          src="/download-bg.jpg" // Atualize para a imagem correta
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-40 blur-sm"
        />
      </div>

      {/* 🔥 Conteúdo Central */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-white text-5xl md:text-6xl font-extrabold uppercase tracking-wide drop-shadow-lg">
          Baixe Agora o eBook
        </h2>
        <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto leading-relaxed">
          Você está a um{" "}
          <span className="text-[#ff3437] font-bold">clique</span> de
          transformar sua mentalidade e alcançar seus objetivos. Baixe o eBook
          gratuitamente e inicie sua jornada agora!
        </p>

        {/* 🔥 Botão de Download */}
        <a
          href="/ebook.pdf"
          download="Mentalidade_Imersiva.pdf"
          className="inline-block mt-8"
        >
          <Button className="bg-[#ff3437] hover:bg-[#e02a2c] px-8 py-6 text-white uppercase font-bold text-xl rounded-lg shadow-xl transform hover:scale-105 transition-transform">
            Baixar eBook
          </Button>
        </a>
      </div>
    </section>
  );
}
