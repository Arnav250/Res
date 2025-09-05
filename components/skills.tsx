"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Wrench, Database, Users } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      icon: Code,
      skills: [
        "Java",
        "Python",
        "C/C++",
        "MySQL",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "R",
        "Rust (Basics)",
        "Go (Basics)",
        "Solidity",
      ],
    },
    {
      id: "frameworks",
      title: "Frameworks",
      icon: Wrench,
      skills: [
        "Node.js",
        "Express.js",
        "Django",
        "Flask",
        "Next.js",
        "Web3.js",
        "Ethers.js",
        "Spring Framework",
        "JMeter",
        "Jest",
      ],
    },
    {
      id: "tools",
      title: "Developer Tools",
      icon: Database,
      skills: ["GitHub", "Figma", "VS Code", "Visual Studio", "PyCharm", "MongoDB", "PostgreSQL"],
    },
    {
      id: "libraries",
      title: "Libraries & Soft Skills",
      icon: Users,
      skills: [
        "React",
        "GSAP",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Leadership",
        "Teamwork",
        "Problem Solving",
        "Adaptability",
        "Time Management",
      ],
    },
  ]

  return (
    <section id="skills" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-foreground mb-6">Skills</h2>
      <Tabs defaultValue="languages" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6 bg-muted/50 p-1 h-auto">
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <IconComponent className="w-4 h-4" />
                <span className="text-xs font-medium">{category.title}</span>
              </TabsTrigger>
            )
          })}
        </TabsList>

        {skillCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <Card className="border-border">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                  <category.icon className="w-5 h-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
