import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Downloadsection() {
  return (
    <section
      id="download"
      className="w-full py-12 md:py-24 lg:py-32  bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Ready to explore Firefly OS?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Download the latest version of Firefly OS and experience the future
            of computing.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <div className="grid gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              <Link href="#">
                <Download className="mr-2 h-5 w-5" />
                Download
              </Link>
            </Button>
          </div>
        </div>

      </div>
 
    </section>
  );
}
