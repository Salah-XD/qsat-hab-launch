import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Satellite } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/high-altitude-balloon-launch-with-students.jpg"
              alt="QSAT HAB Launch"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">About the Event</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              QSAT HAB EVENT
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              The QSAT HAB mission sends student-made payloads and modern sensors to the edge of space, going higher than 3280 feet. Along the way, it collects important data about the atmosphere and shows the value of hands-on learning in aerospace. This near-space journey gives students a chance to explore, try new things, and learn more about science.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>October 30th, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Coimbatore,<br></br>Tamil Nadu, India.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>50+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Satellite className="h-5 w-5 text-primary" />
                <span>Multiple Payloads</span>
              </div>
            </div>
            <p className="text-muted-foreground text-pretty">
              More than a launch, it is a symphony of curiosity, innovation, and the limitless potential of young minds aspiring toward the cosmos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
