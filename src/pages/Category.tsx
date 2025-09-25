import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronUp, ChevronDown } from "lucide-react";

export default function Category() {
  const [expanded, setExpanded] = useState(false);

  const baseCategories = [
    "Tithe",
    "Offering",
    "Evangelism",
    "Local Church budget",
    "Church development",
    "Camp meeting offering",
  ];

  const extraCategories = ["Youth", "Children", "Welfare"];

  return (
    <div
      className="h-screen w-full flex flex-col bg-cover bg-center bg-no-repeat font-segoe relative"
      style={{
        backgroundImage: "url('/bahasha-bg.png')",
      }}
    >
      {/* Top Section (1/3 when collapsed, hidden when expanded) */}
      {!expanded && (
        <div className="flex flex-col items-center justify-end basis-1/3">
          <img
            src="/churchlogo.png"
            alt="Church Logo"
            className="w-8 h-8 mb-8"
          />
          <h2 className="text-black text-[20px]">Zetech University</h2>
          <ArrowLeft className="w-5 h-5 text-black mt-16 mb-6 cursor-pointer" />
        </div>
      )}

      {/* Form Section */}
      <div
        className={`w-full max-w-md flex flex-col space-y-3 self-center transition-all duration-500 ${
          expanded
            ? "absolute inset-0 h-screen bg-white px-10 pt-36 pb-8 z-20"
            : "basis-2/3 bg-white px-10 pt-12 pb-8"
        }`}
      >
        {/* Envelope folds (only when expanded) */}
        {expanded && (
          <div className="absolute top-0 left-0 w-full h-44 pointer-events-none">
            {/* Left diagonal */}
            <div
              className="absolute top-0 left-0 border-t-2 border-[#00000029]"
              style={{
                width: "50%",
                transform: "skewY(25deg)",
                transformOrigin: "top left",
              }}
            ></div>

            {/* Right diagonal */}
            <div
              className="absolute top-0 right-0 border-t-2 border-[#00000029]"
              style={{
                width: "50%",
                transform: "skewY(-25deg)",
                transformOrigin: "top right",
              }}
            ></div>
          </div>
        )}

        <form className="relative z-10">
          {(expanded
            ? [...baseCategories, ...extraCategories]
            : baseCategories
          ).map((label) => (
            <div key={label} className="border-b border-[#707070]">
              <input
                type="text"
                placeholder={label}
                className="w-full bg-transparent text-black italic placeholder-[#919191] text-[16px] pt-4 pb-1 focus:outline-none"
              />
            </div>
          ))}

          {/* Toggle More/Less */}
          <div
            className="flex items-center justify-between text-[#919191] italic cursor-pointer pt-10"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="text-[16px]">
              {expanded ? "Less categories option" : "More categories"}
            </span>
            {expanded ? (
              <ChevronDown className="w-5 h-5 cursor-pointer" />
            ) : (
              <ChevronUp className="w-5 h-5 cursor-pointer" />
            )}
          </div>
        </form>

        {/* Bottom Navigation */}
        <div className="w-full text-[#CE9A5B] flex items-center justify-between mt-auto relative z-10">
          <button className="text-[16px] font-medium">Next</button>
          <ArrowRight className="w-5 h-5 cursor-pointer text-[#CE9A5B]" />
        </div>
      </div>
    </div>
  );
}
