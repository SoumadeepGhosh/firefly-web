"use client"

import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip"

const teamMembers = [
  {
    id: 1,
    name: "Akash Lohar",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Kaustavee Ghosh",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Subham Mandal",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Sampriti Majumdar",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    name: "Soumadeep Ghosh",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="w-full">
      <div className="relative h-[40rem] overflow-hidden flex items-center justify-center ">
        <WavyBackground
          className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full"
          colors={["#f97316", "#fb923c", "#fdba74", "#ffedd5", "#f59e0b"]}
          backgroundFill="#111"
          blur={10}
          speed="slow"
          waveWidth={50}
          containerClassName="h-full"
        >
          <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Team</h2>
          <p className="text-base md:text-lg text-white text-center mb-10 max-w-2xl">
            The passionate developers behind Firefly OS, dedicated to creating a secure, efficient, and modern operating
            system experience
          </p>
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={teamMembers} />
          </div>
        </WavyBackground>
      </div>
    </section>
  )
}