"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import WelcomePage from "@/components/landing";
import { useLanguage } from "@/context/language-context";


const HomePage = () => {
  const { language } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    if (language) {
      router.push("/api/play");
    }
  }, [language, router]);

  if (!language) {
    return <WelcomePage />;
  }

  return null;
};

export default HomePage;
