import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"

export function Education() {
  const { education, content } = portfolioConfig

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {content.education.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{content.education.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      <GraduationCap className="h-6 w-6 text-primary mr-3" />
                      <Badge variant="outline" className="text-xs">
                        Education
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <CardTitle className="text-xl text-foreground text-balance">{edu.degree}</CardTitle>
                  <p className="text-lg font-medium text-primary">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                  {edu.description && <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
