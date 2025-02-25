import { SquareArrowOutUpRight } from "lucide-react"

export function TryDemo() {
    return (
        <div className="mx-auto max-w-5xl">
            <h1 className="font-bold text-4xl text-center mb-4">Text Analysis Demo</h1>
            <p className="text-center text-gray-600 tracking-wider mb-4">Unlock deep insights from your text with cutting-edge AI technology. <br /> Our tool helps you analyze sentiment, extract key phrases, detect topics, <br /> and summarize content efficiently. </p>

            <button className="px-4 py-2 rounded-full mx-auto flex gap-3 items-center border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
                Try App  <SquareArrowOutUpRight strokeWidth={1.5} size={16} />
            </button>

            <img src="/img/demo-img.png" alt="demo" />
        </div>
    )
}