import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Cloud, Database, Globe } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"

const skillIcons = {
  "Programming Languages": Code,
  "Frontend Technologies": Globe,
  "Backend & Databases": Database,
  "Cloud & DevOps": Cloud,
}

export function Skills() {
  const { skills, content } = portfolioConfig

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{content.skills.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{content.skills.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => {
            const IconComponent = skillIcons[category as keyof typeof skillIcons] || Code
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <IconComponent className="h-6 w-6 text-primary mr-3" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillList.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Core Competencies</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Software Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Object-Oriented Programming, Design Patterns, Data Structures, Algorithms
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Security Practices</h4>
                  <p className="text-sm text-muted-foreground">
                    CSRF and XSS Prevention, Authentication & Authorization, Secure API Development
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
