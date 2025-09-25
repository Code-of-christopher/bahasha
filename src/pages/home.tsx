export default function HomePage() {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center px-4 bg-cover bg-center bg-no-repeat gap-32 font-segoe"
      style={{
        backgroundImage: "url('/bahasha-bg.png')",
      }}
    >
      <div className="flex flex-col items-center justify-center -mt-24">
        {/* Title */}
        <h1 className="text-white text-xl font-normal">Bahasha</h1>

        {/* Subtitle */}
        <p className="text-[#cfcfcf] text-md font-light mt-2">
          Give anywhere, anytime
        </p>
      </div>

      {/* Search box */}
      <div className="relative w-full max-w-sm mt-6">
        <input
          type="text"
          placeholder="church name or code"
          className="w-full rounded-full py-3.5 pr-12 pl-8 text-md italic placeholder-[#919191] text-[#919191] bg-[#FFFFFF] outline-none"
        />
        {/* Right search icon */}
        <img
          src="/search.png"
          alt="search"
          className="absolute right-10 top-1/2 -translate-y-1/2 w-5 h-5"
        />
      </div>
    </div>
  );
}
