import { ChevronRight, Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision"

export default function HeroSection() {
  return (
    <BackgroundBeamsWithCollision>
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Experience the Future with FireflyOS
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              A minimal operating system built from scratch in Rust,
              designed for safety, efficiency, and modern system
              programming.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            >
              <Link href="#download">
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#features">
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
          <Image
            src="/placeholder.svg?height=550&width=550"
            width={550}
            height={550}
            alt="MaidOS Screenshot"
            className="rounded-xl shadow-2xl border border-muted"
          />
        </div>
      </div>
    </div>
  </section>
  </BackgroundBeamsWithCollision>
  )
}
