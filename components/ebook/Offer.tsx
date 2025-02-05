"use client";
import React from "react";
import Image from "next/image";

export default function OfferSection() {
  return (
    <section
      id="oferta"
      className="w-full bg-[#10141a] flex flex-col py-12 px-8 md:px-16 justify-center items-center text-center"
    >
      <h2 className="text-white text-3xl font-bold uppercase text-center">
        SUA DECISÃO AGORA <br /> VAI MUDAR SUA VIDA PARA SEMPRE
      </h2>
      <div className="w-16 h-1 bg-red-500 mx-auto mt-2 mb-6"></div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* 🔥 Imagem da Oferta */}
        <div className="hidden md:flex justify-end">
          <Image
            src="/offer-image.png"
            alt="Oferta Especial"
            width={1200}
            height={628}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
