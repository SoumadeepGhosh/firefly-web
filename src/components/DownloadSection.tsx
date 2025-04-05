"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Download } from "lucide-react"

export default function Downloadsection() {
  return (
    <section
      id="download"
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10"
    >

      <motion.div
        className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />

      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 relative z-10">
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Ready to explore Firefly OS?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Download the latest version of Firefly OS and experience the future of computing.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-md space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid gap-6">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
            >
              <Link href="https://github.com/akash1047/firefly/releases/download/v0.1.0/bootimage-firefly.bin">
                <Download className="mr-2 h-5 w-5" />
                Download
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}