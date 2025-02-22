import { ChartColumnBig, KeyRound, Folder, Search, Scroll, Glasses } from 'lucide-react';


export function FeatureCard() {
    return (
        <div className="container mx-auto max-w-5xl py-8 mb-20">
            <p className="text-center font-medium text-lg text-gray-600 mb-4 uppercase">Smart & Accurate AI Text Analysis</p>
            <h1 className=" text-5xl font-normal text-center tracking-wider mb-4">Unlock Insights with</h1>
            <h1 className=" text-5xl font-normal text-center tracking-wider mb-2">AI-Powered Text Analysis</h1>
            <p className="text-center text-gray-600 mb-12 tracking-wider">Discover deep insights from text using advanced artificial intelligence. Our solution helps <br /> you identify patterns, understand sentiment, and extract key information automatically.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 feature-bg">
                <div className="bg-white p-6 space-y-4 rounded-lg shadow-md">
                    <ChartColumnBig />
                    <h2 className="text-xl font-semibold mb-2">Smart & Accurate AI Text Analysis</h2>
                    <p className="text-gray-600">Identifies sentiment (positive, negative, neutral) and emotions in text to understand user opinions and feelings.</p>
                </div>

                <div className="bg-white p-6 space-y-4 rounded-lg shadow-md">
                    <KeyRound />
                    <h2 className="text-xl font-semibold mb-2">Entity & Keyphrase Extraction</h2>
                    <p className="text-gray-600">Extracts key entities (names, places, organizations) and important keywords to summarize information quickly.</p>
                </div>

                <div className="bg-white p-6 space-y-4 rounded-lg shadow-md">
                    <Folder />
                    <h2 className="text-xl font-semibold mb-2">Topic & Category Classification</h2>
                    <p className="text-gray-600">Detects main topics and classifies text into relevant categories for better organization and trend analysis.</p>
                </div>

                <div className="bg-white p-6 space-y-4 rounded-lg shadow-md">
                    <Search />
                    <h2 className="text-xl font-semibold mb-2">Bias & Stance Detection</h2>
                    <p className="text-gray-600">Analyzes bias in text and determines whether it supports, opposes, or is neutral toward a claim.</p>
                </div>

                <div className="bg-white p-6 space-y-4 rounded-lg shadow-md">
                    <Scroll />
                    <h2 className="text-xl font-semibold mb-2">Summary & Relevance Scoring</h2>
                    <p className="text-gray-600">Generates automatic summaries and evaluates text relevance to improve information retrieval efficiency.</p>
                </div>

                <div className="bg-white p-6 space-y-4 rounded-lg shadow-md">
                    <Glasses />
                    <h2 className="text-xl font-semibold mb-2">Reading Complexity & Language Style</h2>
                    <p className="text-gray-600">Assesses text difficulty and analyzes writing style to ensure it fits the target audience.</p>
                </div>
            </div>
        </div>
    )
}