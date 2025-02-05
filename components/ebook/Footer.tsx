import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#10141a] text-[#dcdcdc] py-20 px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo e descrição */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <Image
            src="/logo.jpg"
            alt="Mentalidade Imersiva"
            width={120}
            height={120}
          />
          <p className="mt-4 text-sm max-w-xs leading-relaxed font-[400]">
            <strong className="text-white font-[600]">
              Mentalidade Imersiva
            </strong>{" "}
            é uma plataforma educacional que ensina estratégias para transformar
            sua vida e alcançar a liberdade mental e emocional.
          </p>
        </div>

        {/* Menu de navegação */}
        <div className="w-full md:w-1/3 text-center md:text-left mt-10 md:mt-0">
          <h3 className="text-lg font-normal text-white mb-4">Navegação</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#sobre"
                className="text-[#ff476a] hover:text-[#ff6668]"
              >
                Sobre o eBook
              </Link>
            </li>
            <li>
              <Link href="#conteudo" className="text-[#ff476a] hover:text-[#ff6668]">
                O que você vai aprender
              </Link>
            </li>
            <li>
              <Link href="#capitulos" className="text-[#ff476a] hover:text-[#ff6668]">
                Capítulos
              </Link>
            </li>
            <li>
              <Link href="#oferta" className="text-[#ff476a] hover:text-[#ff6668]">
                Oferta Especial
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-[#ff476a] hover:text-[#ff6668]">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div className="w-full md:w-1/3 text-center md:text-left mt-10 md:mt-0">
          <h3 className="text-lg font-normal text-white mb-4">Contato</h3>
          <p className="">
            Email: {" "}
            <a href="mailto:mentalidadeimersiva@gmail.com" className="text-[#ff476a] hover:text-[#ff6668]">
              mentalidadeimersiva@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
