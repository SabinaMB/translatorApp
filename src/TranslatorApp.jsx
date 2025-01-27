import { languages } from "./languagesData";
import { useState } from "react";

const TranslatorApp = () => {
  const [selectedLanguageFrom, setSelectedLanguageFrom] = useState("en");
  const [selectedLanguageTo, setSelectedLanguageTo] = useState("en");
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLanguageSelection, setCurrentLanguageSelection] =
    useState(null);

  const handleLanguageClick = (type) => {
    setCurrentLanguageSelection(type);
    setShowLanguages(true);
  };

  const handleLanguageSelect = (languageCode) => {
    if (currentLanguageSelection === "from") {
      setSelectedLanguageFrom(languageCode);
    } else {
      setSelectedLanguageTo(languageCode);
    }
    setShowLanguages(false);
  };

  const handleSwapLanguages = () => {
    setSelectedLanguageFrom(selectedLanguageTo);
    setSelectedLanguageTo(selectedLanguageFrom);
  };

  return (
    <div className="flex flex-col gap-y-4 justify-center items-center pt-12 pb-6 relative">
      <div className="min-h-20 w-full flex justify-center items-center px-8 bg-amber-400 text-gray-900 rounded-lg">
        <div className="language" onClick={() => handleLanguageClick("from")}>
          {languages[selectedLanguageFrom] || "English"}
        </div>
        <i
          className="fa-solid fa-arrows-rotate text-2xl mx-8 cursor-pointer"
          onClick={handleSwapLanguages}
        ></i>
        <div className="language" onClick={() => handleLanguageClick("to")}>
          {languages[selectedLanguageTo] || "English"}
        </div>
        {showLanguages && (
          <div className="list w-full h-[calc(100%-9rem)] bg-gray-400 absolute top-32 z-10 rounded p-4 overflow-y-scroll scrollbar-hide ">
            <ul>
              {Object.entries(languages).map(([code, name]) => (
                <li
                  className="cursor-pointer hover:bg-amber-400 transition duration-200 p-2 rounded"
                  key={code}
                  onClick={() => handleLanguageSelect(code)}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="w-full relative">
        <textarea className="textarea"></textarea>
        <div className="absolute bottom-2 right-4 text-gray-700">0/200</div>
      </div>
      <button className="w-12 h-12 rounded-full bg-amber-400 text-gray-900 flex justify-center items-center active:translate-y-[1px]">
        <i className="fa-solid fa-chevron-down cursor-pointer"></i>
      </button>
      <div className="w-full">
        <textarea className="textarea"></textarea>
      </div>
    </div>
  );
};

export default TranslatorApp;
