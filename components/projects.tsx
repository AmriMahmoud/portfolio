import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Human Detection using YOLOv8",
      description:
        "Real-time human detection system using YOLOv8 and webcam feed. Features live video processing with bounding box visualization and confidence scoring.",
      image: "/computer-vision.jpg",
      technologies: ["Python", "YOLOv8", "OpenCV", "Computer Vision"],
      githubUrl: "https://github.com/AmriMahmoud/Human-Detection-using-YOLOv8-Webcam",
    },
    {
      title: "Car Rental Website",
      description:
        "A modern and responsive car rental website built with HTML, CSS, and JavaScript. Features include a car listing section, dynamic rental cost calculator, and an interactive booking form.",
      image: "/car-rental.png", 
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://location-seven-wine.vercel.app/",
      githubUrl: "https://github.com/AmriMahmoud/projet-dev-web",
    },
    {
      title: "Vehicle Theft Reporting System (C)",
      description:
        "A console-based application written in C for managing vehicle theft reports in a police system. Implements file handling, structured records, and basic operations like search, insert, update, and delete.",
      image: "/projet-c.svg", 
      technologies: ["C", "File Handling", "CLI"],
      githubUrl: "https://github.com/AmriMahmoud/Projet-C",
    },
    {
      title: "Stock Market Transaction Manager (C++)",
      description:
        "A C++ application for managing stock market transactions, supporting classical and remunerated operations with inheritance, polymorphism, sorting, and merging features. Includes keyboard input and file saving.",
      image: "/projet-cpp.png",
      technologies: ["C++", "OOP", "Inheritance", "File I/O"],
      githubUrl: "https://github.com/AmriMahmoud/Projet-cpp",
    },

  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))} 
                </div>
                <div className="flex gap-2">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}





