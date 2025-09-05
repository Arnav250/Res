import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, MapPin, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Tech Innovation Intern",
      company: "EY (Ernst & Young)",
      location: "Dadar, Mumbai",
      period: "May 2025 – Present",
      description: [
        "Developed web solutions using React and React Native to enhance user engagement and platform accessibility.",
        "Performed testing and performance analysis with JMeter and Jest.",
        "Conducted AI trends research to inform innovation initiatives.",
      ],
    },
    {
      title: "Java Development Intern",
      company: "Mindgate Solutions Pvt. Ltd",
      location: "Kanjurmarg, Mumbai",
      period: "Dec 2024 – Feb 2025",
      description: [
        "Developed and maintained backend services with Spring Framework.",
        "Optimized payment gateway integrations for performance/efficiency.",
      ],
    },
    {
      title: "Operations Team Member",
      company: "Computer Society of India, KJSCE",
      location: "Mumbai",
      period: "Oct 2024 – Apr 2025",
      description: [
        "Organized events: iDEA Hackathon, Road to Programming 3.0, Bid by Bit 3.0, and Algorithmic Trading Workshop.",
        "Delivered an intro workshop on web/app development.",
      ],
    },
  ]

  return (
    <section id="experience" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-foreground mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-border">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    {exp.title}
                  </CardTitle>
                  <p className="text-lg font-medium text-primary mt-1">{exp.company}</p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 justify-end mb-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1 justify-end">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-card-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
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
