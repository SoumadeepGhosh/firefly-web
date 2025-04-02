"use client"

import { Shield, Star, Zap } from "lucide-react"
import { HoverEffect } from "./ui/card-hover-effect"

const features = [
  {
    title: "Memory Safety",
    description: "Leverages Rust's ownership model to prevent memory errors without a garbage collector.",
    icon: <Zap className="h-6 w-6" />,
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "Bare Metal Control",
    description: "Custom kernel that boots directly on hardware for complete control without legacy dependencies.",
    icon: <Shield className="h-6 w-6" />,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Modern Architecture",
    description: "Modular design with clean abstractions for hardware interfaces and system services.",
    icon: <Star className="h-6 w-6" />,
    gradient: "from-indigo-500 to-pink-500",
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Safe. Efficient. Modern.</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Firefly OS combines Rust's safety guarantees with bare-metal performance for a new generation of operating
              systems.
            </p>
          </div>
        </div>
        <HoverEffect items={features} />
      </div>
    </section>
  )
}

