import Link from "next/link";

export default function HomePage() {
  const NAME = process.env.NEXT_PUBLIC_NAME;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-5xl font-bold tracking-tight text-purple-300 sm:text-[5rem] mb-4">
          Hello world!
        </h1>
        <h2 className="text-3xl font-sm mb-2">
          My name is {NAME}
        </h2>
        
        
      </div>
    </main>
  );
}
