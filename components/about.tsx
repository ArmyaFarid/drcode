import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"

export function About() {
  const { personal, currentRoles, content } = portfolioConfig

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{content.about.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{content.about.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Professional Summary</h3>
            {content.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{personal.phone}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{personal.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Current Roles</h4>
                <div className="space-y-3">
                  {currentRoles.map((role, index) => (
                    <div key={index}>
                      <p className="font-medium text-foreground">{role.title}</p>
                      <p className="text-sm text-muted-foreground">{role.company}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
