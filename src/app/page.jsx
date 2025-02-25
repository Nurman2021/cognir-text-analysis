'use client'
import { FeatureCard } from "@/components/layout/feature-card";
import { TechMap } from "@/components/layout/tech-map";
import { Hero } from "@/components/layout/hero";
import { TryDemo } from "@/components/layout/try-demo";
import { EmailCard } from "@/components/layout/email-card";

export default function Home() {
  return (
    <main className=" space-y-20">
      <Hero />
      <TechMap />
      <FeatureCard />
      <TryDemo />
      <EmailCard />
    </main>
  );
}
