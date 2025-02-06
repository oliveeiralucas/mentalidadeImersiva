"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function WhyRead() {
  return (
    <section id="whyread" className="w-full bg-[#10141a] py-8 md:py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        {/* 🔥 Imagem à esquerda */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/whyread-image.jpg" // Substituir pelo caminho real da imagem
            alt="Por que ler este eBook?"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* 🔥 Texto à direita */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-white text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            POR QUE LER O <br /> EBOOK MENTALIDADE IMERSIVA?
          </h2>

          <div className="w-16 h-1 bg-red-500 mt-3 mx-auto md:mx-0"></div>

          <ul className="mt-6 space-y-4">
            {[{
              title: "1. Conhecimento Transformador",
              description:
                "Este eBook traz conceitos que vão desafiar sua forma de pensar e abrir novas perspectivas para o seu desenvolvimento pessoal e profissional.",
            },
            {
              title: "2. Aplicação Prática",
              description:
                "O conteúdo foi estruturado para ser facilmente aplicado na sua vida. Não é apenas teoria, mas estratégias concretas para o sucesso.",
            },
            {
              title: "3. Mudança de Mentalidade",
              description:
                "Você aprenderá como reprogramar sua mente para superar desafios, eliminar crenças limitantes e criar hábitos vencedores.",
            },
            {
              title: "4. Passo a Passo Simples",
              description:
                "Cada capítulo fornece um roteiro prático que facilita a implementação das estratégias apresentadas.",
            }].map((item, index) => (
              <li key={index} className="text-center md:text-left">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </li>
            ))}
          </ul>

          {/* 🔥 Botão CTA */}
          <Button className="mt-6 bg-[#ff3437] hover:bg-[#e02a2c] text-white uppercase font-bold px-6 py-3 mx-auto md:mx-0">
            Baixar Agora
          </Button>
        </div>
      </div>
    </section>
  );
}
