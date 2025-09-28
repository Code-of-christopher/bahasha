import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-between px-10 pt-20 pb-8 font-segoe"
      style={{
        backgroundImage: "url('/bahasha-bg.png')",
      }}
    >
      {/* Header */}
      <div className="flex flex-col items-center mb-14">
        <img src="/churchlogo.png" alt="Church Logo" className="w-7 h-7 mb-6" />
        <h2 className="text-black text-md ">Thank you for giving</h2>
      </div>

      <div className="flex flex-col items-center mb-14">
        <img
          src="/load.png"
          alt="search"
          className="mb-5 w-5 h-5 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <p className="text-[#EBEBEB] text-md">again</p>
        <button className="text-[#FFFFFF] text-md font-light mt-24 cursor-pointer" onClick={() => navigate("/")}>Report an issue</button>
      </div>
    </div>
  );
}
