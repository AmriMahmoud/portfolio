"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            MA
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Mahmoud Amri</h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">Computer science student at ENICARTHAGE</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I create beautiful, functional, and user-centered digital experiences that solve real-world problems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" onClick={() => scrollToSection("projects")}>
            View My Work
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/AmriMahmoud" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/mahmoud-amri-273065263/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:mahmoud.amri@enicar.ucar.tn">
              <Mail className="h-6 w-6" />
            </a>
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="animate-bounce" onClick={() => scrollToSection("about")}>
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

