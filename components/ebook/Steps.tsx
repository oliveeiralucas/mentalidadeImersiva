"use client";
import React from "react";
import { CheckSquare, Circle, Award } from "lucide-react";

const steps = [
  {
    icon: <CheckSquare className="w-6 h-6 text-white" />,
    title: "Passo 1",
    description:
      "O primeiro passo é baixar o eBook da Mentalidade Imersiva e iniciar sua jornada para transformar sua mentalidade.",
  },
  {
    icon: <Circle className="w-6 h-6 text-white" />,
    title: "Passo 2",
    description:
      "Leia o material e aplique os conceitos. O conteúdo foi estruturado para ser de fácil implementação no seu dia a dia.",
  },
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: "Passo 3",
    description:
      "Mantenha o foco e siga as estratégias. Com dedicação, você verá os resultados e começará a transformar sua vida.",
  },
];

export default function StepsSection() {
  return (
    <section id="steps" className="w-full bg-[#10141a] py-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between text-center text-white">
        {steps.map((step, index) => (
          <div key={index} className="w-full md:w-1/3 px-4">
            <div className="flex items-center justify-center">{step.icon}</div>
            <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-300 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
