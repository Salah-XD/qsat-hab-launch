import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UpcomingEventsSection() {
  const events = [
    {
      title: "Advanced HAB Mission",
      date: "December 2024",
      description: "Multi-payload stratospheric flight",
      image: "/qsat-advanced-hab-mission.jpg",
    },
    {
      title: "Student Workshop Series",
      date: "January 2025",
      description: "Hands-on satellite building",
      image: "/qsat-student-workshop.jpg",
    },
    {
      title: "International Space Day",
      date: "March 2025",
      description: "Global collaboration event",
      image: "/qsat-space-day-event.jpg",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">What's Next</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Upcoming QSAT Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Stay tuned for more exciting missions and educational opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <Card key={i} className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                <Badge className="w-fit mb-2 bg-primary/20 text-primary border-primary/30">{event.date}</Badge>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
