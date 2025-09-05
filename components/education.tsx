import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function Education() {
  const collegeEducation = [
    {
      institution: "K J Somaiya College of Engineering",
      degree: "Bachelor of Technology, Computer Engineering",
      location: "Mumbai, Maharashtra",
      period: "Aug 2023 – Present",
      grade: "CGPA: 9.82",
    },
    {
      institution: "IIT Madras",
      degree: "Bachelor of Science, Data Science and Applications",
      location: "Chennai, Tamil Nadu",
      period: "Jun 2023 – Present",
      grade: "CGPA: 8",
    },
  ]

  const schoolEducation = {
    class12: {
      institution: "Delhi Public School, Nerul",
      degree: "Higher Secondary Education (Class 12)",
      location: "Navi Mumbai",
      period: "Apr 2021 – Apr 2023",
      grade: "93%",
    },
    class10: {
      institution: "Delhi Public School, Nerul",
      degree: "Secondary Education (Class 10)",
      location: "Navi Mumbai",
      period: "Feb 2008 – Apr 2021",
      grade: "98%",
    },
  }

  return (
    <section id="education" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-foreground mb-6">Education</h2>

      <Tabs defaultValue="college" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 bg-muted/50">
          <TabsTrigger
            value="college"
            className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white font-medium"
          >
            College
          </TabsTrigger>
          <TabsTrigger
            value="class12"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white font-medium"
          >
            Class 12th
          </TabsTrigger>
          <TabsTrigger
            value="class10"
            className="data-[state=active]:bg-purple-500 data-[state=active]:text-white font-medium"
          >
            Class 10th
          </TabsTrigger>
        </TabsList>

        <TabsContent value="college" className="space-y-4">
          {collegeEducation.map((edu, index) => (
            <Card key={index} className="border-border">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-emerald-500" />
                      {edu.institution}
                    </CardTitle>
                    <p className="text-lg font-medium text-muted-foreground mt-1">{edu.degree}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 justify-end mb-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="inline-block bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                  {edu.grade}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="class12">
          <Card className="border-border">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-500" />
                    {schoolEducation.class12.institution}
                  </CardTitle>
                  <p className="text-lg font-medium text-muted-foreground mt-1">{schoolEducation.class12.degree}</p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 justify-end mb-1">
                    <MapPin className="w-4 h-4" />
                    {schoolEducation.class12.location}
                  </div>
                  <div className="flex items-center gap-1 justify-end">
                    <Calendar className="w-4 h-4" />
                    {schoolEducation.class12.period}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="inline-block bg-blue-500/10 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                {schoolEducation.class12.grade}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="class10">
          <Card className="border-border">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-purple-500" />
                    {schoolEducation.class10.institution}
                  </CardTitle>
                  <p className="text-lg font-medium text-muted-foreground mt-1">{schoolEducation.class10.degree}</p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 justify-end mb-1">
                    <MapPin className="w-4 h-4" />
                    {schoolEducation.class10.location}
                  </div>
                  <div className="flex items-center gap-1 justify-end">
                    <Calendar className="w-4 h-4" />
                    {schoolEducation.class10.period}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="inline-block bg-purple-500/10 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                {schoolEducation.class10.grade}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
