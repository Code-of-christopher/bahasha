import { ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Give() {
    const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-white flex flex-col items-center px-10 pt-20 pb-8 font-segoe">
      {/* Header */}
      <div className="flex flex-col items-center mb-14">
        <img
            src="/churchlogo.png"
            alt="Church Logo"
            className="w-8 h-8 mb-6"
          />
          <h2 className="text-black text-lg">Zetech University</h2>
      </div>

      {/* Receipt Summary */}
      <div className="w-full max-w-md">
        <h3 className="text-base text-md text-black mb-2">
          Receipt Summary
        </h3>

        {/* Category Row */}
        <div className="flex justify-between pt-4 pb-1 text-[#919191] italic border-b border-[#707070] text-md">
          <span>Category</span>
          <span className="pr-3">Amount</span>
        </div>

        {/* Bahasha Row */}
        <div className="flex justify-between pt-4 pb-1 text-[#919191] italic border-b border-[#707070] text-md">
          <span>Bahasha</span>
          <span className="pr-3">Amount</span>
        </div>

        {/* Total Row */}
        <div className="flex justify-between pt-4 pb-1 text-[#919191] italic border-b border-[#707070] text-md">
          <span>Total</span>
          <span className="pr-3">Amount</span>
        </div>
      </div>

      {/* Padding */}
      <div className="h-28"></div>

      {/* Receipt Details */}
      <div className="w-full max-w-md">
        <h3 className="text-md text-black mb-2">
          Receipt Details
        </h3>

        {/* Full Name */}
        <div className="pt-4 pb-1 text-[#919191] border-b border-[#707070] italic text-md">
          Full name
        </div>

        {/* Church Member */}
        <div className="flex items-center justify-between pt-4 pb-1 pr-2 text-[#919191] border-b border-[#707070] italic text-md">
          <span>Full name</span>
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </div>

        {/* Mpesa Number */}
        <div className="pt-4 pb-1 text-[#919191] border-b border-[#707070] italic text-md">
          M-pesa Number
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="w-full text-[#CE9A5B] flex items-center justify-between mt-auto relative z-10">
        <button
          className="text-md font-medium"
          onClick={() => navigate("/give")}
        >
          Give
        </button>
        <ArrowRight
          className="w-5 h-5 cursor-pointer text-[#CE9A5B]"
          onClick={() => navigate("/give")}
        />
      </div>
    </div>
  );
}
