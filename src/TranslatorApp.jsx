const TranslatorApp = () => {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center pt-12 pb-6 relative">
      <button className="absolute top-4 right-4">
        <i className="fa-solid fa-xmark text-xl text-gray-700"></i>
      </button>
      <div className="min-h-20 flex justify-center items-center px-8 bg-amber-400 rounded-lg">
        <div className="language">English</div>
        <i className="fa-solid fa-arrows-rotate text-2xl mx-8 cursor-pointer"></i>
        <div className="language">English</div>
      </div>
      <div>
        <textarea className="textarea"></textarea>
        <div>0/200</div>
      </div>
      <button>
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div>
        <textarea className="textarea"></textarea>
      </div>
    </div>
  );
};

export default TranslatorApp;
