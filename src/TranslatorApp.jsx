const TranslatorApp = () => {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center pt-12 pb-6 relative">
      <button className="absolute top-4 right-4">
        <i className="fa-solid fa-xmark text-xl text-gray-700 cursor-pointer"></i>
      </button>
      <div className="min-h-20 w-full flex justify-center items-center px-8 bg-amber-400 text-gray-900 rounded-lg">
        <div className="language">English</div>
        <i className="fa-solid fa-arrows-rotate text-2xl mx-8 cursor-pointer"></i>
        <div className="language">English</div>
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
