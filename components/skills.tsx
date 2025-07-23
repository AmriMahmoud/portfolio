import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skills = [
    "React",
    "Python",
    "Git",
    "Figma",
    "HTML",
    "CSS",
    "JavaScript",
    "C",
    "C++",
    "Vercel",
    "SQL",
    "YOLO",
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
