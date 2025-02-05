"use client";
import React from "react";
import { CheckSquare, ChartColumnIncreasing, Award } from "lucide-react";

const steps = [
  {
    icon: <CheckSquare className="w-10 h-10 text-red-500" />, // Amarelo para destaque
    title: "Passo 1",
    description:
      "Baixe o eBook da Mentalidade Imersiva e inicie sua jornada para transformar sua mentalidade.",
  },
  {
    icon: <ChartColumnIncreasing className="w-10 h-10 text-red-500" />, // Azul para contraste
    title: "Passo 2",
    description:
      "Leia o material e aplique os conceitos. O conteúdo foi estruturado para ser de fácil implementação no seu dia a dia.",
  },
  {
    icon: <Award className="w-10 h-10 text-red-500" />, // Vermelho para chamar atenção
    title: "Passo 3",
    description:
      "Mantenha o foco e siga as estratégias. Com dedicação, você verá os resultados e começará a transformar sua vida.",
  },
];

export default function StepsSection() {
  return (
    <section id="steps" className="w-full bg-[#10141a] py-4 px-8 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#1a1f29] p-6 rounded-lg shadow-lg border border-[#2d3748]"
          >
            <div className="flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-red-500 uppercase">
              {step.title}
            </h3>
            <p className="text-gray-300 mt-2 text-md leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
