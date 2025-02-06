"use client";
import React from "react";
import {
  BookOpen,
  Brain,
  Lightbulb,
  Target,
  CheckCircle,
  Rocket,
  Heart,
  LucideIcon,
} from "lucide-react";

// 🔹 Tipo para os marcos da linha do tempo
type Milestone = {
  id: number;
  date: string;
  title: string;
  icon: LucideIcon;
  color: string;
};

// 🔹 Dados da linha do tempo
const timelineData: Milestone[] = [
  {
    id: 1,
    date: "Introdução",
    title: "Visão geral sobre vícios",
    icon: BookOpen,
    color: "bg-[#10141a]",
  },
  {
    id: 2,
    date: "Capítulo 1",
    title: "A Verdade Chocante",
    icon: Brain,
    color: "bg-[#10141a]",
  },
  {
    id: 3,
    date: "Capítulo 2",
    title: "O Maior Erro",
    icon: Lightbulb,
    color: "bg-[#10141a]",
  },
  {
    id: 4,
    date: "Capítulo 3",
    title: "Descoberta Científica",
    icon: Target,
    color: "bg-[#10141a]",
  },
  {
    id: 5,
    date: "Capítulo 4",
    title: "O Método Reset",
    icon: CheckCircle,
    color: "bg-[#10141a]",
  },
  {
    id: 6,
    date: "Capítulo 5",
    title: "Sua Jornada",
    icon: Rocket,
    color: "bg-[#10141a]",
  },
  {
    id: 7,
    date: "Capítulo 6",
    title: "Conclusão",
    icon: Heart,
    color: "bg-[#10141a]",
  },
];

export default function Timeline() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <h2 className="text-2xl font-bold text-center text-white uppercase leading-tight">
        O QUE VOCÊ VAI APRENDER NO EBOOK?
      </h2>
      {/* Linha */}
      <div className="w-16 h-1 bg-red-500 mx-auto mt-3"></div>

      {/* Linha do tempo */}
      <div className="relative wrap overflow-hidden p-4">
        <div className="absolute border-l-2 border-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>

        {timelineData.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`mb-2 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="w-5/12"></div>
            <div className="z-20 flex items-center bg-gray-800 shadow-lg w-8 h-8 rounded-full min-w-fit p-2 m-2">
              <span className="font-semibold text-sm text-white p-1">
                {milestone.date}
              </span>
            </div>
            <div
              className={`w-5/12 p-4 rounded-lg justify-center text-center shadow-lg ${milestone.color} text-white flex flex-col md:flex-row gap-3 items-center transition-transform duration-200 hover:scale-105`}
            >
              <milestone.icon className="text-2xl" />
              <h3 className="font-semibold text-sm">{milestone.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
