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
        <Image
          src="https://media.istockphoto.com/id/1401359588/vector/great-britain-colored-flag-flat-vector-colored-icon.jpg?s=612x612&w=0&k=20&c=kw1gYLqx_b0_whzxzb3Uljuf_JZG5t3xKLuai9EjUpA="
          alt="English"
          width={40}
          height={30}
        />
      </button>
      <button onClick={() => chooseLanguage("es")} className="mx-2">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png"
          alt="Spanish"
          width={40}
          height={30}
        />
      </button>
    </div>
  );
};

export default LanguageSelector;
