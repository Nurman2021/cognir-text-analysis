'use client'
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { Play } from "lucide-react";


export default function Home() {
  const words = ["Decisions", "Deals", "Result"];
  return (
    <main>
      <div className="min-h-screen flex flex-col justify-center items-center leading-tight px-4 mt-40">
        <p className=" text-lg text-gray-500 mb-4">Powered by Cognir AI</p>
        <h1 className="text-[52px] mx-auto font-extrabold text-center">
          Smarter Text Analysis, <br />
          Faster <span className="hero-tag-gradient">
            <FlipWords words={words} className={'mr-8'} />
          </span>
        </h1>
        <div className="flex gap-5 mt-8">
          <button className="px-8 py-3  bg-black text-white text-base rounded-lg hover:bg-black/[0.8] hover:shadow-lg">
            Get more customers
          </button>
          <button className="px-8 py-3 flex items-center gap-2 rounded-lg border-2 border-neutral-400 text-black font-semibold bg-white hover:bg-gray-100 transition duration-200">
            <Play />
            Watch free demo
          </button>
        </div>
        <p className=" text-sm text-gray-500 mt-8">60 Days free trial   .    No credit card required</p>
        <img src="/img/hero-image.png" alt="dashboard example" />
      </div>

    </main>
  );
}
