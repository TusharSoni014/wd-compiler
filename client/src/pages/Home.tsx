export default function Home() {
  return (
    <div className="w-full h-[calc(100dvh-60px)] text-white flex justify-center items-center flex-col gap-1 md:gap-3">
      <h1 className="text-2xl sm:text-6xl font-bold text-center">
        WD Compiler
      </h1>
      <p className=" text-gray-500 text-center p-3">
        Compiler HTML, CSS, JavaScript Code on the go and share it with your
        friends
      </p>
    </div>
  );
}
