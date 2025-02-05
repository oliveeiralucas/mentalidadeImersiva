"use client";
import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre" className="w-full bg-[#10141a] pb-20 pt-36 px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* 🔥 Imagem com bordas arredondadas */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/logo.jpg" // Substituir pelo caminho da imagem real
            alt="Sobre a Mentalidade Imersiva"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* 🔥 Texto ao lado da imagem */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            MENTALIDADE IMERSIVA
          </h2>

          <div className="w-16 h-1 bg-red-500 mb-3 mt-1"></div>

          <p className="text-gray-300 mt-4 leading-relaxed">
            A <strong className="text-white">Mentalidade Imersiva</strong> é um
            movimento focado em transformar a maneira como você pensa e age no
            seu dia a dia. Nosso objetivo é oferecer insights práticos para
            ajudar você a quebrar barreiras e alcançar seu máximo potencial.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Através deste eBook, reunimos os melhores princípios de mentalidade,
            produtividade e disciplina para que você possa aplicar imediatamente
            na sua vida.
          </p>
          <blockquote className="italic text-gray-400 border-l-4 border-red-500 pl-4 mt-6">
            “A maneira como você pensa define a maneira como você age, e isso
            molda seu futuro.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
