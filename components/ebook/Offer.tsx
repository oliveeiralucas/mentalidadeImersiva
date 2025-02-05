"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OfferSection() {
  return (
    <section
      id="oferta"
      className="w-full bg-[#10141a] flex flex-col py-20 px-8 md:px-16 justify-center items-center text-center"
    >
      <h2 className="text-white text-3xl font-bold uppercase text-center mb-8">
        SUA DECISÃO AGORA <br /> VAI MUDAR SUA VIDA PARA SEMPRE
      </h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* 🔥 Texto e Oferta */}
        <div className="w-full md:w-1/3">
          {/* 🔥 Caixa de Oferta */}
          <div className="border border-[#ff476a] rounded-lg p-6 mt-6 bg-[#13171f] text-white">
            <div className="flex items-center space-x-4 justify-center">
              <span className="text-gray-400 line-through text-xl">R$147</span>
              <span className="text-[#ff476a] font-bold text-2xl">R$0.00</span>
            </div>
            {/* 🔥 Benefícios da Oferta */}
            <ul className="mt-4 space-y-3">
              {[
                "Um plano passo a passo feito para você",
                "Aplicação prática e direta",
                "Todos os recursos que você precisa para mudar sua mentalidade",
                "Estratégias comprovadas para transformação",
                "Apoio e comunidade engajada",
                "Acesso a conteúdos exclusivos",
                "Nenhuma experiência prévia necessária",
                "Sem investimento adicional",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#ff476a] mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* 🔥 Alerta de Preço */}
            <div className="flex items-center bg-[#1a1e26] p-3 rounded-md mt-5 flex-col justify-center text-center">
              <AlertTriangle className="text-[#ff476a] w-8 h-8 mr-3" />
              <p className="text-sm text-gray-300">
                <strong className="text-white">AVISO:</strong> O preço aumentará
                em breve para
                <span className="text-[#ff476a]"> R$17</span>. Aproveite agora!
              </p>
            </div>

            {/* 🔥 Botão CTA */}
            <Button className="w-full mt-6 bg-[#ff3437] hover:bg-[#e02a2c] text-white uppercase font-bold py-3">
              Baixar Agora
            </Button>
          </div>
        </div>

        {/* 🔥 Imagem da Oferta */}
        <div className="hidden md:flex md:w-1/2 justify-end">
          <Image
            src="/offer-image.png"
            alt="Oferta Especial"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
