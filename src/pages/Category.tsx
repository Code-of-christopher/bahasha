import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Category() {
  return (
    <div
      className="h-screen w-full flex flex-col bg-cover bg-center bg-no-repeat font-segoe"
      style={{
        backgroundImage: "url('/bahasha-bg.png')",
      }}
    >
      {/* Top Section (1/3 height) */}
      <div className="flex flex-col items-center justify-end basis-1/3">
        <img src="/churchlogo.png" alt="Church Logo" className="w-8 h-8 mb-8" />
        <h2 className="text-black text-[20px]">Zetech University</h2>
        <ArrowLeft className="w-5 h-5 text-black mt-16 mb-6 cursor-pointer" />
      </div>

      {/* Bottom Section (2/3 height) */}
      <div className="w-full max-w-md flex flex-col space-y-3 basis-2/3 pt-12 pb-8 px-10 bg-white self-center">
        <form>
          {[
            "Tithe",
            "Offering",
            "Evangelism",
            "Local Church budget",
            "Church development",
            "Camp meeting offering",
          ].map((label) => (
            <div key={label} className="border-b border-[#919191]">
              <input
                type="text"
                placeholder={label}
                className="w-full bg-transparent text-black italic placeholder-[#919191] text-[16px] pt-5 pb-1 focus:outline-none"
              />
            </div>
          ))}

          {/* More Categories */}
          <div className="flex items-center justify-between text-[#919191] italic cursor-pointer pt-12">
            <span className="text-[16px]">More categories</span>
            <img src="/dropup.png" alt="D" className="w-5 h-5" />
          </div>
        </form>

        {/* Bottom Navigation */}
        <div className="w-full text-[#CE9A5B] flex items-center justify-between mt-auto">
          <button className="text-[16px] font-medium">Next</button>
          <ArrowRight className="w-5 h-5 cursor-pointer text-[#CE9A5B]" />
        </div>
      </div>
    </div>
  );
}
