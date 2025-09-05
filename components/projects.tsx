import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Calendar } from "lucide-react"

export function Projects() {
  const projects = [
    {
      name: "Payment Gateway Backend",
      stack: "Spring Boot, Spring Cloud, Spring Security",
      date: "Jan 2025",
      description: [
        "Developed backend to enable secure and efficient microservices communication, with Eureka for service discovery.",
        "Tested and optimized APIs for reliability and performance.",
      ],
    },
    {
      name: "Hospital-Patient Management System",
      stack: "Python, Flask, JavaScript, CSS",
      date: "Jul 2024",
      description: [
        "Full-stack hospital records webpage (Flask as frontend and backend).",
        "Features: patient management, appointment scheduling, medicine records.",
      ],
    },
    {
      name: "Blog Website",
      stack: "Python, Django, JavaScript, CSS",
      date: "Jun 2024",
      description: ["Full-stack blog with Django (front/back end).", "User management, discussion forum, and more."],
    },
  ]

  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-foreground mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="border-border hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-card-foreground flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                <span className="text-balance">{project.name}</span>
              </CardTitle>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {project.date}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.stack.split(", ").map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-secondary/10 text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2">
                {project.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-card-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
