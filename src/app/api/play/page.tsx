"use client";

import GameBoard from "@/components/gameboard";
import { useLanguage } from "@/context/language-context";

const PlayPage = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Sip Sip Game",
      welcome: "Let the game begin!",
    },
    es: {
      title: "Juego Sip Sip",
      welcome: "¡Que comience el juego!",
    },
  };

  if (!language) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-xl">Redirecting to language selection...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center">
          {content[language].title}
        </h1>
        <p className="text-center mt-2">{content[language].welcome}</p>
        <GameBoard />
      </main>
    </div>
  );
};

export default PlayPage;
