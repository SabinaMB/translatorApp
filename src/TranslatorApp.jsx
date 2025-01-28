import { languages } from "./languagesData";
import { useState, useRef, useEffect } from "react";

const TranslatorApp = () => {
  const [selectedLanguageFrom, setSelectedLanguageFrom] = useState("en");
  const [selectedLanguageTo, setSelectedLanguageTo] = useState("en");
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLanguageSelection, setCurrentLanguageSelection] =
    useState(null);

  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 200;
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowLanguages(false);
    }
  };

  useEffect(() => {
    if (showLanguages) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLanguages]);

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

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setInputText(value);
      setCharCount(value.length);
    }
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setTranslatedText("");
      return;
    }

    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        inputText
      )}&langpair=${selectedLanguageFrom}|${selectedLanguageTo}`
    );
    const data = await response.json();
    setTranslatedText(data.responseData.translatedText);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleTranslate();
    }
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
          <div
            className="list w-full h-[calc(100%-9rem)] bg-gray-400 absolute top-32 z-10 rounded p-4 overflow-y-scroll scrollbar-hide"
            ref={dropdownRef}
          >
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
        <textarea
          className="textarea text-gray-900"
          value={inputText || ""}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <div className="absolute bottom-2 right-4 text-gray-700">
          {charCount}/{maxChars}
        </div>
      </div>
      <button
        className="w-12 h-12 rounded-full bg-amber-400 text-gray-900 flex justify-center items-center active:translate-y-[1px]"
        onClick={handleTranslate}
      >
        <i className="fa-solid fa-chevron-down cursor-pointer"></i>
      </button>
      <div className="w-full">
        <textarea
          className="textarea text-gray-900"
          value={translatedText || ""}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default TranslatorApp;
