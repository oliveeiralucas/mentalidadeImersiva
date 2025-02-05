"use client";
import React from "react";

export default function Chapters() {
  return (
    <section id="capitulos" className="w-full bg-[#10141a] py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* 🔥 Título da Seção */}
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-white">
          O QUE VOCÊ VAI APRENDER NO <br /> EBOOK MENTALIDADE IMERSIVA?
        </h2>
        <div className="w-20 h-1 bg-red-500 mx-auto mt-3"></div>

        {/* 🔥 Lista de Capítulos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {[
            {
              title: "Introdução",
              description:
                "Uma visão geral sobre os vícios e o impacto no seu comportamento.",
            },
            {
              title:
                "Capítulo 1 - A Verdade Chocante Sobre Por Que Você Não Consegue Parar",
              description:
                "Descubra os principais fatores do vício, os impactos neurológicos e por que métodos comuns falham.",
            },
            {
              title:
                "Capítulo 2 - O Maior Erro Que 97% das Pessoas Cometem ao Tentar Superar o Vício",
              description:
                "Entenda o erro fundamental na abordagem tradicional, o papel das emoções e como reprogramar sua mente.",
            },
            {
              title:
                "Capítulo 3 - A Descoberta Científica que Muda Tudo Sobre Recuperação",
              description:
                "Fundamentos da neuroplasticidade e as evidências científicas que sustentam o Método Reset.",
            },
            {
              title:
                "Capítulo 4 - O Método Reset: O Sistema Completo de Libertação em 90 Dias",
              description:
                "Uma visão detalhada do método, ferramentas essenciais e protocolos de emergência.",
            },
            {
              title: "Capítulo 5 - Sua Jornada de Transformação Começa Agora",
              description:
                "Resumo dos principais ensinamentos, plano de ação e próximos passos para sua transformação.",
            },
            {
              title: "Capítulo 6 - Conclusão e Agradecimentos",
              description:
                "Reflexões finais, principais aprendizados e como seguir adiante após o ebook.",
            },
          ].map((chapter, index) => (
            <div
              key={index}
              className="bg-[#13171f] rounded-lg p-6 flex flex-col justify-center items-center text-center shadow-lg border border-[#1c1f27]"
            >
              <div className="flex items-center justify-center">
                <h3 className="text-base font-semibold text-white ml-3">
                  {chapter.title}
                </h3>
              </div>
              <p className="text-gray-300 mt-3">{chapter.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
