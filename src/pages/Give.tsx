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
            className="w-7 h-7 mb-5"
          />
          <h2 className="text-black text-md">Zetech University</h2>
      </div>

      {/* Receipt Summary */}
      <div className="w-full max-w-md">
        <h3 className="text-sm text-black mb-2">
          Receipt Summary
        </h3>

        {/* Category Row */}
        <div className="flex justify-between pt-4 pb-1 text-[#919191] italic border-b border-[#707070] text-sm">
          <span>Category</span>
          <span className="pr-3">Amount</span>
        </div>

        {/* Bahasha Row */}
        <div className="flex justify-between pt-4 pb-1 text-[#919191] italic border-b border-[#707070] text-sm">
          <span>Bahasha</span>
          <span className="pr-3">Amount</span>
        </div>

        {/* Total Row */}
        <div className="flex justify-between pt-4 pb-1 text-[#919191] italic border-b border-[#707070] text-sm">
          <span>Total</span>
          <span className="pr-3">Amount</span>
        </div>
      </div>

      {/* Padding */}
      <div className="h-28"></div>

      {/* Receipt Details */}
      <div className="w-full max-w-md">
        <h3 className="text-sm text-black mb-2">
          Receipt Details
        </h3>

        {/* Full Name */}
        <div className="pt-4 pb-1 text-[#919191] border-b border-[#707070] italic text-sm">
          Full name
        </div>

        {/* Church Member */}
        <div className="flex items-center justify-between pt-4 pb-1 pr-2 text-[#919191] border-b border-[#707070] italic text-sm">
          <span>Church member</span>
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </div>

        {/* Mpesa Number */}
        <div className="pt-4 pb-1 text-[#919191] border-b border-[#707070] italic text-sm">
          M-pesa Number
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="w-full text-[#CE9A5B] flex items-center justify-between mt-24 relative z-10">
        <button
          className="text-sm"
          onClick={() => navigate("/success")}
        >
          Give
        </button>
        <ArrowRight
          className="w-5 h-5 cursor-pointer text-[#CE9A5B]"
          onClick={() => navigate("/success")}
        />
      </div>
    </div>
  );
}
