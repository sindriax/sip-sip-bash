import { useLanguage } from "@/context/language-context";
import Image from "next/image";

const LanguageSelector = () => {
  const { setLanguage } = useLanguage();

  const chooseLanguage = (lang: "en" | "es") => {
    setLanguage(lang);
  };

  return (
    <div className="flex justify-center mt-4">
      <button onClick={() => chooseLanguage("en")} className="mx-2">
        <Image src="/flags/us-flag.png" alt="English" width={40} height={30} />
      </button>
      <button onClick={() => chooseLanguage("es")} className="mx-2">
        <Image
          src="/flags/spain-flag.png"
          alt="Spanish"
          width={40}
          height={30}
        />
      </button>
    </div>
  );
};

export default LanguageSelector;
