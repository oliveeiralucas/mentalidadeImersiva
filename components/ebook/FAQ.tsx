"use client";
import React from "react";

const faqs = [
  {
    question: "Sou muito jovem para acessar o conteúdo?",
    answer:
      "Não, desde que você tenha um dispositivo com acesso à internet, pode baixar o eBook e aproveitar o conteúdo.",
  },
  {
    question: "Preciso investir dinheiro para aplicar o conteúdo?",
    answer:
      "Não! O eBook apresenta estratégias que podem ser aplicadas sem nenhum investimento inicial.",
  },
  {
    question: "Posso cancelar minha inscrição?",
    answer:
      "O eBook é gratuito! Basta baixar e aproveitar o conteúdo sem compromisso.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "Depende do seu nível de dedicação. Algumas pessoas conseguem aplicar o conteúdo e ver mudanças rapidamente.",
  },
  {
    question: "O conteúdo serve para pessoas de fora do Brasil?",
    answer:
      "Sim! O material é aplicável em qualquer país e pode ser adaptado à sua realidade.",
  },
  {
    question: "Tenho pouco tempo por dia, ainda assim posso aprender?",
    answer:
      "Sim, mesmo com apenas 1 hora por dia, você pode aplicar os conceitos e ver progresso gradual.",
  },
  {
    question: "Esse eBook é da Mentalidade Imersiva?",
    answer:
      "Sim! Esse é um material oficial criado pela Mentalidade Imersiva para ajudar você a transformar sua mentalidade.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="w-full bg-[#10141a] py-20 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center uppercase">
          PERGUNTAS FREQUENTES
        </h2>
        <div className="mt-8 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-white text-lg font-semibold">
                {faq.question}
              </h3>
              <p className="text-gray-300 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
